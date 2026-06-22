"use client";

import { useEffect, useState, useRef } from 'react';
import { Star, User, Quote, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RawReview {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
    languageCode?: string;
  };
  publishTime?: string;
}

interface PlaceDetails {
  displayName?: { text: string };
  rating?: number | null;
  reviews?: RawReview[];
  userRatingCount?: number;
  googleMapsLinks?: {
    placeUri?: string;
    writeAReviewUri?: string;
    reviewsUri?: string;
  } | null;
}

interface NormalizedReview {
  name: string;
  image: string | null;
  rating: number;
  time: string;
  text: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const sz = size === 'md' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${sz} ${s <= Math.round(rating) ? 'fill-gold-400 text-gold-400' : 'fill-forest-700 text-forest-700'}`}
        />
      ))}
    </div>
  );
}

function GoogleLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPORARY FALLBACK
// Real reviews from the Hari Tea Traders Google Business Profile.
// Shown only while Google's Places API indexes them (~1–2 weeks).
// Once the API returns the `reviews` array, this is bypassed automatically.
// ─────────────────────────────────────────────────────────────────────────────
const REAL_REVIEWS_FALLBACK: NormalizedReview[] = [
  {
    name: "Hari Prasanth",
    image: null,
    rating: 5,
    time: "21 hours ago",
    text: "good expirence",
  },
  {
    name: "Hariprasanth U",
    image: null,
    rating: 4,
    time: "2 days ago",
    text: "there was a good experience and got to know to many thing from them ,and they also guided how to check the quality of honey and pepper and more products and most felt organic and without preservatives ,can trust them for good and quality products",
  },
  {
    name: "Dhana Lakshmi",
    image: null,
    rating: 5,
    time: "4 days ago",
    text: "Nice experience tasted the hills in every sip of the tea and the honey was literally purest form",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GoogleReviews() {
  const [data, setData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (json.error) throw new Error(json.error);
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Track scroll position to show/hide arrows
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollButtons);
  });

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 300;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[160px] gap-3">
        <div className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-gold-200 text-gold-200 animate-pulse"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
        <p className="text-forest-500 text-sm tracking-wide">Loading reviews…</p>
      </div>
    );
  }

  if (error || !data) return null;

  // Normalize live API reviews
  const liveReviews: NormalizedReview[] = (data.reviews || [])
    .filter((r) => r.text?.text)
    .map((r) => ({
      name: r.authorAttribution?.displayName || 'Anonymous',
      image: r.authorAttribution?.photoUri || null,
      rating: r.rating || 5,
      time: r.relativePublishTimeDescription || 'Recently',
      text: r.text?.text || '',
    }));

  // ✅ Live API reviews take priority — fallback to real manually-added reviews if API returns none
  const reviews: NormalizedReview[] = liveReviews.length > 0 ? liveReviews : REAL_REVIEWS_FALLBACK;
  const reviewsUri = data.googleMapsLinks?.reviewsUri || '';

  return (
    <div className="w-full max-w-6xl mx-auto">

      {/* ── Rating Summary Bar ── */}
      <motion.a
        href={reviewsUri}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="group flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10
                   bg-forest-900 rounded-2xl px-8 py-6 shadow-lg max-w-2xl mx-auto mb-10
                   hover:bg-forest-800 transition-colors duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <GoogleLogo className="w-7 h-7" />
          <span className="text-white font-semibold text-base tracking-wide">Google Reviews</span>
          <ArrowUpRight className="w-4 h-4 text-forest-400 group-hover:text-gold-400 transition-colors duration-300" />
        </div>

        <div className="hidden sm:block w-px h-10 bg-forest-700" />
        <div className="block sm:hidden h-px w-24 bg-forest-700" />

        {data.rating != null ? (
          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold text-white leading-none font-heading">
              {data.rating.toFixed(1)}
            </span>
            <div className="flex flex-col gap-1.5">
              <StarRating rating={data.rating} size="md" />
              <p className="text-forest-400 text-xs tracking-wider uppercase">
                {data.userRatingCount || 0}{' '}
                {data.userRatingCount === 1 ? 'Review' : 'Reviews'} · Tap to view
              </p>
            </div>
          </div>
        ) : (
          <p className="text-forest-400 text-sm">No ratings yet</p>
        )}
      </motion.a>

      {/* ── Scrollable Review Cards with Arrow Buttons ── */}
      <div className="relative group/carousel px-0 md:px-12">

        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full
                       bg-forest-900/90 hover:bg-forest-900 text-white shadow-xl
                       hidden md:flex items-center justify-center transition-all duration-200
                       backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full
                       bg-forest-900/90 hover:bg-forest-900 text-white shadow-xl
                       hidden md:flex items-center justify-center transition-all duration-200
                       backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 md:gap-6 overflow-x-auto pb-8 pt-4 px-6 md:px-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4, ease: 'easeOut' }}
              className="relative bg-white border border-forest-100 rounded-xl p-6 md:p-7 flex flex-col gap-4
                         shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group
                         flex-shrink-0 w-[85vw] md:w-[340px] lg:w-[320px] snap-center md:snap-start"
            >
              {/* Decorative quote */}
              <Quote
                className="absolute top-5 right-5 w-6 h-6 text-forest-100 group-hover:text-gold-200 transition-colors duration-300"
                aria-hidden="true"
              />

              {/* Reviewer */}
              <div className="flex items-center gap-3 pr-8">
                {review.image ? (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-forest-100 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-forest-500" />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-semibold text-forest-900 text-sm leading-tight truncate">
                    {review.name}
                  </p>
                  <p className="text-forest-400 text-xs mt-0.5">{review.time}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s <= Math.round(review.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-forest-700 text-sm leading-relaxed flex-grow line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center gap-1.5 pt-3 border-t border-forest-50 mt-auto">
                <GoogleLogo className="w-3.5 h-3.5" />
                <span className="text-[11px] text-forest-400 font-medium">Posted on Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hide scrollbar globally for webkit */}
        <style>{`
          div[class*="overflow-x-auto"]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

    </div>
  );
}

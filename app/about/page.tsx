import { Metadata } from "next";
import { Leaf, MapPin, Users, History, Sprout } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Hari Tea Traders",
  description: "Learn about Hari Tea Traders' 15+ years of heritage sourcing authentic products from Valparai plantations and tribal communities.",
};

const stats = [
  { label: "Years of Heritage", value: "15+", icon: History },
  { label: "Direct Farmers", value: "100+", icon: Users },
  { label: "Premium Products", value: "30+", icon: Sprout },
  { label: "Happy Clients", value: "5000+", icon: Leaf },
];

export default function AboutPage() {
  return (
    <div className="pb-20 bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="h-[300px] md:h-[450px] relative overflow-hidden w-full">
        <img 
          src="/images/about us contact card backgound.jpg" 
          alt="Valparai Estate"
          className="w-full h-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center py-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">Our Story</h1>
            <p className="text-sm md:text-lg text-gold-300 max-w-2xl mx-auto font-medium">
              15 years of bringing the purest hill station produce to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-gold-400" />
                <span className="text-forest-700 uppercase tracking-widest text-sm font-semibold">The Heritage</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 mb-8 leading-tight">
                From the Heart of <br />
                <span className="text-gold-600">Valparai Hills</span>
              </h2>
              
              <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                <p>
                  Hari Tea Traders began as a family-owned venture deeply rooted in the misty, lush green hills of Valparai. For over 15 years, we have been dedicated to sourcing and supplying the most authentic hill station products.
                </p>
                <p>
                  What makes us unique is our commitment to purity. We bypass traditional middlemen and source our tea, coffee, spices, and honey directly from local plantations, tribal communities, and forest settlement areas.
                </p>
                <p>
                  This direct relationship not only guarantees the freshest, preservative-free products for our customers but also supports the local economy and traditional farming practices of the Valparai region.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img src="/images/our-heritage.jpeg" alt="Tea Leaves" className="w-full h-full object-cover" />
                </div>
                <div className="bg-forest-900 rounded-2xl p-6 text-white shadow-lg">
                  <h4 className="font-heading font-bold text-xl mb-2 text-gold-400">In-house Quality</h4>
                  <p className="text-sm text-forest-100/80">Expert blending, roasting, and packaging done in our own facilities.</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gold-500 rounded-2xl p-6 text-forest-950 shadow-lg">
                  <h4 className="font-heading font-bold text-xl mb-2">Direct Supply</h4>
                  <p className="text-sm opacity-90">From tribal settlements and plantations straight to your cup.</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img src="/images/about-us-second-image.jpg" alt="Valparai Tea Plantation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-forest-50 py-20 border-y border-forest-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-forest-700 shadow-sm mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="font-heading text-4xl font-bold text-forest-900 mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-charcoal/60 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Community Section */}
      <section className="py-16 bg-cream border-t border-forest-100 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-forest-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            {/* Background Image overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/instagram card background.jpeg" 
                alt="Instagram Background"
                className="w-full h-full object-cover opacity-25 saturate-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-forest-950/90 to-forest-950 z-10" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <FaInstagram className="w-9 h-9" />
                </div>
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <FaWhatsapp className="w-9 h-9" />
                </div>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-cream">Connect With Our Community</h2>
              <p className="text-forest-100/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                Follow <span className="text-gold-400 font-semibold">@hari_tea_traders_</span> on Instagram for estate updates, or chat with us on <span className="text-gold-400 font-semibold">WhatsApp</span> for quick support & orders!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <Link
                  href="https://www.instagram.com/hari_tea_traders_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-forest-950 hover:bg-gold-400 hover:text-forest-950 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FaInstagram className="w-5 h-5 text-[#ee2a7b]" />
                  Follow on Instagram
                </Link>
                <Link
                  href="https://wa.me/919486353900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#25D366] text-white hover:bg-[#1ebd5b] rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-forest-900 mb-6">Experience the Purity</h2>
          <p className="text-lg text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Whether you're looking for premium tea for your home or bulk wholesale supplies for your business, we are ready to serve you.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-forest-900 hover:bg-forest-800 text-white rounded-full font-medium text-lg transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

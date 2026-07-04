import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function WholesaleHero() {
  return (
    <div className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/wholesale banner.jpg"
          alt="Wholesale Tea Bulk"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-forest-950/70 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 bg-gold-500/20 px-4 py-1.5 rounded-full text-gold-400 border border-gold-500/30">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-sm uppercase tracking-widest font-semibold">B2B Partner Program</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Premium Hill Products <br className="hidden md:block" />
            <span className="text-gold-400">Direct From Valparai</span>
          </h1>
          
          <p className="text-lg md:text-xl text-forest-100 max-w-2xl mb-10 leading-relaxed font-light">
            Become our wholesale partner. We supply premium tea, coffee, honey, and organic spices at competitive bulk rates for retail shops, hotels, and resellers across South India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#inquiry-form"
              className="bg-gold-500 hover:bg-gold-400 text-forest-950 px-8 py-4 rounded-full font-bold text-lg transition-all text-center shadow-lg hover:shadow-gold-500/20"
            >
              Start Wholesale Inquiry
            </Link>
            <Link
              href="#benefits"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

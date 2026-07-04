"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/50 to-forest-950/80" />
        <div className="absolute inset-0 bg-[url('/images/pattern-leaf.png')] opacity-5 mix-blend-overlay" />
        <img
          src="/images/hero-section-new.jpg"
          alt="Tea Plantation in Valparai"
          className="w-full h-full object-cover object-[center_30%]"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 sm:px-8 md:px-12 mx-auto flex flex-col items-center text-center mt-4 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6 bg-forest-800/40 backdrop-blur-md px-5 py-2 rounded-full border border-forest-500/30 text-gold-400"
        >
          <Leaf className="w-4 h-4" />
          <span className="text-sm font-medium uppercase tracking-widest">15+ Years of Authenticity</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 max-w-5xl leading-tight px-2"
        >
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Hill Station</span> Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-forest-100/90 text-base sm:text-lg md:text-xl max-w-2xl mb-8 font-light leading-relaxed px-4"
        >
          Sourced directly from plantations, tribal communities, and local farmers in the misty hills of Valparai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 md:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/products"
            className="px-8 py-4 bg-gold-400 hover:bg-gold-500 text-forest-950 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Explore Our Products
          </Link>
          <Link
            href="/wholesale"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
          >
            Contact for Wholesale
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-gold-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

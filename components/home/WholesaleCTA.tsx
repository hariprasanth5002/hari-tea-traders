"use client";

import { motion } from "framer-motion";
import { Package, Truck, PhoneCall, TrendingUp } from "lucide-react";
import Link from "next/link";


const benefits = [
  { icon: Package, title: "Bulk Packaging", desc: "Custom packaging from 100g to bulk quantities." },
  { icon: Truck, title: "Pan-TN Delivery", desc: "ST Courier, Professional Courier, and Bus Transport." },
  { icon: TrendingUp, title: "Wholesale Pricing", desc: "Affordable rates for shops, hotels, and resellers." },
  { icon: PhoneCall, title: "Dedicated Support", desc: "Direct communication for seasonal availability." },
];

export default function WholesaleCTA() {
  return (
    <section className="py-24 relative bg-forest-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/tea plantation.jpeg"
          alt="Wholesale Tea Bags"
          className="w-full h-full object-cover object-center opacity-60 saturate-[1.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-forest-950 via-forest-950/90 lg:via-forest-950/80 to-forest-950/80 lg:to-forest-950/20" />
      </div>

      <div className="container mx-auto px-5 md:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 bg-gold-500/10 border border-gold-500/20 px-4 py-2 rounded-full text-gold-400">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-widest">B2B & Wholesale</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Partner With <br />
              <span className="text-gold-400">Hari Tea Traders</span>
            </h2>
            
            <p className="text-forest-100/80 text-lg mb-10 max-w-lg leading-relaxed">
              We supply premium quality tea, coffee, and spices to tea shops, grocery stores, hotels, and resellers across Tamil Nadu, Bangalore, and Kerala.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold rounded-full transition-all text-base text-center"
              >
                Inquire Wholesale Rates
              </Link>
              <a
                href="tel:+918220023450"
                className="px-6 py-3 bg-transparent border-2 border-forest-600 hover:border-gold-500 hover:text-gold-400 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 text-base"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                Call Us Directly
              </a>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 lg:mt-0">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                className="bg-forest-900/50 backdrop-blur-md border border-forest-800 p-6 rounded-2xl hover:bg-forest-800/60 transition-colors w-full"
              >
                <div className="w-12 h-12 bg-gold-500/20 text-gold-400 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-forest-200/70 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

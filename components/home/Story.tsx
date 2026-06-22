"use client";

import { motion } from "framer-motion";
import { Coffee, Sprout, HandHeart } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Sprout,
    title: "Direct Sourcing",
    description: "From local farmers and tribal communities in Valparai.",
  },
  {
    icon: Coffee,
    title: "In-house Processing",
    description: "Expert blending and grinding for maximum freshness.",
  },
  {
    icon: HandHeart,
    title: "Trusted Quality",
    description: "15+ years of delivering authentic hill station products.",
  },
];

export default function Story() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/heritage-image.jpg"
                alt="Valparai Tea Plucking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white">
                  <div className="text-4xl font-heading font-bold text-gold-400 mb-1">15+</div>
                  <div className="font-medium tracking-wide">Years of Heritage</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold-400/50 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-800/10 rounded-full -z-10 blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gold-400" />
              <span className="text-forest-700 uppercase tracking-widest text-sm font-semibold">Our Heritage</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 mb-6 leading-tight">
              Rooted in the Misty Hills of <span className="text-gold-600">Valparai</span>
            </h2>
            
            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed mb-10">
              <p>
                Hari Tea Traders is a family-owned legacy. For over 15 years, we have been bringing the authentic taste of the hills to homes and businesses across the country.
              </p>
              <p>
                Our strength lies in our deep connections. We source our premium tea, coffee, spices, and honey directly from plantations, tribal communities, and local forest settlement areas, ensuring you get only the purest, preservative-free products.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.4 }}
                  className="flex flex-col gap-3 w-full"
                >
                  <div className="w-12 h-12 bg-forest-50 text-forest-700 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-semibold text-forest-900">{feature.title}</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

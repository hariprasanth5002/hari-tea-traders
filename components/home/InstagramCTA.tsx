"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function InstagramCTA() {
  return (
    <section className="py-20 bg-cream border-t border-forest-100 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-forest-100 rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
          >
            {/* Elegant visual accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-forest-50 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-3xl text-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300">
                <FaInstagram className="w-8 h-8" />
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Follow Us on Instagram
              </h2>
              
              <p className="text-charcoal/70 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Stay updated with beautiful daily glimpses of pristine Valparai tea estates, direct sourcing stories, fresh harvests, and exclusive retail & wholesale offers!
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="https://www.instagram.com/hari_tea_traders_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white rounded-full font-bold text-base sm:text-lg transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 text-center"
                >
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  Follow @hari_tea_traders_
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

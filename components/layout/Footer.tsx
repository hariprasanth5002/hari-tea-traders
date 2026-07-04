"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Leaf, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import ShippingTermsModal from "@/components/terms/ShippingTermsModal";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  return (
    <footer className="bg-forest-950 text-cream pt-20 pb-10 border-t-4 border-gold-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group mb-4">
              <img 
                src="/images/logo.png" 
                alt="Hari Tea Traders Logo" 
                className="h-24 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-forest-100/70 text-sm leading-relaxed max-w-sm">
              15+ years of experience sourcing authentic hill station products directly from plantations and tribal communities in Valparai.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/hari_tea_traders_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-white transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gold-300">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Wholesale", "Tourist Info", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="text-forest-100/70 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gold-300">Categories</h4>
            <ul className="space-y-4">
              {["Premium Tea", "Hill Coffee", "Organic Spices", "Forest Honey", "Herbal Oils", "Seasonal Fruits"].map((item) => (
                <li key={item}>
                  <Link 
                    href="/products"
                    className="text-forest-100/70 hover:text-gold-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gold-300">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-forest-100/70">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/KeZxt91TngG3UzNs7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  Valparai, Tamil Nadu, India
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-forest-100/70">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919486353900" className="hover:text-gold-300 transition-colors">+91 94863 53900</a>
                  <a href="tel:+919486222298" className="hover:text-gold-300 transition-colors">+91 94862 22298</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-forest-100/70">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <a href="mailto:hariprasanth5002@gmail.com" className="hover:text-gold-300 transition-colors">
                  hariprasanth5002@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-forest-100/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hari Tea Traders. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-forest-100/50">
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-gold-400 transition-colors"
            >
              Shipping & Terms
            </button>
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
      
      <ShippingTermsModal 
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </footer>
  );
}

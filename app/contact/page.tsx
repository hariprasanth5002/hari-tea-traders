import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us | Hari Tea Traders",
  description: "Get in touch with Hari Tea Traders. Reach us directly for retail orders, wholesale inquiries, or to visit our store in Valparai.",
};

export default function ContactPage() {
  return (
    <div className="pb-20 bg-cream min-h-screen">
      {/* Header */}
      <div className="h-[300px] md:h-[450px] relative overflow-hidden w-full">
        <img 
          src="/images/pic for contact us banner.jpg" 
          alt="Valparai Contact"
          className="w-full h-full object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center py-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-2 text-gold-400">Contact Us</h1>
            <p className="text-xs md:text-base text-forest-100 max-w-2xl mx-auto">
              We are always ready to serve you with the best hill station products.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-forest-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-forest-900 text-lg mb-1">Our Location</h4>
                  <p className="text-charcoal/70 mb-2 leading-relaxed">
                    Hari Tea Traders,<br />
                    Valparai, Tamil Nadu,<br />
                    India
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/KeZxt91TngG3UzNs7" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-700 font-medium hover:text-gold-600 transition-colors text-sm flex items-center gap-1"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-forest-900 text-lg mb-1">Phone Numbers</h4>
                  <div className="flex flex-col gap-2 text-charcoal/70">
                    <a href="tel:+919486353900" className="hover:text-forest-700 transition-colors">+91 94863 53900</a>
                    <a href="tel:+919486222298" className="hover:text-forest-700 transition-colors">+91 94862 22298</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-forest-900 text-lg mb-1">Email Address</h4>
                  <a href="mailto:hariprasanth5002@gmail.com" className="text-charcoal/70 hover:text-forest-700 transition-colors">
                    hariprasanth5002@gmail.com
                  </a>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-forest-900 text-lg mb-1">Business Hours</h4>
                  <p className="text-charcoal/70">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-forest-50 p-8 rounded-2xl border border-forest-100">
              <h4 className="font-heading font-bold text-forest-900 text-xl mb-4">Fastest Way to Order & Inquire</h4>
              <p className="text-charcoal/70 mb-6">
                For retail orders (min 500g total), wholesale inquiries, and quick responses, WhatsApp or Instagram DM is our preferred method of communication.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="https://wa.me/919486353900"
                  target="_blank"
                  className="bg-[#25D366] hover:bg-[#1ebd5b] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md text-center"
                >
                  <FaWhatsapp className="w-5 h-5 shrink-0" />
                  Message on WhatsApp
                </Link>
                <Link
                  href="https://www.instagram.com/hari_tea_traders_/"
                  target="_blank"
                  className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md text-center"
                >
                  <FaInstagram className="w-5 h-5 shrink-0" />
                  DM on Instagram
                </Link>
              </div>
            </div>
          </div>

          {/* Map / Image Area */}
          <div className="h-full min-h-[400px] bg-forest-100 rounded-3xl overflow-hidden relative shadow-lg">
            {/* We use an image placeholder for the map to avoid embedding complex iframes without exact coordinates, 
                and link it out to the provided Google Business Profile */}
            <a 
              href="https://maps.app.goo.gl/KeZxt91TngG3UzNs7"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 group"
            >
              <img 
                src="/images/road-view.jpeg" 
                alt="Map Location" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-forest-900/40 group-hover:bg-forest-900/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-gold-400" />
                </div>
                <span className="font-heading font-bold text-2xl mb-2">Visit Our Store</span>
                <span className="text-sm uppercase tracking-widest text-white/80 border-b border-white/30 pb-1">Open in Google Maps</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

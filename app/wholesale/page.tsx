import { Metadata } from "next";
import { Truck, Package, PhoneCall, Handshake, BadgeCheck, Leaf } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale & B2B | Hari Tea Traders",
  description: "Wholesale supply of premium tea, coffee, and spices. Ideal for tea shops, hotels, grocery stores, and resellers.",
};

const benefits = [
  { icon: Package, title: "Custom Packaging", desc: "Available from 100g packets to large bulk quantities to suit your business needs." },
  { icon: Truck, title: "Reliable Logistics", desc: "Pan-Tamil Nadu delivery via ST Courier, Professional Courier, and Bus Transport. Bulk supply to Bangalore and Kerala." },
  { icon: BadgeCheck, title: "Consistent Quality", desc: "In-house blending and grinding ensures that your customers get the same premium taste every time." },
  { icon: Handshake, title: "Long-term Partnership", desc: "Special pricing and priority supply for our trusted long-term B2B partners." },
];

export default function WholesalePage() {
  return (
    <div className="pb-20 bg-cream min-h-screen">
      {/* Header */}
      <div className="h-[300px] md:h-[450px] relative overflow-hidden w-full">
        <img 
          src="/images/wholesale banner.jpg" 
          alt="Wholesale Tea Bulk"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center py-6">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 mb-2 bg-gold-500/20 px-3 py-1 rounded-full text-gold-400 border border-gold-500/30">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold">B2B Partner Program</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2 text-white">Wholesale Supply</h1>
            <p className="text-sm md:text-lg text-forest-100 max-w-2xl mx-auto">
              Premium quality products at competitive wholesale prices for retail shops, hotels, and resellers.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Information Side */}
          <div>
            <h2 className="font-heading text-4xl font-bold text-forest-900 mb-6">Why Partner With Us?</h2>
            <p className="text-charcoal/80 text-lg mb-10 leading-relaxed">
              We understand that the success of your business depends on the quality you serve to your customers. With over 15 years of experience, Hari Tea Traders has become a trusted B2B supplier across South India.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-forest-50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-forest-50 text-forest-700 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-forest-900 text-lg mb-2">{benefit.title}</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gold-50 border border-gold-200 rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-forest-900 mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-gold-600" />
                Ideal For:
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-forest-800 font-medium">
                <li className="flex items-center gap-2">• Retail Tea Shops</li>
                <li className="flex items-center gap-2">• Grocery Stores</li>
                <li className="flex items-center gap-2">• Hotels & Restaurants</li>
                <li className="flex items-center gap-2">• Corporate Gifting</li>
                <li className="flex items-center gap-2">• Supermarkets</li>
                <li className="flex items-center gap-2">• Independent Resellers</li>
              </ul>
            </div>
          </div>

          {/* Action / Contact Side */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-forest-100 sticky top-32">
              <h3 className="font-heading text-3xl font-bold text-forest-900 mb-4">Get Wholesale Rates</h3>
              <p className="text-charcoal/70 mb-8">
                Due to seasonal variations and bulk quantity pricing, we provide custom quotes for wholesale orders. Contact us directly for the best prices.
              </p>

              <div className="space-y-6 mb-10">
                <a href="tel:+919486353900" className="flex items-center gap-4 p-4 rounded-xl bg-forest-50 hover:bg-forest-100 transition-colors group">
                  <div className="w-12 h-12 bg-forest-800 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-forest-700 font-semibold uppercase tracking-wider mb-1">Direct Call</div>
                    <div className="text-xl font-bold text-forest-900">+91 94863 53900</div>
                  </div>
                </a>
                
                <a href="tel:+919486222298" className="flex items-center gap-4 p-4 rounded-xl bg-forest-50 hover:bg-forest-100 transition-colors group">
                  <div className="w-12 h-12 bg-forest-800 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-forest-700 font-semibold uppercase tracking-wider mb-1">Alternative Number</div>
                    <div className="text-xl font-bold text-forest-900">+91 94862 22298</div>
                  </div>
                </a>
              </div>

              <div className="pt-8 border-t border-forest-100">
                <Link
                  href="https://wa.me/919486353900?text=Hello,%20I%20would%20like%20to%20inquire%20about%20wholesale%20rates%20for%20my%20business."
                  target="_blank"
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.939 6.939-.001 3.825-3.114 6.937-6.939 6.941z" />
                  </svg>
                  Chat on WhatsApp
                </Link>
                <p className="text-center text-sm text-charcoal/50 mt-4">Average response time: &lt; 1 hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

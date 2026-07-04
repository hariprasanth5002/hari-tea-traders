import React from "react";
import { Store, Building2, UtensilsCrossed, Hotel, Truck, ShieldCheck, Clock, Award } from "lucide-react";

export default function PartnerBenefits() {
  const targetAudiences = [
    { icon: Store, name: "Retail Tea Shops" },
    { icon: Hotel, name: "Hotels & Resorts" },
    { icon: UtensilsCrossed, name: "Restaurants" },
    { icon: Building2, name: "Supermarkets" },
    { icon: Store, name: "Organic Stores" },
    { icon: Truck, name: "Distributors & Resellers" },
    { icon: Award, name: "Corporate Buyers" },
  ];

  const benefits = [
    { 
      icon: ShieldCheck, 
      title: "15+ Years Experience", 
      desc: "Trusted by hundreds of businesses across South India for our consistent quality and reliable supply chain." 
    },
    { 
      icon: Truck, 
      title: "Fast & Reliable Dispatch", 
      desc: "We utilize extensive networks of professional couriers and bus cargo to ensure your stock arrives fresh." 
    },
    { 
      icon: Award, 
      title: "Direct Plantation Sourcing", 
      desc: "No middlemen. We source directly from Valparai estates to guarantee the highest grade at the lowest bulk price." 
    },
    { 
      icon: Clock, 
      title: "Fresh Packing", 
      desc: "Your order is packed fresh right before dispatch to lock in maximum flavor and aroma for your customers." 
    },
  ];

  return (
    <div id="benefits" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Who We Serve */}
        <div className="mb-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-4">Who We Serve</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-10">
            Our wholesale program is tailored to support a wide variety of businesses looking for premium, authentic products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {targetAudiences.map((audience, idx) => (
              <div key={idx} className="bg-white border border-forest-50 px-6 py-4 rounded-2xl shadow-sm flex items-center gap-3">
                <audience.icon className="w-5 h-5 text-gold-600" />
                <span className="font-semibold text-forest-900">{audience.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-10 text-center">
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-forest-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-forest-50 text-forest-800 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-bold text-xl text-forest-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

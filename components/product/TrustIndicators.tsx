import React from "react";
import { ShieldCheck, Truck, Package, HeartHandshake, Leaf } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    { icon: Leaf, text: "Direct from Valparai" },
    { icon: ShieldCheck, text: "15+ Years Experience" },
    { icon: Package, text: "Freshly Packed" },
    { icon: HeartHandshake, text: "Trusted Family Business" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {indicators.map((indicator, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-forest-50 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="w-8 h-8 mb-2 text-forest-700 bg-forest-50 rounded-full flex items-center justify-center">
            <indicator.icon className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-forest-900 leading-tight">
            {indicator.text}
          </span>
        </div>
      ))}
    </div>
  );
}

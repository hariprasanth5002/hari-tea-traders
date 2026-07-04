import React from "react";
import { CheckCircle2, MapPin, Truck, Box } from "lucide-react";

interface ProductBenefitsProps {
  whyChooseUs?: string[];
  sourceInfo?: string;
  deliveryDetails?: string;
  availablePackSizes?: { size: string }[];
}

export default function ProductBenefits({ 
  whyChooseUs, 
  sourceInfo, 
  deliveryDetails,
  availablePackSizes
}: ProductBenefitsProps) {
  return (
    <div className="space-y-8 mb-10">
      
      {/* Why Choose Us */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <div>
          <h4 className="font-heading text-xl font-bold text-forest-900 mb-4">Why Choose This Product</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyChooseUs.map((reason, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-forest-50 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm text-forest-900 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sourcing & Packaging Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Source */}
        {sourceInfo && (
          <div className="bg-forest-50/40 p-5 rounded-2xl border border-forest-100/30 flex flex-col justify-center">
            <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-gold-600" />
            </div>
            <h5 className="font-heading font-bold text-forest-900 mb-2">Collected From</h5>
            <p className="text-sm text-charcoal/70 leading-relaxed">{sourceInfo}</p>
          </div>
        )}

        {/* Packaging */}
        {availablePackSizes && availablePackSizes.length > 0 && (
          <div className="bg-gold-50/30 p-5 rounded-2xl border border-gold-200/30 flex flex-col justify-center">
            <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mb-3">
              <Box className="w-5 h-5 text-gold-600" />
            </div>
            <h5 className="font-heading font-bold text-forest-900 mb-2">Available Packaging</h5>
            <div className="flex flex-wrap gap-2 mt-1">
              {availablePackSizes.map((pack) => (
                <span key={pack.size} className="px-3 py-1 bg-white border border-gold-200 rounded-full text-xs font-bold text-forest-800">
                  {pack.size}
                </span>
              ))}
              <span className="px-3 py-1 bg-forest-900 text-white rounded-full text-xs font-bold">
                Bulk
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Delivery */}
      {deliveryDetails && (
        <div className="bg-white p-5 rounded-2xl border border-forest-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0">
            <Truck className="w-6 h-6 text-forest-700" />
          </div>
          <div>
            <h5 className="font-heading font-bold text-forest-900 mb-1">Delivery Info</h5>
            <p className="text-sm text-charcoal/70 mb-2">{deliveryDetails}</p>
            <p className="text-xs font-semibold text-green-600">Estimated dispatch: 1–2 working days</p>
          </div>
        </div>
      )}

    </div>
  );
}

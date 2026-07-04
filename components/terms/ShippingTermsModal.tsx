"use client";

import React from "react";
import AnimatedModal from "@/components/shared/AnimatedModal";
import { Truck, Package, ShieldCheck, CreditCard, Leaf } from "lucide-react";

interface ShippingTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShippingTermsModal({ isOpen, onClose }: ShippingTermsModalProps) {
  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      <div className="p-6 md:p-10">
        
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-forest-900 mb-3">Shipping & Terms</h2>
          <p className="text-charcoal/70">Information regarding orders, delivery, and our policies.</p>
        </div>

        <div className="space-y-8 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
          
          {/* Retail Orders */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-forest-50 flex items-center justify-center shrink-0">
              <Package className="w-6 h-6 text-forest-700" />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-forest-900 mb-2">Retail Orders</h4>
              <ul className="list-disc list-inside text-sm text-charcoal/80 space-y-1">
                <li>Minimum online order quantity for delivery is 500g (total cart weight).</li>
                <li>All products are freshly packed only after order confirmation.</li>
                <li>Avocados and certain fruits are subject to seasonal availability.</li>
                <li>Prices may vary slightly based on seasonal yield.</li>
              </ul>
            </div>
          </div>

          {/* Wholesale Orders */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-forest-900 mb-2">Wholesale Orders</h4>
              <ul className="list-disc list-inside text-sm text-charcoal/80 space-y-1">
                <li>Minimum quantity applies (usually 10kg+ depending on the product).</li>
                <li>Pricing is negotiable based on volume and frequency.</li>
                <li>Bulk transportation can be arranged via Bus Cargo or heavy transport.</li>
                <li>Direct sourcing and business partnerships are welcome.</li>
              </ul>
            </div>
          </div>

          {/* Shipping */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-forest-50 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-forest-700" />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-forest-900 mb-2">Shipping & Dispatch</h4>
              <ul className="list-disc list-inside text-sm text-charcoal/80 space-y-1">
                <li>We partner with Professional Courier, ST Courier, and Bus Cargo.</li>
                <li>Standard dispatch timeline is 1–2 working days after confirmation.</li>
                <li>Delivery estimates: 2-3 days (Tamil Nadu), 4-6 days (Rest of South India).</li>
              </ul>
            </div>
          </div>

          {/* Payments & Returns */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-forest-50 flex items-center justify-center shrink-0">
              <CreditCard className="w-6 h-6 text-forest-700" />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-forest-900 mb-2">Payments & Returns</h4>
              <ul className="list-disc list-inside text-sm text-charcoal/80 space-y-1">
                <li>Order confirmation and payment details are handled via WhatsApp.</li>
                <li>Payment must be confirmed before dispatch.</li>
                <li>Returns are only accepted for damaged products or wrong items received.</li>
                <li>Please contact us within 24 hours of delivery for return claims.</li>
              </ul>
            </div>
          </div>

          {/* Natural Disclaimer */}
          <div className="mt-8 p-5 bg-gold-50/50 rounded-2xl border border-gold-200 text-center">
            <Leaf className="w-6 h-6 text-gold-600 mx-auto mb-2" />
            <h5 className="font-heading font-bold text-forest-900 mb-1">Natural Products Disclaimer</h5>
            <p className="text-xs text-charcoal/70">
              Because our products are 100% natural and minimally processed, the color, taste, aroma, size, and weight may naturally vary slightly from batch to batch.
            </p>
          </div>

        </div>
      </div>
    </AnimatedModal>
  );
}

"use client";

import React, { useEffect } from "react";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, updateQuantity, removeFromCart, cartSubtotal, cartCount } = useCart();

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="relative w-full max-w-md bg-cream h-full shadow-2xl flex flex-col z-10 border-l border-forest-100/30"
          >
            {/* Header */}
            <div className="p-6 border-b border-forest-100/40 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-forest-800" />
                <h2 className="font-heading text-xl font-bold text-forest-900">
                  Your Cart ({cartCount})
                </h2>
              </div>
              <button
                onClick={onClose}
                type="button"
                className="w-9 h-9 rounded-full bg-forest-50 hover:bg-forest-100 flex items-center justify-center text-forest-950 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-forest-50 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-forest-400" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-forest-900 mb-1">Your cart is empty</h3>
                  <p className="text-sm text-charcoal/50 max-w-xs mb-6">
                    Add pure premium products from the Valparai hills to get started.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-forest-800 hover:bg-forest-900 text-white rounded-full font-semibold text-sm transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={`${item.productId}-${item.selectedVariant || "default"}-${item.selectedPackSize}`}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-forest-50 flex gap-4 hover:shadow-md transition-shadow"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-forest-50 shrink-0">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-semibold text-forest-900 text-sm truncate leading-snug">
                            {item.productName}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.productId, item.selectedPackSize, item.selectedVariant)}
                            className="text-red-500 hover:text-red-700 shrink-0"
                            aria-label={`Remove ${item.productName}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Variant and Pack Size badges */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                          {item.selectedVariant && (
                            <span className="inline-block px-2 py-0.5 rounded-full bg-forest-100 text-forest-800 text-[10px] font-bold">
                              {item.variantLabel ? `${item.variantLabel}: ` : ""}{item.selectedVariant}
                            </span>
                          )}
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold-100 text-[10px] font-bold text-gold-700 uppercase tracking-wider">
                            {item.selectedPackSize}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Selector & Price */}
                      <div className="flex justify-between items-end mt-2">
                        <div className="flex items-center bg-forest-50 rounded-lg p-0.5 border border-forest-100/10">
                          <button
                            onClick={() => updateQuantity(item.productId, item.selectedPackSize, item.quantity - 1, item.selectedVariant)}
                            className="w-7 h-7 flex items-center justify-center text-forest-800 hover:bg-forest-100 rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-forest-950">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.selectedPackSize, item.quantity + 1, item.selectedVariant)}
                            className="w-7 h-7 flex items-center justify-center text-forest-800 hover:bg-forest-100 rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-heading font-extrabold text-forest-950 text-sm">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout Link */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-forest-100 bg-white space-y-4 shadow-xl">
                {/* Subtotal */}
                <div className="flex justify-between items-center text-base">
                  <span className="text-charcoal/60 font-medium">Subtotal</span>
                  <span className="text-2xl font-heading font-extrabold text-forest-950">
                    ₹{cartSubtotal}
                  </span>
                </div>

                {/* Info Text */}
                <p className="text-xxs text-charcoal/50 leading-relaxed text-center">
                  Minimum retail shipping quantity across Tamil Nadu is 500g. Direct WhatsApp dispatch.
                </p>

                {/* Checkout Link */}
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="w-full py-4 bg-forest-900 hover:bg-forest-950 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

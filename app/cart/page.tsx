"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { getWhatsAppLink, getCartWhatsAppMessage } from "@/components/whatsapp/whatsappUtils";

interface FormFields {
  name: string;
  phone: string;
  city: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
}

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartSubtotal, cartCount, clearCart } = useCart();

  // Form state
  const [fields, setFields] = useState<FormFields>({ name: "", phone: "", city: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!fields.name.trim()) newErrors.name = "Name is required.";
    if (!fields.city.trim()) newErrors.city = "City is required.";

    // Phone validation (simple 10 digit check)
    const cleanPhone = fields.phone.replace(/[^0-9+]/g, "");
    if (!fields.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number (min 10 digits).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = getCartWhatsAppMessage(
      fields.name.trim(),
      fields.phone.trim(),
      fields.city.trim(),
      cartItems,
      cartSubtotal
    );

    const link = getWhatsAppLink(message);
    window.open(link, "_blank", "noopener,noreferrer");

    // Wait a brief period then clear the cart
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-28 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-2">
              Shopping Cart
            </h1>
            <p className="text-sm text-charcoal/60">
              Review your selected products and proceed to place the order on WhatsApp.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-800 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-forest-100/40 max-w-2xl mx-auto py-16">
            <div className="w-20 h-20 rounded-full bg-forest-50 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-forest-400" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-forest-900 mb-2">
              Your cart is currently empty
            </h2>
            <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
              Before you checkout, you need to add some premium Valparai products to your shopping cart.
            </p>
            <Link
              href="/products"
              className="inline-flex px-8 py-4 bg-forest-900 hover:bg-forest-950 text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Cart Items Table/List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-forest-100/40">
                <div className="p-6 md:p-8 border-b border-forest-50 bg-forest-50/20">
                  <h3 className="font-heading text-xl font-bold text-forest-900">
                    Selected Items ({cartCount})
                  </h3>
                </div>

                <div className="divide-y divide-forest-50 p-6 md:p-8 space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.productId}-${item.selectedPackSize}`}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 first:pt-0"
                    >
                      {/* Product Thumbnail & Details */}
                      <div className="flex gap-4 items-center min-w-0">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-forest-50 shrink-0">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-forest-900 text-base truncate leading-snug">
                            {item.productName}
                          </h4>
                          <span className="inline-block mt-1.5 px-3 py-1 rounded-full bg-gold-100 text-[10px] font-extrabold text-gold-700 uppercase tracking-widest">
                            {item.selectedPackSize}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Modifier & Pricing */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-4">
                        <div className="font-heading font-bold text-lg text-forest-950 sm:order-2">
                          ₹{item.price * item.quantity}
                        </div>
                        
                        <div className="flex items-center gap-3 sm:order-1">
                          {/* Quantity Counter */}
                          <div className="flex items-center bg-forest-50 rounded-xl p-0.5 border border-forest-100/20">
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.selectedPackSize, item.quantity - 1)
                              }
                              type="button"
                              className="w-8 h-8 flex items-center justify-center text-forest-800 hover:bg-forest-100 rounded-lg"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold text-forest-950">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.selectedPackSize, item.quantity + 1)
                              }
                              type="button"
                              className="w-8 h-8 flex items-center justify-center text-forest-800 hover:bg-forest-100 rounded-lg"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Delete Button */}
                          <button
                            onClick={() => removeFromCart(item.productId, item.selectedPackSize)}
                            type="button"
                            className="w-9 h-9 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-700 flex items-center justify-center transition-colors"
                            aria-label={`Remove ${item.productName}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal summary */}
                <div className="p-6 md:p-8 bg-forest-50/20 border-t border-forest-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-sm text-charcoal/50 block">Minimum Order Notice</span>
                    <p className="text-xs text-charcoal/70 max-w-sm mt-0.5">
                      We dispatch shipments across Tamil Nadu for minimum total order size of 500g.
                    </p>
                  </div>
                  <div className="text-right w-full sm:w-auto">
                    <span className="text-sm text-charcoal/60 block">Subtotal</span>
                    <span className="text-3xl font-heading font-extrabold text-forest-950">
                      ₹{cartSubtotal}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Checkout Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-forest-100/40">
                <h3 className="font-heading text-2xl font-bold text-forest-900 mb-6">
                  Customer Details
                </h3>

                <form onSubmit={handleCheckout} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="text-xs font-bold text-forest-800 uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-forest-50/40 border text-sm text-charcoal outline-none focus:bg-white transition-all ${
                        errors.name ? "border-red-400 focus:border-red-500" : "border-forest-100/50 focus:border-forest-800"
                      }`}
                      placeholder="e.g. Rahul Sharma"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="text-xs font-bold text-forest-800 uppercase tracking-wider block mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={fields.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-forest-50/40 border text-sm text-charcoal outline-none focus:bg-white transition-all ${
                        errors.phone ? "border-red-400 focus:border-red-500" : "border-forest-100/50 focus:border-forest-800"
                      }`}
                      placeholder="e.g. +91 9876543210"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                  </div>

                  {/* City Input */}
                  <div>
                    <label htmlFor="city" className="text-xs font-bold text-forest-800 uppercase tracking-wider block mb-2">
                      City / Town *
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={fields.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-forest-50/40 border text-sm text-charcoal outline-none focus:bg-white transition-all ${
                        errors.city ? "border-red-400 focus:border-red-500" : "border-forest-100/50 focus:border-forest-800"
                      }`}
                      placeholder="e.g. Chennai"
                    />
                    {errors.city && <span className="text-red-500 text-xs mt-1 block">{errors.city}</span>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-forest-50">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd5b] disabled:bg-gray-300 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <FaWhatsapp className="w-5 h-5 shrink-0" />
                      {isSubmitting ? "Redirecting..." : "Continue on WhatsApp"}
                    </button>
                    <p className="text-center text-[10px] text-charcoal/40 mt-3 leading-relaxed">
                      Clicking this button compiles your order details and opens WhatsApp to finalize details and shipping address with us directly.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

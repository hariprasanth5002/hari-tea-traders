"use client";

import React, { useState, useEffect } from "react";
import { X, ShoppingCart, Leaf, Shield, MapPin, Truck, HelpCircle, Minus, Plus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Product, PackSize } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { getWhatsAppLink, getSingleProductWhatsAppMessage } from "@/components/whatsapp/whatsappUtils";

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<PackSize | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartSuccess, setCartSuccess] = useState<boolean>(false);

  // Sync state with product selection
  useEffect(() => {
    if (product) {
      setSelectedSize(product.availablePackSizes[0]);
      setQuantity(1);
      // Disable background scrolling when open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product || !selectedSize) return null;

  // Handlers
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      productName: product.name,
      quantity,
      selectedPackSize: selectedSize.size,
      price: selectedSize.price,
      image: product.image,
    });
    setCartSuccess(true);
    setTimeout(() => setCartSuccess(false), 2000);
  };

  const handleWhatsAppOrder = () => {
    const message = getSingleProductWhatsAppMessage(
      product.name,
      selectedSize.size,
      quantity,
      selectedSize.price
    );
    const link = getWhatsAppLink(message);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-cream w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10 border border-forest-100/30"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-forest-950 flex items-center justify-center shadow-md hover:scale-105 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: Product Image & Highlights */}
            <div className="w-full md:w-5/12 relative min-h-[250px] md:min-h-full bg-forest-50/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
              
              {/* Sticky bottom badges/caption in Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white hidden md:block">
                <span className="text-xxs font-extrabold uppercase tracking-widest text-gold-400 block mb-1">
                  Estate Direct Sourced
                </span>
                <h4 className="font-heading text-2xl font-bold leading-tight mb-2">
                  {product.name}
                </h4>
                <p className="text-xs text-forest-100/90 line-clamp-3">
                  {product.shortDescription}
                </p>
              </div>
            </div>

            {/* Right side: Detailed Information (Scrollable) */}
            <div className="w-full md:w-7/12 p-6 md:p-10 overflow-y-auto flex flex-col justify-between max-h-[calc(90vh-250px)] md:max-h-full">
              <div>
                {/* Header */}
                <div className="mb-6 md:mb-8 border-b border-forest-50 pb-4">
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
                    {product.category}
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-forest-900 leading-tight">
                    {product.name}
                  </h2>
                </div>

                {/* Info Blocks */}
                <div className="space-y-6">
                  {/* Product Story */}
                  {product.story && (
                    <div>
                      <h4 className="font-heading text-lg font-bold text-forest-900 mb-2 flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-gold-500" />
                        Our Story
                      </h4>
                      <p className="text-sm text-charcoal/80 leading-relaxed font-body">
                        {product.story}
                      </p>
                    </div>
                  )}

                  {/* Product Description */}
                  <div>
                    <h4 className="font-heading text-lg font-bold text-forest-900 mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-gold-500" />
                      About the Product
                    </h4>
                    <p className="text-sm text-charcoal/80 leading-relaxed font-body">
                      {product.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  {product.benefits && product.benefits.length > 0 && (
                    <div>
                      <h4 className="font-heading text-lg font-bold text-forest-900 mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gold-500" />
                        Key Benefits
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                            <span className="text-gold-500 mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sourcing */}
                  {product.sourceInfo && (
                    <div className="bg-forest-50/50 rounded-2xl p-4 border border-forest-100/20 flex gap-3">
                      <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">Source Information</h5>
                        <p className="text-xs text-charcoal/70 leading-relaxed">{product.sourceInfo}</p>
                      </div>
                    </div>
                  )}

                  {/* Retail & Wholesale Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gold-50/40 rounded-2xl p-4 border border-gold-200/20">
                      <h5 className="text-xs font-bold text-forest-950 uppercase tracking-wider mb-1">Retail Orders</h5>
                      <p className="text-xs text-charcoal/70 leading-relaxed">
                        Minimum total cart order for shipping across Tamil Nadu is 500g. Standard home delivery.
                      </p>
                    </div>

                    {product.wholesaleAvailable && (
                      <div className="bg-forest-50/50 rounded-2xl p-4 border border-forest-100/20">
                        <h5 className="text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">Wholesale & B2B</h5>
                        <p className="text-xs text-charcoal/70 leading-relaxed">
                          {product.wholesaleDetails || "Bulk rates available for corporate gifting, resellers, and shops. Contact for quotes."}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Delivery details */}
                  {product.deliveryDetails && (
                    <div className="bg-forest-50/40 rounded-2xl p-4 border border-forest-100/20 flex gap-3">
                      <Truck className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">Delivery Logistics</h5>
                        <p className="text-xs text-charcoal/70 leading-relaxed">{product.deliveryDetails}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sticky Bottom Actions */}
              <div className="mt-8 pt-6 border-t border-forest-50">
                {/* Weight Selection */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-forest-800 uppercase tracking-wider block mb-2">
                    Select Size:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.availablePackSizes.map((packSize) => (
                      <button
                        key={packSize.size}
                        type="button"
                        onClick={() => setSelectedSize(packSize)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          selectedSize.size === packSize.size
                            ? "bg-forest-900 text-white shadow-md"
                            : "bg-forest-50/60 text-forest-800 hover:bg-forest-100/80"
                        }`}
                      >
                        {packSize.size} - ₹{packSize.price}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Price */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <span className="text-xs text-charcoal/50 block">Subtotal</span>
                    <span className="text-3xl font-heading font-extrabold text-forest-950">
                      ₹{selectedSize.price * quantity}
                    </span>
                  </div>

                  <div className="flex items-center bg-forest-50/80 rounded-2xl p-1 border border-forest-100/20">
                    <button
                      onClick={handleDecrease}
                      type="button"
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-forest-800 hover:bg-forest-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-forest-950">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrease}
                      type="button"
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-forest-800 hover:bg-forest-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={handleAddToCart}
                    type="button"
                    className={`sm:col-span-1 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                      cartSuccess
                        ? "bg-green-600 border-green-600 text-white"
                        : "bg-white border-forest-900/25 hover:border-forest-900 text-forest-950 hover:bg-forest-50/40"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {cartSuccess ? "Added to Cart" : "Add to Cart"}
                  </button>

                  <button
                    onClick={handleWhatsAppOrder}
                    type="button"
                    className="sm:col-span-2 py-4 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Order Instantly on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

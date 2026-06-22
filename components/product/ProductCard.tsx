"use client";

import React, { useState } from "react";
import { ShoppingCart, Eye, Plus, Minus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Product, PackSize } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { getWhatsAppLink, getSingleProductWhatsAppMessage } from "@/components/whatsapp/whatsappUtils";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart();
  
  // States
  const [selectedSize, setSelectedSize] = useState<PackSize>(product.availablePackSizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartSuccess, setCartSuccess] = useState<boolean>(false);

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
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-forest-100/40 flex flex-col h-full transform hover:-translate-y-1">
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-50/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.featured && (
            <span className="bg-gold-500 text-white text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full shadow-md">
              Featured
            </span>
          )}
          {product.seasonal && (
            <span className="bg-forest-700 text-cream text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full shadow-md">
              Seasonal
            </span>
          )}
        </div>
      </div>

      {/* Product Info & Actions */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Category & Title */}
        <div className="mb-3">
          <span className="text-xxs uppercase tracking-widest text-gold-600 font-bold block mb-1">
            {product.category}
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-forest-900 leading-tight group-hover:text-forest-700 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-charcoal/70 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Weight / Pack Size Selector */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-forest-800 uppercase tracking-wider block mb-2">
            Select Size / Weight:
          </label>
          <div className="flex flex-wrap gap-2">
            {product.availablePackSizes.map((packSize) => (
              <button
                key={packSize.size}
                type="button"
                onClick={() => setSelectedSize(packSize)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  selectedSize.size === packSize.size
                    ? "bg-forest-900 text-white shadow-md scale-105"
                    : "bg-forest-50/60 text-forest-800 hover:bg-forest-100/80 border border-forest-100/10"
                }`}
              >
                {packSize.size} - ₹{packSize.price}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector & Live Price */}
        <div className="flex items-center justify-between gap-4 mb-6 pt-4 border-t border-forest-50">
          <div>
            <span className="text-xs text-charcoal/50 block mb-1">Total Price</span>
            <span className="text-2xl font-heading font-extrabold text-forest-950">
              ₹{selectedSize.price * quantity}
            </span>
          </div>
          <div className="flex items-center bg-forest-50/80 rounded-2xl p-1 border border-forest-100/20">
            <button
              onClick={handleDecrease}
              type="button"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-forest-800 hover:bg-forest-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center text-sm font-bold text-forest-950">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              type="button"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-forest-800 hover:bg-forest-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="space-y-3">
          {/* Main CTAs */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleAddToCart}
              type="button"
              className={`w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm border ${
                cartSuccess
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-white border-forest-900/25 hover:border-forest-900 text-forest-950 hover:bg-forest-50/40"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {cartSuccess ? "Added!" : "Add to Cart"}
            </button>

            <button
              onClick={() => onViewDetails(product)}
              type="button"
              className="w-full py-3.5 bg-forest-900 hover:bg-forest-950 text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
          </div>

          {/* WhatsApp Direct Order Button */}
          <button
            onClick={handleWhatsAppOrder}
            type="button"
            className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-5 h-5" />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

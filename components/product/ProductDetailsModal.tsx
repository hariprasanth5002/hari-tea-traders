"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Product, PackSize } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { getWhatsAppLink, getSingleProductWhatsAppMessage } from "@/components/whatsapp/whatsappUtils";
import AnimatedModal from "@/components/shared/AnimatedModal";
import ProductStory from "./ProductStory";
import ProductBenefits from "./ProductBenefits";
import TrustIndicators from "./TrustIndicators";
import ProductRecommendations from "./ProductRecommendations";

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onProductSelect?: (product: Product) => void;
}

export default function ProductDetailsModal({ 
  product, 
  isOpen, 
  onClose,
  onProductSelect
}: ProductDetailsModalProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<PackSize | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartSuccess, setCartSuccess] = useState<boolean>(false);

  // Sync state with product selection
  useEffect(() => {
    if (product && product.availablePackSizes.length > 0) {
      setSelectedSize(product.availablePackSizes[0]);
      setQuantity(1);
    }
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

  // If the user clicks a recommendation, update the current view
  const handleRecommendationSelect = (newProduct: Product) => {
    if (onProductSelect) {
      onProductSelect(newProduct);
      // Reset state for new product
      setSelectedSize(newProduct.availablePackSizes[0]);
      setQuantity(1);
      // Scroll to top of modal content
      const modalContent = document.getElementById("modal-scroll-area");
      if (modalContent) modalContent.scrollTop = 0;
    }
  };

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-5xl">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left side: Product Image & Highlights */}
        <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-[70vh] bg-forest-50/20 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
          
          {/* Bottom Info in Image */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 bg-gold-500/90 text-forest-950 text-xs font-bold uppercase tracking-widest rounded-full mb-3 shadow-lg">
              {product.category}
            </span>
            <h4 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-2 drop-shadow-md">
              {product.name}
            </h4>
            <p className="text-sm text-forest-50/90 line-clamp-2 md:line-clamp-3">
              {product.shortDescription}
            </p>
          </div>
        </div>

        {/* Right side: Detailed Information (Scrollable) */}
        <div 
          id="modal-scroll-area"
          className="w-full md:w-7/12 flex flex-col justify-between max-h-[calc(90vh-300px)] md:max-h-[70vh] overflow-y-auto bg-cream"
        >
          <div className="p-5 md:p-8 flex-1">
            
            {/* Header info for mobile (Category & Title) - Mostly hidden on desktop since it's on image */}
            <div className="md:hidden mb-6 border-b border-forest-50 pb-4">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
                {product.category}
              </span>
              <h2 className="font-heading text-3xl font-bold text-forest-900 leading-tight">
                {product.name}
              </h2>
            </div>

            <TrustIndicators />
            
            <ProductStory 
              story={product.story} 
              storyDetails={product.storyDetails} 
            />
            
            <ProductBenefits 
              whyChooseUs={product.whyChooseUs}
              sourceInfo={product.sourceInfo}
              deliveryDetails={product.deliveryDetails}
              availablePackSizes={product.availablePackSizes}
            />

            {/* Smart Recommendations */}
            <ProductRecommendations 
              currentProductId={product.id}
              category={product.category}
              onProductSelect={handleRecommendationSelect}
            />
            
          </div>

          {/* Sticky Bottom Actions */}
          <div className="sticky bottom-0 p-4 md:p-5 bg-white/95 backdrop-blur-md border-t border-forest-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-20 shrink-0">
            {/* Weight Selection */}
            <div className="mb-3">
              <span className="text-xs font-bold text-forest-800 uppercase tracking-wider block mb-1">
                Select Size:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.availablePackSizes.map((packSize) => (
                  <button
                    key={packSize.size}
                    type="button"
                    onClick={() => setSelectedSize(packSize)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                      selectedSize.size === packSize.size
                        ? "bg-forest-900 border-forest-900 text-white shadow-md scale-[1.02]"
                        : "bg-forest-50/60 border-forest-100 text-forest-800 hover:bg-forest-100"
                    }`}
                  >
                    {packSize.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Price */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <div>
                <span className="text-xs text-charcoal/50 block font-semibold">Total Price</span>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-heading font-extrabold text-forest-950 leading-none">
                    ₹{selectedSize.price * quantity}
                  </span>
                  <span className="text-xs text-forest-700 font-medium mb-1">
                    (₹{selectedSize.price} / {selectedSize.size})
                  </span>
                </div>
              </div>

              <div className="flex items-center bg-forest-50 rounded-xl p-1 border border-forest-100 shadow-inner">
                <button
                  onClick={handleDecrease}
                  type="button"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-forest-800 hover:bg-white hover:shadow-sm transition-all"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-base font-bold text-forest-950">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  type="button"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-forest-800 hover:bg-white hover:shadow-sm transition-all"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={handleAddToCart}
                type="button"
                className={`sm:col-span-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                  cartSuccess
                    ? "bg-green-600 border-green-600 text-white"
                    : "bg-white border-forest-200 hover:border-forest-900 text-forest-950 hover:bg-forest-50"
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                {cartSuccess ? "Added" : "Add to Cart"}
              </button>

              <button
                onClick={handleWhatsAppOrder}
                type="button"
                className="sm:col-span-2 py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-5 h-5" />
                Order on WhatsApp
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </AnimatedModal>
  );
}

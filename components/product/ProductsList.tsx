"use client";

import React, { useState } from "react";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailsModal from "./ProductDetailsModal";

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Group products by category
  const categories = [
    {
      id: "tea",
      name: "Premium Tea",
      description: "Handpicked from the misty slopes of Valparai, processed with care to preserve the authentic aroma and taste.",
      items: products.filter((p) => p.category === "Premium Tea"),
    },
    {
      id: "coffee",
      name: "Hill Coffee",
      description: "Roasted to perfection. Experience the robust flavor of pure Valparai coffee.",
      items: products.filter((p) => p.category === "Hill Coffee"),
    },
    {
      id: "spices",
      name: "Organic Spices",
      description: "Sourced directly from local farms and tribal communities. Aromatic and pure.",
      items: products.filter((p) => p.category === "Organic Spices"),
    },
    {
      id: "organic",
      name: "Forest & Seasonal Products",
      description: "Rare finds from the forests of Valparai, available seasonally.",
      items: products.filter((p) => p.category === "Forest & Seasonal Products"),
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        {categories.map((cat, idx) => {
          if (cat.items.length === 0) return null;
          return (
            <div key={cat.id} id={cat.id} className={`mb-24 ${idx !== 0 ? "pt-10" : ""}`}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="w-8 h-8 text-gold-500" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900">
                  {cat.name}
                </h2>
              </div>
              <p className="text-charcoal/70 text-lg mb-10 max-w-3xl border-l-4 border-gold-400 pl-4">
                {cat.description}
              </p>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={setSelectedProduct}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onProductSelect={setSelectedProduct}
      />
    </>
  );
}

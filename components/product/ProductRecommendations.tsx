import React, { useMemo } from "react";
import { products, Product } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductRecommendationsProps {
  currentProductId: string;
  category: string;
  onProductSelect: (product: Product) => void;
}

export default function ProductRecommendations({ 
  currentProductId, 
  category,
  onProductSelect
}: ProductRecommendationsProps) {
  
  // Find related products (same category first, then fallback to others if needed)
  const recommendations = useMemo(() => {
    let related = products.filter(
      p => p.category === category && p.id !== currentProductId
    );
    
    // If not enough in same category, just add some featured products
    if (related.length < 3) {
      const otherFeatured = products.filter(
        p => p.id !== currentProductId && !related.includes(p) && p.featured
      );
      related = [...related, ...otherFeatured];
    }
    
    return related.slice(0, 3);
  }, [currentProductId, category]);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-12 pt-10 border-t border-forest-100/50">
      <h3 className="font-heading text-2xl font-bold text-forest-900 mb-6">
        Customers also buy
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {recommendations.map(product => (
          <div 
            key={product.id}
            onClick={() => onProductSelect(product)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-forest-50 hover:border-gold-300 hover:shadow-lg transition-all"
          >
            <div className="h-32 bg-forest-50/50 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-heading font-bold text-forest-900 text-sm line-clamp-1 group-hover:text-gold-600 transition-colors">
                {product.name}
              </h4>
              <p className="text-xs text-charcoal/60 mt-1 mb-3">From ₹{product.retailPrice}</p>
              <div className="flex items-center gap-1 text-xs font-semibold text-forest-700 group-hover:text-gold-600">
                View Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

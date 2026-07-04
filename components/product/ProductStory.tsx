import React from "react";
import { Leaf } from "lucide-react";
import { ProductStoryDetails } from "@/data/products";

interface ProductStoryProps {
  story?: string;
  storyDetails?: ProductStoryDetails;
}

export default function ProductStory({ story, storyDetails }: ProductStoryProps) {
  if (!story && !storyDetails) return null;

  return (
    <div className="mb-10">
      <h3 className="font-heading text-2xl font-bold text-forest-900 mb-4 flex items-center gap-2">
        <Leaf className="w-5 h-5 text-gold-500" />
        About This Product
      </h3>
      
      {story && (
        <p className="text-sm md:text-base text-charcoal/80 leading-relaxed font-body mb-6">
          {story}
        </p>
      )}

      {storyDetails && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {storyDetails.origin && (
            <div className="bg-forest-50/50 p-4 rounded-2xl border border-forest-100/30">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">Origin</span>
              <p className="text-sm text-charcoal/80">{storyDetails.origin}</p>
            </div>
          )}
          {storyDetails.taste && (
            <div className="bg-forest-50/50 p-4 rounded-2xl border border-forest-100/30">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">Taste</span>
              <p className="text-sm text-charcoal/80">{storyDetails.taste}</p>
            </div>
          )}
          {storyDetails.aroma && (
            <div className="bg-forest-50/50 p-4 rounded-2xl border border-forest-100/30">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">Aroma</span>
              <p className="text-sm text-charcoal/80">{storyDetails.aroma}</p>
            </div>
          )}
          {storyDetails.freshness && (
            <div className="bg-forest-50/50 p-4 rounded-2xl border border-forest-100/30">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">Freshness</span>
              <p className="text-sm text-charcoal/80">{storyDetails.freshness}</p>
            </div>
          )}
          {storyDetails.processing && (
            <div className="bg-forest-50/50 p-4 rounded-2xl border border-forest-100/30 sm:col-span-2">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">Processing</span>
              <p className="text-sm text-charcoal/80">{storyDetails.processing}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductsList from "@/components/product/ProductsList";

export const metadata: Metadata = {
  title: "Products | Hari Tea Traders",
  description: "Explore our premium selection of tea, coffee, spices, and organic hill station products from Valparai.",
};

export default function ProductsPage() {
  return (
    <div className="pb-20 bg-cream min-h-screen">
      {/* Header */}
      <div className="h-[300px] md:h-[450px] relative overflow-hidden w-full mb-16">
        <img 
          src="/images/products bannet.avif" 
          alt="Valparai Hills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center py-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2 text-gold-400">Our Products</h1>
            <p className="text-sm md:text-lg text-forest-100 max-w-2xl mx-auto">
              Discover the finest selection of tea, coffee, and spices from the hills of Valparai.
            </p>
          </div>
        </div>
      </div>

      {/* Products Interactive List */}
      <ProductsList products={products} />
      
      {/* Minimum Order Notice */}
      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="bg-forest-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-500/20 rounded-full blur-3xl" />
          
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Minimum Order Quantity</h3>
          <p className="text-forest-100/80 mb-8 max-w-xl mx-auto">
            For online orders across Tamil Nadu, the minimum total order quantity is 500g. 
            We ship via Professional Courier, ST Courier, and Bus transport.
          </p>
          <Link
            href="/wholesale"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Looking for Wholesale? <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

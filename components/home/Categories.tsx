"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "tea",
    name: "Premium Tea",
    description: "Manika, Water Fall, BOP Grade, Green, and Flavored Teas.",
    image: "/images/products/manika rd tea.png",
    link: "/products#tea",
    color: "bg-forest-900",
  },
  {
    id: "coffee",
    name: "Hill Coffee",
    description: "Locally sourced beans ground to perfection, with or without jaggery.",
    image: "/images/products/filter-coffe.png",
    link: "/products#coffee",
    color: "bg-[#4a3525]",
  },
  {
    id: "spices",
    name: "Organic Spices",
    description: "Cardamom, Pepper, Clove, Cinnamon, and Turmeric from local farms.",
    image: "/images/products/spices.png",
    link: "/products#spices",
    color: "bg-[#8b4513]",
  },
  {
    id: "honey",
    name: "Forest Honey",
    description: "Pure authentic honey sourced directly from tribal communities in Valparai.",
    image: "/images/products/honey.png",
    link: "/products#organic",
    color: "bg-[#d4af37]",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-forest-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gold-400" />
              <span className="text-forest-700 uppercase tracking-widest text-sm font-semibold">Our Offerings</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 leading-tight">
              Authentic Produce from the <br className="hidden md:block" />
              <span className="text-forest-600">Heart of Nature</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-forest-800 font-medium hover:text-gold-600 transition-colors"
          >
            View all products
            <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-full"
            >
              <Link href={category.link} className="block group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent`} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 xl:p-8 z-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading text-2xl xl:text-3xl font-bold text-white mb-2 xl:mb-3 flex items-center justify-between">
                      <span className="drop-shadow-sm pr-2">{category.name}</span>
                      <span className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 shrink-0">
                        <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                      </span>
                    </h3>
                    <p className="text-white/90 text-sm xl:text-base line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

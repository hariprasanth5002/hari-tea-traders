"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface CartIconProps {
  onClick: () => void;
}

export default function CartIcon({ onClick }: CartIconProps) {
  const { cartCount } = useCart();

  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          onClick={onClick}
          type="button"
          className="fixed bottom-24 right-6 z-40 bg-forest-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-forest-950 transition-colors border border-gold-500/20"
          aria-label={`Open Cart with ${cartCount} items`}
        >
          <ShoppingBag className="w-6 h-6" />
          
          {/* Cart Badge */}
          <motion.span
            key={cartCount}
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute -top-1 -right-1 bg-gold-500 text-white text-[11px] font-extrabold w-6 h-6 rounded-full flex items-center justify-center shadow-md border border-forest-900"
          >
            {cartCount}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

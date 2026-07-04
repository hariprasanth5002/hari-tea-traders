"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string; // e.g., 'max-w-5xl'
}

export default function AnimatedModal({ 
  isOpen, 
  onClose, 
  children,
  maxWidth = "max-w-5xl"
}: AnimatedModalProps) {
  
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative bg-cream w-full ${maxWidth} rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-10 border border-forest-100/30`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 z-[60] w-10 h-10 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-forest-950 flex items-center justify-center shadow-lg hover:scale-105 transition-all border border-forest-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

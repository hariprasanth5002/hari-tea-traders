"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import CartIcon from "@/components/cart/CartIcon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Wholesale", href: "/wholesale" },
  { name: "Tourist Info", href: "/tourist-info" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-cream py-3",
          isScrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <img 
              src="/images/logo.png" 
              alt="Hari Tea Traders Logo" 
              className="h-12 md:h-16 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-forest-700 relative py-2 text-charcoal",
                    isActive && "text-forest-700"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-700 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-forest-900 hover:text-gold-600 transition-colors bg-white rounded-full shadow-sm hover:shadow-md border border-forest-50"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-cream shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              href="https://wa.me/919486353900"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Action Buttons (Cart + Menu) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-forest-900 bg-white rounded-full shadow-sm border border-forest-50"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[9px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-cream shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className={cn(
                "z-50 p-2 rounded-full text-forest-900",
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-cream shadow-xl border-t border-forest-100/20 lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
            >
              <nav className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-6 py-4 text-base font-medium border-b border-forest-50 last:border-0",
                      pathname === link.href ? "text-forest-700 bg-forest-50/50" : "text-charcoal"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-6 py-6 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="w-full bg-forest-50 hover:bg-forest-100 text-forest-900 py-3 rounded-xl flex items-center justify-center font-medium gap-2 border border-forest-100/40"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Open Cart ({cartCount})
                  </button>

                  <Link
                    href="https://wa.me/919486353900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-forest-800 text-white py-3 rounded-xl flex items-center justify-center font-medium gap-2"
                  >
                    Order on WhatsApp
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart Slider and Floating Cart Toggle */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <CartIcon onClick={() => setIsCartOpen(true)} />
    </>
  );
}


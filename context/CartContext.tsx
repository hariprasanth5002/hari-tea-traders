"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  productId: string;
  productName: string;
  quantity: number;
  selectedPackSize: string; // e.g., "250g", "500g"
  price: number;            // Price of the selected pack size
  image: string;            // Product image path
  selectedVariant?: string; // e.g., "Ginger", "Powdered", "Masala"
  variantLabel?: string;    // e.g., "Flavour", "Form"
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, selectedPackSize: string, selectedVariant?: string) => void;
  updateQuantity: (productId: string, selectedPackSize: string, quantity: number, selectedVariant?: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const isSameItem = (
  item: CartItem,
  productId: string,
  selectedPackSize: string,
  selectedVariant?: string
) =>
  item.productId === productId &&
  item.selectedPackSize === selectedPackSize &&
  (item.selectedVariant || "") === (selectedVariant || "");

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("hari_tea_traders_cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes, only after hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("hari_tea_traders_cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems, isHydrated]);

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) =>
        isSameItem(item, newItem.productId, newItem.selectedPackSize, newItem.selectedVariant)
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (productId: string, selectedPackSize: string, selectedVariant?: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !isSameItem(item, productId, selectedPackSize, selectedVariant)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    selectedPackSize: string,
    quantity: number,
    selectedVariant?: string
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedPackSize, selectedVariant);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        isSameItem(item, productId, selectedPackSize, selectedVariant)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Derive cart counts and subtotals
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: isHydrated ? cartItems : [], // Prevent SSR flashes of unhydrated items
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount: isHydrated ? cartCount : 0,
        cartSubtotal: isHydrated ? cartSubtotal : 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

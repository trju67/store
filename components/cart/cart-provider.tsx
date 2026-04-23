"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import { getProductBySlug } from "@/lib/data/products";

interface CartItem {
  slug: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  addItem: (slug: string, quantity: number) => void;
  updateItem: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "atelier-archive-cart";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const restoredRef = useRef(false);

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CartItem[];
          setItems(parsed);
        } catch {
          localStorage.removeItem(STORAGE_KEY);
        }
      }

      restoredRef.current = true;
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (!restoredRef.current) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => {
    const product = getProductBySlug(item.slug);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  function addItem(slug: string, quantity: number) {
    setItems((current) => {
      const existing = current.find((item) => item.slug === slug);

      if (existing) {
        return current.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [...current, { slug, quantity }];
    });

    setIsOpen(true);
  }

  function updateItem(slug: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(slug);
      return;
    }

    setItems((current) =>
      current.map((item) => (item.slug === slug ? { ...item, quantity } : item)),
    );
  }

  function removeItem(slug: string) {
    setItems((current) => current.filter((item) => item.slug !== slug));
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        itemCount,
        subtotal,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        updateItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}

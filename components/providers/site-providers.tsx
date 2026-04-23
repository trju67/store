"use client";

import { CartProvider } from "@/components/cart/cart-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export function SiteProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CartProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </CartProvider>
  );
}


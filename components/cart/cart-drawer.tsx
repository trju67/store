"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

import { ProductVisual } from "@/components/catalog/product-visual";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { useCart } from "@/components/cart/cart-provider";
import { buttonStyles } from "@/lib/design/button-styles";
import { getProductBySlug } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, updateItem, removeItem } = useCart();

  const cartItems = items
    .map((item) => ({
      product: getProductBySlug(item.slug),
      quantity: item.quantity,
    }))
    .filter(
      (
        entry,
      ): entry is {
        product: NonNullable<ReturnType<typeof getProductBySlug>>;
        quantity: number;
      } => Boolean(entry.product),
    );

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            animate={{ opacity: 1 }}
            aria-label="Close cart"
            className="fixed inset-0 z-[75] bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            onClick={closeCart}
            type="button"
          />
          <motion.aside
            animate={{ x: 0 }}
            className="fixed right-0 top-0 z-[76] flex h-full w-full max-w-[460px] flex-col bg-surface px-5 py-6 shadow-[0_30px_80px_rgba(31,27,23,0.18)] md:px-6"
            initial={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-black/8 pb-4">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-muted">Your bag</p>
                <h2 className="mt-2 font-display text-4xl text-foreground">Selected pieces</h2>
              </div>
              <Button
                aria-label="Close cart"
                className="h-11 w-11 px-0 shadow-none"
                cursorLabel="Close"
                onClick={closeCart}
                variant="secondary"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {cartItems.length ? (
              <>
                <div className="flex-1 space-y-5 overflow-y-auto py-6">
                  {cartItems.map(({ product, quantity }) => (
                    <div
                      className="grid grid-cols-[108px_1fr] gap-4 rounded-[26px] border border-black/8 bg-white/55 p-3 backdrop-blur-xl"
                      key={product.slug}
                    >
                      <ProductVisual
                        className="aspect-[4/5] rounded-[20px]"
                        kind={product.visualKind}
                        palette={product.palette}
                        scene="studio"
                        title={product.name}
                      />
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-muted">
                            {product.brand}
                          </p>
                          <h3 className="font-display text-2xl leading-none text-foreground">
                            {product.name}
                          </h3>
                          <p className="text-sm leading-6 text-muted">{product.line}</p>
                        </div>
                        <p className="text-sm font-semibold tracking-[0.08em] text-foreground">
                          {formatPrice(product.price)}
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <QuantityStepper
                            onChange={(next) => updateItem(product.slug, next)}
                            quantity={quantity}
                          />
                          <button
                            className="text-[0.68rem] uppercase tracking-[0.24em] text-muted transition hover:text-foreground"
                            data-cursor
                            data-cursor-label="Remove"
                            onClick={() => removeItem(product.slug)}
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 border-t border-black/8 pt-5">
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-muted">
                    <span>Subtotal</span>
                    <span className="text-foreground">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-sm leading-7 text-muted">
                    Final shipping and duties are calculated at checkout. Every order ships insured.
                  </p>
                  <div className="grid gap-3">
                    <Link
                      className={buttonStyles("primary", "lg", "w-full")}
                      data-cursor
                      data-cursor-label="Checkout"
                      href="/cart"
                      onClick={closeCart}
                    >
                      Review bag
                    </Link>
                    <Link
                      className={buttonStyles("secondary", "lg", "w-full")}
                      data-cursor
                      data-cursor-label="Continue"
                      href="/collections"
                      onClick={closeCart}
                    >
                      Continue browsing
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white/60">
                  <ShoppingBag className="h-7 w-7 text-foreground" />
                </div>
                <div className="space-y-3">
                  <p className="font-display text-4xl text-foreground">Your bag is empty.</p>
                  <p className="max-w-sm text-sm leading-7 text-muted">
                    The archive is ready when you are. Start with a category and add the pieces
                    that fit your rotation.
                  </p>
                </div>
                <Link
                  className={buttonStyles("primary", "lg")}
                  data-cursor
                  data-cursor-label="Shop"
                  href="/collections"
                  onClick={closeCart}
                >
                  Shop the archive
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

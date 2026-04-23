"use client";

import Link from "next/link";

import { ProductVisual } from "@/components/catalog/product-visual";
import { useCart } from "@/components/cart/cart-provider";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { buttonStyles } from "@/lib/design/button-styles";
import { getProductBySlug } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export function CartPageContent() {
  const { items, subtotal, updateItem, removeItem, clearCart } = useCart();

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

  if (!cartItems.length) {
    return (
      <div className="grid gap-10 rounded-[38px] border border-black/8 bg-white/55 px-6 py-14 text-center backdrop-blur-xl md:px-12">
        <div className="space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-muted">Bag is empty</p>
          <h1 className="font-display text-5xl text-foreground md:text-6xl">
            Start with one standout piece.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted">
            The archive is designed to browse quickly. Move through categories, keep the floor
            uncluttered, and add only the pieces that feel right.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            className={buttonStyles("primary", "lg")}
            data-cursor
            data-cursor-label="Shop"
            href="/collections"
          >
            Browse the archive
          </Link>
          <Link
            className={buttonStyles("secondary", "lg")}
            data-cursor
            data-cursor-label="View"
            href="/collections/watches"
          >
            Shop watches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-5">
        {cartItems.map(({ product, quantity }) => (
          <article
            className="grid gap-5 rounded-[34px] border border-black/8 bg-white/55 p-4 backdrop-blur-xl md:grid-cols-[220px_1fr]"
            key={product.slug}
          >
            <ProductVisual
              className="aspect-[4/5] rounded-[24px]"
              kind={product.visualKind}
              palette={product.palette}
              scene="hero"
              title={product.name}
            />
            <div className="flex flex-col justify-between gap-6 py-2">
              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted">
                    {product.brand}
                  </p>
                  <h2 className="font-display text-4xl leading-none text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-sm leading-7 text-muted">{product.line}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted">
                  <span>{product.condition}</span>
                  <span>{product.size}</span>
                  <span>{product.availability}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-semibold tracking-[0.08em] text-foreground">
                    {formatPrice(product.price)}
                  </p>
                  <QuantityStepper
                    onChange={(next) => updateItem(product.slug, next)}
                    quantity={quantity}
                  />
                </div>
                <button
                  className="text-left text-[0.68rem] uppercase tracking-[0.24em] text-muted transition hover:text-foreground"
                  data-cursor
                  data-cursor-label="Remove"
                  onClick={() => removeItem(product.slug)}
                  type="button"
                >
                  Remove from bag
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-[34px] border border-black/8 bg-white/60 p-6 backdrop-blur-xl lg:sticky lg:top-28">
        <div className="space-y-6">
          <div className="space-y-3 border-b border-black/8 pb-5">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted">Order summary</p>
            <h2 className="font-display text-4xl text-foreground">Review with clarity.</h2>
          </div>
          <div className="space-y-4 text-sm uppercase tracking-[0.22em] text-muted">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="text-foreground">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Insured shipping</span>
              <span className="text-foreground">Calculated</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Returns</span>
              <span className="text-foreground">Eligible items only</span>
            </div>
          </div>
          <p className="text-sm leading-7 text-muted">
            Every order receives insured dispatch, verification notes where applicable, and
            presentation-grade packaging.
          </p>
          <div className="grid gap-3">
            <button
              className={buttonStyles("primary", "lg", "w-full")}
              data-cursor
              data-cursor-label="Checkout"
              type="button"
            >
              Proceed to checkout
            </button>
            <Link
              className={buttonStyles("secondary", "lg", "w-full")}
              data-cursor
              data-cursor-label="Continue"
              href="/collections"
            >
              Continue shopping
            </Link>
            <button
              className="text-[0.68rem] uppercase tracking-[0.24em] text-muted transition hover:text-foreground"
              data-cursor
              data-cursor-label="Clear"
              onClick={clearCart}
              type="button"
            >
              Clear bag
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

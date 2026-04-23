"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import type { Product } from "@/lib/data/products";
import { formatCategoryLabel, formatPrice } from "@/lib/utils";

export function ProductInfoPanel({
  product,
}: Readonly<{
  product: Product;
}>) {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-8 lg:sticky lg:top-28">
      <div className="space-y-4">
        <Link
          className="inline-flex text-[0.68rem] uppercase tracking-[0.32em] text-muted transition hover:text-foreground"
          data-cursor
          data-cursor-label="Browse"
          href={`/collections/${product.category}`}
        >
          {formatCategoryLabel(product.category)}
        </Link>
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-muted">{product.brand}</p>
            <div className="space-y-3">
              <h1 className="font-display text-5xl leading-none text-foreground md:text-6xl">
                {product.name}
              </h1>
              <p className="text-base leading-8 text-muted">{product.line}</p>
            </div>
          </div>
          <Button
            aria-label="Save item"
            className="h-12 w-12 px-0 shadow-none"
            cursorLabel="Save"
            onClick={() => setLiked((current) => !current)}
            variant="secondary"
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-4">
        <p className="text-3xl font-semibold tracking-[0.04em] text-foreground">
          {formatPrice(product.price)}
        </p>
        {product.originalPrice ? (
          <p className="pb-1 text-sm uppercase tracking-[0.18em] text-muted line-through">
            {formatPrice(product.originalPrice)}
          </p>
        ) : null}
      </div>

      <p className="text-base leading-8 text-muted">{product.description}</p>

      <div className="grid gap-5 rounded-[30px] border border-black/8 bg-white/55 p-6 backdrop-blur-xl">
        <div className="flex flex-wrap gap-3">
          <div className="rounded-full bg-black/4 px-4 py-2 text-sm text-foreground">
            {product.size}
          </div>
          {product.tags.map((tag) => (
            <div className="rounded-full bg-black/4 px-4 py-2 text-sm capitalize text-muted" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted">Quantity</p>
          <QuantityStepper onChange={setQuantity} quantity={quantity} />
        </div>
        <AddToCartButton product={product} quantity={quantity} />
      </div>

      <div className="grid gap-5 border-y border-black/8 py-6">
        {product.details.map((detail) => (
          <div className="flex items-start gap-4" key={detail}>
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="text-sm leading-7 text-muted">{detail}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-muted">Authenticity</p>
          <p className="text-sm leading-7 text-foreground">Verified before release, documented in-house.</p>
        </div>
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-muted">Shipping</p>
          <p className="text-sm leading-7 text-foreground">Insured dispatch with presentation-grade packaging.</p>
        </div>
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-muted">Returns</p>
          <p className="text-sm leading-7 text-foreground">Transparent review period for qualifying orders.</p>
        </div>
      </div>
    </div>
  );
}


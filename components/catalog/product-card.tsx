"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ProductVisual } from "@/components/catalog/product-visual";
import { Badge } from "@/components/ui/badge";
import { hoverLift } from "@/lib/design/motion";
import type { Product } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({
  product,
}: Readonly<{
  product: Product;
}>) {
  return (
    <motion.article className="group space-y-4" {...hoverLift}>
      <Link
        className="block space-y-4"
        data-cursor
        data-cursor-label="View"
        href={`/products/${product.slug}`}
      >
        <div className="overflow-hidden rounded-[30px] bg-white/60">
          <motion.div className="transition-transform duration-500 group-hover:scale-[1.025]">
            <ProductVisual
              className="aspect-[4/5]"
              kind={product.visualKind}
              palette={product.palette}
              title={product.name}
            />
          </motion.div>
        </div>

        <div className="space-y-3 px-1">
          <div className="flex flex-wrap gap-2">
            {product.justIn ? <Badge>Just in</Badge> : null}
            {product.availability === "Exclusive drop" || product.availability === "By request" ? (
              <Badge>{product.availability}</Badge>
            ) : null}
          </div>
          <div className="space-y-2">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted">
              {product.brand}
            </p>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-[1.6rem] leading-none text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{product.line}</p>
              </div>
              <p className="shrink-0 text-sm font-semibold tracking-[0.08em] text-foreground">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}


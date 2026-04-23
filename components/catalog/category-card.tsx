"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ProductVisual } from "@/components/catalog/product-visual";
import { hoverLift } from "@/lib/design/motion";
import type { Category } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  productCount,
  className,
}: Readonly<{
  category: Category;
  productCount: number;
  className?: string;
}>) {
  return (
    <motion.article className={cn("group", className)} {...hoverLift}>
      <Link
        className="block space-y-5"
        data-cursor
        data-cursor-label="Browse"
        href={`/collections/${category.slug}`}
      >
        <div className="relative overflow-hidden rounded-[32px]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/16 via-transparent to-transparent" />
          <motion.div className="origin-center transition-transform duration-500 group-hover:scale-[1.02]">
            <ProductVisual
              className="aspect-[5/6] min-h-[300px]"
              kind={category.visualKind}
              palette={category.palette}
              scene="studio"
              title={category.name}
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-6 md:p-7">
            <div className="space-y-2">
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/72">
                {category.eyebrow}
              </p>
              <h3 className="font-display text-3xl text-white md:text-[2.4rem]">
                {category.name}
              </h3>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
              {productCount} pieces
            </span>
          </div>
        </div>
        <div className="space-y-2 px-1">
          <p className="text-sm uppercase tracking-[0.24em] text-muted">{category.cardLabel}</p>
          <p className="max-w-md text-sm leading-7 text-muted">{category.description}</p>
        </div>
      </Link>
    </motion.article>
  );
}


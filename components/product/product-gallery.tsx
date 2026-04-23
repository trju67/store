"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ProductVisual } from "@/components/catalog/product-visual";
import { Badge } from "@/components/ui/badge";
import { TiltPanel } from "@/components/ui/tilt-panel";
import type { Product } from "@/lib/data/products";

const sceneLabels = {
  hero: "Primary view",
  detail: "Dial and finish",
  material: "Material focus",
  studio: "Studio angle",
} as const;

export function ProductGallery({
  product,
}: Readonly<{
  product: Product;
}>) {
  const [scene, setScene] = useState(product.gallery[0]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <Badge>{product.condition}</Badge>
        <Badge>{product.availability}</Badge>
      </div>

      <TiltPanel depth={11}>
        <div className="overflow-hidden rounded-[34px] bg-white/60">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0.92, scale: 0.985 }}
              key={scene}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductVisual
                className="aspect-[4/5] min-h-[520px]"
                kind={product.visualKind}
                palette={product.palette}
                scene={scene}
                title={product.name}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </TiltPanel>

      <div className="grid gap-3 sm:grid-cols-3">
        {product.gallery.map((item) => {
          const active = scene === item;

          return (
            <button
              className={`overflow-hidden rounded-[22px] border p-1 transition ${
                active
                  ? "border-black/18 bg-white/85 shadow-[0_12px_30px_rgba(31,27,23,0.09)]"
                  : "border-transparent bg-white/50 hover:border-black/10"
              }`}
              data-cursor
              data-cursor-label="View"
              key={item}
              onClick={() => setScene(item)}
              type="button"
            >
              <ProductVisual
                className="aspect-[6/7] rounded-[18px]"
                kind={product.visualKind}
                palette={product.palette}
                scene={item}
                title={`${product.name}-${item}`}
              />
              <div className="px-3 py-3 text-left">
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-muted">
                  {sceneLabels[item]}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


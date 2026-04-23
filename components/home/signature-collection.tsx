import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductVisual } from "@/components/catalog/product-visual";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { TiltPanel } from "@/components/ui/tilt-panel";
import { buttonStyles } from "@/lib/design/button-styles";
import { signatureProduct } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export function SignatureCollection() {
  return (
    <section className="px-5 py-18 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 overflow-hidden rounded-[40px] bg-surface-strong px-6 py-8 text-white md:px-10 md:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SmoothReveal className="space-y-7">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/58">
            Signature collection
          </p>
          <div className="space-y-4">
            <h2 className="max-w-[10ch] font-display text-5xl leading-none md:text-6xl">
              Editorial depth, built around one anchor piece.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/70">
              This month’s signature edit starts with the {signatureProduct.name}, then
              frames it with soft tailoring, collector fragrance, and travel-ready finishing
              pieces for a complete luxury rotation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {signatureProduct.details.map((detail) => (
              <div className="border-l border-white/10 pl-4 text-sm leading-7 text-white/72" key={detail}>
                {detail}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className={buttonStyles("secondary", "lg", "bg-white text-surface-strong hover:bg-white/90")}
              data-cursor
              data-cursor-label="View"
              href={`/products/${signatureProduct.slug}`}
            >
              View signature piece <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <p className="text-sm uppercase tracking-[0.22em] text-white/58">
              from {formatPrice(signatureProduct.price)}
            </p>
          </div>
        </SmoothReveal>

        <ParallaxSection className="relative" offset={38}>
          <TiltPanel depth={10}>
            <ProductVisual
              className="aspect-[5/4] min-h-[420px] rounded-[34px]"
              kind={signatureProduct.visualKind}
              palette={signatureProduct.palette}
              scene="detail"
              title={signatureProduct.name}
            />
          </TiltPanel>
        </ParallaxSection>
      </div>
    </section>
  );
}

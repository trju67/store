import Link from "next/link";

import { ProductCard } from "@/components/catalog/product-card";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonStyles } from "@/lib/design/button-styles";
import { featuredProducts } from "@/lib/data/products";

export function FeaturedSection() {
  return (
    <section className="px-5 py-18 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SmoothReveal>
            <SectionHeading
              description="A tighter rotation of standout pieces selected for shape, condition, and immediate desirability."
              eyebrow="Featured arrivals"
              title="The front of the floor."
            />
          </SmoothReveal>
          <SmoothReveal delay={0.08}>
            <Link
              className={buttonStyles("secondary", "md")}
              data-cursor
              data-cursor-label="Browse"
              href="/collections"
            >
              View full archive
            </Link>
          </SmoothReveal>
        </div>

        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <SmoothReveal delay={index * 0.04} key={product.id}>
              <ProductCard product={product} />
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ProductCard } from "@/components/catalog/product-card";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Product } from "@/lib/data/products";

export function RelatedProducts({
  products,
}: Readonly<{
  products: Product[];
}>) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SmoothReveal>
        <SectionHeading
          description="A short rail of related pieces chosen to keep the browse focused and intentional."
          eyebrow="Related pieces"
          title="Continue the edit."
        />
      </SmoothReveal>
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <SmoothReveal delay={index * 0.05} key={product.id}>
            <ProductCard product={product} />
          </SmoothReveal>
        ))}
      </div>
    </section>
  );
}


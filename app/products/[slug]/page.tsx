import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfoPanel } from "@/components/product/product-info-panel";
import { RelatedProducts } from "@/components/product/related-products";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <section className="px-5 pb-20 pt-6 md:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-18">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,0.85fr)]">
          <SmoothReveal>
            <ProductGallery product={product} />
          </SmoothReveal>
          <SmoothReveal delay={0.08}>
            <ProductInfoPanel product={product} />
          </SmoothReveal>
        </div>
        <RelatedProducts products={relatedProducts} />
      </div>
    </section>
  );
}


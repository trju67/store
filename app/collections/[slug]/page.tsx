import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CollectionExplorer } from "@/components/catalog/collection-explorer";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/data/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <section className="px-5 pb-20 pt-6 md:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <SmoothReveal>
          <SectionHeading
            description={category.description}
            eyebrow={category.eyebrow}
            title={category.name}
          />
        </SmoothReveal>
        <CollectionExplorer
          categories={categories}
          initialCategory={category.slug}
          products={getProductsByCategory(category.slug)}
        />
      </div>
    </section>
  );
}


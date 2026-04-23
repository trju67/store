import type { Metadata } from "next";

import { CollectionExplorer } from "@/components/catalog/collection-explorer";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse the full Atelier Archive luxury storefront by category, mood, or arrival.",
};

export default function CollectionsPage() {
  return (
    <section className="px-5 pb-20 pt-6 md:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <SmoothReveal>
          <SectionHeading
            description="Browse the archive with category chips, quick search, and restrained sorting. The goal stays simple: product imagery first, clutter nowhere."
            eyebrow="Full archive"
            title="Everything currently on the floor."
          />
        </SmoothReveal>
        <CollectionExplorer categories={categories} products={products} />
      </div>
    </section>
  );
}


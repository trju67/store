import { CategoryCard } from "@/components/catalog/category-card";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, getProductsByCategory } from "@/lib/data/products";

export function CuratedCategories() {
  const layout = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-12",
  ];

  return (
    <section className="px-5 py-18 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <SmoothReveal>
          <SectionHeading
            description="A deliberately edited floor built around category mood rather than endless catalog noise."
            eyebrow="Curated categories"
            title="Browse by collection, not by clutter."
          />
        </SmoothReveal>

        <div className="grid gap-6 lg:grid-cols-12">
          {categories.map((category, index) => (
            <SmoothReveal className={layout[index]} delay={index * 0.04} key={category.slug}>
              <CategoryCard
                category={category}
                productCount={getProductsByCategory(category.slug).length}
              />
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


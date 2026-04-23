"use client";

import { Search } from "lucide-react";
import { startTransition, useDeferredValue, useState } from "react";

import { ProductCard } from "@/components/catalog/product-card";
import { Button } from "@/components/ui/button";
import { collectionSortOptions } from "@/lib/design/tokens";
import type { Category, CategorySlug, Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";

type SortKey = (typeof collectionSortOptions)[number]["value"];

export function CollectionExplorer({
  categories,
  products,
  initialCategory = "all",
}: Readonly<{
  categories: Category[];
  products: Product[];
  initialCategory?: CategorySlug | "all";
}>) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | "all">(initialCategory);
  const [sortKey, setSortKey] = useState<SortKey>("featured");
  const deferredQuery = useDeferredValue(query);

  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const visibleProducts = [...products]
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory,
    )
    .filter((product) => {
      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        product.brand,
        product.name,
        product.shortDescription,
        product.category,
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    })
    .sort((left, right) => {
      if (sortKey === "price-high") return right.price - left.price;
      if (sortKey === "price-low") return left.price - right.price;
      if (sortKey === "latest") return Number(right.justIn) - Number(left.justIn);
      return Number(right.featured) - Number(left.featured);
    });

  return (
    <div className="space-y-10">
      <div className="grid gap-6 rounded-[32px] border border-black/8 bg-white/55 p-5 backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:p-7">
        <label className="flex h-14 items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 backdrop-blur-md">
          <Search className="h-4 w-4 text-muted" />
          <input
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            id="collection-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search watches, tailoring, scents, and more"
            value={query}
          />
        </label>
        <div className="flex flex-wrap items-center justify-start gap-2 md:justify-end">
          {collectionSortOptions.map((option) => (
            <Button
              className={cn(sortKey === option.value ? "" : "shadow-none")}
              cursorLabel="Sort"
              key={option.value}
              onClick={() => startTransition(() => setSortKey(option.value))}
              size="sm"
              variant={sortKey === option.value ? "primary" : "secondary"}
            >
              {option.label}
            </Button>
          ))}
        </div>
        <div className="md:col-span-2 flex flex-wrap gap-2">
          <Button
            cursorLabel="Filter"
            onClick={() => startTransition(() => setSelectedCategory("all"))}
            size="sm"
            variant={selectedCategory === "all" ? "primary" : "secondary"}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              cursorLabel="Filter"
              key={category.slug}
              onClick={() => startTransition(() => setSelectedCategory(category.slug))}
              size="sm"
              variant={selectedCategory === category.slug ? "primary" : "secondary"}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.72rem] uppercase tracking-[0.3em] text-muted">
          {visibleProducts.length} curated results
        </p>
        {normalizedQuery ? (
          <p className="text-sm text-muted">
            Searching for <span className="text-foreground">{deferredQuery}</span>
          </p>
        ) : null}
      </div>

      {visibleProducts.length ? (
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-[32px] border border-dashed border-black/10 px-8 py-16 text-center">
          <p className="font-display text-4xl text-foreground">Nothing matched that edit.</p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Try a broader search term or switch categories. The archive stays deliberately
            selective, so a narrow filter can empty the floor quickly.
          </p>
        </div>
      )}
    </div>
  );
}


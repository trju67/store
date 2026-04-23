"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data/products";
import { useCart } from "./cart-provider";

export function AddToCartButton({
  product,
  quantity,
}: Readonly<{
  product: Product;
  quantity: number;
}>) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    addItem(product.slug, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <Button className="w-full" cursorLabel="Add" onClick={handleAdd} size="lg">
      {justAdded ? (
        <span className="flex items-center gap-2">
          <Check className="h-4 w-4" /> Added to bag
        </span>
      ) : (
        "Add to bag"
      )}
    </Button>
  );
}


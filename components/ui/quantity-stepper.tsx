"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function QuantityStepper({
  quantity,
  onChange,
}: Readonly<{
  quantity: number;
  onChange: (next: number) => void;
}>) {
  return (
    <div className="flex items-center rounded-full border border-black/10 bg-white/70 p-1 backdrop-blur-xl">
      <Button
        aria-label="Decrease quantity"
        className="h-9 w-9 px-0 shadow-none"
        cursorLabel="Down"
        disabled={quantity <= 1}
        onClick={() => onChange(Math.max(1, quantity - 1))}
        size="sm"
        variant="ghost"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="min-w-10 text-center text-sm text-foreground">{quantity}</span>
      <Button
        aria-label="Increase quantity"
        className="h-9 w-9 px-0 shadow-none"
        cursorLabel="Up"
        onClick={() => onChange(quantity + 1)}
        size="sm"
        variant="ghost"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}


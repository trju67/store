import type { Metadata } from "next";

import { CartPageContent } from "@/components/cart/cart-page-content";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Bag",
  description: "Review your selected luxury pieces and continue to checkout.",
};

export default function CartPage() {
  return (
    <section className="px-5 pb-20 pt-6 md:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <SmoothReveal>
          <SectionHeading
            description="A quiet, editable bag review with insured shipping context and clear next actions."
            eyebrow="Bag review"
            title="Your current selection."
          />
        </SmoothReveal>
        <CartPageContent />
      </div>
    </section>
  );
}


import type { Metadata } from "next";

import { ProductVisual } from "@/components/catalog/product-visual";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustPillars } from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "About",
  description: "The Atelier Archive point of view on curation, trust, and premium retail UX.",
};

export default function AboutPage() {
  return (
    <section className="px-5 pb-20 pt-6 md:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SmoothReveal>
            <SectionHeading
              description="Atelier Archive exists to make luxury resale feel calm, modern, and trustworthy. The edit is deliberate, the surfaces stay quiet, and the product always leads."
              eyebrow="Our point of view"
              title="A boutique luxury market without the catalog fatigue."
            />
          </SmoothReveal>
          <SmoothReveal delay={0.08}>
            <ProductVisual
              className="aspect-[5/4] min-h-[420px]"
              kind="bundle"
              palette={["#d0b894", "#322b25", "#f6eee3"]}
              scene="detail"
              title="About bundle"
            />
          </SmoothReveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {trustPillars.map((pillar, index) => (
            <SmoothReveal className="border-l border-black/10 pl-5" delay={index * 0.05} key={pillar.title}>
              <h2 className="font-display text-3xl text-foreground">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{pillar.description}</p>
            </SmoothReveal>
          ))}
        </div>

        <SmoothReveal className="rounded-[38px] border border-black/8 bg-white/55 p-6 backdrop-blur-xl md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted">Curation notes</p>
              <p className="mt-4 text-base leading-8 text-muted">
                We prefer fewer pieces with stronger reason to exist: cleaner shapes, better
                condition, richer materials, and a quieter sense of luxury.
              </p>
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted">Retail philosophy</p>
              <p className="mt-4 text-base leading-8 text-muted">
                The site is built to keep interaction premium without becoming theatrical. Motion
                supports focus, not distraction; the browse stays easy from first view to bag.
              </p>
            </div>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
}


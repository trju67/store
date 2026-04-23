import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustPillars } from "@/lib/design/tokens";

export function TrustSection() {
  return (
    <section className="px-5 py-18 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <SmoothReveal>
          <SectionHeading
            description="Luxury browsing works when confidence is visible. These signals stay close to the product and easy to understand."
            eyebrow="Why clients trust us"
            title="Confidence without the heavy-handed sales layer."
          />
        </SmoothReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {trustPillars.map((pillar, index) => (
            <SmoothReveal className="border-l border-black/10 pl-5" delay={index * 0.05} key={pillar.title}>
              <h3 className="font-display text-3xl text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{pillar.description}</p>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


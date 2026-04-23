"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { ProductVisual } from "@/components/catalog/product-visual";
import { SmoothReveal } from "@/components/ui/smooth-reveal";
import { TiltPanel } from "@/components/ui/tilt-panel";
import { buttonStyles } from "@/lib/design/button-styles";
import { homeMetrics, siteMeta } from "@/lib/design/tokens";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-18 pt-8 md:px-8 md:pb-24 lg:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,_rgba(181,154,106,0.16),_transparent_40%),radial-gradient(circle_at_right,_rgba(255,255,255,0.75),_transparent_35%)]" />
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,1fr)_620px] lg:items-center">
        <div className="space-y-10">
          <SmoothReveal className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/65 px-4 py-2 text-[0.68rem] uppercase tracking-[0.32em] text-muted backdrop-blur-xl">
              <span>{siteMeta.name}</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Luxury resale, re-edited</span>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-[12ch] font-display text-[3.8rem] leading-[0.94] text-foreground md:text-[5.3rem] lg:text-[6.2rem]">
                Curated luxury with room to breathe.
              </h1>
              <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
                Watches, tailoring, shoes, fragrances, accessories, and exclusive bundles,
                selected for finish, condition, and the calm confidence of better design.
              </p>
            </div>
          </SmoothReveal>

          <SmoothReveal className="flex flex-wrap items-center gap-3" delay={0.08}>
            <Link
              className={buttonStyles("primary", "lg")}
              data-cursor
              data-cursor-label="Shop"
              href="/collections"
            >
              Shop the archive <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              className={buttonStyles("secondary", "lg")}
              data-cursor
              data-cursor-label="Browse"
              href="/collections/watches"
            >
              Browse watches
            </Link>
          </SmoothReveal>

          <SmoothReveal className="grid gap-4 pt-4 sm:grid-cols-3" delay={0.14}>
            {homeMetrics.map((metric) => (
              <div
                className="space-y-2 border-l border-black/10 pl-4"
                key={metric.label}
              >
                <p className="font-display text-4xl leading-none text-foreground">{metric.value}</p>
                <p className="text-sm leading-6 text-muted">{metric.label}</p>
              </div>
            ))}
          </SmoothReveal>
        </div>

        <div className="relative min-h-[560px] lg:min-h-[700px]">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            className="absolute left-0 top-10 z-20 w-[42%]"
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <TiltPanel depth={10}>
              <ProductVisual
                className="aspect-[4/5] shadow-[0_30px_60px_rgba(31,27,23,0.18)]"
                kind="watch"
                palette={["#d6c4a6", "#3e362d", "#f3ebe0"]}
                scene="detail"
                title="Hero watch"
              />
            </TiltPanel>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            className="absolute right-0 top-0 z-10 w-[60%]"
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <TiltPanel depth={8}>
              <ProductVisual
                className="aspect-[4/5] shadow-[0_38px_70px_rgba(31,27,23,0.16)]"
                kind="coat"
                palette={["#c8ab83", "#3a3029", "#f2e8db"]}
                scene="hero"
                title="Hero coat"
              />
            </TiltPanel>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            className="absolute bottom-0 right-[8%] z-30 w-[46%]"
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <TiltPanel depth={9}>
              <ProductVisual
                className="aspect-[4/5] shadow-[0_32px_60px_rgba(31,27,23,0.16)]"
                kind="fragrance"
                palette={["#d7c4a2", "#2d2926", "#fcf4e7"]}
                scene="studio"
                title="Hero fragrance"
              />
            </TiltPanel>
          </motion.div>
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(181,154,106,0.12),_transparent_34%)]" />
        </div>
      </div>
    </section>
  );
}

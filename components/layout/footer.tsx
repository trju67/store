import Link from "next/link";

import { navigationItems, siteMeta } from "@/lib/design/tokens";

export function Footer() {
  return (
    <footer className="px-5 pb-8 pt-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] rounded-[36px] border border-black/8 bg-white/55 px-6 py-8 backdrop-blur-xl md:px-8 md:py-10">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="space-y-4">
            <p className="font-display text-4xl text-foreground">{siteMeta.name}</p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              {siteMeta.tagline} A premium boutique storefront for authenticated watches,
              luxury clothing, shoes, fragrances, accessories, and curated bundles.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {navigationItems.map((item) => (
              <Link
                className="text-[0.72rem] uppercase tracking-[0.28em] text-muted transition hover:text-foreground"
                data-cursor
                data-cursor-label="Open"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="text-[0.72rem] uppercase tracking-[0.28em] text-muted transition hover:text-foreground"
              data-cursor
              data-cursor-label="View"
              href="/cart"
            >
              Bag
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-black/8 pt-5 text-[0.68rem] uppercase tracking-[0.24em] text-muted">
          Crafted for calm browsing, fast product focus, and premium interaction quality.
        </div>
      </div>
    </footer>
  );
}

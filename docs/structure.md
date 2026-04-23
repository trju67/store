# App Structure

## Core App
- `app/layout.tsx`: global layout, fonts, metadata, providers, navbar, cursor, cart drawer, footer.
- `app/page.tsx`: homepage with hero, curated categories, featured products, signature editorial section, and trust cues.
- `app/collections/page.tsx`: full archive page with search, category chips, and sort controls.
- `app/collections/[slug]/page.tsx`: category-specific collection page.
- `app/products/[slug]/page.tsx`: product detail experience with interactive gallery and related items.
- `app/cart/page.tsx`: full bag review page.
- `app/about/page.tsx`: boutique brand story and trust positioning.

## Shared Libraries
- `lib/design/tokens.ts`: palette, spacing, nav items, trust bullets, and brand constants.
- `lib/design/motion.ts`: animation timings, reveal variants, and hover transitions.
- `lib/data/products.ts`: mock luxury catalog, category metadata, and query helpers.
- `lib/utils.ts`: class merging and formatting helpers.

## Components
- `components/layout/*`: global chrome including navbar and footer.
- `components/home/*`: homepage-specific editorial sections.
- `components/catalog/*`: category cards, collection explorer, product cards, and media artwork.
- `components/product/*`: gallery, detail panel, and related product rail.
- `components/cart/*`: provider, drawer, cart page content, and add-to-cart controls.
- `components/providers/*`: smooth scroll and provider composition.
- `components/ui/*`: shared button, badge, reveal, tilt, parallax, cursor, and loader primitives.

## Design Rules
- Large editorial sections with strong vertical rhythm.
- Product-first layouts with restrained surfaces and minimal decorative framing.
- Motion primitives reused across pages to keep interaction quality consistent.
- Components stay composable and light to avoid a template-driven feel.


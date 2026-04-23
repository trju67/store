export const siteMeta = {
  name: "Atelier Archive",
  tagline: "Curated luxury for the quietly exacting.",
  description:
    "A premium luxury marketplace for curated watches, fashion, shoes, fragrances, accessories, and exclusive bundles.",
};

export const palette = {
  background: "#f6f2eb",
  surface: "#fbf7f0",
  surfaceStrong: "#1f1b17",
  foreground: "#1b1917",
  muted: "#6b655d",
  border: "rgba(31, 27, 23, 0.12)",
  borderStrong: "rgba(31, 27, 23, 0.2)",
  accent: "#b59a6a",
  accentSoft: "#d8c4a2",
  accentInk: "#6d5737",
};

export const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128] as const;

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Watches", href: "/collections/watches" },
  { label: "Clothing", href: "/collections/clothing" },
  { label: "Shoes", href: "/collections/shoes" },
  { label: "Fragrances", href: "/collections/fragrances" },
  { label: "Accessories", href: "/collections/accessories" },
  { label: "About", href: "/about" },
] as const;

export const trustPillars = [
  {
    title: "Authenticated archive",
    description: "Every item is reviewed for provenance, condition, and finish before release.",
  },
  {
    title: "Concierge-level service",
    description: "Private sourcing, careful packaging, and human support from inquiry to delivery.",
  },
  {
    title: "Insured global shipping",
    description: "Tracked, protected delivery with transparent returns and white-glove presentation.",
  },
] as const;

export const homeMetrics = [
  { value: "250+", label: "curated pieces in rotation" },
  { value: "48h", label: "average authentication release window" },
  { value: "4.9/5", label: "client satisfaction from private buyers" },
] as const;

export const collectionSortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-high", label: "Price: High to low" },
  { value: "price-low", label: "Price: Low to high" },
  { value: "latest", label: "Latest arrivals" },
] as const;


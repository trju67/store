export type CategorySlug =
  | "watches"
  | "clothing"
  | "shoes"
  | "fragrances"
  | "accessories"
  | "bundles";

export type VisualKind =
  | "watch"
  | "coat"
  | "shoe"
  | "fragrance"
  | "bag"
  | "bundle";

export type GalleryScene = "hero" | "detail" | "material" | "studio";

export interface Category {
  slug: CategorySlug;
  name: string;
  eyebrow: string;
  description: string;
  cardLabel: string;
  visualKind: VisualKind;
  palette: [string, string, string];
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: CategorySlug;
  line: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  condition: string;
  size: string;
  availability: string;
  featured: boolean;
  signature: boolean;
  justIn: boolean;
  visualKind: VisualKind;
  palette: [string, string, string];
  gallery: GalleryScene[];
  details: string[];
  tags: string[];
}

export const categories: Category[] = [
  {
    slug: "watches",
    name: "Watches",
    eyebrow: "Collector timepieces",
    description: "Quiet statement pieces, precise complications, and everyday heirlooms.",
    cardLabel: "Swiss and contemporary icons",
    visualKind: "watch",
    palette: ["#d6c4a6", "#3e362d", "#f3ebe0"],
  },
  {
    slug: "clothing",
    name: "Clothing",
    eyebrow: "Tailored layers",
    description: "Soft structure, elevated fabrics, and refined silhouettes with resale perspective.",
    cardLabel: "Editorial tailoring and knitwear",
    visualKind: "coat",
    palette: ["#c9b8a0", "#2f2a26", "#f0e7db"],
  },
  {
    slug: "shoes",
    name: "Shoes",
    eyebrow: "Grounded luxury",
    description: "Curated leather, suede, and sport-led pairs chosen for shape and finish.",
    cardLabel: "Minimal sneakers and formal pairs",
    visualKind: "shoe",
    palette: ["#b18c62", "#2e2924", "#ede3d7"],
  },
  {
    slug: "fragrances",
    name: "Fragrances",
    eyebrow: "Private scent edit",
    description: "Collector bottles, discovery sets, and rare concentrations with modern depth.",
    cardLabel: "Collector bottles and sets",
    visualKind: "fragrance",
    palette: ["#d8c9af", "#342f2b", "#faf3e8"],
  },
  {
    slug: "accessories",
    name: "Accessories",
    eyebrow: "Travel and carry goods",
    description: "Soft leather goods, statement bags, and considered finishing pieces.",
    cardLabel: "Leather goods and finishing pieces",
    visualKind: "bag",
    palette: ["#9f7756", "#2b251f", "#f2e7dc"],
  },
  {
    slug: "bundles",
    name: "Bundles",
    eyebrow: "Exclusive pairings",
    description: "Pre-curated rotations built around gifting, travel, and instant wardrobe depth.",
    cardLabel: "Private capsule combinations",
    visualKind: "bundle",
    palette: ["#d0b894", "#322b25", "#f6eee3"],
  },
];

export const products: Product[] = [
  {
    id: "prd_watch_1",
    slug: "rolex-datejust-slate",
    brand: "Rolex",
    name: "Datejust 36 Slate Dial",
    category: "watches",
    line: "Classic steel bracelet / 2021 set",
    shortDescription: "A restrained daily watch with slate depth and polished balance.",
    description:
      "A quietly luxurious 36 mm Datejust with sunlit slate dial, crisp fluted bezel, and bracelet finish that moves easily between tailoring and denim.",
    price: 11800,
    originalPrice: 13400,
    condition: "Excellent pre-owned",
    size: "36 mm",
    availability: "Ready to ship",
    featured: true,
    signature: false,
    justIn: true,
    visualKind: "watch",
    palette: ["#d1c0a1", "#3d352c", "#f6eee2"],
    gallery: ["hero", "detail", "material"],
    details: ["Automatic movement", "Box and papers included", "Insured priority delivery"],
    tags: ["authenticated", "collector edit", "everyday icon"],
  },
  {
    id: "prd_watch_2",
    slug: "cartier-tank-must-onyx",
    brand: "Cartier",
    name: "Tank Must Onyx Dial",
    category: "watches",
    line: "Large model / leather strap",
    shortDescription: "Sharp geometry and an inky dial for a dress-first mood.",
    description:
      "A modern Tank presentation with glossy onyx face, warm case shine, and slim proportions designed to sit close and elegant on wrist.",
    price: 6400,
    condition: "Very good",
    size: "Large",
    availability: "Ready to ship",
    featured: false,
    signature: false,
    justIn: true,
    visualKind: "watch",
    palette: ["#c8b497", "#25211d", "#f6ead9"],
    gallery: ["hero", "detail", "studio"],
    details: ["Quartz movement", "New calfskin strap", "Boutique service inspection complete"],
    tags: ["formal", "icon", "ready to wear"],
  },
  {
    id: "prd_clothing_1",
    slug: "loro-piana-cashmere-overcoat",
    brand: "Loro Piana",
    name: "Double Cashmere Overcoat",
    category: "clothing",
    line: "Soft camel / full-length drape",
    shortDescription: "Fluid tailoring with warm weight and quiet authority.",
    description:
      "A softly structured cashmere overcoat with long line, hidden closure, and clean shoulder that gives winter layers a rich editorial calm.",
    price: 4200,
    originalPrice: 5900,
    condition: "Excellent pre-owned",
    size: "IT 50 / Medium-Large",
    availability: "Ready to ship",
    featured: true,
    signature: true,
    justIn: false,
    visualKind: "coat",
    palette: ["#c8ab83", "#3a3029", "#f2e8db"],
    gallery: ["hero", "detail", "material"],
    details: ["Cashmere shell", "Full lining", "Protected garment delivery"],
    tags: ["tailoring", "cashmere", "signature"],
  },
  {
    id: "prd_clothing_2",
    slug: "saint-laurent-atelier-blazer",
    brand: "Saint Laurent",
    name: "Atelier Wool Blazer",
    category: "clothing",
    line: "Charcoal grain / structured shoulder",
    shortDescription: "Lean tailoring with evening depth and a sharp lapel line.",
    description:
      "A slim Saint Laurent blazer with strong lapel stance, soft wool grain, and a silhouette that works equally well over knitwear or silk shirting.",
    price: 1980,
    condition: "Very good",
    size: "FR 48 / Medium",
    availability: "Low stock",
    featured: false,
    signature: false,
    justIn: true,
    visualKind: "coat",
    palette: ["#8f8579", "#1f1d1c", "#f4ede3"],
    gallery: ["hero", "detail", "studio"],
    details: ["Wool tailoring cloth", "Peak lapel", "Dry-cleaned and prepared"],
    tags: ["evening", "tailored", "charcoal"],
  },
  {
    id: "prd_shoes_1",
    slug: "tom-ford-suede-jodhpur",
    brand: "Tom Ford",
    name: "Suede Jodhpur Boot",
    category: "shoes",
    line: "Espresso suede / polished harness",
    shortDescription: "A refined boot with sculpted last and soft tonal depth.",
    description:
      "This jodhpur pair balances sharp tailoring with rich suede texture, featuring a narrow ankle, sleek sole, and dark metal harness detail.",
    price: 1280,
    condition: "Excellent pre-owned",
    size: "US 10",
    availability: "Ready to ship",
    featured: true,
    signature: false,
    justIn: false,
    visualKind: "shoe",
    palette: ["#a17349", "#2c261f", "#f0e4d6"],
    gallery: ["hero", "detail", "material"],
    details: ["Italian suede upper", "Leather sole", "Original dust bags included"],
    tags: ["boot", "suede", "tailoring"],
  },
  {
    id: "prd_shoes_2",
    slug: "louis-vuitton-runner-tide",
    brand: "Louis Vuitton",
    name: "Runner Tide Sneaker",
    category: "shoes",
    line: "Stone leather / tonal mesh",
    shortDescription: "A clean luxury runner with restrained texture play.",
    description:
      "A low-profile sneaker designed around tone and proportion, with layered leather panels, soft technical mesh, and a polished neutral sole.",
    price: 1120,
    condition: "Very good",
    size: "US 9.5",
    availability: "Ready to ship",
    featured: false,
    signature: false,
    justIn: true,
    visualKind: "shoe",
    palette: ["#c6b398", "#2a2724", "#f3ece3"],
    gallery: ["hero", "detail", "studio"],
    details: ["Leather and mesh upper", "Rubber outsole", "Professional refresh complete"],
    tags: ["sneaker", "neutral", "travel"],
  },
  {
    id: "prd_frag_1",
    slug: "le-labo-santal-collector",
    brand: "Le Labo",
    name: "Santal Collector Bottle",
    category: "fragrances",
    line: "100 ml / city reserve edition",
    shortDescription: "A smoky wood signature with collector presentation.",
    description:
      "An archive bottle of smoky sandalwood softened by iris and leather facets, finished in a collector-size presentation for long rotation wear.",
    price: 420,
    condition: "Sealed",
    size: "100 ml",
    availability: "Ready to ship",
    featured: true,
    signature: false,
    justIn: true,
    visualKind: "fragrance",
    palette: ["#d7c4a2", "#2d2926", "#fcf4e7"],
    gallery: ["hero", "detail", "material"],
    details: ["Factory sealed", "Collector label", "Gift-wrap ready"],
    tags: ["signature scent", "collector", "giftable"],
  },
  {
    id: "prd_frag_2",
    slug: "byredo-night-veils-set",
    brand: "Byredo",
    name: "Night Veils Discovery Set",
    category: "fragrances",
    line: "Five extrait miniatures",
    shortDescription: "A dark floral and resin edit built for evening rotation.",
    description:
      "A discovery set of concentrated extrait compositions with rose, oud, incense, and amber notes designed for private wear and gifting.",
    price: 240,
    condition: "New",
    size: "Discovery set",
    availability: "Ready to ship",
    featured: false,
    signature: false,
    justIn: false,
    visualKind: "fragrance",
    palette: ["#c4af90", "#241f1b", "#f7eee4"],
    gallery: ["hero", "detail", "studio"],
    details: ["Five extrait vials", "Collector sleeve", "Ideal gift format"],
    tags: ["set", "evening", "travel-ready"],
  },
  {
    id: "prd_acc_1",
    slug: "bottega-weekend-holdall",
    brand: "Bottega Veneta",
    name: "Intrecciato Weekend Holdall",
    category: "accessories",
    line: "Deep espresso woven leather",
    shortDescription: "Soft architecture for overnight packing and understated travel.",
    description:
      "A supple holdall with woven leather body, refined hardware, and a spacious interior sized for a two-day rotation without visual bulk.",
    price: 3650,
    condition: "Excellent pre-owned",
    size: "Weekender",
    availability: "Ready to ship",
    featured: true,
    signature: false,
    justIn: false,
    visualKind: "bag",
    palette: ["#915f3e", "#2a241f", "#f1e6da"],
    gallery: ["hero", "detail", "material"],
    details: ["Woven leather exterior", "Shoulder strap included", "Protective dust cover"],
    tags: ["travel", "leather", "carry"],
  },
  {
    id: "prd_acc_2",
    slug: "prada-saffiano-pouch",
    brand: "Prada",
    name: "Saffiano Travel Pouch",
    category: "accessories",
    line: "Slate saffiano / zip top",
    shortDescription: "A compact luxury carry for documents, devices, and evening essentials.",
    description:
      "Structured saffiano leather, subtle hardware, and a flat silhouette give this pouch a clean travel role with minimal visual weight.",
    price: 840,
    condition: "Excellent pre-owned",
    size: "Large pouch",
    availability: "Low stock",
    featured: false,
    signature: false,
    justIn: true,
    visualKind: "bag",
    palette: ["#9d8f84", "#252322", "#f7ede1"],
    gallery: ["hero", "detail", "studio"],
    details: ["Leather wrist strap", "Zip closure", "Slim laptop-compatible form"],
    tags: ["travel", "document carry", "clean lines"],
  },
  {
    id: "prd_bundle_1",
    slug: "flight-edit-bundle",
    brand: "Atelier Archive",
    name: "Flight Edit Bundle",
    category: "bundles",
    line: "Travel scent, carry good, and soft sneaker pairing",
    shortDescription: "A ready-made luxury travel rotation assembled around comfort and polish.",
    description:
      "A private bundle combining a neutral leather sneaker, discovery scent set, and compact saffiano pouch for effortless carry-on styling.",
    price: 1480,
    originalPrice: 1720,
    condition: "Curated set",
    size: "Three-piece edit",
    availability: "Exclusive drop",
    featured: true,
    signature: false,
    justIn: true,
    visualKind: "bundle",
    palette: ["#cdb48e", "#2b261f", "#f5ebde"],
    gallery: ["hero", "detail", "studio"],
    details: ["Three-piece curated set", "Priority packaging", "Exclusive bundle pricing"],
    tags: ["exclusive", "travel", "bundle"],
  },
  {
    id: "prd_bundle_2",
    slug: "evening-collector-set",
    brand: "Atelier Archive",
    name: "Evening Collector Set",
    category: "bundles",
    line: "Dress watch, fragrance, and tailored outerwear pairing",
    shortDescription: "An editorial evening rotation built for soft contrast and depth.",
    description:
      "A signature bundle pairing formal watch geometry, dark extrait fragrance, and tailored outerwear to create a complete after-hours luxury mood.",
    price: 10200,
    originalPrice: 11620,
    condition: "Curated set",
    size: "Three-piece edit",
    availability: "By request",
    featured: false,
    signature: true,
    justIn: false,
    visualKind: "bundle",
    palette: ["#b89f79", "#27221e", "#f2e8da"],
    gallery: ["hero", "detail", "material"],
    details: ["Reserved appointment purchase", "White-glove delivery", "Detailed sourcing notes"],
    tags: ["signature", "private purchase", "evening"],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export const signatureProduct =
  products.find((product) => product.signature) ?? products[0];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: CategorySlug) {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter(
      (candidate) =>
        candidate.slug !== product.slug &&
        (candidate.category === product.category ||
          candidate.tags.some((tag) => product.tags.includes(tag))),
    )
    .slice(0, 4);
}

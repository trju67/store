import { CuratedCategories } from "@/components/home/curated-categories";
import { FeaturedSection } from "@/components/home/featured-section";
import { Hero } from "@/components/home/hero";
import { SignatureCollection } from "@/components/home/signature-collection";
import { TrustSection } from "@/components/home/trust-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CuratedCategories />
      <FeaturedSection />
      <SignatureCollection />
      <TrustSection />
    </>
  );
}


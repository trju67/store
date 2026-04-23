import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { CartDrawer } from "@/components/cart/cart-drawer";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SiteProviders } from "@/components/providers/site-providers";
import { CursorLayer } from "@/components/ui/cursor-layer";
import { LoaderOverlay } from "@/components/ui/loader-overlay";
import { siteMeta } from "@/lib/design/tokens";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} | Curated Luxury Storefront`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${display.variable} ${body.variable}`} lang="en">
      <body>
        <SiteProviders>
          <LoaderOverlay />
          <CursorLayer />
          <Navbar />
          <main className="min-h-screen pt-28 md:pt-32">{children}</main>
          <CartDrawer />
          <Footer />
        </SiteProviders>
      </body>
    </html>
  );
}


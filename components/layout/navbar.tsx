"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { navigationItems, siteMeta } from "@/lib/design/tokens";
import { buttonStyles } from "@/lib/design/button-styles";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] px-5 pt-5 md:px-8 lg:px-10">
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between rounded-full border px-4 py-3 transition-all md:px-5",
            scrolled
              ? "border-black/10 bg-white/70 shadow-[0_16px_50px_rgba(31,27,23,0.1)] backdrop-blur-2xl"
              : "border-black/6 bg-white/40 backdrop-blur-xl",
          )}
        >
          <Link
            className="shrink-0 font-display text-[1.6rem] text-foreground md:text-3xl"
            data-cursor
            data-cursor-label="Home"
            href="/"
          >
            {siteMeta.name}
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {navigationItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  className={cn(
                    "text-[0.72rem] uppercase tracking-[0.28em] text-muted transition hover:text-foreground",
                    active && "text-foreground",
                  )}
                  data-cursor
                  data-cursor-label="Open"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              className={buttonStyles("secondary", "sm", "hidden md:inline-flex")}
              data-cursor
              data-cursor-label="Search"
              href="/collections#collection-search"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Button
              className="gap-2"
              cursorLabel="Bag"
              onClick={openCart}
              size="sm"
              variant="secondary"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>{itemCount}</span>
            </Button>
            <Button
              aria-label="Toggle menu"
              className="xl:hidden"
              cursorLabel="Menu"
              onClick={() => setMenuOpen((current) => !current)}
              size="sm"
              variant="secondary"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-5 top-24 z-[58] rounded-[30px] border border-black/10 bg-white/88 p-5 shadow-[0_20px_60px_rgba(31,27,23,0.1)] backdrop-blur-2xl md:inset-x-8 lg:inset-x-10 xl:hidden"
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-3">
              {navigationItems.map((item) => (
                <Link
                  className="rounded-[22px] border border-transparent px-4 py-3 text-sm uppercase tracking-[0.24em] text-foreground transition hover:border-black/8 hover:bg-black/3"
                  data-cursor
                  data-cursor-label="Open"
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="rounded-[22px] border border-transparent px-4 py-3 text-sm uppercase tracking-[0.24em] text-foreground transition hover:border-black/8 hover:bg-black/3"
                data-cursor
                data-cursor-label="Search"
                href="/collections#collection-search"
                onClick={() => setMenuOpen(false)}
              >
                Search
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

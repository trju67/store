"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { easeLuxury } from "@/lib/design/motion";
import { siteMeta } from "@/lib/design/tokens";

export function LoaderOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("atelier-archive-loader")) {
      return;
    }

    const showTimer = window.setTimeout(() => setVisible(true), 10);
    const timeout = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("atelier-archive-loader", "seen");
    }, 1350);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: easeLuxury } }}
          initial={{ opacity: 0 }}
        >
          <div className="space-y-5 text-center">
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl text-foreground md:text-6xl"
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.75, ease: easeLuxury }}
            >
              {siteMeta.name}
            </motion.p>
            <motion.p
              animate={{ opacity: 1 }}
              className="text-[0.7rem] uppercase tracking-[0.34em] text-muted"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.12, duration: 0.55, ease: easeLuxury }}
            >
              Curated luxury storefront
            </motion.p>
            <div className="mx-auto h-px w-36 overflow-hidden bg-black/8">
              <motion.div
                animate={{ scaleX: 1 }}
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                transition={{ duration: 1.05, ease: easeLuxury }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorLayer() {
  const [enabled, setEnabled] = useState(false);
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const allowed =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!allowed) {
      return undefined;
    }

    document.documentElement.dataset.cursor = "custom";
    const enableTimer = window.setTimeout(() => setEnabled(true), 0);

    const handleMove = (event: PointerEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };

    const handleOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]",
      );

      if (!target) {
        setActive(false);
        setLabel("");
        return;
      }

      setActive(true);
      setLabel(target.dataset.cursorLabel ?? "View");
    };

    const handleLeave = () => {
      setActive(false);
      setLabel("");
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    window.addEventListener("pointerleave", handleLeave);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);

    return () => {
      window.clearTimeout(enableTimer);
      delete document.documentElement.dataset.cursor;
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={{
          x: point.x,
          y: point.y,
          scale: pressed ? 0.85 : active ? 1 : 0.72,
          opacity: 1,
        }}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
        initial={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.5 }}
      >
        <div
          className={`flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-white/50 text-[0.6rem] uppercase tracking-[0.28em] text-foreground backdrop-blur-xl transition-all ${
            active ? "shadow-[0_18px_42px_rgba(31,27,23,0.14)]" : ""
          }`}
        >
          <span className={`transition-opacity ${active ? "opacity-100" : "opacity-0"}`}>
            {label}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

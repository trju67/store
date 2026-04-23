"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export function ParallaxSection({
  children,
  className,
  offset = 54,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  offset?: number;
}>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div className={cn(className)} ref={ref}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}


"use client";

import { motion } from "framer-motion";

import { transitions, viewport } from "@/lib/design/motion";
import { cn } from "@/lib/utils";

export function SmoothReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}>) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      transition={{ ...transitions.smooth, delay }}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewport={viewport}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

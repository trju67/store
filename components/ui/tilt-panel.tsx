"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export function TiltPanel({
  children,
  className,
  depth = 8,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  depth?: number;
}>) {
  const interactiveRef = useRef(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.7 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.7 });

  useEffect(() => {
    interactiveRef.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!interactiveRef.current) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * depth * 2);
    rotateX.set((0.5 - py) * depth * 1.5);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      className={cn("transform-gpu", className)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}

import type { Transition, Variants } from "framer-motion";

export const easeLuxury = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  smooth: {
    duration: 0.8,
    ease: easeLuxury,
  } satisfies Transition,
  quick: {
    duration: 0.45,
    ease: easeLuxury,
  } satisfies Transition,
  spring: {
    type: "spring",
    stiffness: 160,
    damping: 20,
    mass: 0.7,
  } satisfies Transition,
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitions.smooth,
  },
};

export const revealSoft: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: transitions.smooth,
  },
};

export const staggerChildren = (delayChildren = 0, stagger = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren: stagger,
    },
  },
});

export const hoverLift = {
  whileHover: {
    y: -6,
    transition: transitions.quick,
  },
  whileTap: {
    y: -2,
    transition: transitions.quick,
  },
};

export const buttonHover = {
  whileHover: {
    y: -2,
    scale: 1.01,
    transition: transitions.quick,
  },
  whileTap: {
    scale: 0.99,
    transition: transitions.quick,
  },
};

export const viewport = {
  once: true,
  amount: 0.2,
} as const;


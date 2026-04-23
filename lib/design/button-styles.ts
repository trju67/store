import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-surface-strong text-white shadow-[0_18px_40px_rgba(31,27,23,0.18)] hover:bg-[#2b2520]",
  secondary:
    "bg-white/70 text-foreground ring-1 ring-black/10 backdrop-blur-xl hover:bg-white/90",
  ghost: "bg-transparent text-foreground hover:bg-black/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-xs tracking-[0.22em]",
  md: "h-11 px-5 text-xs tracking-[0.24em]",
  lg: "h-12 px-6 text-[0.78rem] tracking-[0.28em]",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}


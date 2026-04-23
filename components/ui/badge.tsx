import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-muted backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}


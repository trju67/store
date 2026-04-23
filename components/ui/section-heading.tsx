import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}>) {
  return (
    <div className={cn("max-w-2xl space-y-3", align === "center" && "mx-auto text-center")}>
      <p className="text-[0.68rem] uppercase tracking-[0.34em] text-muted">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-muted md:text-base">{description}</p>
    </div>
  );
}


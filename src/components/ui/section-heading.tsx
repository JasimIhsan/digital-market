import { cn } from "@/lib/cn";
import type { Accent } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  accent?: Accent;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "primary",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 flex max-w-2xl flex-col items-start gap-5 md:mb-20",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <Badge accent={accent}>{eyebrow}</Badge>}
      <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-pretty text-muted">{description}</p>
      )}
    </Reveal>
  );
}

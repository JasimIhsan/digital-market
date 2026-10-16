import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "dark" | "light";
  spacing?: "default" | "compact";
}

const spacingClasses = {
  default: "py-24 md:py-32",
  compact: "py-16 md:py-20",
} as const;

export function Section({
  tone = "dark",
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        tone === "dark" ? "bg-ink tone-dark" : "bg-paper tone-light",
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}

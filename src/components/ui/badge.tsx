import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import type { Accent } from "@/types";

interface BadgeProps {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}

export function Badge({ children, accent = "primary", className }: BadgeProps) {
  const classes = accentClasses[accent];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
        classes.border,
        classes.bgSoft,
        classes.text,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", classes.bg)} aria-hidden="true" />
      {children}
    </span>
  );
}

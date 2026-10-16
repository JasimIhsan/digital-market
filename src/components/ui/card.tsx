import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padded?: boolean;
}

export function Card({ interactive, padded = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-surface backdrop-blur-sm",
        padded && "p-6 md:p-8",
        interactive &&
          "transition-[transform,background-color,border-color] duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-strong",
        className,
      )}
      {...props}
    />
  );
}

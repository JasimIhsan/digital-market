import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/* Narrow heading column beside a wider content column; stacks on small screens. */
export function SplitLayout({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20", className)}
      {...props}
    />
  );
}

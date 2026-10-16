import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/icon";

interface ArrowLabelProps {
  children: ReactNode;
  diagonal?: boolean;
  className?: string;
}

/* Call-to-action text inside a `group` card whose arrow nudges on hover. */
export function ArrowLabel({ children, diagonal, className }: ArrowLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-sm font-medium", className)}>
      {children}
      <Icon
        name={diagonal ? "arrowUpRight" : "arrowRight"}
        size={16}
        className={cn(
          "transition-transform duration-300 group-hover:translate-x-0.5",
          diagonal && "group-hover:-translate-y-0.5",
        )}
      />
    </span>
  );
}

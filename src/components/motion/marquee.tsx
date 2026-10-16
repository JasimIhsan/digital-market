import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

/*
 * Pure-CSS infinite marquee. Content is rendered twice so the track can
 * translate by exactly half its width and loop without a visible seam.
 */
export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="flex w-max shrink-0 animate-marquee gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {children}
        <span aria-hidden="true" className="contents">
          {children}
        </span>
      </div>
    </div>
  );
}

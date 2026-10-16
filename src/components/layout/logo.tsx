import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-primary to-software font-display text-sm font-bold text-paper"
      >
        {siteConfig.name.charAt(0)}
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-fg">
        {siteConfig.name}
      </span>
    </Link>
  );
}

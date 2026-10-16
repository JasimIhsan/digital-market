import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import type { IconName } from "@/lib/icons";
import type { Accent } from "@/types";
import { Icon } from "@/components/ui/icon";

interface IconTileProps {
  icon: IconName;
  accent?: Accent;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { tile: "size-9 rounded-lg", icon: 18 },
  md: { tile: "size-10 rounded-xl", icon: 20 },
  lg: { tile: "size-12 rounded-xl", icon: 22 },
} as const;

/* Accent-tinted square behind an icon, used wherever a department or service is introduced. */
export function IconTile({
  icon,
  accent = "primary",
  size = "md",
  className,
}: IconTileProps) {
  const classes = accentClasses[accent];
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center",
        sizes[size].tile,
        classes.bgSoft,
        classes.text,
        className,
      )}
    >
      <Icon name={icon} size={sizes[size].icon} />
    </span>
  );
}

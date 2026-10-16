import { icons, type IconName } from "@/lib/icons";
import { cn } from "@/lib/cn";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className }: IconProps) {
  const Component = icons[name];
  return (
    <Component size={size} aria-hidden="true" className={cn("shrink-0", className)} />
  );
}

import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/icon";

interface CheckListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

export function CheckList({ items, className, itemClassName }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-center gap-2 text-sm", itemClassName)}>
          <Icon name="check" size={16} className="text-success" />
          {item}
        </li>
      ))}
    </ul>
  );
}

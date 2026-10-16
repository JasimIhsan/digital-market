import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const controlClasses =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted outline-none transition-[border-color,box-shadow] duration-300 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 aria-invalid:border-danger";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ className, invalid, ...props }: InputProps) {
  return (
    <input
      className={cn(controlClasses, className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

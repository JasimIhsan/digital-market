import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/label";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function fieldErrorId(id: string): string {
  return `${id}-error`;
}

export function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={fieldErrorId(id)} role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

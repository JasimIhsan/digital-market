import type { Accent } from "@/types";

interface AccentClasses {
  text: string;
  bg: string;
  bgSoft: string;
  border: string;
  glow: string;
  gradient: string;
}

/*
 * Full class strings are listed per accent so Tailwind can see them at build
 * time; dynamic template literals would be purged.
 */
export const accentClasses: Record<Accent, AccentClasses> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    bgSoft: "bg-primary/10",
    border: "border-primary/30",
    glow: "shadow-[0_0_80px_-20px_var(--color-primary)]",
    gradient: "from-primary to-primary-soft",
  },
  marketing: {
    text: "text-marketing",
    bg: "bg-marketing",
    bgSoft: "bg-marketing/10",
    border: "border-marketing/30",
    glow: "shadow-[0_0_80px_-20px_var(--color-marketing)]",
    gradient: "from-marketing to-accent",
  },
  consulting: {
    text: "text-consulting",
    bg: "bg-consulting",
    bgSoft: "bg-consulting/10",
    border: "border-consulting/30",
    glow: "shadow-[0_0_80px_-20px_var(--color-consulting)]",
    gradient: "from-consulting to-software",
  },
  software: {
    text: "text-software",
    bg: "bg-software",
    bgSoft: "bg-software/10",
    border: "border-software/30",
    glow: "shadow-[0_0_80px_-20px_var(--color-software)]",
    gradient: "from-software to-primary",
  },
};

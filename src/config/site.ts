import type { BrandName } from "@/types";

interface SocialLink {
  label: string;
  href: string;
  brand: BrandName;
}

const socials: readonly SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", brand: "linkedin" },
  { label: "X", href: "https://x.com", brand: "x" },
  { label: "Instagram", href: "https://instagram.com", brand: "instagram" },
  { label: "GitHub", href: "https://github.com", brand: "github" },
];

export const siteConfig = {
  name: "Nexora",
  tagline: "Growth, engineered.",
  description:
    "Nexora is a full-service growth partner uniting digital marketing, strategic consulting, and custom software under one roof.",
  url: "https://nexora.example.com",
  locale: "en_US",
  copyrightYear: 2026,
  contact: {
    email: "hello@nexora.example.com",
    phone: "+1 (415) 555-0142",
    address: "548 Market Street, Suite 1200, San Francisco, CA 94104",
    hours: "Mon to Fri, 9:00 to 18:00 PT",
  },
  socials,
} as const;

import type { NavLink } from "@/types";
import { departmentHref, departments } from "@/data/departments";

export const primaryNav: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Team", href: "/#team" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Departments",
    links: departments.map((d) => ({ label: d.name, href: departmentHref(d.slug) })),
  },
  {
    heading: "Resources",
    links: [
      { label: "Case studies", href: "/#work" },
      { label: "Insights", href: "/#insights" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/#" },
  { label: "Terms", href: "/#" },
];

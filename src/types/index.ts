import type { IconName } from "@/lib/icons";

export type DepartmentSlug = "marketing" | "consulting" | "software";

export type BrandName = "linkedin" | "x" | "github" | "instagram";

export type Accent = "primary" | DepartmentSlug;

export interface Heading {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  department: DepartmentSlug;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  summary: string;
  result: string;
  image: string;
  department: DepartmentSlug;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  department: DepartmentSlug;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface EngagementModel {
  name: string;
  description: string;
  startingAt: string;
  features: string[];
  highlighted?: boolean;
}

export interface Tool {
  name: string;
  category: DepartmentSlug;
}

export interface CallToAction {
  title: string;
  description: string;
  buttonLabel: string;
}

export interface Department {
  slug: DepartmentSlug;
  name: string;
  shortName: string;
  icon: IconName;
  tagline: string;
  summary: string;
  overview: string[];
  stats: Stat[];
  process: ProcessStep[];
  faqs: Faq[];
  cta: CallToAction;
}

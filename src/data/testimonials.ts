import type { DepartmentSlug, Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nexora rebuilt our funnel and our attribution in the same quarter. For the first time we know which channels actually make us money.",
    author: "Priya Raman",
    role: "VP Marketing",
    company: "Northwind",
    avatar: "https://picsum.photos/seed/priya/160/160",
    department: "marketing",
  },
  {
    quote:
      "They challenged our strategy harder than our board does, then stayed to help us execute. That combination is rare.",
    author: "Daniel Okafor",
    role: "Chief Operating Officer",
    company: "Atlas Health",
    avatar: "https://picsum.photos/seed/daniel/160/160",
    department: "consulting",
  },
  {
    quote:
      "The engineering team shipped a production app in sixteen weeks and left us with code our own developers were happy to inherit.",
    author: "Sofia Marques",
    role: "Co-founder and CTO",
    company: "Orbit Pay",
    avatar: "https://picsum.photos/seed/sofia/160/160",
    department: "software",
  },
  {
    quote:
      "Our organic traffic has grown every single month for two years. The content programme runs like clockwork.",
    author: "Ethan Cole",
    role: "Head of Growth",
    company: "Lumen Labs",
    avatar: "https://picsum.photos/seed/ethan/160/160",
    department: "marketing",
  },
  {
    quote:
      "The KPI framework they designed is now how we run the company. Every leadership meeting starts from it.",
    author: "Hannah Weiss",
    role: "Chief Executive Officer",
    company: "Veridian",
    avatar: "https://picsum.photos/seed/hannah/160/160",
    department: "consulting",
  },
  {
    quote:
      "The AI assistant went from idea to pilot in eight weeks, with evaluation dashboards so we could trust what it was telling buyers.",
    author: "Marcus Lee",
    role: "Director of Merchandising",
    company: "Mosaic Retail",
    avatar: "https://picsum.photos/seed/marcus/160/160",
    department: "software",
  },
];

export function getTestimonialsByDepartment(slug: DepartmentSlug): Testimonial[] {
  return testimonials.filter((t) => t.department === slug);
}

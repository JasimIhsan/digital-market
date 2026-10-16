import type { CaseStudy, DepartmentSlug } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "northwind-growth",
    client: "Northwind",
    title: "Tripling qualified pipeline for a B2B logistics platform",
    summary:
      "A full-funnel rebuild across search, LinkedIn and lifecycle email, backed by a new attribution model.",
    result: "+212% qualified pipeline in 9 months",
    image: "https://picsum.photos/seed/northwind/1200/800",
    department: "marketing",
    tags: ["SEO", "Paid social", "Attribution"],
  },
  {
    slug: "atlas-health-transformation",
    client: "Atlas Health",
    title: "Redesigning operations for a 400-clinic healthcare network",
    summary:
      "Operating model redesign, KPI framework and a 12-month transformation roadmap delivered with leadership.",
    result: "27% reduction in cost to serve",
    image: "https://picsum.photos/seed/atlas/1200/800",
    department: "consulting",
    tags: ["Operating model", "Analytics", "Change"],
  },
  {
    slug: "orbit-pay-platform",
    client: "Orbit Pay",
    title: "Launching a fintech platform from zero to 200k users",
    summary:
      "Product discovery, a React Native app, a Node services layer and cloud infrastructure built in 16 weeks.",
    result: "200k users in the first year",
    image: "https://picsum.photos/seed/orbit/1200/800",
    department: "software",
    tags: ["Mobile", "Cloud", "Fintech"],
  },
  {
    slug: "mosaic-retail-ai",
    client: "Mosaic Retail",
    title: "An AI merchandising assistant for a national retailer",
    summary:
      "Retrieval-backed assistant that answers buyer questions over sales, stock and supplier data, with evaluation built in.",
    result: "11 hours saved per buyer per week",
    image: "https://picsum.photos/seed/mosaic/1200/800",
    department: "software",
    tags: ["AI", "Automation", "Retail"],
  },
];

export function getCaseStudiesByDepartment(slug: DepartmentSlug): CaseStudy[] {
  return caseStudies.filter((c) => c.department === slug);
}

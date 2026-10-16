import type { DepartmentSlug, Service } from "@/types";

export const services: Service[] = [
  {
    title: "Search engine optimisation",
    description:
      "Technical, content and authority programmes that win durable organic demand.",
    icon: "search",
    department: "marketing",
  },
  {
    title: "Performance advertising",
    description: "Paid search, social and programmatic managed to revenue, not clicks.",
    icon: "target",
    department: "marketing",
  },
  {
    title: "Social media",
    description:
      "Channel strategy, community and always-on creative that builds affinity.",
    icon: "messageSquare",
    department: "marketing",
  },
  {
    title: "Content and brand",
    description:
      "Positioning, identity and editorial systems that make you unmistakable.",
    icon: "penTool",
    department: "marketing",
  },
  {
    title: "Email and automation",
    description: "Lifecycle journeys that turn one-time buyers into repeat customers.",
    icon: "mail",
    department: "marketing",
  },
  {
    title: "Business strategy",
    description: "Market, positioning and growth strategy grounded in your numbers.",
    icon: "compass",
    department: "consulting",
  },
  {
    title: "Digital transformation",
    description: "Modernise operations, tooling and teams without halting the business.",
    icon: "workflow",
    department: "consulting",
  },
  {
    title: "Growth consulting",
    description: "Fractional growth leadership and operating cadence for scale-ups.",
    icon: "trendingUp",
    department: "consulting",
  },
  {
    title: "Analytics and data strategy",
    description: "KPI design, data foundations and dashboards leaders actually use.",
    icon: "barChart",
    department: "consulting",
  },
  {
    title: "Web and mobile apps",
    description: "Custom applications engineered for performance and maintainability.",
    icon: "smartphone",
    department: "software",
  },
  {
    title: "SaaS products",
    description: "Multi-tenant platforms from MVP to enterprise-ready.",
    icon: "blocks",
    department: "software",
  },
  {
    title: "AI and automation",
    description: "Assistants, pipelines and workflow automation with proper guardrails.",
    icon: "brain",
    department: "software",
  },
  {
    title: "Cloud and DevOps",
    description:
      "Secure, observable infrastructure with deployment pipelines that just work.",
    icon: "cloud",
    department: "software",
  },
  {
    title: "UI/UX design",
    description: "Research-led product design and design systems that scale with you.",
    icon: "palette",
    department: "software",
  },
];

export function getServicesByDepartment(slug: DepartmentSlug): Service[] {
  return services.filter((s) => s.department === slug);
}

export const featuredServices: Service[] = [
  "search",
  "target",
  "compass",
  "barChart",
  "smartphone",
  "brain",
].flatMap((icon) => services.filter((s) => s.icon === icon));

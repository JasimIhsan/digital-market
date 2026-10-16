import type { DepartmentSlug, Tool } from "@/types";

export const tools: Tool[] = [
  { name: "Google Ads", category: "marketing" },
  { name: "Meta Ads", category: "marketing" },
  { name: "HubSpot", category: "marketing" },
  { name: "Semrush", category: "marketing" },
  { name: "Klaviyo", category: "marketing" },
  { name: "GA4", category: "marketing" },
  { name: "Looker", category: "consulting" },
  { name: "dbt", category: "consulting" },
  { name: "Snowflake", category: "consulting" },
  { name: "Miro", category: "consulting" },
  { name: "Notion", category: "consulting" },
  { name: "TypeScript", category: "software" },
  { name: "React", category: "software" },
  { name: "Next.js", category: "software" },
  { name: "React Native", category: "software" },
  { name: "Node.js", category: "software" },
  { name: "Python", category: "software" },
  { name: "PostgreSQL", category: "software" },
  { name: "AWS", category: "software" },
  { name: "Terraform", category: "software" },
  { name: "OpenAI", category: "software" },
];

export function getToolsByDepartment(slug: DepartmentSlug): Tool[] {
  return tools.filter((t) => t.category === slug);
}

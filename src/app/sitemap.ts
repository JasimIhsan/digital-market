import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { departmentHref, departmentSlugs } from "@/data/departments";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contact"];
  const departmentRoutes = departmentSlugs.map(departmentHref);

  return [...staticRoutes, ...departmentRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

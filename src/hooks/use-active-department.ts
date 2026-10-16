"use client";

import { usePathname } from "next/navigation";
import { departmentHref, departmentSlugs } from "@/data/departments";
import type { DepartmentSlug } from "@/types";

/* The department whose page is currently open, if any. */
export function useActiveDepartment(): DepartmentSlug | undefined {
  const pathname = usePathname();
  return departmentSlugs.find((slug) => pathname === departmentHref(slug));
}

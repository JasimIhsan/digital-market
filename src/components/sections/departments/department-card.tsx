import Link from "next/link";
import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import { departmentHref } from "@/data/departments";
import type { Department } from "@/types";
import { Card } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { ArrowLabel } from "@/components/ui/arrow-label";

interface DepartmentCardProps {
  department: Department;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  const accent = accentClasses[department.slug];

  return (
    <Link
      href={departmentHref(department.slug)}
      className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Card interactive className="flex h-full flex-col gap-6">
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-24 -right-24 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40",
            accent.bg,
          )}
        />
        <IconTile
          icon={department.icon}
          accent={department.slug}
          size="lg"
          className="relative"
        />
        <div className="relative flex flex-1 flex-col gap-3">
          <p className={cn("text-xs font-medium tracking-wider uppercase", accent.text)}>
            {department.tagline}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {department.name}
          </h3>
          <p className="leading-relaxed text-muted">{department.summary}</p>
        </div>
        <ArrowLabel diagonal className="relative">
          Explore {department.shortName}
        </ArrowLabel>
      </Card>
    </Link>
  );
}

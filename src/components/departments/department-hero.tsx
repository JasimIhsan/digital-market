import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import { departmentCopy } from "@/data/headings";
import type { Department } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconTile } from "@/components/ui/icon-tile";
import { PageHero } from "@/components/sections/hero/page-hero";

interface DepartmentHeroProps {
  department: Department;
}

export function DepartmentHero({ department }: DepartmentHeroProps) {
  const accent = accentClasses[department.slug];

  return (
    <PageHero
      eyebrow={
        <>
          <IconTile icon={department.icon} accent={department.slug} />
          <Badge accent={department.slug}>{department.name}</Badge>
        </>
      }
      headline={department.tagline}
      summary={department.summary}
      stats={department.stats}
      background={
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className={cn(
              "absolute -top-40 right-0 size-[32rem] animate-drift rounded-full opacity-25 blur-[120px]",
              accent.bg,
            )}
          />
        </div>
      }
      actions={
        <>
          <Button href="/contact" size="lg" icon="arrowRight">
            {department.cta.buttonLabel}
          </Button>
          <Button href={departmentCopy.secondaryCta.href} size="lg" variant="secondary">
            {departmentCopy.secondaryCta.label}
          </Button>
        </>
      }
    />
  );
}

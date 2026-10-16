import { getDepartment } from "@/data/departments";
import type { CaseStudy } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CardImage } from "@/components/ui/card-image";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const department = getDepartment(caseStudy.department);

  return (
    <Card interactive padded={false} className="group">
      <CardImage
        src={caseStudy.image}
        alt={`${caseStudy.client} project`}
        sizes="(min-width: 768px) 50vw, 100vw"
      >
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          {department && <Badge accent={department.slug}>{department.shortName}</Badge>}
        </div>
      </CardImage>
      <div className="flex flex-col gap-3 p-6 md:p-8">
        <p className="text-xs font-medium tracking-wider text-muted uppercase">
          {caseStudy.client}
        </p>
        <h3 className="font-display text-xl font-semibold tracking-tight text-balance md:text-2xl">
          {caseStudy.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{caseStudy.summary}</p>
        <p className="mt-2 font-display text-lg font-semibold text-primary">
          {caseStudy.result}
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

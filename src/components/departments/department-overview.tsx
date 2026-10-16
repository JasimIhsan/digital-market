import { departmentCopy } from "@/data/headings";
import type { Department } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitLayout } from "@/components/ui/split-layout";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

interface DepartmentOverviewProps {
  department: Department;
}

export function DepartmentOverview({ department }: DepartmentOverviewProps) {
  return (
    <Section id="overview" tone="light">
      <SplitLayout>
        <SectionHeading
          {...departmentCopy.headings(department.shortName).overview}
          accent={department.slug}
          className="mb-0"
        />
        <Stagger className="flex flex-col gap-6">
          {department.overview.map((paragraph) => (
            <StaggerItem key={paragraph}>
              <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </SplitLayout>
    </Section>
  );
}

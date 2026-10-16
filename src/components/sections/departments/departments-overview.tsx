import { departments } from "@/data/departments";
import { homeHeadings } from "@/data/headings";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { DepartmentCard } from "@/components/sections/departments/department-card";

export function DepartmentsOverview() {
  return (
    <Section id="departments">
      <SectionHeading {...homeHeadings.departments} />
      <Stagger className="grid gap-6 md:grid-cols-3">
        {departments.map((department) => (
          <StaggerItem key={department.slug} className="h-full">
            <DepartmentCard department={department} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

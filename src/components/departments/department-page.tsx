import type { Department } from "@/types";
import { departmentCopy } from "@/data/headings";
import { getServicesByDepartment } from "@/data/services";
import { getToolsByDepartment } from "@/data/tools";
import { getCaseStudiesByDepartment } from "@/data/case-studies";
import { getTestimonialsByDepartment } from "@/data/testimonials";
import { DepartmentHero } from "@/components/departments/department-hero";
import { DepartmentOverview } from "@/components/departments/department-overview";
import { ServicesSection } from "@/components/sections/services/services-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { CaseStudiesSection } from "@/components/sections/case-studies/case-studies-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";

interface DepartmentPageProps {
  department: Department;
}

/* Shared template for every department route, fed entirely from data. */
export function DepartmentPage({ department }: DepartmentPageProps) {
  const accent = department.slug;
  const headings = departmentCopy.headings(department.shortName);

  return (
    <>
      <DepartmentHero department={department} />
      <DepartmentOverview department={department} />
      <ServicesSection
        heading={headings.services}
        services={getServicesByDepartment(accent)}
        accent={accent}
      />
      <ProcessSection
        heading={headings.process}
        steps={department.process}
        accent={accent}
      />
      <TechStackSection
        heading={headings.tools}
        tools={getToolsByDepartment(accent)}
        accent={accent}
      />
      <CaseStudiesSection
        heading={headings.work}
        items={getCaseStudiesByDepartment(accent)}
        accent={accent}
      />
      <StatsSection heading={headings.stats} stats={department.stats} accent={accent} />
      <TestimonialsSection
        heading={headings.testimonials}
        items={getTestimonialsByDepartment(accent)}
        accent={accent}
      />
      <FaqSection heading={headings.faq} items={department.faqs} accent={accent} />
      <CtaBanner cta={department.cta} accent={accent} />
    </>
  );
}

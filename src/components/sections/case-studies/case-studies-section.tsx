import type { Accent, CaseStudy, Heading } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { CaseStudyCard } from "@/components/sections/case-studies/case-study-card";

interface CaseStudiesSectionProps {
  heading: Heading;
  items: CaseStudy[];
  accent?: Accent;
}

export function CaseStudiesSection({
  heading,
  items,
  accent = "primary",
}: CaseStudiesSectionProps) {
  return (
    <Section id="work" tone="light">
      <SectionHeading {...heading} accent={accent} />
      <Stagger className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <StaggerItem key={item.slug}>
            <CaseStudyCard caseStudy={item} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

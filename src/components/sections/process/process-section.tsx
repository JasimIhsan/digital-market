import type { Accent, Heading, ProcessStep } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitLayout } from "@/components/ui/split-layout";
import { ProcessTimeline } from "@/components/sections/process/process-timeline";

interface ProcessSectionProps {
  heading: Heading;
  steps: ProcessStep[];
  accent?: Accent;
}

export function ProcessSection({
  heading,
  steps,
  accent = "primary",
}: ProcessSectionProps) {
  return (
    <Section id="process" tone="light">
      <SplitLayout>
        <SectionHeading
          {...heading}
          accent={accent}
          className="mb-0 lg:sticky lg:top-32 lg:self-start"
        />
        <ProcessTimeline steps={steps} accent={accent} />
      </SplitLayout>
    </Section>
  );
}

import type { Accent, Faq, Heading } from "@/types";
import { Accordion } from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitLayout } from "@/components/ui/split-layout";
import { Reveal } from "@/components/motion/reveal";

interface FaqSectionProps {
  heading: Heading;
  items: Faq[];
  accent?: Accent;
}

export function FaqSection({ heading, items, accent = "primary" }: FaqSectionProps) {
  return (
    <Section id="faq">
      <SplitLayout>
        <SectionHeading {...heading} accent={accent} className="mb-0" />
        <Reveal>
          <Accordion items={items} />
        </Reveal>
      </SplitLayout>
    </Section>
  );
}

import type { Accent, Heading, Testimonial } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { TestimonialCard } from "@/components/sections/testimonials/testimonial-card";

interface TestimonialsSectionProps {
  heading: Heading;
  items: Testimonial[];
  accent?: Accent;
}

export function TestimonialsSection({
  heading,
  items,
  accent = "primary",
}: TestimonialsSectionProps) {
  return (
    <Section id="testimonials" tone="light">
      <SectionHeading {...heading} accent={accent} align="center" />
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <StaggerItem key={item.author} className="h-full">
            <TestimonialCard testimonial={item} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

import type { DepartmentSlug, Heading, Service } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ServiceCard } from "@/components/sections/services/service-card";

interface ServicesSectionProps {
  heading: Heading;
  services: Service[];
  /* Omit on the home page so each card takes its own department's colour. */
  accent?: DepartmentSlug;
}

export function ServicesSection({ heading, services, accent }: ServicesSectionProps) {
  return (
    <Section id="services">
      <SectionHeading {...heading} accent={accent ?? "primary"} />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.title} className="h-full">
            <ServiceCard service={service} accent={accent ?? service.department} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

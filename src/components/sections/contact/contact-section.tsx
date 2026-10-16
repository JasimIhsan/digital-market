import { contactCopy } from "@/data/contact";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitLayout } from "@/components/ui/split-layout";
import { Reveal } from "@/components/motion/reveal";
import { ContactDetails } from "@/components/sections/contact/contact-details";
import { ContactForm } from "@/components/sections/contact/contact-form";

export function ContactSection() {
  return (
    <Section id="contact">
      <SplitLayout>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={contactCopy.eyebrow}
            title={contactCopy.title}
            description={contactCopy.description}
            className="mb-0"
          />
          <ContactDetails />
        </div>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </SplitLayout>
    </Section>
  );
}

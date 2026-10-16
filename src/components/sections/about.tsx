import { about } from "@/data/company";
import { Card } from "@/components/ui/card";
import { CheckList } from "@/components/ui/check-list";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function About() {
  return (
    <Section id="about" tone="light">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.story}
            className="mb-0"
          />
          <Reveal>
            <CheckList
              items={about.values}
              className="grid grid-cols-2"
              itemClassName="font-medium"
            />
          </Reveal>
        </div>

        <Stagger className="grid gap-6 self-center">
          {[about.mission, about.vision].map((item) => (
            <StaggerItem key={item.title}>
              <Card interactive>
                <p className="mb-3 font-display text-xs font-semibold tracking-wider text-primary uppercase">
                  {item.title}
                </p>
                <p className="font-display text-xl leading-snug font-medium text-balance md:text-2xl">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

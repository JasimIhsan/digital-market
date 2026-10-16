import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import type { Accent, Heading, Tool } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { scaleIn } from "@/lib/motion";

interface TechStackSectionProps {
  heading: Heading;
  tools: Tool[];
  accent?: Accent;
}

export function TechStackSection({
  heading,
  tools,
  accent = "primary",
}: TechStackSectionProps) {
  return (
    <Section id="tools" spacing="compact">
      <SectionHeading {...heading} accent={accent} align="center" />
      <Stagger
        stagger={0.03}
        className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3"
      >
        {tools.map((tool) => {
          const classes = accentClasses[tool.category];
          return (
            <StaggerItem key={tool.name} variants={scaleIn}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-strong">
                <span
                  className={cn("size-1.5 rounded-full", classes.bg)}
                  aria-hidden="true"
                />
                {tool.name}
              </span>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

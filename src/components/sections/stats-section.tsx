import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import type { Accent, Heading, Stat } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/motion/counter";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

interface StatsSectionProps {
  heading: Heading;
  stats: Stat[];
  accent?: Accent;
}

export function StatsSection({ heading, stats, accent = "primary" }: StatsSectionProps) {
  const classes = accentClasses[accent];

  return (
    <Section id="impact" className="overflow-hidden">
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[140px]",
          classes.bg,
        )}
      />
      <SectionHeading {...heading} accent={accent} align="center" />
      <Stagger className="relative grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="bg-ink p-8 md:p-10">
            <p
              className={cn(
                "font-display text-4xl font-semibold tracking-tight md:text-5xl",
                classes.text,
              )}
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm text-muted">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

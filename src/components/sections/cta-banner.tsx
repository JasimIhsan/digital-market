import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import type { Accent, CallToAction } from "@/types";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { scaleIn } from "@/lib/motion";

interface CtaBannerProps {
  cta: CallToAction;
  accent?: Accent;
}

export function CtaBanner({ cta, accent = "primary" }: CtaBannerProps) {
  const classes = accentClasses[accent];

  return (
    <Section spacing="compact">
      <Reveal variants={scaleIn}>
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl bg-linear-to-br p-10 text-paper md:p-16",
            classes.gradient,
          )}
        >
          <span
            aria-hidden="true"
            className="absolute -top-24 -right-24 size-72 rounded-full bg-paper/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
                {cta.title}
              </h2>
              <p className="mt-4 text-lg text-paper/80">{cta.description}</p>
            </div>
            <Button
              href="/contact"
              size="lg"
              icon="arrowRight"
              variant="inverse"
              className="shrink-0"
            >
              {cta.buttonLabel}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

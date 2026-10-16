import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { Stat } from "@/types";
import { Container } from "@/components/ui/container";
import { AnimatedHeadline } from "@/components/motion/animated-headline";
import { Reveal } from "@/components/motion/reveal";
import { HeroStats } from "@/components/sections/hero/hero-stats";

interface PageHeroProps {
  eyebrow: ReactNode;
  headline: string;
  summary: string;
  actions: ReactNode;
  stats: Stat[];
  /* Decorative, absolutely positioned layer behind the content. */
  background?: ReactNode;
  /* Optional second column shown on large screens. */
  aside?: ReactNode;
}

/* Shared hero shell for the home page and every department page. */
export function PageHero({
  eyebrow,
  headline,
  summary,
  actions,
  stats,
  background,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-24 tone-dark md:pt-44 md:pb-32">
      {background}
      <Container
        className={cn(
          "relative",
          aside ? "grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]" : "max-w-4xl",
        )}
      >
        <div className="flex max-w-2xl flex-col gap-8">
          <Reveal delay={0.1} className="flex items-center gap-3">
            {eyebrow}
          </Reveal>
          <AnimatedHeadline
            text={headline}
            className="font-display text-5xl leading-[1.02] font-semibold tracking-tight text-balance md:text-7xl"
          />
          <Reveal delay={0.5}>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {summary}
            </p>
          </Reveal>
          <Reveal delay={0.65} className="flex flex-wrap gap-4">
            {actions}
          </Reveal>
          <Reveal delay={0.8}>
            <HeroStats stats={stats} />
          </Reveal>
        </div>
        {aside}
      </Container>
    </section>
  );
}

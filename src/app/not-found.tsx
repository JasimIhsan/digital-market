import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export default function NotFound() {
  return (
    <Section className="flex min-h-svh items-center">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <p className="font-display text-8xl font-semibold tracking-tight text-primary">
          404
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          This page has moved on.
        </h1>
        <p className="text-lg text-muted">
          The link may be outdated or the page may have been removed. Let&apos;s get you
          back on track.
        </p>
        <Button href="/" size="lg" icon="arrowRight">
          Back to home
        </Button>
      </Reveal>
    </Section>
  );
}

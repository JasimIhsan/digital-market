import { hero, heroStats } from "@/data/company";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/sections/hero/hero-background";
import { HeroVisual } from "@/components/sections/hero/hero-visual";
import { PageHero } from "@/components/sections/hero/page-hero";

export function Hero() {
  return (
    <PageHero
      eyebrow={<Badge>{hero.eyebrow}</Badge>}
      headline={hero.headline}
      summary={hero.subheadline}
      stats={heroStats}
      background={<HeroBackground />}
      aside={<HeroVisual />}
      actions={
        <>
          <Button href={hero.primaryCta.href} size="lg" icon="arrowRight">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </>
      }
    />
  );
}

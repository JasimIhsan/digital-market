import { cn } from "@/lib/cn";
import { engagementModels } from "@/data/engagement";
import { homeHeadings } from "@/data/headings";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckList } from "@/components/ui/check-list";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function EngagementSection() {
  return (
    <Section id="engagement" tone="light">
      <SectionHeading {...homeHeadings.engagement} align="center" />
      <Stagger className="grid gap-6 md:grid-cols-3">
        {engagementModels.map((model) => (
          <StaggerItem key={model.name} className="h-full">
            <Card
              interactive
              className={cn(
                "flex h-full flex-col gap-6",
                model.highlighted && "border-primary/40 bg-ink tone-dark",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {model.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{model.description}</p>
                </div>
                {model.highlighted && <Badge>Popular</Badge>}
              </div>
              <p className="font-display text-3xl font-semibold tracking-tight">
                {model.startingAt}
              </p>
              <CheckList items={model.features} className="flex-1" />
              <Button
                href="/contact"
                variant={model.highlighted ? "primary" : "secondary"}
                icon="arrowRight"
                className="w-full"
              >
                Talk to us
              </Button>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

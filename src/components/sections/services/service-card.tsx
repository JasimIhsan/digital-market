import type { Accent, Service } from "@/types";
import { Card } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";

interface ServiceCardProps {
  service: Service;
  accent: Accent;
}

export function ServiceCard({ service, accent }: ServiceCardProps) {
  return (
    <Card interactive className="flex h-full flex-col gap-4">
      <IconTile icon={service.icon} accent={accent} />
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{service.description}</p>
    </Card>
  );
}

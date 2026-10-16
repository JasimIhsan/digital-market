import { siteConfig } from "@/config/site";
import type { IconName } from "@/lib/icons";
import { IconTile } from "@/components/ui/icon-tile";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const details: { icon: IconName; label: string; value: string; href?: string }[] = [
  {
    icon: "mail",
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: "phone",
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
  },
  { icon: "mapPin", label: "Office", value: siteConfig.contact.address },
  { icon: "globe", label: "Hours", value: siteConfig.contact.hours },
];

export function ContactDetails() {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
      {details.map((detail) => (
        <StaggerItem key={detail.label} className="flex items-start gap-4">
          <IconTile icon={detail.icon} />
          <div>
            <p className="text-xs font-medium tracking-wider text-muted uppercase">
              {detail.label}
            </p>
            {detail.href ? (
              <a
                href={detail.href}
                className="mt-1 block text-sm font-medium transition-colors hover:text-primary"
              >
                {detail.value}
              </a>
            ) : (
              <p className="mt-1 text-sm font-medium">{detail.value}</p>
            )}
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

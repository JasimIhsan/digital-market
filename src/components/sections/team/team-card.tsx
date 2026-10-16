import type { TeamMember } from "@/types";
import { Card } from "@/components/ui/card";
import { CardImage } from "@/components/ui/card-image";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card interactive padded={false} className="group">
      <CardImage
        src={member.image}
        alt={member.name}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        aspect="portrait"
      >
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-lg font-semibold text-paper">{member.name}</p>
          <p className="text-sm text-primary-soft">{member.role}</p>
        </div>
      </CardImage>
      <p className="p-5 text-sm leading-relaxed text-muted">{member.bio}</p>
    </Card>
  );
}

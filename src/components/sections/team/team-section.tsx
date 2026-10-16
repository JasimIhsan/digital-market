import { team } from "@/data/team";
import { homeHeadings } from "@/data/headings";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { TeamCard } from "@/components/sections/team/team-card";

export function TeamSection() {
  return (
    <Section id="team">
      <SectionHeading {...homeHeadings.team} />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <StaggerItem key={member.name}>
            <TeamCard member={member} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

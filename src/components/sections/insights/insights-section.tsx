import { posts } from "@/data/posts";
import { homeHeadings } from "@/data/headings";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { PostCard } from "@/components/sections/insights/post-card";

export function InsightsSection() {
  return (
    <Section id="insights" tone="light">
      <SectionHeading {...homeHeadings.insights} />
      <Stagger className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <StaggerItem key={post.slug} className="h-full">
            <PostCard post={post} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

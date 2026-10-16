import type { Post } from "@/types";
import { ArrowLabel } from "@/components/ui/arrow-label";
import { Card } from "@/components/ui/card";
import { CardImage } from "@/components/ui/card-image";

interface PostCardProps {
  post: Post;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function PostCard({ post }: PostCardProps) {
  return (
    <Card interactive padded={false} className="group flex h-full flex-col">
      <CardImage src={post.image} alt="" sizes="(min-width: 768px) 33vw, 100vw" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="font-medium text-primary">{post.category}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight text-balance">
          {post.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <ArrowLabel>Read article</ArrowLabel>
      </div>
    </Card>
  );
}

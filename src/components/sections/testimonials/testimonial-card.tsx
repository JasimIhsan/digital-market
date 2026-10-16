import type { Testimonial } from "@/types";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card interactive className="h-full">
      <figure className="flex h-full flex-col justify-between gap-8">
        <blockquote className="font-display text-lg leading-snug font-medium text-balance">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="flex items-center gap-3">
          <Avatar src={testimonial.avatar} alt={testimonial.author} />
          <div>
            <p className="text-sm font-semibold">{testimonial.author}</p>
            <p className="text-xs text-muted">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </figcaption>
      </figure>
    </Card>
  );
}

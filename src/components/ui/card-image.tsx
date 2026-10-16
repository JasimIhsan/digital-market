import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardImageProps {
  src: string;
  alt: string;
  sizes: string;
  aspect?: "landscape" | "portrait";
  /* Overlays rendered above the image, e.g. gradients and badges. */
  children?: ReactNode;
}

const aspectClasses = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[5/6]",
} as const;

/* Edge-to-edge image at the top of a `Card` that zooms when the card's `group` is hovered. */
export function CardImage({
  src,
  alt,
  sizes,
  aspect = "landscape",
  children,
}: CardImageProps) {
  return (
    <div className={cn("relative overflow-hidden", aspectClasses[aspect])}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {children}
    </div>
  );
}

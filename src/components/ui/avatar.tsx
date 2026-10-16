import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

const AVATAR_SIZE = 48;

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={AVATAR_SIZE}
      height={AVATAR_SIZE}
      className="rounded-full object-cover ring-2 ring-line"
    />
  );
}

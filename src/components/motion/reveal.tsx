"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { fadeUp, viewportOnce, withDelay } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
}: RevealProps) {
  return (
    <motion.div
      variants={withDelay(variants, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

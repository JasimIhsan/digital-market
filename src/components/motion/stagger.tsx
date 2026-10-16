"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface StaggerProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}

/* Parent that reveals its StaggerItem children one after another. */
export function Stagger({ children, stagger, delay, className }: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}

export function StaggerItem({
  children,
  variants = fadeUp,
  className,
}: StaggerItemProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

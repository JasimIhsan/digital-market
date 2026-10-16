"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/* Honours prefers-reduced-motion for every motion component in the tree. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

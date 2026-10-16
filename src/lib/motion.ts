import type { Transition, Variants } from "motion/react";

export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

export const durations = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
} as const;

export const viewportOnce = { once: true, amount: 0.25 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.base, ease: easeOut },
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/*
 * A variant's own transition replaces the `transition` prop entirely, so a
 * per-instance delay has to be merged into the variant itself.
 */
export function withDelay(variants: Variants, delay: number): Variants {
  const visible = variants.visible;
  if (!delay || typeof visible !== "object") return variants;
  return {
    ...variants,
    visible: { ...visible, transition: { ...visible.transition, delay } },
  };
}

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "60%", rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: durations.slow, ease: easeOut },
  },
};

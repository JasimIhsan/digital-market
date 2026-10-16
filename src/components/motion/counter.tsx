"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { easeOut } from "@/lib/motion";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const COUNT_DURATION = 1.8;

function decimalsOf(value: number): number {
  const [, fraction = ""] = value.toString().split(".");
  return fraction.length;
}

/*
 * Counts up from 0 once scrolled into view. The number is driven by a motion
 * value so the DOM updates every frame without re-rendering React, and the
 * server always renders 0 so hydration is stable regardless of motion settings.
 */
export function Counter({ value, prefix = "", suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const formatter = useMemo(() => {
    const decimals = decimalsOf(value);
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [value]);
  const formatted = useTransform(count, (latest) => formatter.format(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: reduceMotion ? 0 : COUNT_DURATION,
      ease: easeOut,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{formatted}</motion.span>
      {suffix}
    </span>
  );
}

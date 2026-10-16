"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import type { Accent, ProcessStep } from "@/types";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

interface ProcessTimelineProps {
  steps: ProcessStep[];
  accent: Accent;
}

/* Numbered steps with a line that draws itself as the list scrolls into view. */
export function ProcessTimeline({ steps, accent }: ProcessTimelineProps) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const classes = accentClasses[accent];

  return (
    <Stagger stagger={0.12} className="relative">
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-6 w-px bg-line" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY }}
        className={cn("absolute top-2 bottom-2 left-6 w-px origin-top", classes.bg)}
      />
      <ol ref={ref} className="flex flex-col gap-12 pl-16">
        {steps.map((step, index) => (
          <li key={step.title}>
            <StaggerItem className="relative">
              <span
                className={cn(
                  "absolute top-0 -left-16 grid size-12 place-items-center rounded-full border font-display text-sm font-semibold",
                  classes.border,
                  classes.bgSoft,
                  classes.text,
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 pt-2.5 font-display text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="max-w-lg leading-relaxed text-muted">{step.description}</p>
            </StaggerItem>
          </li>
        ))}
      </ol>
    </Stagger>
  );
}

"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { staggerContainer, wordReveal } from "@/lib/motion";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

/* Reveals the page headline word by word on mount. */
export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <motion.h1
      variants={staggerContainer(0.06, 0.2)}
      initial="hidden"
      animate="visible"
      aria-label={text}
      className={cn("[perspective:800px]", className)}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden pb-[0.1em] align-top">
            <motion.span
              variants={wordReveal}
              className="inline-block origin-bottom"
              aria-hidden="true"
            >
              {word}
            </motion.span>
          </span>
          {/* The space lives between the inline-blocks; inside one it would be trimmed. */}
          {index < words.length - 1 && " "}
        </Fragment>
      ))}
    </motion.h1>
  );
}

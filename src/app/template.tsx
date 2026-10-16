"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { durations, easeOut } from "@/lib/motion";

/* Re-mounts on every navigation, giving each page a soft entrance. */
export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  /*
   * Next scrolls the new segment's first element into view, which can land
   * mid-page while the entrance animation is still laying things out. Every
   * page starts from the top instead; hash links keep their own target.
   */
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: durations.base, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { durations, easeOut } from "@/lib/motion";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { primaryNav } from "@/data/navigation";
import { departmentHref, departments } from "@/data/departments";
import { useActiveDepartment } from "@/hooks/use-active-department";
import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /* The toggle that opened the menu; focus returns to it on Escape and wraps to it on Tab. */
  toggleRef: RefObject<HTMLButtonElement | null>;
}

const linkClasses =
  "block rounded-xl px-3 py-3 font-display text-2xl font-medium text-fg outline-none transition-colors hover:text-primary focus-visible:text-primary";

export function MobileMenu({ open, onClose, toggleRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const activeSlug = useActiveDepartment();
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
        return;
      }
      /* Keep Tab inside the overlay: after the last link, go back to the toggle. */
      if (event.key !== "Tab" || event.shiftKey) return;
      const focusables =
        panelRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      const last = focusables?.[focusables.length - 1];
      if (last && document.activeElement === last) {
        event.preventDefault();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, toggleRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: durations.fast, ease: easeOut }}
          className="fixed inset-0 z-40 overflow-y-auto bg-ink pt-24 pb-10 tone-dark lg:hidden"
        >
          <Container className="flex flex-col gap-8">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {primaryNav.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={onClose} className={linkClasses}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="mb-3 px-3 text-xs font-medium tracking-wider text-muted uppercase">
                Departments
              </p>
              <ul className="flex flex-col gap-1">
                {departments.map((department) => {
                  const isActive = department.slug === activeSlug;
                  return (
                    <li key={department.slug}>
                      <Link
                        href={departmentHref(department.slug)}
                        onClick={onClose}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          linkClasses,
                          isActive && accentClasses[department.slug].text,
                        )}
                      >
                        {department.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Button href="/contact" size="lg" icon="arrowRight" onClick={onClose}>
              Start a project
            </Button>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

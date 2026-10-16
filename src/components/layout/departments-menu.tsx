"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FocusEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import { durations, easeOut } from "@/lib/motion";
import { departmentHref, departments } from "@/data/departments";
import { useActiveDepartment } from "@/hooks/use-active-department";
import { Icon } from "@/components/ui/icon";
import { IconTile } from "@/components/ui/icon-tile";

export function DepartmentsMenu() {
  const [open, setOpen] = useState(false);
  const activeSlug = useActiveDepartment();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      /* Only reclaim focus if it was inside the menu, so hover-opened menus never steal it. */
      if (rootRef.current?.contains(document.activeElement)) buttonRef.current?.focus();
    };
    const onClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  /* Close once keyboard focus moves past the last link. */
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget)) setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={onBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors outline-none hover:text-fg focus-visible:text-fg focus-visible:ring-2 focus-visible:ring-primary",
          activeSlug ? "text-fg" : "text-muted",
        )}
      >
        Departments
        <Icon
          name="chevronDown"
          size={14}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: durations.fast, ease: easeOut }}
            className="absolute top-full left-1/2 w-80 -translate-x-1/2 pt-3"
          >
            <ul className="overflow-hidden rounded-2xl border border-line bg-ink p-2 tone-dark shadow-2xl shadow-black/40">
              {departments.map((department) => {
                const accent = accentClasses[department.slug];
                const isActive = department.slug === activeSlug;
                return (
                  <li key={department.slug}>
                    <Link
                      href={departmentHref(department.slug)}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-start gap-3 rounded-xl p-3 transition-colors outline-none hover:bg-surface focus-visible:bg-surface",
                        isActive && "bg-surface",
                      )}
                    >
                      <IconTile
                        icon={department.icon}
                        accent={department.slug}
                        size="sm"
                      />
                      <span className="flex flex-1 flex-col gap-0.5">
                        <span
                          className={cn(
                            "text-sm font-medium",
                            isActive ? accent.text : "text-fg",
                          )}
                        >
                          {department.name}
                        </span>
                        <span className="text-xs text-muted">{department.tagline}</span>
                      </span>
                      {isActive && (
                        <Icon
                          name="check"
                          size={16}
                          className={cn("mt-1", accent.text)}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

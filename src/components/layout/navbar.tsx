"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useScrolled } from "@/hooks/use-scrolled";
import { primaryNav } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/layout/logo";
import { DepartmentsMenu } from "@/components/layout/departments-menu";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 tone-dark">
      <div
        className={cn(
          "transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || menuOpen
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between transition-[height] duration-500",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <DepartmentsMenu />
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted transition-colors outline-none hover:text-fg focus-visible:text-fg focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              size="sm"
              icon="arrowRight"
              className="hidden lg:inline-flex"
            >
              Start a project
            </Button>
            <button
              ref={toggleRef}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((value) => !value)}
              className="relative z-50 grid size-10 place-items-center rounded-full border border-line bg-surface text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              <Icon name={menuOpen ? "x" : "menu"} />
            </button>
          </div>
        </Container>
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} toggleRef={toggleRef} />
    </header>
  );
}

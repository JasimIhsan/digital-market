import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav, legalNav } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { BrandIcon } from "@/components/ui/brand-icon";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const footerLinkClasses =
  "text-sm text-muted transition-colors outline-none hover:text-fg focus-visible:text-fg";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink tone-dark">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.4fr] lg:gap-8">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
          <ul className="flex gap-2">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors outline-none hover:border-primary/40 hover:text-fg focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <BrandIcon name={social.brand} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerNav.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <p className="mb-4 text-xs font-medium tracking-wider text-fg uppercase">
              {group.heading}
            </p>
            <ul className="flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <NewsletterForm />
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLinkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

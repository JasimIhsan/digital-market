# Nexora — marketing site

Premium, animated marketing website for a multi-service growth company (digital marketing, consulting and software). Built with Next.js App Router, TypeScript and Tailwind CSS v4. All content is dummy data and lives in `src/data`.

## Scripts

| Command                | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the dev server                   |
| `npm run build`        | Production build                       |
| `npm run start`        | Serve the production build             |
| `npm run lint`         | ESLint (Next core-web-vitals + TS)     |
| `npm run typecheck`    | `tsc --noEmit`                         |
| `npm run format`       | Prettier (with Tailwind class sorting) |
| `npm run format:check` | Prettier in check mode                 |

## Stack

- **Next.js 16** (App Router, Cache Components, static prerendering)
- **TypeScript** in strict mode
- **Tailwind CSS v4** with design tokens declared in `src/app/globals.css`
- **motion** (Framer Motion) for scroll reveals, counters, parallax and page transitions
- **react-hook-form + zod** for the contact form
- **lucide-react** for icons

## Folder structure

```
src/
  app/              Routes, layouts and metadata only. Pages compose sections.
    departments/[slug]/   One template for every department, statically generated.
  components/
    ui/             Primitives: Button, Badge, Card, Input, Select, Accordion, Section...
    layout/         Navbar, mobile menu, footer, scroll progress
    motion/         Reveal, Stagger, Counter, Marquee, Parallax, AnimatedHeadline
    sections/       Home page sections, each self-contained and data-driven
    departments/    DepartmentPage template and its hero/overview
  data/             Typed dummy content (company, departments, services, team...)
  config/           Site config: name, URLs, contact details, socials
  lib/              cn(), motion variants, accent class maps, icon registry, mock API
  hooks/            Small reusable hooks
  types/            Shared TypeScript interfaces
```

## Design system

- **Tokens** are defined once in `globals.css` under `@theme` (brand colors, fonts, keyframes). Components never use raw hex values.
- **Tones**: a section sets `tone-dark` or `tone-light`, and children use the semantic utilities `text-fg`, `text-muted`, `border-line`, `bg-surface`. That is how the same card works on light and dark backgrounds.
- **Accents**: per-department colors are mapped in `src/lib/accent.ts` so Tailwind can see every class at build time.
- **Motion**: all variants live in `src/lib/motion.ts`. `MotionProvider` honours `prefers-reduced-motion`.

## Replacing dummy data

Everything visible on the site comes from `src/data/*` and `src/config/site.ts`:

1. Update `src/config/site.ts` with the real company name, URL, contact details and socials.
2. Replace the arrays in `src/data` (departments, services, case studies, testimonials, team, FAQs, posts, tools, engagement models). The types in `src/types` tell you the required shape.
3. Icons are referenced by name; add new ones to the registry in `src/lib/icons.ts`.
4. Swap the mocked functions in `src/lib/api.ts` for real requests. The form components only depend on those signatures.

No component changes are needed to go from dummy to real content.

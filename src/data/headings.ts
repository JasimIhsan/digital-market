import type { Heading } from "@/types";

/* Section headings for the home page, keyed by section. */
export const homeHeadings = {
  departments: {
    eyebrow: "Departments",
    title: "Three disciplines, one accountable team.",
    description:
      "Each department is a specialist practice in its own right. Together they remove the hand-offs that slow growth down.",
  },
  services: {
    eyebrow: "Services",
    title: "Everything a growth-stage company needs, under one roof.",
    description:
      "From demand generation to the systems that run it, a selection of what we do most often.",
  },
  process: {
    eyebrow: "How we work",
    title: "A simple rhythm that keeps strategy and delivery in step.",
  },
  stats: {
    eyebrow: "Impact",
    title: "Numbers our clients hold us to.",
  },
  work: {
    eyebrow: "Selected work",
    title: "Results we're proud to put our name on.",
    description: "A few recent engagements across marketing, consulting and software.",
  },
  tools: {
    eyebrow: "Tooling",
    title: "Technology we trust in production.",
    description: "Boring where it should be, cutting-edge where it counts.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What it's like to work with us.",
  },
  team: {
    eyebrow: "Leadership",
    title: "Senior people, personally involved.",
    description: "Every engagement is led by someone who has done the job in-house.",
  },
  engagement: {
    eyebrow: "Engagement models",
    title: "Work with us the way that fits.",
    description: "Transparent pricing models with no hidden hours.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions we hear most.",
  },
  insights: {
    eyebrow: "Insights",
    title: "Thinking from the team.",
    description: "Practical notes on marketing, strategy and building software.",
  },
} satisfies Record<string, Heading>;

/* Copy for the department template; `name` is the department's short name. */
export const departmentCopy = {
  secondaryCta: { label: "View services", href: "#services" },
  headings: (name: string) => {
    const lower = name.toLowerCase();
    return {
      overview: { eyebrow: "Overview", title: `How our ${lower} practice works` },
      services: { eyebrow: "Services", title: `What ${lower} delivers` },
      process: { eyebrow: "Process", title: `How a ${lower} engagement runs` },
      tools: { eyebrow: "Tooling", title: `Tools the ${lower} team relies on` },
      work: { eyebrow: "Case studies", title: `${name} work in the wild` },
      stats: { eyebrow: "Results", title: `${name} by the numbers` },
      testimonials: { eyebrow: "Clients", title: `What ${lower} clients say` },
      faq: { eyebrow: "FAQ", title: `${name} questions, answered` },
    } satisfies Record<string, Heading>;
  },
};

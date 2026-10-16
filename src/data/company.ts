import type { CallToAction, Stat } from "@/types";

export const hero = {
  eyebrow: "Marketing, consulting and software, one partner",
  headline: "We build the growth engine behind ambitious brands.",
  subheadline:
    "Nexora unites performance marketing, strategic consulting and custom software so your strategy, story and systems move as one.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/#work" },
};

export const heroStats: Stat[] = [
  { value: 180, suffix: "+", label: "Brands scaled" },
  { value: 4.6, prefix: "", suffix: "x", label: "Average ROAS" },
  { value: 12, suffix: " yrs", label: "In market" },
];

export const about = {
  eyebrow: "Who we are",
  title: "One team across strategy, story and systems.",
  story:
    "Nexora started as a two-person performance agency in 2014. Clients kept asking the same question after campaigns worked: what next? Today we are a 90-person growth partner whose marketers, consultants and engineers plan, build and scale together.",
  mission: {
    title: "Mission",
    description:
      "Turn ambitious goals into measurable growth by connecting the people who plan, the people who tell the story and the people who build.",
  },
  vision: {
    title: "Vision",
    description:
      "A world where every company, not only the largest, has access to a growth team that thinks and ships like an in-house product team.",
  },
  values: ["Outcomes over output", "Radical clarity", "Craft at speed", "Shared wins"],
};

export const impactStats: Stat[] = [
  { value: 420, prefix: "$", suffix: "M", label: "Client revenue influenced" },
  { value: 96, suffix: "%", label: "Client retention" },
  { value: 310, suffix: "+", label: "Products and campaigns shipped" },
  { value: 38, label: "Countries served" },
];

export const clients = [
  "Northwind",
  "Lumen Labs",
  "Atlas Health",
  "Veridian",
  "Orbit Pay",
  "Harbor & Co",
  "Kestrel",
  "Mosaic Retail",
];

export const finalCta: CallToAction = {
  title: "Ready to build what's next?",
  description:
    "Tell us where you want to be in twelve months. We'll bring the plan, the people and the platform to get there.",
  buttonLabel: "Book a strategy call",
};

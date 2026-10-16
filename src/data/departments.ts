import type { Department, DepartmentSlug } from "@/types";

export const departments: Department[] = [
  {
    slug: "marketing",
    name: "Digital Marketing",
    shortName: "Marketing",
    icon: "megaphone",
    tagline: "Demand that compounds.",
    summary:
      "Full-funnel marketing from brand to performance, run by specialists who are measured on your revenue, not your impressions.",
    overview: [
      "Our marketing department pairs senior strategists with channel specialists in search, paid media, social, content and lifecycle. Every engagement starts with a measurement plan so creative and spend decisions are driven by real outcomes.",
      "We work as an extension of your team: weekly experiments, shared dashboards and a quarterly roadmap that ties marketing to the goals the business actually cares about.",
    ],
    stats: [
      { value: 4.6, suffix: "x", label: "Average blended ROAS" },
      { value: 68, suffix: "%", label: "Avg. organic traffic lift, year one" },
      { value: 120, suffix: "+", label: "Active campaigns managed" },
    ],
    process: [
      {
        title: "Audit and measurement plan",
        description:
          "We map your funnel, fix tracking and agree the metrics that define success before a dollar is spent.",
      },
      {
        title: "Positioning and creative",
        description:
          "Messaging, offers and creative systems built for testing across every channel.",
      },
      {
        title: "Launch and experiment",
        description:
          "Structured weekly experiments across search, paid social, content and email.",
      },
      {
        title: "Scale what works",
        description:
          "Winning channels get more budget and automation; losing ones are cut quickly.",
      },
    ],
    faqs: [
      {
        question: "Do you manage ad spend or only strategy?",
        answer:
          "Both. Most clients ask us to own strategy, creative and day-to-day execution. We can also audit and coach an in-house team.",
      },
      {
        question: "What minimum ad budget do you work with?",
        answer:
          "Performance engagements usually start at $15k per month in media spend, but brand, SEO and content work is scoped independently of ad budget.",
      },
      {
        question: "How quickly will we see results?",
        answer:
          "Paid channels typically show signal within the first 30 days. SEO and content compound over three to six months.",
      },
    ],
    cta: {
      title: "Let's make every channel earn its place.",
      description:
        "Get a free 45-minute marketing audit with specific recommendations for your funnel.",
      buttonLabel: "Request an audit",
    },
  },
  {
    slug: "consulting",
    name: "Consulting",
    shortName: "Consulting",
    icon: "compass",
    tagline: "Clarity before scale.",
    summary:
      "Strategy, transformation and analytics engagements that give leadership teams a clear plan and the operating rhythm to deliver it.",
    overview: [
      "Our consultants come from operating roles, not slide decks. We help founders and executives decide where to play, redesign how work gets done and build the data foundations that keep decisions honest.",
      "Because we sit next to our marketing and software teams, recommendations come with people who can execute them, which keeps strategy from dying in a PDF.",
    ],
    stats: [
      { value: 140, suffix: "+", label: "Strategy engagements" },
      { value: 27, suffix: "%", label: "Avg. operating margin gain" },
      { value: 9, suffix: " wks", label: "Median time to first decision" },
    ],
    process: [
      {
        title: "Discovery",
        description:
          "Interviews, data review and market analysis to establish where you are and what's holding you back.",
      },
      {
        title: "Options and decision",
        description:
          "Two or three clearly costed strategic paths with trade-offs, not a single recommendation you can't interrogate.",
      },
      {
        title: "Roadmap",
        description:
          "A sequenced plan with owners, milestones and the metrics that tell you it's working.",
      },
      {
        title: "Embedded delivery",
        description:
          "We stay through implementation, running the cadence and course-correcting with your leadership team.",
      },
    ],
    faqs: [
      {
        question: "What size of company do you work with?",
        answer:
          "Typically growth-stage companies from $5M to $250M in revenue, including venture-backed scale-ups and family-owned businesses modernising their operations.",
      },
      {
        question: "Is this a one-off project or ongoing?",
        answer:
          "Discovery and strategy engagements run six to twelve weeks. Many clients then keep a fractional strategy lead on retainer.",
      },
      {
        question: "Can you help with data and analytics specifically?",
        answer:
          "Yes. Analytics strategy, KPI design, data warehouse planning and dashboarding are a core practice, often delivered with our software team.",
      },
    ],
    cta: {
      title: "Make the next big decision with confidence.",
      description:
        "Book a discovery conversation with a senior consultant. No pitch deck, just hard questions.",
      buttonLabel: "Book discovery call",
    },
  },
  {
    slug: "software",
    name: "Software",
    shortName: "Software",
    icon: "cpu",
    tagline: "Products that ship.",
    summary:
      "Custom web, mobile and AI products engineered by senior teams who care as much about maintainability as they do about launch day.",
    overview: [
      "Our software department designs and builds digital products end to end: discovery, UX, architecture, engineering, cloud and ongoing operation. Teams are small, senior and accountable for outcomes, not hours.",
      "We favour boring, well-understood technology, strong typing and automated testing, so what we hand over is something your own engineers will be happy to inherit.",
    ],
    stats: [
      { value: 85, suffix: "+", label: "Products launched" },
      { value: 99.95, suffix: "%", label: "Average platform uptime" },
      { value: 3, suffix: " wks", label: "Typical first release" },
    ],
    process: [
      {
        title: "Product discovery",
        description:
          "Workshops, user research and prototyping to validate the thing worth building.",
      },
      {
        title: "Design and architecture",
        description:
          "UX flows, a design system and a technical architecture that scales without surprises.",
      },
      {
        title: "Iterative delivery",
        description:
          "Two-week sprints with working software demoed every cycle and shipped behind feature flags.",
      },
      {
        title: "Operate and evolve",
        description:
          "Observability, SLAs and a roadmap so the product keeps improving after launch.",
      },
    ],
    faqs: [
      {
        question: "Which technologies do you use?",
        answer:
          "TypeScript across the stack with React, Next.js and React Native; Node or Python services; Postgres; and AWS or GCP. We'll recommend what fits your team.",
      },
      {
        question: "Can you work with our existing engineers?",
        answer:
          "Absolutely. We regularly embed in client teams, pair on architecture and hand over with documentation and training.",
      },
      {
        question: "Do you build AI features?",
        answer:
          "Yes. From retrieval-augmented assistants to automation pipelines, we build AI features with evaluation and guardrails from day one.",
      },
    ],
    cta: {
      title: "Have a product in mind?",
      description:
        "Share the idea and we'll come back with a scoped plan, timeline and a senior team ready to start.",
      buttonLabel: "Scope my product",
    },
  },
];

export const departmentSlugs: DepartmentSlug[] = departments.map((d) => d.slug);

export function departmentHref(slug: DepartmentSlug): string {
  return `/departments/${slug}`;
}

export function getDepartment(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

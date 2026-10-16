import type { EngagementModel } from "@/types";

export const engagementModels: EngagementModel[] = [
  {
    name: "Project",
    description: "A fixed scope with a clear outcome, timeline and price.",
    startingAt: "From $25k",
    features: [
      "Defined deliverables",
      "Dedicated lead",
      "Fixed timeline",
      "Handover and training",
    ],
  },
  {
    name: "Retainer",
    description: "Ongoing growth work with a monthly plan and shared dashboards.",
    startingAt: "From $8k / month",
    features: [
      "Monthly roadmap",
      "Cross-department pod",
      "Weekly experiments",
      "Quarterly strategy review",
    ],
    highlighted: true,
  },
  {
    name: "Embedded team",
    description: "Senior specialists working inside your organisation.",
    startingAt: "Custom",
    features: [
      "Full-time or fractional",
      "Your tools and rituals",
      "Flexible scaling",
      "Knowledge transfer",
    ],
  },
];

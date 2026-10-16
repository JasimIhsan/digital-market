export const contactCopy = {
  eyebrow: "Contact",
  title: "Tell us about your next move.",
  description:
    "Share a few details and a senior member of the team will reply within one business day.",
  successTitle: "Thanks, we've got it.",
  successDescription: "Expect a reply from a senior team member within one business day.",
};

export const interestOptions = [
  { value: "marketing", label: "Digital marketing" },
  { value: "consulting", label: "Consulting" },
  { value: "software", label: "Software" },
  { value: "multiple", label: "More than one" },
] as const;

export const budgetOptions = [
  { value: "under-25k", label: "Under $25k" },
  { value: "25k-75k", label: "$25k to $75k" },
  { value: "75k-200k", label: "$75k to $200k" },
  { value: "over-200k", label: "Over $200k" },
] as const;

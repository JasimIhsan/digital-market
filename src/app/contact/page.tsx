import type { Metadata } from "next";
import { contactCopy } from "@/data/contact";
import { ContactSection } from "@/components/sections/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: contactCopy.description,
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}

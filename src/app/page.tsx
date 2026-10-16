import { featuredServices } from "@/data/services";
import { companyProcess } from "@/data/process";
import { impactStats, finalCta } from "@/data/company";
import { caseStudies } from "@/data/case-studies";
import { tools } from "@/data/tools";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { homeHeadings } from "@/data/headings";
import { Hero } from "@/components/sections/hero/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { About } from "@/components/sections/about";
import { DepartmentsOverview } from "@/components/sections/departments/departments-overview";
import { ServicesSection } from "@/components/sections/services/services-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CaseStudiesSection } from "@/components/sections/case-studies/case-studies-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { TeamSection } from "@/components/sections/team/team-section";
import { EngagementSection } from "@/components/sections/engagement-section";
import { FaqSection } from "@/components/sections/faq-section";
import { InsightsSection } from "@/components/sections/insights/insights-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <About />
      <DepartmentsOverview />
      <ServicesSection heading={homeHeadings.services} services={featuredServices} />
      <ProcessSection heading={homeHeadings.process} steps={companyProcess} />
      <StatsSection heading={homeHeadings.stats} stats={impactStats} />
      <CaseStudiesSection heading={homeHeadings.work} items={caseStudies} />
      <TechStackSection heading={homeHeadings.tools} tools={tools} />
      <TestimonialsSection heading={homeHeadings.testimonials} items={testimonials} />
      <TeamSection />
      <EngagementSection />
      <FaqSection heading={homeHeadings.faq} items={faqs} />
      <InsightsSection />
      <CtaBanner cta={finalCta} />
      <ContactSection />
    </>
  );
}

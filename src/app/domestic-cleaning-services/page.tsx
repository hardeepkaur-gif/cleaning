import type { Metadata } from "next";
import DomesticHero from "@/components/domestic/DomesticHero";
import HomeTrustLogos from "@/components/trust/HomeTrustLogos";
import DomesticProfessionalSection from "@/components/domestic/DomesticProfessionalSection";
import DomesticServicesTimelineSection from "@/components/domestic/DomesticServicesTimelineSection";
import DomesticCtaSection from "@/components/domestic/DomesticCtaSection";
import DomesticChecklistSection from "@/components/domestic/DomesticChecklistSection";
import DomesticAdditionalCtaSection from "@/components/domestic/DomesticAdditionalCtaSection";
import DomesticPricingSection from "@/components/domestic/DomesticPricingSection";
import DomesticFinalCtaSection from "@/components/domestic/DomesticFinalCtaSection";
import AboutReviewsSection from "@/components/about/AboutReviewsSection";
import DomesticFaqSection from "@/components/domestic/DomesticFaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { domesticPageSchema } from "@/lib/pageSchemas";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Domestic Cleaning Services London DBS Checked Local Cleaners",
  description:
    "Book domestic cleaning services London with DBS-checked, insured cleaners. Weekly, fortnightly, and one-off home cleaning with fixed pricing across London.",
  alternates: {
    canonical: "/domestic-cleaning-services",
  },
};

export default function DomesticCleaningServicesPage() {
  return (
    <>
      <JsonLd data={domesticPageSchema} />
      <main className={styles.page}>
        <DomesticHero />
        <HomeTrustLogos />
        <DomesticServicesTimelineSection />
        <DomesticProfessionalSection />
        <DomesticCtaSection />
        <DomesticChecklistSection />
        <DomesticAdditionalCtaSection />
        <DomesticPricingSection />
        <DomesticFinalCtaSection />
        <AboutReviewsSection />
        <DomesticFaqSection />
      </main>
    </>
  );
}

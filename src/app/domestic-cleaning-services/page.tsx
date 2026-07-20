import type { Metadata } from "next";
import DomesticHero from "@/components/domestic/DomesticHero";
import DomesticTrustStrip from "@/components/domestic/DomesticTrustStrip";
import DomesticProfessionalSection from "@/components/domestic/DomesticProfessionalSection";
import DomesticServicesTimelineSection from "@/components/domestic/DomesticServicesTimelineSection";
import DomesticCtaSection from "@/components/domestic/DomesticCtaSection";
import DomesticCleaningHoursSection from "@/components/domestic/DomesticCleaningHoursSection";
import DomesticChecklistSection from "@/components/domestic/DomesticChecklistSection";
import DomesticAdditionalCtaSection from "@/components/domestic/DomesticAdditionalCtaSection";
import DomesticVsDeepSection from "@/components/domestic/DomesticVsDeepSection";
import DomesticAtHomeSection from "@/components/domestic/DomesticAtHomeSection";
import DomesticPricingSection from "@/components/domestic/DomesticPricingSection";
import DomesticWhyChooseSection from "@/components/domestic/DomesticWhyChooseSection";
import DomesticPrepareSection from "@/components/domestic/DomesticPrepareSection";
import DomesticFinalCtaSection from "@/components/domestic/DomesticFinalCtaSection";
import DomesticFaqSection from "@/components/domestic/DomesticFaqSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Domestic Cleaning Services London DBS Checked Local Cleaners",
  description:
    "Book domestic cleaning services London with DBS-checked, insured cleaners. Weekly, fortnightly, and one-off home cleaning with fixed pricing across London.",
};

export default function DomesticCleaningServicesPage() {
  return (
    <main className={styles.page}>
      <DomesticHero />
      <DomesticTrustStrip />
      <DomesticProfessionalSection />
      <DomesticServicesTimelineSection />
      <DomesticCtaSection />
      <DomesticCleaningHoursSection />
      <DomesticChecklistSection />
      <DomesticAdditionalCtaSection />
      <DomesticVsDeepSection />
      <DomesticAtHomeSection />
      <DomesticPricingSection />
      <DomesticWhyChooseSection />
      <DomesticPrepareSection />
      <DomesticFinalCtaSection />
      <DomesticFaqSection />
    </main>
  );
}

import type { Metadata } from "next";
import CarpetHero from "@/components/carpet/CarpetHero";
import HomeTrustLogos from "@/components/trust/HomeTrustLogos";
import CarpetCtaSection from "@/components/carpet/CarpetCtaSection";
import CarpetServicesSection from "@/components/carpet/CarpetServicesSection";
import CarpetAdditionalCtaSection from "@/components/carpet/CarpetAdditionalCtaSection";
import CarpetStainsSection from "@/components/carpet/CarpetStainsSection";
import CarpetFrequencySection from "@/components/carpet/CarpetFrequencySection";
import CarpetPricingSection from "@/components/carpet/CarpetPricingSection";
import CarpetMethodsSection from "@/components/carpet/CarpetMethodsSection";
import CarpetChooseSection from "@/components/carpet/CarpetChooseSection";
import CarpetAreasSection from "@/components/carpet/CarpetAreasSection";
import CarpetProcessSection from "@/components/carpet/CarpetProcessSection";
import AboutReviewsSection from "@/components/about/AboutReviewsSection";
import CarpetFaqSection from "@/components/carpet/CarpetFaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { carpetPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Carpet Cleaning London From £30 | Professional Local Cleaners",
  description:
    "Book carpet cleaning London with DBS-checked, insured cleaners. Steam carpet cleaning, stain removal, fixed pricing and London wide coverage.",
  alternates: {
    canonical: "/carpet-cleaning-london",
  },
};

export default function CarpetCleaningPage() {
  return (
    <>
      <JsonLd data={carpetPageSchema} />
      <main>
        <CarpetHero />
        <HomeTrustLogos />
        <CarpetServicesSection />
        <CarpetAdditionalCtaSection />
        <CarpetStainsSection />
        <CarpetFrequencySection />
        <CarpetPricingSection />
        <CarpetMethodsSection />
        <CarpetChooseSection />
        <CarpetAreasSection />
        <CarpetProcessSection />
        <CarpetCtaSection />
        <AboutReviewsSection />
        <CarpetFaqSection />
      </main>
    </>
  );
}

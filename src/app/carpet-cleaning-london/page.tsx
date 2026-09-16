import type { Metadata } from "next";
import CarpetHero from "@/components/carpet/CarpetHero";
import CarpetTrustStrip from "@/components/carpet/CarpetTrustStrip";
import CarpetCtaSection from "@/components/carpet/CarpetCtaSection";
import CarpetServicesSection from "@/components/carpet/CarpetServicesSection";
import CarpetAdditionalCtaSection from "@/components/carpet/CarpetAdditionalCtaSection";
import CarpetStainsSection from "@/components/carpet/CarpetStainsSection";
import CarpetFrequencySection from "@/components/carpet/CarpetFrequencySection";
import CarpetPricingSection from "@/components/carpet/CarpetPricingSection";
import CarpetPricingCtaSection from "@/components/carpet/CarpetPricingCtaSection";
import CarpetMethodsSection from "@/components/carpet/CarpetMethodsSection";
import CarpetChooseSection from "@/components/carpet/CarpetChooseSection";
import CarpetBenefitsSection from "@/components/carpet/CarpetBenefitsSection";
import CarpetAreasSection from "@/components/carpet/CarpetAreasSection";
import CarpetAreasCtaSection from "@/components/carpet/CarpetAreasCtaSection";
import CarpetProcessSection from "@/components/carpet/CarpetProcessSection";
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
      <CarpetTrustStrip />
      <CarpetCtaSection />
      <CarpetServicesSection />
      <CarpetAdditionalCtaSection />
      <CarpetStainsSection />
      <CarpetFrequencySection />
      <CarpetPricingSection />
      <CarpetPricingCtaSection />
      <CarpetMethodsSection />
      <CarpetChooseSection />
      <CarpetBenefitsSection />
      <CarpetAreasSection />
      <CarpetAreasCtaSection />
      <CarpetProcessSection />
      <CarpetFaqSection />
    </main>
    </>
  );
}

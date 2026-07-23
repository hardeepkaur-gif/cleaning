import type { Metadata } from "next";
import CarpetHero from "@/components/carpet/CarpetHero";
import CarpetTrustStrip from "@/components/carpet/CarpetTrustStrip";
import CarpetCtaSection from "@/components/carpet/CarpetCtaSection";
import CarpetIncludedSection from "@/components/carpet/CarpetIncludedSection";
import CarpetServicesSection from "@/components/carpet/CarpetServicesSection";
import CarpetAdditionalCtaSection from "@/components/carpet/CarpetAdditionalCtaSection";
import CarpetStainsSection from "@/components/carpet/CarpetStainsSection";
import CarpetFrequencySection from "@/components/carpet/CarpetFrequencySection";
import CarpetPricingSection from "@/components/carpet/CarpetPricingSection";
import CarpetPricingCtaSection from "@/components/carpet/CarpetPricingCtaSection";
import CarpetMethodsSection from "@/components/carpet/CarpetMethodsSection";
import CarpetChooseSection from "@/components/carpet/CarpetChooseSection";
import CarpetCheapSection from "@/components/carpet/CarpetCheapSection";
import CarpetMovingSection from "@/components/carpet/CarpetMovingSection";
import CarpetBenefitsSection from "@/components/carpet/CarpetBenefitsSection";
import CarpetAreasSection from "@/components/carpet/CarpetAreasSection";
import CarpetProcessSection from "@/components/carpet/CarpetProcessSection";
import CarpetCareTipsSection from "@/components/carpet/CarpetCareTipsSection";
import CarpetReadyCtaSection from "@/components/carpet/CarpetReadyCtaSection";
import CarpetFaqSection from "@/components/carpet/CarpetFaqSection";
import CarpetWorthItAltSection from "@/components/carpet/CarpetWorthItAltSection";

export const metadata: Metadata = {
  title: "Carpet Cleaning London In £30 | Professional Local Cleaners",
  description:
    "Book carpet cleaning London with DBS-checked, insured cleaners. Steam carpet cleaning, stain removal, fixed pricing and East London coverage.",
};

export default function CarpetCleaningPage() {
  return (
    <main>
      <CarpetHero />
      <CarpetTrustStrip />
      <CarpetCtaSection />
      <CarpetIncludedSection />
      <CarpetServicesSection />
      <CarpetAdditionalCtaSection />
      <CarpetStainsSection />
      <CarpetWorthItAltSection />
      <CarpetFrequencySection />
      <CarpetPricingSection />
      <CarpetPricingCtaSection />
      <CarpetMethodsSection />
      <CarpetChooseSection />
      <CarpetCheapSection />
      <CarpetMovingSection />
      <CarpetBenefitsSection />
      <CarpetAreasSection />
      <CarpetProcessSection />
      <CarpetCareTipsSection />
      <CarpetReadyCtaSection />
      <CarpetFaqSection />
    </main>
  );
}

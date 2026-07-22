import type { Metadata } from "next";
import CarpetHero from "@/components/carpet/CarpetHero";
import CarpetTrustStrip from "@/components/carpet/CarpetTrustStrip";
import CarpetCtaSection from "@/components/carpet/CarpetCtaSection";
import CarpetIncludedSection from "@/components/carpet/CarpetIncludedSection";
import CarpetServicesSection from "@/components/carpet/CarpetServicesSection";
import CarpetAdditionalCtaSection from "@/components/carpet/CarpetAdditionalCtaSection";
import CarpetStainsSection from "@/components/carpet/CarpetStainsSection";
import CarpetWorthItSection from "@/components/carpet/CarpetWorthItSection";
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
  title: "Expert Carpet Cleaning London for Homes, Flats and Offices",
  description:
    "Professional carpet cleaning London with deep steam cleaning and stain removal. Fixed quotations for homes, flats and offices across London.",
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
      <CarpetWorthItSection />
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

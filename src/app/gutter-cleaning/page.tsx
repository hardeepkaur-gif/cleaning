import type { Metadata } from "next";
import GutterHero from "@/components/gutter/GutterHero";
import GutterTrustStrip from "@/components/gutter/GutterTrustStrip";
import GutterIncludedSection from "@/components/gutter/GutterIncludedSection";
import GutterWhySection from "@/components/gutter/GutterWhySection";
import GutterCausesSection from "@/components/gutter/GutterCausesSection";
import GutterCtaSection from "@/components/gutter/GutterCtaSection";
import GutterSignsSection from "@/components/gutter/GutterSignsSection";
import GutterFrequencySection from "@/components/gutter/GutterFrequencySection";
import GutterWarningCtaSection from "@/components/gutter/GutterWarningCtaSection";
import GutterResidentialSection from "@/components/gutter/GutterResidentialSection";
import GutterCommercialSection from "@/components/gutter/GutterCommercialSection";
import GutterPricingSection from "@/components/gutter/GutterPricingSection";
import GutterWhyChooseSection from "@/components/gutter/GutterWhyChooseSection";
import GutterProcessSection from "@/components/gutter/GutterProcessSection";
import GutterAreasSection from "@/components/gutter/GutterAreasSection";
import GutterAreasCtaSection from "@/components/gutter/GutterAreasCtaSection";
import GutterFaqSection from "@/components/gutter/GutterFaqSection";
import GutterReadyCtaSection from "@/components/gutter/GutterReadyCtaSection";

export const metadata: Metadata = {
  title: "Gutter Cleaning London | Trusted Local Gutter Cleaners",
  description:
    "Book gutter cleaning London with insured local cleaners. Clear blocked gutters, remove leaves and debris, check downpipes and protect your home from damp.",
};

export default function GutterCleaningPage() {
  return (
    <main>
      <GutterHero />
      <GutterTrustStrip />
      <GutterIncludedSection />
      <GutterWhySection />
      <GutterReadyCtaSection />
      <GutterFrequencySection />
      <GutterCausesSection />
      <GutterCtaSection />
      <GutterSignsSection />
      <GutterWarningCtaSection />
      <GutterResidentialSection />
      <GutterCommercialSection />
      <GutterProcessSection />
      <GutterPricingSection />
      <GutterWhyChooseSection />
      <GutterAreasSection />
      <GutterAreasCtaSection />
      <GutterFaqSection />
    </main>
  );
}

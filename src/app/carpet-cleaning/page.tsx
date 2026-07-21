import type { Metadata } from "next";
import CarpetHero from "@/components/carpet/CarpetHero";
import CarpetTrustStrip from "@/components/carpet/CarpetTrustStrip";
import CarpetCtaSection from "@/components/carpet/CarpetCtaSection";
import CarpetIncludedSection from "@/components/carpet/CarpetIncludedSection";
import CarpetServicesSection from "@/components/carpet/CarpetServicesSection";
import CarpetAdditionalCtaSection from "@/components/carpet/CarpetAdditionalCtaSection";
import CarpetStainsSection from "@/components/carpet/CarpetStainsSection";
import CarpetWorthItSection from "@/components/carpet/CarpetWorthItSection";

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
    </main>
  );
}

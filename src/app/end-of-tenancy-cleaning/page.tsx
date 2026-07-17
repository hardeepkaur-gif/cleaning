import type { Metadata } from "next";
import TenancyHero from "@/components/tenancy/TenancyHero";
import TenancyProfessionalSection from "@/components/tenancy/TenancyProfessionalSection";
import TenancyMattersTimelineSection from "@/components/tenancy/TenancyMattersTimelineSection";
import TenancyIncludedSection from "@/components/tenancy/TenancyIncludedSection";
import TenancyIncludedCtaSection from "@/components/tenancy/TenancyIncludedCtaSection";
import TenancyChecklistAltSection from "@/components/tenancy/TenancyChecklistAltSection";
import TenancyCtaSection from "@/components/tenancy/TenancyCtaSection";
import TenancyPricingSection from "@/components/tenancy/TenancyPricingSection";
import TenancyPricingCtaSection from "@/components/tenancy/TenancyPricingCtaSection";
import TenancyDepositGuideSection from "@/components/tenancy/TenancyDepositGuideSection";
import TenancyWhoUsesAltSection from "@/components/tenancy/TenancyWhoUsesAltSection";
import TenancyProcessSection from "@/components/tenancy/TenancyProcessSection";
import TenancyPrepareSection from "@/components/tenancy/TenancyPrepareSection";
import TenancyOptionalServicesSection from "@/components/tenancy/TenancyOptionalServicesSection";
import TenancyWhyChooseAltSection from "@/components/tenancy/TenancyWhyChooseAltSection";
import TenancyAreasSection from "@/components/tenancy/TenancyAreasSection";
import TenancyFaqSection from "@/components/tenancy/TenancyFaqSection";

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning London 14 Days Guarantee",
  description:
    "Book end of tenancy cleaning in London with fixed pricing, DBS-checked cleaners, oven cleaning included and a 14-day re-clean guarantee.",
};

export default function EndOfTenancyCleaningPage() {
  return (
    <main>
      <TenancyHero />
      <TenancyProfessionalSection />
      <TenancyMattersTimelineSection />
      <TenancyIncludedSection />
      <TenancyIncludedCtaSection />
      <TenancyChecklistAltSection />
      <TenancyCtaSection />
      <TenancyPricingSection />
      <TenancyPricingCtaSection />
      <TenancyDepositGuideSection />
      <TenancyWhoUsesAltSection />
      <TenancyProcessSection />
      <TenancyPrepareSection />
      <TenancyOptionalServicesSection />
      <TenancyWhyChooseAltSection />
      <TenancyAreasSection />
      <TenancyFaqSection />
    </main>
  );
}

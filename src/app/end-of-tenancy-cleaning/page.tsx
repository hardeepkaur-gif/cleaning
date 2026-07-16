import type { Metadata } from "next";
import TenancyHero from "@/components/tenancy/TenancyHero";
import TenancyProfessionalSection from "@/components/tenancy/TenancyProfessionalSection";
import TenancyMattersTimelineSection from "@/components/tenancy/TenancyMattersTimelineSection";
import TenancyIncludedSection from "@/components/tenancy/TenancyIncludedSection";
import TenancyIncludedCtaSection from "@/components/tenancy/TenancyIncludedCtaSection";
import TenancyDepositSection from "@/components/tenancy/TenancyDepositSection";
import TenancyChecklistSection from "@/components/tenancy/TenancyChecklistSection";
import TenancyChecklistAltSection from "@/components/tenancy/TenancyChecklistAltSection";
import TenancyChecklistProSection from "@/components/tenancy/TenancyChecklistProSection";
import TenancyChecklistInteractiveSection from "@/components/tenancy/TenancyChecklistInteractiveSection";
import TenancyChecklistRoomsSection from "@/components/tenancy/TenancyChecklistRoomsSection";
import TenancyCtaSection from "@/components/tenancy/TenancyCtaSection";
import TenancyPricingSection from "@/components/tenancy/TenancyPricingSection";
import TenancyPricingCtaSection from "@/components/tenancy/TenancyPricingCtaSection";
import TenancyDepositGuideSection from "@/components/tenancy/TenancyDepositGuideSection";
import TenancyWhoUsesSection from "@/components/tenancy/TenancyWhoUsesSection";
import TenancyWhoUsesAltSection from "@/components/tenancy/TenancyWhoUsesAltSection";
import TenancyProcessSection from "@/components/tenancy/TenancyProcessSection";
import TenancyPrepareSection from "@/components/tenancy/TenancyPrepareSection";
import TenancyOptionalServicesSection from "@/components/tenancy/TenancyOptionalServicesSection";
import TenancyWhyChooseSection from "@/components/tenancy/TenancyWhyChooseSection";
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
      <TenancyDepositSection />
      <TenancyChecklistSection />
      <TenancyChecklistAltSection />
      <TenancyChecklistProSection />
      <TenancyChecklistInteractiveSection />
      <TenancyChecklistRoomsSection />
      <TenancyCtaSection />
      <TenancyPricingSection />
      <TenancyPricingCtaSection />
      <TenancyDepositGuideSection />
      <TenancyWhoUsesSection />
      <TenancyWhoUsesAltSection />
      <TenancyProcessSection />
      <TenancyPrepareSection />
      <TenancyOptionalServicesSection />
      <TenancyWhyChooseSection />
      <TenancyWhyChooseAltSection />
      <TenancyAreasSection />
      <TenancyFaqSection />
    </main>
  );
}

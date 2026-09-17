import type { Metadata } from "next";
import TenancyHero from "@/components/tenancy/TenancyHero";
import HomeTrustLogos from "@/components/trust/HomeTrustLogos";
import TenancyProfessionalSection from "@/components/tenancy/TenancyProfessionalSection";
import TenancyMattersTimelineSection from "@/components/tenancy/TenancyMattersTimelineSection";
import TenancyIncludedCtaSection from "@/components/tenancy/TenancyIncludedCtaSection";
import TenancyChecklistAltSection from "@/components/tenancy/TenancyChecklistAltSection";
import TenancyChecklistCardsSection from "@/components/tenancy/TenancyChecklistCardsSection";
import TenancyChecklistAccordionSection from "@/components/tenancy/TenancyChecklistAccordionSection";
import TenancyDepositGuideSection from "@/components/tenancy/TenancyDepositGuideSection";
import TenancyWhoUsesAltSection from "@/components/tenancy/TenancyWhoUsesAltSection";
import TenancyProcessSection from "@/components/tenancy/TenancyProcessSection";
import TenancyOptionalServicesSection from "@/components/tenancy/TenancyOptionalServicesSection";
import TenancyWhyChooseAltSection from "@/components/tenancy/TenancyWhyChooseAltSection";
import TenancyAreasSection from "@/components/tenancy/TenancyAreasSection";
import AboutReviewsSection from "@/components/about/AboutReviewsSection";
import TenancyFaqSection from "@/components/tenancy/TenancyFaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { tenancyPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning London With 14 Day Re-Clean Guarantee",
  description:
    "Book end of tenancy cleaning in London with fixed pricing, DBS-checked cleaners, oven cleaning included and a 14-day re-clean guarantee.",
  alternates: {
    canonical: "/end-of-tenancy-cleaning",
  },
};

export default function EndOfTenancyCleaningPage() {
  return (
    <>
      <JsonLd data={tenancyPageSchema} />
      <main>
        <TenancyHero />
        <HomeTrustLogos />
        <TenancyMattersTimelineSection />
        <TenancyChecklistAltSection />
        <TenancyChecklistCardsSection />
        <TenancyIncludedCtaSection />
        <TenancyChecklistAccordionSection />
        <TenancyProfessionalSection />
        <TenancyDepositGuideSection />
        <TenancyWhoUsesAltSection />
        <TenancyProcessSection />
        <TenancyOptionalServicesSection />
        <TenancyWhyChooseAltSection />
        <TenancyAreasSection />
        <AboutReviewsSection />
        <TenancyFaqSection />
      </main>
    </>
  );
}

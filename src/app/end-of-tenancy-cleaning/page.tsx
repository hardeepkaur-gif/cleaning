import type { Metadata } from "next";
import TenancyHero from "@/components/tenancy/TenancyHero";
import TenancyProfessionalSection from "@/components/tenancy/TenancyProfessionalSection";
import TenancyMattersTableSection from "@/components/tenancy/TenancyMattersTableSection";
import TenancyMattersSection from "@/components/tenancy/TenancyMattersSection";
import TenancyMattersTimelineSection from "@/components/tenancy/TenancyMattersTimelineSection";
import TenancyMattersHoverSection from "@/components/tenancy/TenancyMattersHoverSection";
import TenancyIncludedSection from "@/components/tenancy/TenancyIncludedSection";
import TenancyChecklistSection from "@/components/tenancy/TenancyChecklistSection";
import TenancyChecklistAltSection from "@/components/tenancy/TenancyChecklistAltSection";

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning London | Cheap Move-Out Cleaning",
  description:
    "Cheap end of tenancy cleaning London for tenants and landlords. Inspection-ready move-out cleans with fixed quotations based on your property size.",
};

export default function EndOfTenancyCleaningPage() {
  return (
    <main>
      <TenancyHero />
      <TenancyProfessionalSection />
      <TenancyMattersTableSection />
      <TenancyMattersSection />
      <TenancyMattersTimelineSection />
      <TenancyMattersHoverSection />
      <TenancyIncludedSection />
      <TenancyChecklistSection />
      <TenancyChecklistAltSection />
    </main>
  );
}

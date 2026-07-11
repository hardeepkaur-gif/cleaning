import type { Metadata } from "next";
import HeroCoreclean from "@/components/hero/HeroCoreclean";
import TenancyProfessionalSection from "@/components/tenancy/TenancyProfessionalSection";
import TenancyMattersSection from "@/components/tenancy/TenancyMattersSection";
import TenancyIncludedSection from "@/components/tenancy/TenancyIncludedSection";
import { servicesList } from "@/components/services/servicesData";

const tenancyService = servicesList.find((service) => service.label === "Tenancy");

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning London | Cheap Move-Out Cleaning",
  description:
    "Cheap end of tenancy cleaning London for tenants and landlords. Inspection-ready move-out cleans with fixed quotations based on your property size.",
};

export default function EndOfTenancyCleaningPage() {
  return (
    <main>
      <HeroCoreclean
        id="end-of-tenancy-cleaning"
        eyebrow="End of Tenancy Cleaning"
        title={
          <>
            Cheap End of Tenancy Cleaning <span>London</span> for Tenants and
            Landlords
          </>
        }
        description={
          <>
            <p>
              Moving out soon? End of tenancy cleaning London is one of the most
              common reasons tenants face deposit disputes, failed inspections and
              last-minute deductions. Our professional end of tenancy cleaning
              service in London helps tenants and landlords prepare properties for
              a smooth handover with a detailed move-out clean completed to
              inspection-ready standards.
            </p>
            <p>
              Book your end of tenancy cleaning today and receive a fixed
              quotation based on your property size and requirements.
            </p>
          </>
        }
        primaryCta={{ href: "/#contact", label: "Request a Quote" }}
        secondaryCta={{ href: "/#services", label: "View All Services" }}
        imageSrc={tenancyService?.tabImage}
        imageAlt="End of tenancy cleaning service in London"
      />
      <TenancyProfessionalSection />
      <TenancyMattersSection />
      <TenancyIncludedSection />
    </main>
  );
}

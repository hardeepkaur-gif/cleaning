import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesPageList from "@/components/services/ServicesPageList";
import { servicesPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Services | Cleaning Services London",
  description:
    "Services from Cleaning Services London — domestic cleaning, carpet cleaning, end of tenancy cleaning and gutter cleaning across London.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesPageSchema} />
      <main>
        <ServicesHero />
        <ServicesPageList />
      </main>
    </>
  );
}

import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesPageList from "@/components/services/ServicesPageList";

export const metadata: Metadata = {
  title: "Our Cleaning Services London | Domestic, Carpet, Tenancy & Gutter",
  description:
    "Explore all Cleaning Services London offers — domestic cleaning, carpet cleaning, end of tenancy cleaning and gutter cleaning across East London and Greater London.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesPageList />
    </main>
  );
}

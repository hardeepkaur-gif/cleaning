import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesPageList from "@/components/services/ServicesPageList";

export const metadata: Metadata = {
  title: "Services | Cleaning Services London",
  description:
    "Services from Cleaning Services London — domestic cleaning, carpet cleaning, end of tenancy cleaning and gutter cleaning across London.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesPageList />
    </main>
  );
}

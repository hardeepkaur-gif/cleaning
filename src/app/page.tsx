import Hero from "@/components/hero/Hero";
import HeroShowcase from "@/components/hero/HeroShowcase";
import HeroPromo from "@/components/hero/HeroPromo";
import HeroHomeThree from "@/components/hero/HeroHomeThree";
import HeroCoreclean from "@/components/hero/HeroCoreclean";
import HeroSpecialized from "@/components/hero/HeroSpecialized";
import AboutUs from "@/components/about/AboutUs";
import ServicesSection from "@/components/services/ServicesSection";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import ServicesTabs from "@/components/services/ServicesTabs";
import CtaSection from "@/components/cta/CtaSection";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HeroShowcase />
      <HeroPromo />
      <HeroHomeThree />
      <HeroCoreclean />
      <HeroSpecialized />
      <AboutUs />
      <ServicesSection />
      <ServicesShowcase />
      <ServicesTabs />
      <CtaSection />
    </main>
  );
}

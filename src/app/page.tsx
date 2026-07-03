import HeroCoreclean from "@/components/hero/HeroCoreclean";
import AboutUs from "@/components/about/AboutUs";
import ServicesSection from "@/components/services/ServicesSection";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServicesTabsIcons from "@/components/services/ServicesTabsIcons";
import WhyChooseUs from "@/components/why/WhyChooseUs";
import WhyChooseUsAlt from "@/components/why/WhyChooseUsAlt";
import CtaSection from "@/components/cta/CtaSection";
import CtaSectionAlt from "@/components/cta/CtaSectionAlt";
import CtaSectionThree from "@/components/cta/CtaSectionThree";
import WhatMakesDifferent from "@/components/different/WhatMakesDifferent";
import ProfessionalClean from "@/components/included/ProfessionalClean";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <HeroCoreclean />
      <AboutUs />
      <ServicesSection />
      <ServicesShowcase />
      <ServicesTabs />
      <ServicesTabsIcons />
      <CtaSection />
      <CtaSectionAlt />
      <CtaSectionThree />
      <WhyChooseUs />
      <WhyChooseUsAlt />
      <WhatMakesDifferent />
      <ProfessionalClean />
    </main>
  );
}

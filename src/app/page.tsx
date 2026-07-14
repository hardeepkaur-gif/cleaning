import HeroLeadForm from "@/components/hero/HeroLeadForm";
import HeroLeadFormSecond from "@/components/hero/HeroLeadFormSecond";
import AboutUs from "@/components/about/AboutUs";
import ServicesTabsIcons from "@/components/services/ServicesTabsIcons";
import WhyChooseUsAlt from "@/components/why/WhyChooseUsAlt";
import CtaSectionThree from "@/components/cta/CtaSectionThree";
import WhatMakesDifferent from "@/components/different/WhatMakesDifferent";
import ProfessionalClean from "@/components/included/ProfessionalClean";
import CtaSectionFour from "@/components/cta/CtaSectionFour";
import PricingSection from "@/components/pricing/PricingSection";
import TenancySection from "@/components/tenancy/TenancySection";
import VettedSection from "@/components/vetted/VettedSection";
import ProcessSectionFour from "@/components/process/ProcessSectionFour";
import AreasSection from "@/components/areas/AreasSection";
import FaqSection from "@/components/faq/FaqSection";

export default function HomePage() {
  return (
    <main>
      <HeroLeadForm />
      <HeroLeadFormSecond />
      <AboutUs />
      <ServicesTabsIcons />
      <CtaSectionThree />
      <WhyChooseUsAlt />
      <WhatMakesDifferent />
      <ProfessionalClean />
      <CtaSectionFour />
      <PricingSection />
      <TenancySection />
      <VettedSection />
      <ProcessSectionFour />
      <AreasSection />
      <FaqSection />
    </main>
  );
}

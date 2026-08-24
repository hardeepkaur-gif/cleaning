import type { IconType } from "react-icons";
import { FaCouch, FaHome, FaKey, FaWater } from "react-icons/fa";
import {
  PiCloudRainDuotone,
  PiHouseLineDuotone,
  PiKeyDuotone,
  PiRugDuotone,
} from "react-icons/pi";

const imgBase = "/images/services/cleanon";
const tabImgBase = "/images/services/cleanon-tabs";

export type ServiceData = {
  label: string;
  title: string;
  text: string;
  href: string;
  ctaLabel: string;
  icon: IconType;
  tabIcon: IconType;
  image: string;
  tabImage: string;
  tabImageAlt: string;
  heroImage: string;
  tabLines: [string, string];
};

export const servicesTagline = "Services";

export const servicesTitle = "Our Cleaning Services in London";

export const servicesPageTitle = "Services in London";

export const servicesPageIntro =
  "Explore our Services for homes, rental properties and businesses across London. Our Services include domestic cleaning, carpet cleaning, end of tenancy cleaning and gutter cleaning.";

export const servicesIntro = "The Cleaning Services London offers:";

export const servicesTabsTagline = "Our Services";

export const servicesTabsTitle = "Our Cleaning Services in London";

export const servicesTabsIntro = servicesIntro;

export const servicesList: ServiceData[] = [
  {
    label: "Domestic",
    title: "Domestic Cleaning Services London",
    text: "We offer home cleaning in London for homeowners, flat renters, and hectic professionals. Choose regular cleaning, one-off cleaning, weekly cleaning, or fortnightly home cleaning to keep your property clean and tidy.",
    href: "/domestic-cleaning-services",
    ctaLabel: "Explore Domestic Cleaning Service",
    icon: FaHome,
    tabIcon: PiHouseLineDuotone,
    image: `${imgBase}/domestic-cleaning-service-card.webp`,
    tabImage: `${tabImgBase}/domestic-cleaning-tab-london-home.webp`,
    tabImageAlt:
      "Domestic cleaner providing regular home cleaning services in a London property",
    heroImage: "/images/domestic/domestic-cleaning-hero.webp",
    tabLines: ["Domestic", "Cleaning"],
  },
  {
    label: "Carpet",
    title: "Carpet Cleaning London",
    text: "Get rid of stains and lift embedded dirt with our carpet cleaning services; it’ll protect your carpet investment, especially in high-traffic areas.",
    href: "/carpet-cleaning-london",
    ctaLabel: "Explore Carpet Cleaning Service",
    icon: FaCouch,
    tabIcon: PiRugDuotone,
    image: `${imgBase}/carpet-cleaning-service-card.webp`,
    tabImage: `${tabImgBase}/carpet-cleaning-tab-stain-removal.webp`,
    tabImageAlt:
      "Professional carpet cleaning treating stains in a high traffic London living room",
    heroImage: "/images/carpet/carpet-cleaning-hero.webp",
    tabLines: ["Carpet", "Cleaning"],
  },
  {
    label: "Tenancy",
    title: "End of Tenancy Cleaning London",
    text: "Our end of tenancy cleaning London service ensures that properties are ready for inspection, handover, and occupancy by the next tenants.",
    href: "/end-of-tenancy-cleaning",
    ctaLabel: "Explore End Of Tenancy Cleaning Services",
    icon: FaKey,
    tabIcon: PiKeyDuotone,
    image: `${imgBase}/end-of-tenancy-cleaning-service-card.webp`,
    tabImage: `${tabImgBase}/end-of-tenancy-cleaning-tab-rental.webp`,
    tabImageAlt:
      "End of tenancy cleaning team deep cleaning a rental property in London",
    heroImage: "/images/hero/clean360/end-of-tenancy-cleaning-hero-london.webp",
    tabLines: ["End of Tenancy", "Cleaning"],
  },
  {
    label: "Gutter",
    title: "Gutter Cleaning London",
    text: "Our gutter cleaning service in London unclogs blockages, helps drainage, and protects the property against unnecessary water damage.",
    href: "/gutter-cleaning-london",
    ctaLabel: "Explore Gutter Cleaning Services",
    icon: FaWater,
    tabIcon: PiCloudRainDuotone,
    image: `${imgBase}/gutter-cleaning-service-card.webp`,
    tabImage: `${tabImgBase}/gutter-cleaning-tab-residential.webp`,
    tabImageAlt:
      "Gutter cleaner clearing blocked roof gutters on a London residential property",
    heroImage: "/images/gutter/gutter-cleaning-hero.webp",
    tabLines: ["Gutter", "Cleaning"],
  },
];

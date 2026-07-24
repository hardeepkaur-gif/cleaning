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
  heroImage: string;
  tabLines: [string, string];
};

export const servicesTagline = "Services";

export const servicesTitle = "Our Cleaning Services in London";

export const servicesIntro =
  "We offer a professional cleaning service for homes, rental properties and businesses throughout London. No matter it's routinely cleaning your home or providing specialist property care and handover preparation, our team is here for you.";

export const servicesTabsTagline = "Our Services";

export const servicesTabsTitle = "Our Cleaning Services in London";

export const servicesTabsIntro = servicesIntro;

export const servicesList: ServiceData[] = [
  {
    label: "Domestic",
    title: "Domestic Cleaning Services London",
    text: "Available home cleaning in London for house owners, flat renters and hectic professionals. Choose regular cleaning one-off cleaning, weekly cleaning or fortnightly home cleaning to keep your property clean and tidy.",
    href: "/domestic-cleaning-services",
    ctaLabel: "Explore Domestic Cleaning Service",
    icon: FaHome,
    tabIcon: PiHouseLineDuotone,
    image: `${imgBase}/services-2-1.jpg`,
    tabImage: `${tabImgBase}/services-three-tab-img-1.jpg`,
    heroImage: "/images/domestic/domestic-cleaning-hero.png",
    tabLines: ["Domestic", "Cleaning"],
  },
  {
    label: "Carpet",
    title: "Carpet Cleaning London",
    text: "Carpet cleaning London service not only helps you get rid of stains, lift embedded dirt, but at the same time it helps you protect your carpet investment, especially in high traffic areas.",
    href: "/carpet-cleaning",
    ctaLabel: "Explore Carpet Cleaning Service",
    icon: FaCouch,
    tabIcon: PiRugDuotone,
    image: `${imgBase}/services-2-2.jpg`,
    tabImage: `${tabImgBase}/services-three-tab-img-2.jpg`,
    heroImage: "/images/carpet/carpet-cleaning-hero.webp",
    tabLines: ["Carpet", "Cleaning"],
  },
  {
    label: "Tenancy",
    title: "End of Tenancy Cleaning London",
    text: "Detailed end of tenancy cleaning London service to ensure that properties are ready for inspection, handover and occupancy by the next tenants.",
    href: "/end-of-tenancy-cleaning",
    ctaLabel: "Explore End of Tenancy Cleaning",
    icon: FaKey,
    tabIcon: PiKeyDuotone,
    image: `${imgBase}/services-2-3.png`,
    tabImage: `${tabImgBase}/services-three-tab-img-3.png`,
    heroImage: "/images/hero/clean360/slide1.jpg",
    tabLines: ["End of Tenancy", "Cleaning"],
  },
  {
    label: "Gutter",
    title: "Gutter Cleaning London",
    text: "Preventative gutter cleaning London service to unclog blockages, enhance drainage, and safeguard properties against unnecessary water damage.",
    href: "/gutter-cleaning",
    ctaLabel: "Explore Gutter Cleaning Service",
    icon: FaWater,
    tabIcon: PiCloudRainDuotone,
    image: `${imgBase}/services-2-4.png`,
    tabImage: `${tabImgBase}/services-three-tab-img-4.png`,
    heroImage: "/images/gutter/gutter-cleaning-hero.webp",
    tabLines: ["Gutter", "Cleaning"],
  },
];

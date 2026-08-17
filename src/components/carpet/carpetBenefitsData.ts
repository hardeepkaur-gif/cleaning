import type { IconType } from "react-icons";
import {
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiKeyDuotone,
  PiPawPrintDuotone,
  PiStorefrontDuotone,
  PiUsersThreeDuotone,
} from "react-icons/pi";
import { FaBuilding, FaHome } from "react-icons/fa";

export type CarpetBenefitItem = {
  title: string;
  text: string;
  textBefore?: string;
  linkLabel?: string;
  linkHref?: string;
  textAfter?: string;
  icon: IconType;
  iconAlt: string;
};

export const carpetBenefitsTitle =
  "Who Can Benefit from Professional Carpet Cleaning?";

export const carpetBenefitsIntro =
  "Professional carpet cleaning is suitable for both residential and commercial properties. Whether you want to remove stubborn stains, freshen up your home or prepare a property for new occupants, the right cleaning method helps improve cleanliness and extend the life of your carpets.";

export const carpetBenefitsItems: CarpetBenefitItem[] = [
  {
    title: "Homeowners",
    text: "Removes everyday dirt, stains, allergens and odours while keeping carpets looking their best.",
    icon: FaHome,
    iconAlt: "Homeowners professional carpet cleaning benefit icon",
  },
  {
    title: "Tenants",
    text: "Helps leave rental properties clean before moving out and supports end of tenancy cleaning.",
    textBefore:
      "Helps leave rental properties clean before moving out and supports ",
    linkLabel: "end of tenancy cleaning",
    linkHref: "/end-of-tenancy-cleaning",
    textAfter: ".",
    icon: PiKeyDuotone,
    iconAlt: "Tenants end of tenancy carpet cleaning benefit icon",
  },
  {
    title: "Landlords and letting agents",
    text: "Refreshes carpets between tenants and improves the presentation of rental properties.",
    icon: FaBuilding,
    iconAlt: "Landlords rental property carpet cleaning benefit icon",
  },
  {
    title: "Home buyers",
    text: "Creates a cleaner and more hygienic living space before moving into a new property.",
    icon: PiHouseLineDuotone,
    iconAlt: "Home buyers carpet cleaning before moving in icon",
  },
  {
    title: "Offices",
    text: "Removes heavy foot traffic marks and helps maintain a cleaner working environment for staff and visitors.",
    icon: PiBriefcaseDuotone,
    iconAlt: "Offices commercial carpet cleaning benefit icon",
  },
  {
    title: "Retail shops and commercial premises",
    text: "Keeps customer-facing areas clean, presentable and professional.",
    icon: PiStorefrontDuotone,
    iconAlt: "Retail and commercial premises carpet cleaning icon",
  },
  {
    title: "Homes with pets",
    text: "Removes pet hair, stains and lingering odours from carpets.",
    icon: PiPawPrintDuotone,
    iconAlt: "Homes with pets carpet cleaning benefit icon",
  },
  {
    title: "Families with children",
    text: "Helps reduce dust, allergens and everyday spills from frequently used rooms.",
    icon: PiUsersThreeDuotone,
    iconAlt: "Families with children carpet cleaning benefit icon",
  },
];

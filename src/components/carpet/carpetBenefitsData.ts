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
  icon: IconType;
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
  },
  {
    title: "Tenants",
    text: "Helps leave rental properties clean before moving out and supports end of tenancy cleaning.",
    icon: PiKeyDuotone,
  },
  {
    title: "Landlords and letting agents",
    text: "Refreshes carpets between tenants and improves the presentation of rental properties.",
    icon: FaBuilding,
  },
  {
    title: "Home buyers",
    text: "Creates a cleaner and more hygienic living space before moving into a new property.",
    icon: PiHouseLineDuotone,
  },
  {
    title: "Offices",
    text: "Removes heavy foot traffic marks and helps maintain a cleaner working environment for staff and visitors.",
    icon: PiBriefcaseDuotone,
  },
  {
    title: "Retail shops and commercial premises",
    text: "Keeps customer-facing areas clean, presentable and professional.",
    icon: PiStorefrontDuotone,
  },
  {
    title: "Homes with pets",
    text: "Removes pet hair, stains and lingering odours from carpets.",
    icon: PiPawPrintDuotone,
  },
  {
    title: "Families with children",
    text: "Helps reduce dust, allergens and everyday spills from frequently used rooms.",
    icon: PiUsersThreeDuotone,
  },
];

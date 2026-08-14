import type { IconType } from "react-icons";
import {
  PiBriefcaseDuotone,
  PiFootprintsDuotone,
  PiHouseLineDuotone,
  PiKeyDuotone,
  PiLeafDuotone,
  PiPawPrintDuotone,
} from "react-icons/pi";

export const carpetFrequencyTagline = "Cleaning Schedule";

export const carpetFrequencyTitle =
  "How Often Should Carpets Be Professionally Cleaned";

export const carpetFrequencyIntro =
  "The best carpet cleaning timetable depends on the way the room is made use of, the quantity of foot site traffic, and whether there are children, pets, or people with allergies. Carpet Cleaning can prevent the proliferation of deep-seated dirt, allergens and bacteria that tend to accrue over time, leaving carpet cleaner.";

export type CarpetFrequencyRow = {
  id: string;
  propertyType: string;
  frequency: string;
  icon: IconType;
  iconAlt: string;
  accent: "calm" | "medium" | "active";
};

export const carpetFrequencyIconAlt = "Recommended carpet cleaning frequency icon";

export const carpetFrequencyRows: CarpetFrequencyRow[] = [
  {
    id: "family",
    propertyType: "Family homes",
    frequency: "Every 12 months",
    icon: PiHouseLineDuotone,
    iconAlt: "Family home carpet cleaning frequency icon",
    accent: "calm",
  },
  {
    id: "pets",
    propertyType: "Homes with pets or young children",
    frequency: "Every 6 to 12 months",
    icon: PiPawPrintDuotone,
    iconAlt: "Homes with pets carpet cleaning schedule icon",
    accent: "medium",
  },
  {
    id: "allergy",
    propertyType: "Homes with allergy sufferers",
    frequency: "Every 6 months",
    icon: PiLeafDuotone,
    iconAlt: "Allergy sufferers carpet cleaning frequency icon",
    accent: "medium",
  },
  {
    id: "rental",
    propertyType: "Rental properties",
    frequency: "Before new tenants move in or after tenants move out",
    icon: PiKeyDuotone,
    iconAlt: "Rental property carpet cleaning schedule icon",
    accent: "active",
  },
  {
    id: "office",
    propertyType: "Offices and commercial premises",
    frequency: "Every 3 to 6 months, depending on foot traffic",
    icon: PiBriefcaseDuotone,
    iconAlt: "Office carpet cleaning frequency icon",
    accent: "active",
  },
  {
    id: "traffic",
    propertyType: "High-traffic areas",
    frequency: "Every 3 to 6 months",
    icon: PiFootprintsDuotone,
    iconAlt: "High traffic area carpet cleaning schedule icon",
    accent: "active",
  },
];

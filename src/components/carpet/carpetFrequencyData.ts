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
  "The best carpet cleaning timetable relies on the way the room is made use of, the quantity of foot site traffic, and the existence of small children, pets or those with allergy symptoms in the home. Carpet Cleaning can prevent the proliferation of deep-seated dirt, allergens and bacteria that tend to accrue over time, leaving carpet cleaner and lasting longer.";

export type CarpetFrequencyRow = {
  id: string;
  propertyType: string;
  frequency: string;
  icon: IconType;
  accent: "calm" | "medium" | "active";
};

export const carpetFrequencyRows: CarpetFrequencyRow[] = [
  {
    id: "family",
    propertyType: "Family homes",
    frequency: "Every 12 months",
    icon: PiHouseLineDuotone,
    accent: "calm",
  },
  {
    id: "pets",
    propertyType: "Homes with pets or young children",
    frequency: "Every 6 to 12 months",
    icon: PiPawPrintDuotone,
    accent: "medium",
  },
  {
    id: "allergy",
    propertyType: "Homes with allergy sufferers",
    frequency: "Every 6 months",
    icon: PiLeafDuotone,
    accent: "medium",
  },
  {
    id: "rental",
    propertyType: "Rental properties",
    frequency: "Before new tenants move in or after tenants move out",
    icon: PiKeyDuotone,
    accent: "active",
  },
  {
    id: "office",
    propertyType: "Offices and commercial premises",
    frequency: "Every 3 to 6 months, depending on foot traffic",
    icon: PiBriefcaseDuotone,
    accent: "active",
  },
  {
    id: "traffic",
    propertyType: "High-traffic areas",
    frequency: "Every 3 to 6 months",
    icon: PiFootprintsDuotone,
    accent: "active",
  },
];

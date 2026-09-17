import type { IconType } from "react-icons";
import {
  PiFootprintsDuotone,
  PiHouseLineDuotone,
  PiLeafDuotone,
  PiPawPrintDuotone,
} from "react-icons/pi";

export const carpetFrequencyTagline = "Carpet Cleaning Guide";

export const carpetFrequencyTitleBefore = "How Often Should You Have Your Carpets ";
export const carpetFrequencyTitleAccent = "Professionally Cleaned?";

export const carpetFrequencyIntro =
  "The best carpet cleaning timetable depends on the way the room is made use of, the quantity of foot site traffic, and whether there are children, pets, or people with allergies. Carpet Cleaning can prevent the proliferation of deep-seated dirt, allergens and bacteria that tend to accrue over time, leaving carpet cleaner.";

export const carpetFrequencyNeedLow = "Lower Cleaning Need";
export const carpetFrequencyNeedHigh = "More Frequent Cleaning";

export type CarpetFrequencyColumn = {
  id: string;
  frequency: string;
  title: string;
  description: string;
  icon: IconType;
  iconAlt: string;
  accent: "green" | "coral";
};

export const carpetFrequencyColumns: CarpetFrequencyColumn[] = [
  {
    id: "family",
    frequency: "Every 12 months",
    title: "Family Homes",
    description:
      "For homes with normal foot traffic and no specific allergy concerns.",
    icon: PiHouseLineDuotone,
    iconAlt: "Family homes carpet cleaning frequency icon",
    accent: "green",
  },
  {
    id: "pets",
    frequency: "Every 6 to 12 months",
    title: "Homes With Pets or Young Children",
    description:
      "Pets, spills and everyday mess can make carpets dirty faster.",
    icon: PiPawPrintDuotone,
    iconAlt: "Homes with pets carpet cleaning frequency icon",
    accent: "green",
  },
  {
    id: "allergy",
    frequency: "Every 6 months",
    title: "Homes With Allergy Sufferers",
    description:
      "More frequent cleaning helps remove trapped dust, allergens and bacteria.",
    icon: PiLeafDuotone,
    iconAlt: "Allergy sufferers carpet cleaning frequency icon",
    accent: "green",
  },
  {
    id: "traffic",
    frequency: "Every 3 to 6 months",
    title: "High-Traffic Areas",
    description:
      "Hallways, stairs and busy living spaces collect dirt quickly and need more frequent cleaning.",
    icon: PiFootprintsDuotone,
    iconAlt: "High traffic areas carpet cleaning frequency icon",
    accent: "coral",
  },
];

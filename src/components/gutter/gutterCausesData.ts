import type { IconType } from "react-icons";
import {
  PiBuildingsDuotone,
  PiHouseLineDuotone,
} from "react-icons/pi";

export type GutterCauseItem = {
  title: string;
  items: string[];
  icon: IconType;
};

export const gutterCausesTagline = "Residential & Commercial";

export const gutterCausesTitle =
  "We Offer Residential And Commercial Gutter Cleaning Services In London";

export const gutterCausesIntro =
  "We provide residential and commercial gutter cleaning across London for homes, offices, schools, retail units and apartment blocks.";

export const gutterCausesHighlights: string[] = [];

export const gutterCausesClosing =
  "Whether you need a one-off gutter clean or scheduled maintenance, our team provides safe and reliable gutter cleaning for properties of all sizes.";

export const gutterCausesItems: GutterCauseItem[] = [
  {
    title: "Residential",
    items: [
      "Terraced houses",
      "Semi-detached homes",
      "Detached houses",
      "Bungalows",
      "Flats & apartments",
    ],
    icon: PiHouseLineDuotone,
  },
  {
    title: "Commercial",
    items: [
      "Offices",
      "Retail shops",
      "Schools",
      "Restaurants",
      "Warehouses",
      "Apartment blocks",
      "Industrial units",
    ],
    icon: PiBuildingsDuotone,
  },
];

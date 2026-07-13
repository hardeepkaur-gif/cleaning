import type { IconType } from "react-icons";
import {
  PiBathtubDuotone,
  PiBedDuotone,
  PiCookingPotDuotone,
  PiCouchDuotone,
  PiDoorDuotone,
} from "react-icons/pi";

const tabImgBase = "/images/services/cleanon-tabs";

export type TenancyChecklistTab = {
  id: string;
  title: string;
  shortLabel: string;
  label: string;
  icon: IconType;
  image: string;
  items: string[];
};

export const tenancyChecklistTitle = "End of Tenancy Cleaning Checklist";

export const tenancyChecklistIntro =
  "Our end of tenancy cleaning checklist is designed to cover the areas most commonly reviewed by landlords, letting agents and inventory clerks during property inspections.";

export const tenancyChecklistNote =
  "The exact checklist may vary depending on the property's size, condition, furnishings and any additional services requested.";

export const tenancyChecklistTabs: TenancyChecklistTab[] = [
  {
    id: "kitchen",
    title: "Kitchen Checklist",
    shortLabel: "Kitchen",
    label: "Kitchen",
    icon: PiCookingPotDuotone,
    image: `${tabImgBase}/services-three-tab-img-1.jpg`,
    items: [
      "Clean and degrease kitchen worktops",
      "Wipe and sanitise cupboard doors",
      "Clean inside and outside kitchen cupboards and drawers",
      "Remove grease from splashbacks",
      "Clean and polish sinks and taps",
      "Remove limescale where required",
      "Clean hobs and extractor surfaces",
      "Clean oven interior and exterior",
      "Clean fridge and freezer surfaces",
      "Wipe washing machine and dishwasher exteriors",
      "Clean microwave inside and out",
      "Remove food residue and stains",
      "Vacuum and mop kitchen floors",
      "Clean light switches and door handles",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom Checklist",
    shortLabel: "Bathroom",
    label: "Bathroom",
    icon: PiBathtubDuotone,
    image: `${tabImgBase}/services-three-tab-img-2.jpg`,
    items: [
      "Clean and disinfect toilets",
      "Clean baths and shower trays",
      "Remove soap residue from shower screens",
      "Descale taps, sinks and fittings",
      "Clean bathroom tiles",
      "Polish mirrors and glass surfaces",
      "Clean bathroom cabinets and storage units",
      "Wipe towel rails and fixtures",
      "Clean light switches and door handles",
      "Empty and clean waste bins",
      "Vacuum and mop floors",
      "Sanitise high-touch surfaces",
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom Checklist",
    shortLabel: "Bedroom",
    label: "Bedroom",
    icon: PiBedDuotone,
    image: `${tabImgBase}/services-three-tab-img-3.jpg`,
    items: [
      "Dust accessible surfaces",
      "Wipe wardrobes and storage units",
      "Clean shelving and furniture surfaces",
      "Wipe skirting boards",
      "Clean door frames and handles",
      "Clean internal window sills",
      "Remove cobwebs",
      "Vacuum carpets and rugs",
      "Mop hard flooring",
      "Clean switches and sockets",
    ],
  },
  {
    id: "living-room",
    title: "Living Room Checklist",
    shortLabel: "Living Room",
    label: "Living Room",
    icon: PiCouchDuotone,
    image: `${tabImgBase}/services-three-tab-img-4.jpg`,
    items: [
      "Dust furniture and accessible surfaces",
      "Clean tables, shelving and storage units",
      "Wipe skirting boards",
      "Clean internal glass where accessible",
      "Vacuum carpets and rugs",
      "Mop hard floors",
      "Clean switches, sockets and handles",
      "Remove dust from corners and edges",
      "Clean window sills",
      "Remove cobwebs",
    ],
  },
  {
    id: "hallway",
    title: "Hallway Checklist",
    shortLabel: "Hallway",
    label: "Hallway",
    icon: PiDoorDuotone,
    image: "/images/tenancy/end-of-tenancy-deposit-concerns.png",
    items: [
      "Clean entrance doors and frames",
      "Wipe skirting boards",
      "Clean bannisters and handrails",
      "Vacuum hallway flooring",
      "Mop hard surfaces",
      "Clean light switches and sockets",
      "Wipe door handles",
      "Remove marks from accessible surfaces",
      "Remove dust and cobwebs",
      "Clean high-contact touchpoints throughout the entrance area",
    ],
  },
];

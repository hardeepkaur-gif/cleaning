import type { IconType } from "react-icons";
import {
  FaBuilding,
  FaCalendarAlt,
  FaHardHat,
  FaPoundSign,
  FaShieldAlt,
  FaWater,
} from "react-icons/fa";

export type GutterTrustItem = {
  icon: IconType;
  label: string;
};

export const gutterTrustItems: GutterTrustItem[] = [
  {
    icon: FaBuilding,
    label: "Professional gutter cleaning for homes and commercial properties",
  },
  {
    icon: FaShieldAlt,
    label: "DBS-checked and fully insured local gutter cleaners",
  },
  {
    icon: FaWater,
    label: "Gutter, downpipe and debris clearance",
  },
  {
    icon: FaHardHat,
    label: "Safe cleaning for hard-to-reach gutters",
  },
  {
    icon: FaPoundSign,
    label: "Fixed pricing with no hidden charges",
  },
  {
    icon: FaCalendarAlt,
    label: "Flexible booking across London",
  },
];

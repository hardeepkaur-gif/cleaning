import type { IconType } from "react-icons";
import {
  FaBox,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPoundSign,
  FaShieldAlt,
  FaUserShield,
  FaWater,
} from "react-icons/fa";

export type CarpetTrustItem = {
  icon: IconType;
  label: string;
};

export const carpetTrustTitle =
  "Why Choose Cleaning Services London for Carpet Cleaning in London?";

export const carpetTrustItems: CarpetTrustItem[] = [
  { icon: FaUserShield, label: "DBS-checked cleaners" },
  { icon: FaShieldAlt, label: "Fully insured service" },
  { icon: FaBox, label: "Cleaning materials included" },
  { icon: FaPoundSign, label: "Fixed pricing with no hidden surprises" },
  {
    icon: FaBuilding,
    label: "Suitable for homes, flats, offices and rental properties",
  },
  {
    icon: FaWater,
    label: "Deep steam cleaning and stain treatment available",
  },
  {
    icon: FaMapMarkerAlt,
    label: "East London specialists with wider London coverage",
  },
  { icon: FaCalendarAlt, label: "Flexible booking appointments" },
];

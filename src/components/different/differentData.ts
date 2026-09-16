import type { IconType } from "react-icons";
import {
  PiCameraDuotone,
  PiClipboardTextDuotone,
  PiClockDuotone,
  PiCurrencyGbpDuotone,
  PiShieldCheckDuotone,
  PiSparkleDuotone,
  PiTrophyDuotone,
  PiUserCheckDuotone,
  PiUsersThreeDuotone,
} from "react-icons/pi";

export const differentTitle = "What Makes Cleaning Services London Different?";

export const differentButtonLabel = "Find a Cleaner";

export const differentButtonHref = "/services";

export type DifferentItem = {
  text: string;
  icon: IconType;
  iconAlt: string;
};

export const differentList: DifferentItem[] = [
  {
    text: "DBS-checked cleaners with identity and right-to-work verification",
    icon: PiUserCheckDuotone,
    iconAlt: "DBS-checked cleaners icon",
  },
  {
    text: "Fully insured cleaners for homes, rentals, offices and commercial properties",
    icon: PiShieldCheckDuotone,
    iconAlt: "Fully insured cleaners icon",
  },
  {
    text: "100+ cleaning jobs completed by each member of our cleaning team",
    icon: PiTrophyDuotone,
    iconAlt: "100 plus cleaning jobs completed icon",
  },
  {
    text: "Signed cleaning SOPs followed on every job",
    icon: PiClipboardTextDuotone,
    iconAlt: "Signed cleaning SOPs icon",
  },
  {
    text: "Before-and-after completion photos available as proof of work",
    icon: PiCameraDuotone,
    iconAlt: "Before and after completion photos icon",
  },
  {
    text: "Fixed prices agreed before the cleaning starts, with no hidden charges",
    icon: PiCurrencyGbpDuotone,
    iconAlt: "Fixed prices icon",
  },
  {
    text: "24/7 availability, including weekends, late hours and ad hoc cleaning requests",
    icon: PiClockDuotone,
    iconAlt: "24/7 availability icon",
  },
  {
    text: "Same cleaner arranged for regular bookings wherever possible",
    icon: PiUsersThreeDuotone,
    iconAlt: "Same cleaner for regular bookings icon",
  },
  {
    text: "14-day free re-clean guarantee on end-of-tenancy cleaning",
    icon: PiSparkleDuotone,
    iconAlt: "14-day free re-clean guarantee icon",
  },
];

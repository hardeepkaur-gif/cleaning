import type { IconType } from "react-icons";
import {
  PiCalendarCheckDuotone,
  PiClipboardTextDuotone,
  PiCurrencyGbpDuotone,
  PiHeadsetDuotone,
  PiHouseLineDuotone,
  PiShieldCheckDuotone,
  PiTShirtDuotone,
  PiUserCheckDuotone,
} from "react-icons/pi";

export type DomesticWhyChooseItem = {
  text: string;
  icon: IconType;
  iconAlt: string;
};

export const domesticWhyChooseEyebrow = "Why choose us";

export const domesticWhyChooseTitle =
  "Why London Customers Book Domestic Cleaning With Us";

export const domesticWhyChooseItems: DomesticWhyChooseItem[] = [
  {
    text: "DBS-checked and fully insured cleaners for every home visit",
    icon: PiShieldCheckDuotone,
    iconAlt: "DBS checked and insured domestic cleaners icon",
  },
  {
    text: "Same cleaner arranged for regular weekly or fortnightly cleaning wherever possible",
    icon: PiUserCheckDuotone,
    iconAlt: "Same cleaner for regular domestic cleaning icon",
  },
  {
    text: "Cleaning tailored to your home, from kitchens and bathrooms to living areas",
    icon: PiHouseLineDuotone,
    iconAlt: "Home cleaning tailored to your priorities icon",
  },
  {
    text: "Flexible weekly, fortnightly and one-off appointments across London",
    icon: PiCalendarCheckDuotone,
    iconAlt: "Flexible domestic cleaning appointments icon",
  },
  {
    text: "Help with everyday household tasks including ironing, laundry and bed linen",
    icon: PiTShirtDuotone,
    iconAlt: "Everyday household tasks help icon",
  },
  {
    text: "Clear fixed pricing agreed before every domestic cleaning booking",
    icon: PiCurrencyGbpDuotone,
    iconAlt: "Clear domestic cleaning pricing icon",
  },
  {
    text: "Reliable cleaning every visit with documented procedures and quality standards",
    icon: PiClipboardTextDuotone,
    iconAlt: "Reliable domestic cleaning standards icon",
  },
  {
    text: "Friendly local customer support when your schedule or booking needs to change",
    icon: PiHeadsetDuotone,
    iconAlt: "Local domestic cleaning customer support icon",
  },
];

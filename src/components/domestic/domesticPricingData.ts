import type { IconType } from "react-icons";
import {
  PiCalendarCheckDuotone,
  PiClipboardTextDuotone,
  PiCurrencyGbpDuotone,
  PiHouseLineDuotone,
  PiShieldCheckDuotone,
  PiSparkleDuotone,
} from "react-icons/pi";

export type DomesticPricingRow = {
  factor: string;
  approach: string;
  icon: IconType;
};

export const domesticPricingTitle =
  "How Much Does Domestic Cleaning Cost in London?";

export const domesticPricingIntro =
  "Our services at Cleaning Services London range from £15 to £30 per hour, but it varies heavily depending on the factors mentioned below.";

export const domesticPricingRateLabel = "£15 – £30 per hour";

export const domesticPricingHeaders = {
  factor: "What Affects the Price?",
  approach: "Our Approach",
};

export const domesticPricingRows: DomesticPricingRow[] = [
  {
    factor: "Property size",
    approach: "Fixed quotation based on your home's size.",
    icon: PiHouseLineDuotone,
  },
  {
    factor: "Cleaning frequency",
    approach: "Better value for regular weekly or fortnightly visits.",
    icon: PiCalendarCheckDuotone,
  },
  {
    factor: "Property condition",
    approach: "Time is adjusted to match the cleaning required.",
    icon: PiSparkleDuotone,
  },
  {
    factor: "Additional household tasks",
    approach: "Optional extras can be included in your quotation.",
    icon: PiClipboardTextDuotone,
  },
  {
    factor: "Hidden charges",
    approach:
      "None. Your price is agreed upon before the booking is confirmed.",
    icon: PiShieldCheckDuotone,
  },
];

export const domesticPricingFooterText =
  "Need a personalised quotation? Contact our team today for a fixed-price domestic cleaning quote.";

export const domesticPricingHeaderIcons = {
  factor: PiCurrencyGbpDuotone,
  approach: PiShieldCheckDuotone,
};

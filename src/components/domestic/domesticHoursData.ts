export type DomesticHoursRow = {
  time: string;
  typicalFor: string;
  completed: string;
};

export const domesticHoursTagline = "Planning Your Visit";

export const domesticHoursTitle =
  "What Can a Cleaner Finish in 2, 3, or 4 Hours?";

export const domesticHoursIntro =
  "One of the most common questions customers ask before booking domestic cleaning is how much can realistically be completed during a visit. The answer depends on your property's size, condition, the number of rooms, and whether you choose regular or one-off domestic cleaning.";

export const domesticHoursRows: DomesticHoursRow[] = [
  {
    time: "2 Hours",
    typicalFor:
      "Studio flats, one-bedroom properties, or maintenance cleaning",
    completed:
      "Kitchen and bathroom cleaned, dusting, vacuuming, mopping, emptying bins, and tidying the main living areas.",
  },
  {
    time: "3 Hours",
    typicalFor: "Most one- to two-bedroom homes",
    completed:
      "Kitchen, bathroom, bedrooms, living areas, dusting, vacuuming, mopping, surface cleaning, and additional tasks such as changing bed linen or light ironing if time allows.",
  },
  {
    time: "4 Hours",
    typicalFor: "Larger homes or properties needing extra attention",
    completed:
      "More detailed cleaning across multiple rooms, including high-touch surfaces, skirting boards, internal glass where accessible, and selected additional household tasks based on your priorities.",
  },
];

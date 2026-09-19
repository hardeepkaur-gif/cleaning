export const domesticPricingTitle =
  "How Much Does Domestic Cleaning Cost in London?";

export const domesticPricingIntro =
  "We provide upfront fixed pricing based on your property size, with better value for weekly or fortnightly visits. Our cleaning services provide the best level of hygiene. You can have additional household tasks done as optional extras and no hidden charges.";

export const domesticPricingGeneralTitle = "General Cleaning Price";

export const domesticPricingGeneralHeaders = {
  size: "Property Size",
  regular: "Regular Visit",
  oneOff: "One-Off Visit",
};

export type DomesticPricingGeneralRow = {
  size: string;
  regular: string;
  oneOff: string;
};

export const domesticPricingGeneralRows: DomesticPricingGeneralRow[] = [
  { size: "Studio / Bedsit", regular: "£50", oneOff: "£60" },
  { size: "1 Bedroom Flat / House", regular: "£60", oneOff: "£70" },
  { size: "2 Bedroom (1 Bathroom)", regular: "£78", oneOff: "£88" },
  { size: "2 Bedroom (2 Bathrooms)", regular: "£85", oneOff: "£95" },
  { size: "3 Bedroom (1 Bathroom)", regular: "£100", oneOff: "£112" },
  { size: "3 Bedroom (2 Bathrooms)", regular: "£108", oneOff: "£120" },
  { size: "4 Bedroom (2 Bathrooms)", regular: "£130", oneOff: "£145" },
  { size: "4 Bedroom (3 Bathrooms)", regular: "£140", oneOff: "£155" },
  { size: "5+ Bedroom", regular: "Quote", oneOff: "Quote" },
  {
    size: "Add-on: Oven Deep Clean",
    regular: "£45",
    oneOff: "£45",
  },
];

export const domesticPricingDeepTitle = "Deep Cleaning Price";

export const domesticPricingDeepHeaders = {
  size: "Property Size",
  price: "Our Price",
};

export type DomesticPricingDeepRow = {
  size: string;
  price: string;
};

export const domesticPricingDeepRows: DomesticPricingDeepRow[] = [
  { size: "Studio / Bedsit", price: "£160" },
  { size: "1 Bedroom Flat / House", price: "£185" },
  { size: "2 Bedroom (1 Bathroom)", price: "£220" },
  { size: "2 Bedroom (2 Bathrooms)", price: "£250" },
  { size: "3 Bedroom (1 Bathroom)", price: "£270" },
  { size: "3 Bedroom (2 Bathrooms)", price: "£285" },
  { size: "4 Bedroom (2 Bathrooms)", price: "£375" },
  { size: "4 Bedroom (3 Bathrooms)", price: "£410" },
  { size: "5+ Bedroom", price: "Quote on request" },
];

export const domesticPricingClosing =
  "Choose the clean that suits your needs: General Cleaning covers routine upkeep for a fresh, tidy home, while Deep Cleaning is more intensive and detailed covering the appliances, cupboards, limescale, windows and skirting boards.";

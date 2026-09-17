export const carpetPricingTitle =
  "How Much Does Carpet Cleaning Cost in London?";

export const carpetPricingIntroExtra =
  "At Cleaning Services London, we provide fixed quotations before any work begins, thereby helping you understand the total cost before you book.";

export const carpetPricingRoomHeaders = {
  room: "Room or Area",
  price: "Average London Price Range",
};

export type CarpetPricingRoomRow = {
  room: string;
  price: string;
};

export const carpetPricingRoomRows: CarpetPricingRoomRow[] = [
  { room: "Single or small bedroom", price: "£30 to £45" },
  { room: "Double bedroom", price: "£35 to £55" },
  { room: "Living room or lounge", price: "£40 to £60" },
  { room: "Through lounge or large open-plan room", price: "£70 to £120+" },
  { room: "Flight of stairs and landing", price: "£40 to £85" },
  { room: "Hallway", price: "£15 to £40" },
  { room: "1-bedroom flat or apartment", price: "£130 to £150" },
  { room: "2-bedroom house", price: "£160 to £250" },
  { room: "3-bedroom house", price: "£220 to £290" },
  { room: "4-bedroom house", price: "£360 to £540+" },
];

export const carpetPricingFactorHeaders = {
  factor: "Pricing Factor",
  reason: "Why It Matters",
};

export type CarpetPricingFactorRow = {
  factor: string;
  reason: string;
};

export const carpetPricingFactorRows: CarpetPricingFactorRow[] = [
  {
    factor: "Number of rooms",
    reason: "Larger properties require more cleaning time and labour.",
  },
  {
    factor: "Stairs and landings",
    reason: "These areas take longer to clean than flat surfaces.",
  },
  {
    factor: "Carpet condition",
    reason:
      "Heavy staining, pet accidents or deep soiling may require additional treatment.",
  },
  {
    factor: "Carpet type",
    reason:
      "Wool, natural fibres and delicate materials may require specialist cleaning methods.",
  },
  {
    factor: "Furniture movement",
    reason: "Accessible carpets can be cleaned more efficiently.",
  },
  {
    factor: "Parking or congestion charges",
    reason:
      "Charges may apply in some parts of London depending on the location.",
  },
];

export const carpetPricingCtaTitle = "Want an Exact Price?";

export const carpetPricingCtaText =
  "Every property is different. Request a fixed quotation based on your carpet size, number of rooms and cleaning requirements.";

export const carpetPricingCtaButton = "Get My Fixed Quote";

export const carpetPricingCtaNote = "Free quote · No obligation";

export const carpetPricingCtaHref = "/contact-us";

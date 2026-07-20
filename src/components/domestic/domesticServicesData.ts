import type { IconType } from "react-icons";
import { FaBroom, FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";

export type DomesticServiceItem = {
  title: string;
  text: string;
  icon: IconType;
};

export const domesticServicesTagline = "Domestic Cleaning Options";

export const domesticServicesTitle = "Choose Your Domestic Cleaning Service";

export const domesticServicesIntro =
  "Each home requires specific cleaning services as per its timeline, and that is why our domestic cleaning services are flexible. We know that each family has a unique lifestyle, and each family member has different tastes and expectations regarding cleanliness, so services are tailored accordingly. Therefore, you can pick the service that is best suited for your property and suits your requirements.";

export const domesticServicesHighlights = [
  "Weekly & fortnightly visits",
  "Personalised home checklist",
  "One-off cleans available",
];

export const domesticServicesItems: DomesticServiceItem[] = [
  {
    title: "Weekly Domestic Cleaning",
    text: "Ideal for families, pet owners, busy homes, and anyone who wants their house to always be clean. By cleaning the home every week, one can prevent the buildup of dust and dirt and keep it fresh and comfortable.",
    icon: FaCalendarAlt,
  },
  {
    title: "Fortnightly Domestic Cleaning",
    text: "It is best for houses that are kept in good order, but would like to have their residence cleaned professionally on a regular basis. Once-a-week visits allow for more time to attend to other tasks and keep things clean.",
    icon: FaCalendarCheck,
  },
  {
    title: "One-Off Domestic Cleaning",
    text: "Looking for some space convenience before guests arrive, after a hectic period, or just to freshen up your home? Our one-off domestic cleaning service is a commitment-free, thorough clean.",
    icon: FaBroom,
  },
];

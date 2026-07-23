import type { IconType } from "react-icons";
import {
  PiBriefcaseDuotone,
  PiCalendarDuotone,
  PiHouseLineDuotone,
  PiTreeDuotone,
} from "react-icons/pi";

export type GutterFrequencyTab = {
  id: string;
  title: string;
  shortLabel: string;
  bestFor: string;
  icon: IconType;
  image: string;
  description: string;
};

export const gutterFrequencyTitle =
  "How Often Should Gutters Be Cleaned in London?";

export const gutterFrequencyIntro =
  "In London, it is advisable to clean gutters at least once a year, to ensure that all the rainwater flows properly and to minimize clogging. The best cleaning schedule, however, depends on the surrounding trees and the rate of debris accumulation and the location of the property.";

export const gutterFrequencyTagline = "Cleaning Schedule";

export const gutterFrequencyTabs: GutterFrequencyTab[] = [
  {
    id: "homes",
    title: "Most London Homes",
    shortLabel: "London Homes",
    bestFor: "Once a year — before autumn or after winter",
    icon: PiHouseLineDuotone,
    image: "/images/gutter/gutter-included-1.webp",
    description:
      "Most homes do not require a gutter cleaning service more than once a year to clear leaves, moss and debris from the gutters before they get into the way of drainage. If you want to keep your guttering in shape, it's best to book a clean before fall or after winter!",
  },
  {
    id: "trees",
    title: "Homes Near Trees",
    shortLabel: "Near Trees",
    bestFor: "Every six months",
    icon: PiTreeDuotone,
    image: "/images/gutter/gutter-included-2.webp",
    description:
      "Mature trees in the vicinity can cause gutters to fill rapidly with twigs, seeds and leaves. In such situations, it is typical to clean gutters every six months to avoid guttering becoming blocked and running over often.",
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    shortLabel: "Commercial",
    bestFor: "Planned maintenance for larger roof areas",
    icon: PiBriefcaseDuotone,
    image: "/images/gutter/gutter-included-3.webp",
    description:
      "Commercial buildings tend to have more and larger roof surfaces and gutters, which tend to collect more debris. Planned gutter maintenance will help to minimize the potential of disruption, water damage and costly repairs, and will maintain the efficiency of the drainage system.",
  },
  {
    id: "seasonal",
    title: "Seasonal Maintenance",
    shortLabel: "Seasonal",
    bestFor: "Spring and autumn cleans",
    icon: PiCalendarDuotone,
    image: "/images/gutter/gutter-included-4.webp",
    description:
      "By having a seasonal maintenance plan in place, you can minimize the chance of experiencing any gutters issues during the year. A lot of homeowners clean their property in the spring time to get rid of winter debris and in the fall to clear leaves and debris. You can keep gutters free of debris and save your property during stormy weather with this easy practice.",
  },
];

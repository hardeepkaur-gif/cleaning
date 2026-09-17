import type { IconType } from "react-icons";
import {
  PiBroomDuotone,
  PiCalendarCheckDuotone,
  PiCameraDuotone,
  PiDropDuotone,
  PiLeafDuotone,
  PiShieldCheckDuotone,
  PiToolboxDuotone,
  PiWrenchDuotone,
} from "react-icons/pi";

export const gutterIncludedTagline = "Complete Gutter Care";
export const gutterIncludedTaglineIcon = PiBroomDuotone;

export const gutterIncludedTitleBefore = "What Does Our Gutter Cleaning ";
export const gutterIncludedTitleAccent = "London";
export const gutterIncludedTitleAfter = " Service Include?";

export const gutterIncludedIntro =
  "A cleaner, flowing and fully functional guttering system to keep your property protected all year round.";

export const gutterIncludedProtectLabel = "Keep Your Property Protected";
export const gutterIncludedProtectIcon = PiShieldCheckDuotone;

export type GutterIncludedFeature = {
  id: string;
  title: string;
  text: string;
  icon: IconType;
  iconAlt: string;
};

export const gutterIncludedFeatures: GutterIncludedFeature[] = [
  {
    id: "equipment",
    title: "Professional Equipment",
    text: "SkyVac & industrial vacuums.",
    icon: PiToolboxDuotone,
    iconAlt: "Professional gutter cleaning equipment icon",
  },
  {
    id: "blockages",
    title: "Remove Blockages",
    text: "Leaves, moss & debris.",
    icon: PiLeafDuotone,
    iconAlt: "Gutter blockage removal icon",
  },
  {
    id: "downpipes",
    title: "Flush Downpipes",
    text: "High-pressure jetting & flow testing.",
    icon: PiDropDuotone,
    iconAlt: "Downpipe flushing icon",
  },
  {
    id: "inspection",
    title: "Gutter Inspection",
    text: "Pole-mounted cameras.",
    icon: PiCameraDuotone,
    iconAlt: "Gutter inspection camera icon",
  },
  {
    id: "issues",
    title: "Spot Issues Early",
    text: "We'll let you know about any leaks or damage.",
    icon: PiWrenchDuotone,
    iconAlt: "Gutter issue detection icon",
  },
];

export const gutterIncludedEquipment =
  "Every gutter cleaning service is completed using professional-grade equipment and proven methods set to your property's height and access requirements. We use high-reach carbon fibre vacuum systems such as SkyVac units with telescopic poles for safe ground-level cleaning, alongside industrial wet and dry vacuums to extract debris efficiently. For properties requiring closer access, we utilise ladder stabilisers, roof ladders and safety harness systems in line with working-at-height regulations.";

export const gutterIncludedMethods =
  "Our team clears blockages using manual gutter scoops where necessary, flushes downpipes using high-pressure water jetting systems, and checks water flow using controlled hose testing. We also remove loose debris from the roofline and inspect gutter runs using pole-mounted inspection cameras to ensure nothing is missed. If we notice visible issues such as leaking joints, loose brackets or damaged gutter sections during the clean, we will let you know so they can be addressed before they become bigger problems.";

export const gutterIncludedHighlightIcon = PiCalendarCheckDuotone;
export const gutterIncludedHighlightTitle = "One-Off or Scheduled Cleans";
export const gutterIncludedHighlightText =
  "From one-off gutter cleaning, through to seasonal or scheduled cleaning, our professional London local gutter cleaners are here to keep your drainage system working as it should.";

export const gutterIncludedImage = "/images/gutter/gutter-included-service.webp";

export const gutterIncludedImageAlt =
  "Professional gutter cleaning with SkyVac ground-level vacuum system in London";

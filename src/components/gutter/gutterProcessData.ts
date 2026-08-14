import type { IconType } from "react-icons";
import {
  PiCalendarCheckDuotone,
  PiChatCircleDuotone,
  PiCloudRainDuotone,
  PiCurrencyGbpDuotone,
} from "react-icons/pi";

export type GutterProcessStep = {
  icon: IconType;
  iconAlt: string;
  title: string;
  text: string;
  accent: "primary" | "cta";
};

export const gutterProcessTitle = "Get Clean Gutters in 4 Simple Steps";

export const gutterProcessIntro =
  "Book your gutter cleaning service in London with us by following these steps.";

export const gutterProcessHubLabel = "Gutter Booking Process";

export const gutterProcessSteps: GutterProcessStep[] = [
  {
    icon: PiChatCircleDuotone,
    iconAlt: "Request a gutter cleaning quote icon",
    title: "Request a Quote",
    text: "Call us or complete our online contact form with your property details and postcode.",
    accent: "primary",
  },
  {
    icon: PiCurrencyGbpDuotone,
    iconAlt: "Receive fixed gutter cleaning pricing icon",
    title: "Receive Your Fixed Price",
    text: "We will assess your requirements and provide a clear quotation based on your property's size, height and access requirements.",
    accent: "cta",
  },
  {
    icon: PiCalendarCheckDuotone,
    iconAlt: "Choose a gutter cleaning appointment icon",
    title: "Choose a Convenient Appointment",
    text: "Select a date and time that works for you. We offer flexible booking for both residential and commercial properties across London.",
    accent: "primary",
  },
  {
    icon: PiCloudRainDuotone,
    iconAlt: "Professional gutter cleaning visit icon",
    title: "Professional Gutter Cleaning",
    text: "Our experienced gutter cleaners arrive with the right equipment to remove leaves, moss, dirt and debris from your gutters and downpipes, restoring proper rainwater flow.",
    accent: "cta",
  },
];

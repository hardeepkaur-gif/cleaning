import type { IconType } from "react-icons";
import {
  PiCalendarCheckDuotone,
  PiChatCircleDuotone,
  PiCloudRainDuotone,
  PiCurrencyGbpDuotone,
  PiMagnifyingGlassDuotone,
  PiSealCheckDuotone,
} from "react-icons/pi";

export type GutterProcessStep = {
  icon: IconType;
  title: string;
  text: string;
  accent: "primary" | "cta";
};

export const gutterProcessTitle = "How Do I Book a Gutter Cleaning Service?";

export const gutterProcessIntro =
  "Booking your gutter cleaning in London is quick and straightforward.";

export const gutterProcessHubLabel = "Gutter Booking Process";

export const gutterProcessSteps: GutterProcessStep[] = [
  {
    icon: PiChatCircleDuotone,
    title: "Request a Quote",
    text: "Call us or complete our online contact form with your property details and postcode.",
    accent: "primary",
  },
  {
    icon: PiCurrencyGbpDuotone,
    title: "Receive Your Fixed Price",
    text: "We will assess your requirements and provide a clear quotation based on your property's size, height and access requirements.",
    accent: "cta",
  },
  {
    icon: PiCalendarCheckDuotone,
    title: "Choose a Convenient Appointment",
    text: "Select a date and time that works for you. We offer flexible booking for both residential and commercial properties across London.",
    accent: "primary",
  },
  {
    icon: PiCloudRainDuotone,
    title: "Professional Gutter Cleaning",
    text: "Our experienced gutter cleaners arrive with the right equipment to remove leaves, moss, dirt and debris from your gutters and downpipes, restoring proper rainwater flow.",
    accent: "cta",
  },
  {
    icon: PiMagnifyingGlassDuotone,
    title: "Final Check & Confirmation",
    text: "Before we leave, we check that gutters and downpipes are clear and rainwater can drain freely again, so you know the system is working as it should.",
    accent: "primary",
  },
  {
    icon: PiSealCheckDuotone,
    title: "Enjoy Peace of Mind",
    text: "With your gutters professionally cleaned, your property is better protected against overflowing gutters, damp, leaks and unnecessary water damage.",
    accent: "cta",
  },
];

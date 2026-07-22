import type { IconType } from "react-icons";
import {
  PiCalendarCheckDuotone,
  PiChatCircleDuotone,
  PiCurrencyGbpDuotone,
  PiDropDuotone,
  PiMagnifyingGlassDuotone,
  PiRugDuotone,
} from "react-icons/pi";

export type CarpetProcessStep = {
  icon: IconType;
  title: string;
  text: string;
  accent: "primary" | "cta";
};

export const carpetProcessTitle = "How Our Carpet Cleaning Service Works";

export const carpetProcessIntro =
  "Booking carpet cleaning with Cleaning Services London is straightforward. We keep the process simple from your first enquiry to the final aftercare advice, helping you know exactly what to expect.";

export const carpetProcessHubLabel = "Carpet Cleaning Works";

export const carpetProcessSteps: CarpetProcessStep[] = [
  {
    icon: PiChatCircleDuotone,
    title: "Request a Quote",
    text: "Contact our team by phone or through our online enquiry form. Tell us about your property, the number of rooms and the type of carpet cleaning you need.",
    accent: "primary",
  },
  {
    icon: PiMagnifyingGlassDuotone,
    title: "Confirm Property Details",
    text: "We confirm the carpet size, carpet condition, property type and any specific concerns such as stains, pet odours or delicate carpet fibres. This helps us recommend the most suitable cleaning method.",
    accent: "cta",
  },
  {
    icon: PiCurrencyGbpDuotone,
    title: "Receive Fixed Pricing",
    text: "Once we have your property details, we provide a fixed quotation with no hidden charges. You will know exactly what is included before your appointment is confirmed.",
    accent: "primary",
  },
  {
    icon: PiCalendarCheckDuotone,
    title: "Confirm Your Appointment",
    text: "Choose a suitable date and time for your carpet cleaning. We confirm your booking and provide arrival details so you know exactly when to expect our team.",
    accent: "cta",
  },
  {
    icon: PiRugDuotone,
    title: "Professional Cleaning Visit",
    text: "Our trained cleaners arrive with professional equipment and all required cleaning products. We carry out the agreed carpet cleaning service, treat stains where possible and clean your carpets using the most appropriate method.",
    accent: "primary",
  },
  {
    icon: PiDropDuotone,
    title: "Drying and Aftercare Guidance",
    text: "After cleaning, we explain the expected drying time and provide simple aftercare advice to help keep your carpets cleaner for longer and achieve the best possible results.",
    accent: "cta",
  },
];

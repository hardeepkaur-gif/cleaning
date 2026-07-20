import type { IconType } from "react-icons";
import {
  FaCalendarAlt,
  FaClipboardCheck,
  FaHeadset,
  FaHome,
  FaPoundSign,
  FaShieldAlt,
  FaTshirt,
  FaUserCheck,
} from "react-icons/fa";

export type DomesticWhyChooseItem = {
  title: string;
  text: string;
  icon: IconType;
  image: string;
};

export const domesticWhyChooseTitleLine1 = "Why London Customers Book";
export const domesticWhyChooseTitleLine2 = "Domestic Cleaning With Us";

export const domesticWhyChooseIntro =
  "Keeping your home consistently clean is not just about sending a cleaner every week. It is the reliability, trust, and knowing that the work will be done to the same standard, every visit. We offer a reliable and transparent cleaning service that will make your experience better across London.";

export const domesticWhyChooseItems: DomesticWhyChooseItem[] = [
  {
    title: "DBS-Checked and Fully Insured Cleaners",
    text: "All domestic cleaners carry out identity checks and have 1+ years of experience in the industry, a right-to-work check and a DBS before entering customer premises. We also use a complete insurance package for added security when working in your home.",
    icon: FaShieldAlt,
    image: "/images/tenancy/faq/professional.png",
  },
  {
    title: "Same Cleaner for Regular Cleaning",
    text: "In the case of weekly or fortnightly domestic cleaning, we try to have the same cleaner wherever we can. The cleaner will know your home, your priorities, and your routine, and will therefore be able to work more efficiently and provide more uniformity of service with each visit.",
    icon: FaUserCheck,
    image: "/images/about/cleanon/about-three-img-1.jpg",
  },
  {
    title: "Cleaning Tailored to Your Home",
    text: "We know that some customers would appreciate having more attention paid to the kitchen, others more attention paid to the bathrooms, bedrooms, or living areas. We schedule our visits around your priorities so each one is on your 'top five' list.",
    icon: FaHome,
    image: "/images/tenancy/living-room-checklist.png",
  },
  {
    title: "Flexible Weekly and One-Off Appointments",
    text: "If you want your home cleaned regularly or just before your guests are coming in, we will arrange a house cleaning date with you as far as we can.",
    icon: FaCalendarAlt,
    image: "/images/tenancy/faq/same-day.png",
  },
  {
    title: "Help With Everyday Household Tasks",
    text: "In addition to the regular home cleaning, cleaners can help to undertake practical tasks around the house, like ironing, doing laundry, changing bed linen, and other agreed-upon tasks.",
    icon: FaTshirt,
    image: "/images/tenancy/kitchen-checklist.png",
  },
  {
    title: "Clear Pricing Before Every Booking",
    text: "No one wants to get hit with any unplanned expenses. Wherever possible, we quote a fixed price so that you are aware of the charge before it is confirmed that your domestic cleaning is to take place.",
    icon: FaPoundSign,
    image: "/images/tenancy/faq/cost.png",
  },
  {
    title: "Reliable Cleaning Every Visit",
    text: "Our cleaners are not using different personal methods, but are using documented cleaning procedures and quality standards. This makes for a better service each time you book a cleaning service.",
    icon: FaClipboardCheck,
    image: "/images/tenancy/faq/cleaning-method.png",
  },
  {
    title: "Friendly Local Customer Support",
    text: "If your schedule changes or you need to update your booking, our team is available to help arrange a suitable solution as quickly as possible.",
    icon: FaHeadset,
    image: "/images/about/cleanon/about-three-review-img-1-1.jpg",
  },
];

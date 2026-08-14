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
  iconAlt: string;
  image: string;
  imageAlt: string;
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
    iconAlt: "DBS checked and insured domestic cleaners icon",
    image: "/images/domestic/dbs-checked-insured-cleaners.webp",
    imageAlt: "DBS checked and insured domestic cleaners working safely in London homes",
  },
  {
    title: "Same Cleaner for Regular Cleaning",
    text: "In the case of weekly or fortnightly domestic cleaning, we try to have the same cleaner wherever we can. The cleaner will know your home, your priorities, and your routine, and will therefore be able to work more efficiently and provide more uniformity of service with each visit.",
    icon: FaUserCheck,
    iconAlt: "Same cleaner for regular domestic cleaning icon",
    image: "/images/domestic/same-cleaner-regular-cleaning.webp",
    imageAlt: "Same trusted domestic cleaner for regular weekly or fortnightly visits",
  },
  {
    title: "Cleaning Tailored to Your Home",
    text: "We know that some customers would appreciate having more attention paid to the kitchen, others more attention paid to the bathrooms, bedrooms, or living areas. We schedule our visits around your priorities so each one is on your 'top five' list.",
    icon: FaHome,
    iconAlt: "Home cleaning tailored to your priorities icon",
    image: "/images/domestic/cleaning-tailored-to-your-home.webp",
    imageAlt: "Domestic cleaning tailored to kitchen bathroom and living priorities",
  },
  {
    title: "Flexible Weekly and One-Off Appointments",
    text: "If you want your home cleaned regularly or just before your guests are coming in, we will arrange a house cleaning date with you as far as we can.",
    icon: FaCalendarAlt,
    iconAlt: "Flexible domestic cleaning appointments icon",
    image: "/images/domestic/flexible-weekly-appointments.webp",
    imageAlt: "Flexible weekly fortnightly and one off domestic cleaning appointments",
  },
  {
    title: "Help With Everyday Household Tasks",
    text: "In addition to the regular home cleaning, cleaners can help to undertake practical tasks around the house, like ironing, doing laundry, changing bed linen, and other agreed-upon tasks.",
    icon: FaTshirt,
    iconAlt: "Everyday household tasks help icon",
    image: "/images/domestic/everyday-household-tasks.webp",
    imageAlt: "Domestic cleaner helping with ironing laundry and bed linen changes",
  },
  {
    title: "Clear Pricing Before Every Booking",
    text: "No one wants to get hit with any unplanned expenses. Wherever possible, we quote a fixed price so that you are aware of the charge before it is confirmed that your domestic cleaning is to take place.",
    icon: FaPoundSign,
    iconAlt: "Clear domestic cleaning pricing icon",
    image: "/images/domestic/clear-pricing-before-booking.webp",
    imageAlt: "Clear fixed domestic cleaning pricing agreed before every booking",
  },
  {
    title: "Reliable Cleaning Every Visit",
    text: "Our cleaners are not using different personal methods, but are using documented cleaning procedures and quality standards. This makes for a better service each time you book a cleaning service.",
    icon: FaClipboardCheck,
    iconAlt: "Reliable domestic cleaning standards icon",
    image: "/images/domestic/reliable-cleaning-every-visit.webp",
    imageAlt: "Reliable domestic cleaning with documented procedures every visit",
  },
  {
    title: "Friendly Local Customer Support",
    text: "If your schedule changes or you need to update your booking, our team is available to help arrange a suitable solution as quickly as possible.",
    icon: FaHeadset,
    iconAlt: "Local domestic cleaning customer support icon",
    image: "/images/domestic/friendly-local-customer-support.webp",
    imageAlt: "Friendly local customer support for domestic cleaning bookings in London",
  },
];

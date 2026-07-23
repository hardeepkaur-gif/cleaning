import type { IconType } from "react-icons";
import {
  FaCalendarAlt,
  FaShieldAlt,
  FaStar,
  FaTools,
  FaPoundSign,
  FaUserCheck,
  FaSearchPlus,
} from "react-icons/fa";

export type GutterWhyChooseItem = {
  title: string;
  text: string;
  icon: IconType;
  image: string;
};

export const gutterWhyChooseTitle =
  "Why Choose Cleaning Services London for Gutter Cleaning?";

export const gutterWhyChooseIntro =
  "When it comes to hiring a gutter cleaning company, it's not simply about finding the cheapest option around. You want a team that is on time, works safely, does a job right and leaves your property safe. It's what we try to provide on each call.";

export const gutterWhyChooseItems: GutterWhyChooseItem[] = [
  {
    title: "Experienced Local Gutter Cleaners",
    text: "Our trained gutter cleaners are experienced in the cleaning of gutters in residential properties, a range of property buildings from terraced properties to apartment blocks, as well as offices, retail units and other commercial properties throughout the London area. All work is done with suitable equipment and safe working practices.",
    icon: FaUserCheck,
    image: "/images/gutter/gutter-included-1.webp",
  },
  {
    title: "Fully Insured and DBS Checked",
    text: "Cleaning by fully insured, DBS checked professionals and strict safety procedures followed at height. Book with confidence, knowing your property is in safe hands.",
    icon: FaShieldAlt,
    image: "/images/gutter/gutter-included-2.webp",
  },
  {
    title: "Professional Equipment for Better Results",
    text: "Our commercial grade gutter vacuum system, high reach poles, inspection camera and special tools allow us to effectively and safely remove debris without the need for unnecessary risk. This enables us to clean many properties safely from the ground level where appropriate.",
    icon: FaTools,
    image: "/images/gutter/gutter-included-3.webp",
  },
  {
    title: "Honest Pricing With No Hidden Charges",
    text: "We provide fixed quotations before work begins, so you know exactly what you are paying. There are no unexpected extras or surprise call-out fees after the job is complete.",
    icon: FaPoundSign,
    image: "/images/gutter/gutter-included-4.webp",
  },
  {
    title: "Flexible Appointments Across London",
    text: "Appointments are available all week long so that your gutters can be cleaned whenever it is convenient for you to book. Our staff is efficient so they will minimise disruption to your home or business.",
    icon: FaCalendarAlt,
    image: "/images/gutter/gutter-cleaning-hero.webp",
  },
  {
    title: "Highly Rated by London Customers",
    text: "Our growing Google reviews show the quality of our workmanship, punctual service and friendly customer support. Many of our customers return for regular gutter maintenance and recommend us to family, neighbours and local businesses.",
    icon: FaStar,
    image: "/images/gutter/gutter-included-1.webp",
  },
  {
    title: "We Help You Prevent Bigger Repair Costs",
    text: "We do more than remove leaves and debris. We also inspect for visible problems like loose brackets, leaking joints, sagging sections of guttering and blocked downpipes during each clean, giving you the opportunity to address small problems before they turn into large repair costs.",
    icon: FaSearchPlus,
    image: "/images/gutter/gutter-included-2.webp",
  },
];

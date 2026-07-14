import type { IconType } from "react-icons";
import {
  FaClipboardCheck,
  FaClock,
  FaExclamationTriangle,
  FaHandshake,
  FaHome,
  FaSearchPlus,
  FaShieldAlt,
} from "react-icons/fa";

export type TenancyComparisonRow = {
  left: string;
  right: string;
};

export type TenancyMattersItem = {
  title: string;
  text: string;
  icon: IconType;
  image: string;
};

export const tenancyMattersTagline = "Before You Move Out";

export const tenancyMattersTitle =
  "Why End of Tenancy Cleaning Matters Before Moving Out";

export const tenancyMattersIntro =
  "A thorough move-out clean helps protect your deposit, meet landlord expectations, and hand over the property with confidence.";

export const tenancyMattersHeaders = {
  left: "Why It Matters",
  right: "How It Helps",
};

export const tenancyMattersRows: TenancyComparisonRow[] = [
  {
    left: "Inventory Inspections",
    right:
      "Landlords and letting agents often compare the property's condition against the original inventory report before releasing deposits.",
  },
  {
    left: "Cleaning Disputes",
    right:
      "Cleaning remains one of the most common causes of tenancy deposit disputes in the UK.",
  },
  {
    left: "Time Savings",
    right:
      "Moving house is demanding. Professional cleaners handle the deep cleaning while you focus on the move.",
  },
  {
    left: "Hard-to-Reach Areas",
    right:
      "Ovens, skirting boards, cupboards, appliance seals and internal windows are often missed during regular cleaning.",
  },
  {
    left: "Better Presentation",
    right:
      "A professionally cleaned property creates a better impression during handover and viewings.",
  },
  {
    left: "Landlord Expectations",
    right:
      "A detailed move-out clean helps ensure the property is presented to a high standard for its next occupants.",
  },
  {
    left: "Stress-Free Handover",
    right:
      "A structured cleaning checklist helps reduce last-minute issues before keys are returned.",
  },
];

export const tenancyMattersItems: TenancyMattersItem[] = [
  {
    title: "Inventory Inspections",
    text: "Landlords and letting agents often compare the property's condition against the original inventory report before releasing deposits.",
    icon: FaClipboardCheck,
    image: "/images/services/cleanon-tabs/services-three-tab-img-1.jpg",
  },
  {
    title: "Cleaning Disputes",
    text: "Cleaning remains one of the most common causes of tenancy deposit disputes in the UK.",
    icon: FaExclamationTriangle,
    image: "/images/services/cleanon-tabs/services-three-tab-img-2.jpg",
  },
  {
    title: "Time Savings",
    text: "Moving house is demanding. Professional cleaners handle the deep cleaning while you focus on the move.",
    icon: FaClock,
    image: "/images/services/cleanon-tabs/services-three-tab-img-3.jpg",
  },
  {
    title: "Hard-to-Reach Areas",
    text: "Ovens, skirting boards, cupboards, appliance seals and internal windows are often missed during regular cleaning.",
    icon: FaSearchPlus,
    image: "/images/services/cleanon-tabs/services-three-tab-img-4.jpg",
  },
  {
    title: "Better Presentation",
    text: "A professionally cleaned property creates a better impression during handover and viewings.",
    icon: FaHome,
    image: "/images/why/cleanon/why-choose-one-img-1.jpg",
  },
  {
    title: "Landlord Expectations",
    text: "A detailed move-out clean helps ensure the property is presented to a high standard for its next occupants.",
    icon: FaShieldAlt,
    image: "/images/why/cleanon/why-choose-one-img-2.jpg",
  },
  {
    title: "Stress-Free Handover",
    text: "A structured cleaning checklist helps reduce last-minute issues before keys are returned.",
    icon: FaHandshake,
    image: "/images/tenancy/end-of-tenancy-deposit-concerns.png",
  },
];

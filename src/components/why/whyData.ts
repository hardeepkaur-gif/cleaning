import type { IconType } from "react-icons";
import {
  PiCalendarSlashDuotone,
  PiCameraRotateDuotone,
  PiCameraSlashDuotone,
  PiCoinVerticalDuotone,
  PiFileXDuotone,
  PiHeartDuotone,
  PiListChecksDuotone,
  PiLockKeyDuotone,
  PiMedalDuotone,
  PiShieldStarDuotone,
  PiTagChevronDuotone,
  PiUmbrellaDuotone,
  PiUserCircleGearDuotone,
  PiUsersThreeDuotone,
} from "react-icons/pi";

export type WhyProblem = {
  title: string;
  text: string;
  icon: IconType;
};

export type WhySolution = {
  text: string;
  icon: IconType;
};

export const whyTagline = "Why Choose Us";

export const whyTitle =
  "Why London Customers Struggle to Find Reliable Cleaners";

export const whyIntro =
  "Not all London cleaning services are created equal. A lot of people have complained about appointments not taken seriously, poor cleanliness, lack of clarity on the pricing, etc. and others have worried about who is entering their home.";

export const whyProblems: WhyProblem[] = [
  {
    title: "Last-Minute Cancellations",
    text: "There are several instances when the customer will find cleaners canceling without any prior notice, leaving them scrambling to find a replacement.",
    icon: PiCalendarSlashDuotone,
  },
  {
    title: "Different Cleaner Every Visit",
    text: "Having multiple work staff changes can lead to the regular addition of a new cleaner, which can make it hard to trust and maintain standards.",
    icon: PiUsersThreeDuotone,
  },
  {
    title: "Unclear or Changing Pricing",
    text: "Some companies may quote a rate, but impose additional charges once a booking is secured.",
    icon: PiCoinVerticalDuotone,
  },
  {
    title: "Vague Vetting Claims",
    text: "Cleaners are often called ‘fully vetted cleaners' and many will have no documentation for the checks they have performed.",
    icon: PiFileXDuotone,
  },
  {
    title: "No Quality Control After the Job",
    text: "After the cleaning, often there's no evidence, reporting or accountability for the cleaning.",
    icon: PiCameraSlashDuotone,
  },
  {
    title: "Concerns About Property Security",
    text: "Visitors into your home must trust you, and many cleaning companies don't fully consider this.",
    icon: PiLockKeyDuotone,
  },
];

export const whySolutionsTitle =
  "How Cleaning Companies London Solves These Problems";

export const whySolutions: WhySolution[] = [
  {
    text: "DBS-checked cleaners with identity and right-to-work verification.",
    icon: PiShieldStarDuotone,
  },
  {
    text: "Experienced cleaners assessed before attending any property.",
    icon: PiMedalDuotone,
  },
  {
    text: "Fixed pricing agreed before work begins.",
    icon: PiTagChevronDuotone,
  },
  {
    text: "Same-cleaner availability for recurring cleaning service London.",
    icon: PiUserCircleGearDuotone,
  },
  {
    text: "Signed cleaning procedures and documented service standards.",
    icon: PiListChecksDuotone,
  },
  {
    text: "Completion photos for additional quality assurance.",
    icon: PiCameraRotateDuotone,
  },
  {
    text: "Fully insured cleaning professionals.",
    icon: PiUmbrellaDuotone,
  },
  {
    text: "A satisfaction-focused approach backed by clear accountability.",
    icon: PiHeartDuotone,
  },
];

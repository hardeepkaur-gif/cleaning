import type { IconType } from "react-icons";
import {
  PiBathtubDuotone,
  PiBedDuotone,
  PiCookingPotDuotone,
  PiCouchDuotone,
  PiDoorDuotone,
  PiPlusCircleDuotone,
  PiProhibitDuotone,
} from "react-icons/pi";

export type DomesticChecklistListVariant = "check" | "plus" | "exclude";

export type DomesticChecklistTab = {
  id: string;
  title: string;
  shortLabel: string;
  icon: IconType;
  image: string;
  intro: string;
  items: string[];
  listVariant?: DomesticChecklistListVariant;
};

export const domesticChecklistTitle =
  "What Is Included in Our Domestic Cleaning Service?";

export const domesticChecklistIntro =
  "Every home is different, so each domestic cleaning service is set to your priorities and the time you've booked. The checklist below shows the work included during a standard domestic cleaning visit.";

export const domesticChecklistTabs: DomesticChecklistTab[] = [
  {
    id: "kitchen",
    title: "Kitchen Cleaning Checklist",
    shortLabel: "Kitchen",
    icon: PiCookingPotDuotone,
    image: "/images/domestic/domestic-kitchen-checklist.png",
    intro:
      "Your kitchen is one of the busiest rooms in the home and benefits from regular attention to maintain hygiene and cleanliness. Your domestic cleaner can:",
    items: [
      "Wipe and disinfect kitchen worktops and accessible surfaces",
      "Clean cupboard fronts and splashbacks",
      "Clean and polish the sink and taps",
      "Wipe the outside of kitchen appliances, including the microwave, fridge, oven, and extractor hood",
      "Clean the hob surface",
      "Empty kitchen bins and replace bin liners",
      "Vacuum and mop the kitchen floor",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom Cleaning Checklist",
    shortLabel: "Bathroom",
    icon: PiBathtubDuotone,
    image: "/images/domestic/domestic-bathroom-checklist.png",
    intro:
      "Bathrooms require regular cleaning to reduce limescale, soap residue, and everyday dirt. During your home cleaning service, your cleaner will normally:",
    items: [
      "Clean and disinfect the toilet, sink, bath, and shower",
      "Polish taps, mirrors, and chrome fittings",
      "Wipe bathroom worktops and accessible surfaces",
      "Remove light soap residue where possible",
      "Empty bathroom bins",
      "Vacuum and mop the floor",
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom Cleaning Checklist",
    shortLabel: "Bedroom",
    icon: PiBedDuotone,
    image: "/images/domestic/domestic-bedroom-checklist.png",
    intro:
      "Regular bedroom cleaning helps create a tidy and comfortable space while reducing everyday dust and allergens. Your cleaner can usually:",
    items: [
      "Dust furniture, bedside tables, and accessible surfaces",
      "Wipe mirrors where required",
      "Make the bed using clean bedding provided by you",
      "Vacuum carpets or clean hard flooring",
      "Mop floors where applicable",
      "Empty bedroom bins",
    ],
  },
  {
    id: "living-room",
    title: "Living Room Cleaning Checklist",
    shortLabel: "Living Room",
    icon: PiCouchDuotone,
    image: "/images/domestic/domestic-living-room-checklist.png",
    intro:
      "Living areas are used every day and often collect dust, fingerprints, and general clutter. A domestic cleaning visit includes:",
    items: [
      "Dusting furniture, shelves, and accessible surfaces",
      "Wiping coffee tables, TV units, and other furniture",
      "Cleaning light switches and door handles",
      "Vacuuming carpets, rugs, and upholstered areas where accessible",
      "Mopping hard floors",
      "Emptying bins and leaving the room neat and presentable",
    ],
  },
  {
    id: "hallway",
    title: "Hallways and Shared Areas",
    shortLabel: "Hallway",
    icon: PiDoorDuotone,
    image: "/images/domestic/domestic-hallway-checklist.png",
    intro:
      "Hallways, stairs, and entrances experience constant foot traffic and help create the first impression of your home. Your cleaner will typically:",
    items: [
      "Dust accessible surfaces and skirting boards",
      "Wipe handrails and high-touch areas",
      "Vacuum carpets, stairs, and entrance mats",
      "Mop hard flooring",
      "Remove light marks where possible",
      "Leave shared areas clean, tidy, and ready for everyday use",
    ],
  },
  {
    id: "additional",
    title: "Additional Domestic Cleaning Tasks You Can Add",
    shortLabel: "Add-On Tasks",
    icon: PiPlusCircleDuotone,
    image: "/images/domestic/domestic-addon-tasks-checklist.png",
    intro:
      "Need a little extra help around the house? Alongside your regular domestic cleaning service, you can request additional household tasks during your booking, subject to the time available.",
    items: [
      "Ironing and laundry",
      "Changing bed linen",
      "Internal fridge cleaning",
      "Inside cupboards and wardrobes (when empty)",
      "Internal window cleaning where safely accessible",
      "Dishwashing",
      "Folding clean laundry",
    ],
    listVariant: "plus",
  },
  {
    id: "excluded",
    title: "What Is Not Included in Standard Domestic Cleaning?",
    shortLabel: "Not Included",
    icon: PiProhibitDuotone,
    image: "/images/domestic/domestic-not-included-checklist.png",
    intro:
      "To avoid any confusion, some specialist or time-intensive tasks are not normally included in a standard domestic cleaning service unless arranged in advance.",
    items: [
      "External window cleaning",
      "Carpet steam cleaning",
      "Deep oven cleaning",
      "Moving heavy furniture",
      "Outdoor areas such as patios or gardens",
      "Cleaning above safe working height",
    ],
    listVariant: "exclude",
  },
];

import type { IconType } from "react-icons";
import {
  PiBriefcaseDuotone,
  PiCouchDuotone,
  PiDropDuotone,
  PiKeyDuotone,
  PiSparkleDuotone,
  PiWarningCircleDuotone,
} from "react-icons/pi";

export type CarpetServiceTab = {
  id: string;
  title: string;
  shortLabel: string;
  bestFor: string;
  icon: IconType;
  image: string;
  description: string;
};

export const carpetServicesTitle = "Carpet Cleaning Services We Provide";

export const carpetServicesIntro =
  "We are professional carpet cleaners for residential, flat, office and rental carpet cleaning services in East London, Dagenham, Ilford, New Ham and surrounding areas. Each service is appropriate for any carpet condition and the type of fibres being cleaned, providing a more appropriate, effective solution for each property.";

export const carpetServicesTagline = "Service Guide";

export const carpetServiceTabs: CarpetServiceTab[] = [
  {
    id: "deep",
    title: "Deep Carpet Cleaning",
    shortLabel: "Deep Clean",
    bestFor: "Dirty, dull or heavily used carpets",
    icon: PiSparkleDuotone,
    image: "/images/tenancy/carpet-cleaning.png",
    description:
      "For deep carpet cleaning we focus on the dirt, dust and debris that have been trapped deep within the carpet fibres that can't be removed by regular vacuuming. It can be used on heavily trafficked carpet that has become dull, discolored or worn through the use of a person.",
  },
  {
    id: "steam",
    title: "Steam Carpet Cleaning",
    shortLabel: "Steam Clean",
    bestFor: "Hygiene, allergens and embedded dirt",
    icon: PiDropDuotone,
    image: "/images/tenancy/faq/carpet.png",
    description:
      "When using steam carpet cleaning, the hot water is used to extract dirt, allergens and bacteria from a carpet's fibers. This is an effective way to enhance cleanliness and to revitalize the look of carpets in residences and businesses alike.",
  },
  {
    id: "stain",
    title: "Carpet Stain Removal",
    shortLabel: "Stain Removal",
    bestFor: "Wine, coffee, mud, food and pet stains",
    icon: PiWarningCircleDuotone,
    image: "/images/tenancy/deep-cleaning.png",
    description:
      "We remove all common stains on carpet such as food, drinks, mud and pet accidents. Each stain is treated on a case-by-case basis which enables us to choose the best methods for treating the carpet material and type of stain.",
  },
  {
    id: "tenancy",
    title: "End of Tenancy Carpet Cleaning",
    shortLabel: "Tenancy Clean",
    bestFor: "Tenants and landlords",
    icon: PiKeyDuotone,
    image: "/images/tenancy/tenants-moving-out.png",
    description:
      "At the end of the tenancy we offer a carpet cleaning service for tenants, landlords and letting agents to get the property ready for inspection and new tenants. Built up dirt, stains and odours are eliminated when you do a deep clean, meaning your carpet is now cleaner and more presentable.",
  },
  {
    id: "office",
    title: "Office Carpet Cleaning",
    shortLabel: "Office Clean",
    bestFor: "Workplaces and commercial spaces",
    icon: PiBriefcaseDuotone,
    image: "/images/tenancy/landlords-preparing.png",
    description:
      "We clean office carpets professionally at workplaces, retail units and other commercial establishments. This frees up time for appointments, and deep cleaning makes working environments look and feel good while keeping them clean.",
  },
  {
    id: "upholstery",
    title: "Carpet and Upholstery Cleaning",
    shortLabel: "Upholstery",
    bestFor: "Sofas, rugs and carpets together",
    icon: PiCouchDuotone,
    image: "/images/tenancy/living-room-checklist.png",
    description:
      "If you would like to have your entire home cleaned, we can attend the same day to clean the carpet and any other upholstered furniture such as sofas, armchairs, rugs, etc. Multiple packages can also minimize the disruption by having everything done at once within a single trip.",
  },
];

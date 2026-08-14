import type { IconType } from "react-icons";
import { FaCamera, FaPoundSign, FaShieldAlt } from "react-icons/fa";

export type CarpetChooseItem = {
  title: string;
  text: string;
  icon: IconType;
  iconAlt: string;
  image: string;
  imageAlt: string;
};

export const carpetChooseTitle = "How to Choose a Carpet Cleaner in London";

export const carpetChooseIntro =
  "Not every carpet cleaning company offers the same level of service. Looking beyond the price can help you avoid poor cleaning results, hidden charges and unnecessary damage to your carpets. Before booking, compare a few important factors to make a more informed decision.";

export const carpetChooseItems: CarpetChooseItem[] = [
  {
    title: "Ask About Insurance and Cleaner Vetting",
    text: "Select a company that is fully insured and has trained and vetted cleaners. Insurance will give extra coverage in case of accidental damage, and experienced professionals will be more likely to determine the right type of cleaning for various carpet fibres, which will minimize the chance of shrinkage, fading or damage.",
    icon: FaShieldAlt,
    iconAlt: "Insured and vetted carpet cleaners icon",
    image: "/images/carpet/insurance-and-cleaner-vetting.webp",
    imageAlt: "Insured and vetted carpet cleaners working safely in London homes",
  },
  {
    title: "Avoid Choosing on Price Alone",
    text: "The cheapest quotation is not always the best value. Very low prices may exclude stain treatments, deodorising, specialist equipment or necessary cleaning materials. A fixed quotation that clearly explains what is included often provides better value than a low headline price with additional charges later.",
    icon: FaPoundSign,
    iconAlt: "Carpet cleaning pricing comparison icon",
    image: "/images/carpet/avoid-choosing-on-price-alone.webp",
    imageAlt: "Avoid choosing carpet cleaning on price alone in London",
  },
  {
    title: "Ask for Before and After Photos",
    text: "Before and after photos can help you assess the quality of a company's previous work. They provide a realistic indication of stain removal, carpet restoration and overall cleaning standards. You can also read recent customer reviews to understand how the company performs across different types of properties and cleaning requirements.",
    icon: FaCamera,
    iconAlt: "Before and after carpet cleaning photos icon",
    image: "/images/carpet/before-and-after-photos.webp",
    imageAlt: "Before and after carpet cleaning photos showing stain removal results",
  },
];

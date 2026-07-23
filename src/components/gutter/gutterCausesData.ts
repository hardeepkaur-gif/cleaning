import type { IconType } from "react-icons";
import {
  FaCloudRain,
  FaDove,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";

export type GutterCauseItem = {
  title: string;
  text: string;
  icon: IconType;
};

export const gutterCausesTagline = "Common Causes";

export const gutterCausesTitle = "What Causes Gutters to Become Blocked?";

export const gutterCausesIntro =
  "Gutters are designed to drain rainwater away, but with time they get clogged and started to cause overflow, standing water and damage.";

export const gutterCausesHighlights = [
  "Overflow and standing water",
  "Debris from trees and roofs",
  "Seasonal London weather",
];

export const gutterCausesItems: GutterCauseItem[] = [
  {
    title: "Leaves and Tree Debris",
    text: "Falling leaves, small branches, twigs and seeds are one of the biggest causes of clogged gutters - while this is most often during fall. Properties close to trees that are already grown will tend to gain a lot of debris quicker, which will result in the slow down of rainwater from flowing through the site and thus making it more essential to clean your gutters regularly.",
    icon: FaLeaf,
  },
  {
    title: "Moss From Roof Tiles",
    text: "The moss growth on the roof tiles gradually becomes dislodged during wet and windy conditions, and falls away into the gutters. As the moss accumulates over time, water flow is impeded and hard to remove. If you clean your roof gutters on a regular basis, you can prevent moss accumulation and avoid clogging issues.",
    icon: FaSeedling,
  },
  {
    title: "Dirt, Silt and Bird Nests",
    text: "Dust, roof grit, airborne dirt and silt slowly settle inside gutters throughout the year. Birds can also nest or drop nesting material blocking outlets and downpipes. These obstructions can hinder rainwater from flowing properly and can overload the drainage system for the gutters.",
    icon: FaDove,
  },
  {
    title: "Seasonal Weather in London",
    text: "London experiences frequent rainfall, high wind speeds and seasonal leaf drop all of which can lead to the blockage of gutters. Leaves, moss and dirt from nearby roofs and trees can be blown into the gutters and washed away by heavy rains. Seasonal gutter cleaning keeps your gutter clean and efficient throughout the year.",
    icon: FaCloudRain,
  },
];

import { areaPins } from "@/components/areas/areasData";

export const carpetAreasTitle =
  "Areas We Cover Across East London and Greater London";

export const carpetAreasIntro =
  "Cleaning Services London primarily provides professional carpet cleaning across East London, including Canning Town, Stratford, Plaistow, East Ham, Dagenham, Beckton, Barking, Canary Wharf and Docklands. We also serve customers across Greater London, subject to service availability and scheduling.";

export const carpetAreasNote =
  "Whether you need carpet cleaning for a house, flat, office or rental property, our team can provide deep carpet cleaning, stain removal and steam carpet cleaning at a time that suits you.";

export const carpetAreaNames = [
  "Canning Town",
  "Stratford",
  "Plaistow",
  "East Ham",
  "Dagenham",
  "Beckton",
  "Barking",
  "Canary Wharf",
  "Docklands",
] as const;

export const carpetAreaPins = areaPins.filter((pin) =>
  carpetAreaNames.includes(pin.name as (typeof carpetAreaNames)[number]),
);

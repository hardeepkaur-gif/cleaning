export const carpetMethodsTitle = "Steam Carpet Cleaning vs Dry Carpet Cleaning";

export const carpetMethodsIntro =
  "There are usually two types of cleaning methods that professional carpet cleaners will use. The best choice will be determined by the type of carpet you have, the level of dirt and the speed of completion of carpet use. The right selection will maximize the cleaning efficiency and ensure carpet fibers are preserved.";

export const carpetMethodsHeaders = {
  method: "Method",
  bestFor: "Best For",
  dryingTime: "Drying Time",
  limitation: "Limitation",
};

export type CarpetMethodRow = {
  id: string;
  method: string;
  bestFor: string;
  dryingTime: string;
  limitation: string;
  accent: "steam" | "dry";
};

export const carpetMethodsRows: CarpetMethodRow[] = [
  {
    id: "steam",
    method: "Hot Water Extraction (Steam Cleaning)",
    bestFor: "Deep cleaning, stains, allergens and heavy soiling",
    dryingTime: "Usually 3 to 6 hours",
    limitation: "Not suitable for every delicate fibre",
    accent: "steam",
  },
  {
    id: "dry",
    method: "Dry Carpet Cleaning",
    bestFor: "Delicate rugs, natural fibres and quick refreshes",
    dryingTime: "Usually ready to use much sooner",
    limitation: "Less effective for deep stains and embedded dirt",
    accent: "dry",
  },
];

export const carpetMethodsGuideTitle =
  "Which Carpet Cleaning Method Should You Choose?";

export const carpetMethodsGuideParagraphs = [
  "Hot water extraction is the best cleaning for most homes and offices. It cleans dirt, bacteria, allergens and many common stains from deep within the carpet fibres and is used for heavily trafficked carpet and for homes with children, pets and allergists.",
  "In cases where the material is delicate, and excessive moisture would damage it, dry carpet cleaning is a more appropriate solution, like with some natural fibre carpets. It is also a convenient option when there is a need to use carpet quickly after carpet use as it dries much faster when compared to other options available.",
  "Before we begin the cleaning process at Cleaning Services London, we thoroughly inspect your carpet to ensure the proper cleaning technique is recommended for the carpet material, condition and outcomes you are looking for.",
];

export const carpetMethodsGuideImage = "/images/carpet/choose-carpet-cleaning-method.webp";

export const carpetMethodsGuideImageAlt =
  "Professional carpet cleaning method inspection in London";

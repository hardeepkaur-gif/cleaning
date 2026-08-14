export type CarpetFaqItem = {
  q: string;
  a: string;
  img: string;
  alt: string;
};

const faqImgBase = "/images/carpet/faq";

export const carpetFaqTitle = "FAQs";

export const carpetFaqs: CarpetFaqItem[] = [
  {
    q: "How long does carpet cleaning take?",
    a: "Most standard rooms take around 20 to 40 minutes to clean. Larger homes, heavily stained carpets or commercial properties may require additional time depending on the size and condition of the carpets.",
    img: `${faqImgBase}/faq-duration.webp`,
    alt: "Typical carpet cleaning duration for standard rooms in London homes",
  },
  {
    q: "How long does carpet cleaning take to dry?",
    a: "Drying time depends on the cleaning method, carpet material and room ventilation. Hot water extraction carpets usually dry within 3 to 6 hours, while dry carpet cleaning allows carpets to be used much sooner.",
    img: `${faqImgBase}/faq-drying.webp`,
    alt: "Carpet drying time after steam or dry cleaning in London",
  },
  {
    q: "Is steam carpet cleaning better than dry cleaning?",
    a: "For most homes, yes. Hot water extraction provides a deeper clean by removing embedded dirt, allergens and many stains. Dry carpet cleaning is generally recommended for delicate fibres or where faster drying is required.",
    img: `${faqImgBase}/faq-steam-vs-dry.webp`,
    alt: "Steam carpet cleaning compared with dry cleaning methods",
  },
  {
    q: "Can carpet cleaning remove all stains?",
    a: "No, many stains can be significantly improved or completely removed, but permanent damage, bleaching, dye transfer or stains that have been left untreated for a long time may not disappear completely.",
    img: `${faqImgBase}/faq-stains.webp`,
    alt: "Professional carpet stain removal results for London homes",
  },
  {
    q: "Should I hire carpet cleaners or do it myself?",
    a: "DIY carpet cleaning can help with light surface dirt, but professional equipment removes dirt, allergens and moisture from much deeper within the carpet fibres. Professional cleaning is usually the better option for heavily used carpets, stubborn stains and long-term carpet care.",
    img: `${faqImgBase}/faq-diy-vs-pro.webp`,
    alt: "Professional carpet cleaning versus DIY machines in London",
  },
  {
    q: "Do I need to move furniture before carpet cleaning?",
    a: "We recommend removing small items, decorations and fragile belongings before our arrival. Larger furniture can often be cleaned around or moved where practical, depending on the item and the available space.",
    img: `${faqImgBase}/faq-furniture.webp`,
    alt: "Moving furniture before a carpet cleaning appointment in London",
  },
  {
    q: "Is carpet cleaning worth it before moving into a new home?",
    a: "Yes, even if carpets look clean, they may contain dust, allergens, bacteria and odours left by previous occupants. Professional carpet cleaning gives your new home a cleaner and fresher start before you move in.",
    img: `${faqImgBase}/faq-moving-in.webp`,
    alt: "Carpet cleaning before moving into a new London home",
  },
  {
    q: "Do you clean office carpets in London?",
    a: "Yes, we provide office carpet cleaning for workplaces, retail units and commercial premises across London and the wider London area. Flexible appointments help minimise disruption to your business.",
    img: `${faqImgBase}/faq-office.webp`,
    alt: "Office carpet cleaning service for London workplaces",
  },
  {
    q: "Do you offer carpet and sofa cleaning together?",
    a: "Yes, many customers book carpet and upholstery cleaning during the same visit. Cleaning both together saves time, keeps your home consistently clean and may reduce the overall cost compared with booking separate appointments.",
    img: `${faqImgBase}/faq-sofa.webp`,
    alt: "Combined carpet and sofa cleaning during the same London visit",
  },
  {
    q: "Why Cheap Carpet Cleaning Can Cost More?",
    a: "Low-cost services use weaker equipment, unsuitable cleaning products or rushed cleaning methods that leave dirt, moisture or detergent residue behind. So, this results in stains to return, unpleasant odours to remain or carpets to wear out more quickly.",
    img: `${faqImgBase}/faq-cost.webp`,
    alt: "Why cheap carpet cleaning can cost more in the long run",
  },
  {
    q: "What equipment do you use at Cleaning Services London to clean carpet?",
    a: "We use commercial hot water extraction equipment rather than domestic carpet-cleaning machines. The system injects cleaning solution into the carpet and extracts loosened dirt and moisture in the same process. Before cleaning, we assess fibre type, staining and condition so that temperature, treatment and cleaning method can be adjusted where required.",
    img: "/images/carpet/professional-carpet-care.webp",
    alt: "Commercial hot water extraction equipment for carpet cleaning",
  },
];

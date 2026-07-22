export type CarpetFaqItem = {
  q: string;
  a: string;
  img: string;
};

const faqImgBase = "/images/tenancy/faq";

export const carpetFaqTitle = "FAQs";

export const carpetFaqs: CarpetFaqItem[] = [
  {
    q: "How much does carpet cleaning cost in London?",
    a: "Carpet cleaning prices in London depend on the number of rooms, carpet size, carpet condition and cleaning method. Small rooms often start from around £30 to £50, while larger jobs are usually priced after assessing your requirements. We provide fixed quotations before work begins, so you know the total cost in advance.",
    img: `${faqImgBase}/cost.png`,
  },
  {
    q: "How long does carpet cleaning take?",
    a: "Most standard rooms take around 20 to 40 minutes to clean. Larger homes, heavily stained carpets or commercial properties may require additional time depending on the size and condition of the carpets.",
    img: `${faqImgBase}/duration.png`,
  },
  {
    q: "How long does carpet cleaning take to dry?",
    a: "Drying time depends on the cleaning method, carpet material and room ventilation. Hot water extraction carpets usually dry within 3 to 6 hours, while dry carpet cleaning allows carpets to be used much sooner.",
    img: `${faqImgBase}/same-day.png`,
  },
  {
    q: "Is steam carpet cleaning better than dry cleaning?",
    a: "For most homes, yes. Hot water extraction provides a deeper clean by removing embedded dirt, allergens and many stains. Dry carpet cleaning is generally recommended for delicate fibres or where faster drying is required.",
    img: `${faqImgBase}/cleaning-method.png`,
  },
  {
    q: "Can carpet cleaning remove all stains?",
    a: "No, many stains can be significantly improved or completely removed, but permanent damage, bleaching, dye transfer or stains that have been left untreated for a long time may not disappear completely. Every carpet is assessed before treatment.",
    img: `${faqImgBase}/carpet.png`,
  },
  {
    q: "Should I hire carpet cleaners or do it myself?",
    a: "DIY carpet cleaning can help with light surface dirt, but professional equipment removes dirt, allergens and moisture from much deeper within the carpet fibres. Professional cleaning is usually the better option for heavily used carpets, stubborn stains and long-term carpet care.",
    img: `${faqImgBase}/professional.png`,
  },
  {
    q: "Do I need to move furniture before carpet cleaning?",
    a: "We recommend removing small items, decorations and fragile belongings before our arrival. Larger furniture can often be cleaned around or moved where practical, depending on the item and the available space.",
    img: `${faqImgBase}/supplies.png`,
  },
  {
    q: "Is carpet cleaning worth it before moving into a new home?",
    a: "Yes, even if carpets look clean, they may contain dust, allergens, bacteria and odours left by previous occupants. Professional carpet cleaning gives your new home a cleaner and fresher start before you move in.",
    img: `${faqImgBase}/same-day.png`,
  },
  {
    q: "Do you clean office carpets in London?",
    a: "Yes, we provide office carpet cleaning for workplaces, retail units and commercial premises across East London and the wider London area. Flexible appointments help minimise disruption to your business.",
    img: `${faqImgBase}/professional.png`,
  },
  {
    q: "Do you offer carpet and sofa cleaning together?",
    a: "Yes, many customers book carpet and upholstery cleaning during the same visit. Cleaning both together saves time, keeps your home consistently clean and may reduce the overall cost compared with booking separate appointments.",
    img: `${faqImgBase}/carpet.png`,
  },
];

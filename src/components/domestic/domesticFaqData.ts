export type DomesticFaqItem = {
  q: string;
  a: string;
  img: string;
  alt: string;
};

const faqImgBase = "/images/domestic/faq";

export const domesticFaqTitle = "FAQs";

export const domesticFaqs: DomesticFaqItem[] = [
  {
    q: "What does domestic cleaning include?",
    a: "The standard domestic cleaning service typically covers dusting, vacuuming, mopping floors, cleaning bathrooms, wiping kitchen surfaces, emptying bins, polishing accessible furniture, and cleaning high-touch areas.",
    img: `${faqImgBase}/faq-what-included.webp`,
    alt: "Standard domestic cleaning tasks included in a London home visit",
  },
  {
    q: "What will a cleaner do in 3 hours?",
    a: "Our professional cleaner will clean the kitchen and bathrooms, vacuum and mop floors, dust living areas and bedrooms, wipe accessible surfaces, take out trash cans, and perform other tasks agreed upon in the house in three hours. The extent of work accomplished is based on the size and condition of your home.",
    img: `${faqImgBase}/faq-3-hours.webp`,
    alt: "Domestic cleaner completing priority tasks in a three hour home visit",
  },
  {
    q: "How many hours of domestic cleaning do I need?",
    a: "Around 2-3 hours for smaller flats and 4 hours or more for larger family homes. In the process of quoting, we'll pick a reasonable time for the cleaning process according to the size and layout of your property and its cleaning needs.",
    img: `${faqImgBase}/faq-how-many-hours.webp`,
    alt: "Guide to booking the right domestic cleaning hours for your home size",
  },
  {
    q: "Do I Need to Be at Home While the Cleaner Is Working?",
    a: "No, it is possible to stay in the house during the cleaning or leave home if it's more convenient. There are many customers who opt to do their work while their housekeeper is also at work. In regular domestic cleaning services, you can also ask the same cleaner if feasible, so that each time you are at ease and familiar with the cleaning person.",
    img: "/images/domestic/domestic-at-home-cleaner.webp",
    alt: "Customer away from home while DBS checked domestic cleaner works",
  },
  {
    q: "Can I request the same cleaner every visit?",
    a: "Yes, for regular domestic cleaning services, we try to have the same cleaner whenever it is possible to schedule. This will help to ensure uniformity and help your cleaner get to know your room and your tastes.",
    img: `${faqImgBase}/faq-same-cleaner.webp`,
    alt: "Same trusted domestic cleaner assigned for regular weekly visits",
  },
  {
    q: "Are your domestic cleaners DBS-checked?",
    a: "Yes, all cleaners have DBS checks, identity checks, and right-to-work checks carried out before entering customer properties, giving extra reassurance to homeowners, tenants, and landlords.",
    img: `${faqImgBase}/faq-dbs-checked.webp`,
    alt: "DBS checked domestic cleaners verified before entering London homes",
  },
  {
    q: "Do cleaners bring their own cleaning products?",
    a: "Cleaning supplies can be made available when requested. Some customers like their domestic cleaners to use existing products within the home for regular cleanings. We'll confirm the arrangement during your booking.",
    img: `${faqImgBase}/faq-cleaning-products.webp`,
    alt: "Domestic cleaners using customer or supplied eco friendly products",
  },
  {
    q: "Should I tidy before the cleaner arrives?",
    a: "A tidy-up is helpful but not essential. Storage of cleaning items, paperwork, and personal belongings will help a cleaner to devote more time to a cleaning job.",
    img: `${faqImgBase}/faq-tidy-before.webp`,
    alt: "Tidy home before domestic cleaner arrives for an efficient visit",
  },
];

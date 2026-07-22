export type DomesticFaqItem = {
  q: string;
  a: string;
  img: string;
};

const faqImgBase = "/images/domestic/faq";

export const domesticFaqTitle = "FAQs";

export const domesticFaqs: DomesticFaqItem[] = [
  {
    q: "What does domestic cleaning include?",
    a: "The standard domestic cleaning service typically covers dusting, vacuuming, mopping floors, cleaning bathrooms, wiping kitchen surfaces, emptying bins, polishing accessible furniture, and cleaning high-touch areas.",
    img: `${faqImgBase}/faq-what-included.webp`,
  },
  {
    q: "What will a cleaner do in 3 hours?",
    a: "Our professional cleaner will clean the kitchen and bathrooms, vacuum and mop floors, dust living areas and bedrooms, wipe accessible surfaces, take out trash cans, and perform other tasks agreed upon in the house in three hours. The extent of work accomplished is based on the size and condition of your home.",
    img: `${faqImgBase}/faq-3-hours.webp`,
  },
  {
    q: "How many hours of domestic cleaning do I need?",
    a: "Around 2-3 hours for smaller flats and 4 hours or more for larger family homes. In the process of quoting, we'll pick a reasonable time for the cleaning process according to the size and layout of your property and its cleaning needs.",
    img: `${faqImgBase}/faq-how-many-hours.webp`,
  },
  {
    q: "What is the difference between domestic cleaning and deep cleaning?",
    a: "Domestic cleaning is all about keeping your house clean by using regular cleaning services like dusting, vacuuming, and mopping. Deep cleaning is a more thorough cleaning that deals with areas that are not regularly cleaned and with built-up dirt and neglected areas.",
    img: `${faqImgBase}/faq-domestic-vs-deep.webp`,
  },
  {
    q: "Can I request the same cleaner every visit?",
    a: "Yes, for regular domestic cleaning services, we try to have the same cleaner whenever it is possible to schedule. This will help to ensure uniformity and help your cleaner get to know your room and your tastes.",
    img: `${faqImgBase}/faq-same-cleaner.webp`,
  },
  {
    q: "Are your domestic cleaners DBS-checked?",
    a: "Yes, all cleaners have DBS checks, identity checks, and right-to-work checks carried out before entering customer properties, giving extra reassurance to homeowners, tenants, and landlords.",
    img: `${faqImgBase}/faq-dbs-checked.webp`,
  },
  {
    q: "Do cleaners bring their own cleaning products?",
    a: "Cleaning supplies can be made available when requested. Some customers like their domestic cleaners to use existing products within the home for regular cleanings. We'll confirm the arrangement during your booking.",
    img: `${faqImgBase}/faq-cleaning-products.webp`,
  },
  {
    q: "Should I tidy before the cleaner arrives?",
    a: "A tidy-up is helpful but not essential. Storage of cleaning items, paperwork, and personal belongings will help a cleaner to devote more time to a cleaning job.",
    img: `${faqImgBase}/faq-tidy-before.webp`,
  },
];

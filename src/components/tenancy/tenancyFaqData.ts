export type TenancyFaqItem = {
  q: string;
  a: string;
  img: string;
  alt: string;
};

const faqImgBase = "/images/tenancy/faq";

export const tenancyFaqs: TenancyFaqItem[] = [
  {
    q: "How much does end of tenancy cleaning cost in London?",
    a: "The cost of London end of tenancy cleaning depends on the property's size, condition and any additional services required. We provide fixed pricing based on your specific requirements, with no hidden charges.",
    img: `${faqImgBase}/cost.webp`,
    alt: "End of tenancy cleaning cost guide for London rental properties",
  },
  {
    q: "What will a cleaner do in 2 hours?",
    a: "In two hours, a cleaner can typically focus on key areas such as kitchens, bathrooms, living spaces and high-touch surfaces. The exact amount completed depends on the property's size, condition and cleaning requirements.",
    img: `${faqImgBase}/two-hours.webp`,
    alt: "Cleaner completing priority tasks during a two hour tenancy clean",
  },
  {
    q: "What is covered in an end of tenancy clean?",
    a: "An end of tenancy cleans usually includes kitchens, bathrooms, bedrooms, living areas, hallways, flooring, appliances, cupboards, skirting boards and commonly touched surfaces throughout the property.",
    img: `${faqImgBase}/covered.webp`,
    alt: "Kitchen bathroom and living areas included in tenancy cleaning",
  },
  {
    q: "Do I need professional end tenancy cleaning?",
    a: "Professional cleaning is not always required, but many tenants choose it to save time and ensure the property is cleaned to a high standard before inspections and handovers.",
    img: `${faqImgBase}/professional.webp`,
    alt: "Professional end of tenancy cleaning before London property handover",
  },
  {
    q: "How long does end of tenancy cleaning take?",
    a: "The time required depends on the property's size and condition. Smaller properties may take a few hours, while larger homes or heavily used properties can require significantly longer.",
    img: `${faqImgBase}/duration.webp`,
    alt: "Duration of end of tenancy cleaning for different London property sizes",
  },
  {
    q: "Is carpet cleaning included?",
    a: "Carpet cleaning is available as an optional add-on service. We can include professional carpet cleaning as part of your end of tenancy cleaning package if required.",
    img: `${faqImgBase}/carpet.webp`,
    alt: "Optional carpet cleaning add on for end of tenancy bookings",
  },
  {
    q: "Can landlords require professional cleaning?",
    a: "Landlords cannot automatically require tenants to pay for professional cleaning. However, tenants are generally expected to return the property in a similar state of cleanliness to when the tenancy began, allowing for fair wear and tear.",
    img: `${faqImgBase}/landlords.webp`,
    alt: "Landlord expectations for professional tenancy cleaning standards",
  },
  {
    q: "Do you provide cleaning supplies and equipment?",
    a: "Yes, our cleaners arrive with the equipment, tools and eco-friendly cleaning products needed to complete the service.",
    img: `${faqImgBase}/supplies.webp`,
    alt: "Cleaning supplies and equipment provided for tenancy cleaning visits",
  },
  {
    q: "Can I book a same-day move out cleaning service?",
    a: "Subject to availability, we may be able to accommodate short-notice and same-day bookings. Contact our team as early as possible to check availability in your area.",
    img: `${faqImgBase}/same-day.webp`,
    alt: "Same day move out cleaning booking availability across London",
  },
  {
    q: "Do I need to prepare anything before the cleaning?",
    a: "Please defrost fridges/freezers at least 24 hours beforehand; our team takes care of the rest.",
    img: "/images/tenancy/prepare/empty-kitchen-cupboards-tenancy-prep.webp",
    alt: "Kitchen preparation before an end of tenancy cleaning visit in London",
  },
];

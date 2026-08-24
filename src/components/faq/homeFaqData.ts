export type HomeFaqItem = {
  q: string;
  a: string;
  img: string;
  alt: string;
};

export const homeFaqs: HomeFaqItem[] = [
  {
    q: "Do I need to tidy before the cleaner arrives?",
    a: "No; however, removing personal items and clutter can help cleaners work more efficiently and focus on cleaning rather than organising.",
    img: "/images/domestic/faq/faq-tidy-before.webp",
    alt: "Tidy home before a domestic cleaner arrives for a more efficient visit",
  },
  {
    q: "How quickly can I book a cleaner?",
    a: "Availability varies by location and service type. In many cases, appointments can be arranged within a few days of your enquiry.",
    img: "/images/faq/home/faq-booking.webp",
    alt: "Book a DBS checked cleaner for home or office cleaning across London",
  },
  {
    q: "What happens if I am not satisfied?",
    a: "If you have concerns following a completed service, our team will review the issue and work towards a fair resolution in line with our satisfaction-focused approach.",
    img: "/images/faq/home/faq-satisfaction.webp",
    alt: "Customer satisfaction support if concerns arise after a completed cleaning visit",
  },
  {
    q: "Do you bring your own cleaning equipment and products?",
    a: "Yes, our cleaners arrive fully equipped with all the tools and products needed for the job, so you don't need to provide anything.",
    img: "/images/domestic/faq/faq-cleaning-products.webp",
    alt: "Cleaners arriving with their own cleaning equipment and products",
  },
  {
    q: "Can I reschedule or cancel my booking?",
    a: "Yes, you can reschedule or cancel your appointment by contacting our team in advance. We'll always try to find a time that works for you.",
    img: "/images/faq/home/faq-same-cleaner.webp",
    alt: "Reschedule or cancel a cleaning appointment with flexible London booking support",
  },
  {
    q: "Do you provide an invoice for landlords or letting agents?",
    a: "Yes, we provide an invoice on request, which many landlords and letting agents accept as proof of professional cleaning.",
    img: "/images/faq/home/faq-tenancy.webp",
    alt: "Invoice provided for landlords and letting agents as proof of professional cleaning",
  },
];

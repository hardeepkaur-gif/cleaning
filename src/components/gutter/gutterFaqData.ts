export type GutterFaqItem = {
  q: string;
  a: string;
  img: string;
};

const faqImgBase = "/images/gutter/faq";

export const gutterFaqTitle = "FAQs";

export const gutterFaqs: GutterFaqItem[] = [
  {
    q: "What is the average cost of gutter cleaning in my area?",
    a: "The price of a gutter cleaning service usually ranges from £60 to £180 for an average property, but it may be higher for bigger or more complicated properties. The final quotation will be dependent on the size of the property, number of storeys and ease of access.",
    img: `${faqImgBase}/faq-cost.webp`,
  },
  {
    q: "Can blocked gutters damage my property?",
    a: "Yes, overflowing gutters can damage fascias, soffits, rooflines, exterior walls, foundations and landscaping. Wet debris also places extra weight on the guttering, increasing the risk of sagging, leaks or complete gutter failure.",
    img: `${faqImgBase}/faq-damage.webp`,
  },
  {
    q: "Do you clean downpipes as part of gutter cleaning?",
    a: "Yes, blocked downpipes are cleared whenever required because they are an important part of the drainage system. Cleaning the gutters without checking the downpipes can leave water unable to drain away properly.",
    img: `${faqImgBase}/faq-downpipes.webp`,
  },
  {
    q: "Can you clean three-storey properties?",
    a: "Yes, we provide gutter cleaning for many three-storey homes and commercial buildings using suitable high-reach equipment and safe access methods. The approach depends on the property's layout and accessibility.",
    img: `${faqImgBase}/faq-three-storey.webp`,
  },
  {
    q: "Can you clean gutters above conservatories?",
    a: "Yes, gutters positioned above conservatories and extensions can often be cleaned safely using telescopic vacuum systems that minimise the need for ladders and help avoid unnecessary risk.",
    img: `${faqImgBase}/faq-conservatory.webp`,
  },
  {
    q: "Do I need to be home during gutter cleaning?",
    a: "Not always. As long as we have safe access to the areas that need cleaning, the work can usually be completed while you are away. We will simply agree to access arrangements before your appointment.",
    img: `${faqImgBase}/faq-home.webp`,
  },
  {
    q: "How long does gutter cleaning take?",
    a: "Most residential gutter cleaning appointments take between one and three hours, depending on the property's size, the amount of debris and whether downpipe clearing or additional inspections are required.",
    img: `${faqImgBase}/faq-duration.webp`,
  },
];

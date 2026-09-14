import { SITE_EMAIL } from "@/lib/site";

export const disclaimerLastUpdated = "14 September 2026";

export type DisclaimerChunk = {
  subtitle?: string;
  paragraphs?: string[];
  bullets?: string[];
  notes?: string[];
};

export type DisclaimerSection = {
  id: string;
  title: string;
  summary?: string;
  chunks: DisclaimerChunk[];
};

export const disclaimerSections: DisclaimerSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    summary: "How this page applies",
    chunks: [
      {
        paragraphs: [
          "This Disclaimer applies to clcleaningserviceslondon.co.uk and to all cleaning services provided by CL Cleaning Services London (“we”, “us”, “our”) across London. We are registered in England and Wales under company number [COMPANY REGISTRATION NUMBER — confirm with manager], with our registered office at 68 Granleigh Road, London E11 4RQ, United Kingdom.",
          "By using our website or booking with us, you accept this Disclaimer. It should be read alongside our [Privacy Policy](/privacy-policy) and [Terms and Conditions](/terms-and-conditions). Nothing here affects your rights under the Consumer Rights Act 2015, including your right to a service carried out with reasonable care and skill.",
        ],
        notes: [
          "CONFIRM WITH MANAGER: Company registration number. The brand pack does not include a confirmed Companies House number.",
        ],
      },
    ],
  },
  {
    id: "website-content",
    title: "Website Content",
    summary: "General guidance only",
    chunks: [
      {
        paragraphs: [
          "The information on our website is for general guidance only. We do our best to keep it accurate and current, but we can’t guarantee it’s complete or error-free at all times. Prices and service details are confirmed at the point of booking.",
        ],
      },
    ],
  },
  {
    id: "our-services",
    title: "Our Services",
    summary: "What results can depend on",
    chunks: [
      {
        subtitle: "Domestic cleaning",
        paragraphs: [
          "Results depend on the age, condition, and material of surfaces in your home. We can’t guarantee full removal of longstanding stains on worn surfaces, and we’re not responsible for damage or wear that already existed before we arrived.",
        ],
      },
      {
        subtitle: "Carpet cleaning",
        paragraphs: [
          "Outcomes depend on the carpet’s age, fibre type, and the nature of any stains. Old or set-in marks may not lift completely, and some can reappear as the carpet dries, known as wicking, which isn’t a fault of our work. Drying time varies with humidity and airflow. Colour fading or shrinkage on older or already-worn carpets is a natural risk of the cleaning process, not a result of negligence on our part.",
        ],
      },
      {
        subtitle: "Gutter cleaning",
        paragraphs: [
          "This work is carried out at height, outdoors, and is weather-dependent. We may need to reschedule at short notice in unsafe conditions, and we can’t be held liable for any resulting delay. We clear accessible debris and blockages but aren’t responsible for existing damage to guttering, fascias, or roofing that becomes apparent during the clean. If we spot a fault, we’ll let you know, but repairs sit outside the scope of our cleaning service unless agreed separately.",
        ],
      },
      {
        subtitle: "End of tenancy cleaning",
        paragraphs: [
          "We clean to a thorough professional standard, but your deposit return is decided by your landlord or letting agent, not by us, and can depend on things unrelated to cleanliness, such as damage or inventory disputes. Please check your tenancy agreement and let us know of any specific requirements before booking.",
        ],
      },
    ],
  },
  {
    id: "our-cleaners",
    title: "Our Cleaners",
    summary: "Who carries out the work",
    chunks: [
      {
        notes: [
          "CONFIRM WITH MANAGER: Are cleaners directly employed, or self-employed/subcontracted? Keep only ONE version below and delete the other once confirmed.",
          "IF EMPLOYEES: Our cleaners are directly employed by CL Cleaning Services London, trained and vetted, and work under our supervision.",
          "IF SELF-EMPLOYED/SUBCONTRACTED: Some of our services are carried out by self-employed cleaners or subcontractors working with us. We vet everyone who works under our name, though they aren’t direct employees. We take reasonable steps to check suitability, but can’t guarantee the accuracy of checks carried out by third parties.",
        ],
      },
    ],
  },
  {
    id: "access-and-products",
    title: "Access and Products",
    summary: "Access, products and insurance",
    chunks: [
      {
        paragraphs: [
          "You’re responsible for making sure we have safe access to your property, securing valuables and pets, and letting us know of any special requirements beforehand. We’re not liable for loss or damage to anything left unsecured or undisclosed.",
        ],
        notes: [
          "CONFIRM WITH MANAGER: Does the company supply products, or does the client sometimes supply their own? Keep only ONE version below and delete the other once confirmed.",
          "IF COMPANY SUPPLIES PRODUCTS: We use professional-grade cleaning products as standard. If you have any allergies or preferences, please tell us in advance.",
          "IF CLIENT SUPPLIES PRODUCTS: Where you ask us to use your own products or equipment, we’re not liable for damage or unsatisfactory results caused by their condition or suitability.",
        ],
      },
      {
        paragraphs: [
          "We hold public liability insurance up to [£X — CONFIRM WITH MANAGER: brand pack only says “fully insured”, exact coverage amount needed]. Details are available on request.",
        ],
        notes: [
          "CONFIRM WITH MANAGER: Public liability cover amount. The brand pack only says “fully insured”.",
        ],
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    summary: "External websites",
    chunks: [
      {
        paragraphs: [
          "Our website may link to other websites for convenience. We don’t endorse them and aren’t responsible for their content or for any issues arising from your use of them.",
        ],
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    summary: "What this does not exclude",
    chunks: [
      {
        paragraphs: [
          "Our liability for any loss connected to your use of our website or services is limited to the amount you paid for that service. We’re not liable for indirect losses such as loss of income or general inconvenience. This doesn’t affect or limit our liability for death or personal injury caused by our negligence, fraud, or anything else that can’t be excluded under English law.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Disclaimer",
    summary: "Updates",
    chunks: [
      {
        paragraphs: [
          "We may update this page from time to time. Any changes will be posted here.",
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    summary: "Get in touch",
    chunks: [
      {
        paragraphs: [
          "CL Cleaning Services London",
          "68 Granleigh Road, London E11 4RQ, United Kingdom",
          `Email: ${SITE_EMAIL}`,
          "Phone: 020 3475 5539",
          "Company Registration Number: [NUMBER — CONFIRM WITH MANAGER]",
        ],
        notes: [
          "CONFIRM WITH MANAGER: Company registration number to publish in this Disclaimer.",
        ],
      },
    ],
  },
];

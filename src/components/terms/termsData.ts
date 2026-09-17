import { SITE_EMAIL } from "@/lib/site";

export const termsLastUpdated = "17 September 2026";

export const termsIntro = [
  "These Terms & Conditions set out the terms that apply when you book or purchase cleaning services from CL Cleaning Services London, trading as Cleaning Services London.",
  "By requesting, booking or using our services, you agree to these Terms & Conditions.",
  "Please read them carefully before making a booking.",
];

export type TermsChunk = {
  paragraphs?: string[];
  bullets?: string[];
  notes?: string[];
};

export type TermsSection = {
  id: string;
  title: string;
  summary?: string;
  chunks: TermsChunk[];
};

export const termsSections: TermsSection[] = [
  {
    id: "about-us",
    title: "About Us",
    summary: "Who you are booking with",
    chunks: [
      {
        paragraphs: [
          "CL Cleaning Services London (“we”, “us” or “our”) provides professional cleaning services in London.",
          "Company registration number: 020 3475 5539",
          "Registered office: 68 Granleigh Road, London E11 4RQ",
          `Email: ${SITE_EMAIL}`,
          "Telephone: 020 3475 5539",
          "For these Terms & Conditions, “customer”, “you” or “your” means the person booking or receiving our services.",
        ],
      },
    ],
  },
  {
    id: "our-services",
    title: "Our Services",
    summary: "What is included",
    chunks: [
      {
        paragraphs: [
          "We provide cleaning services as described on our website, quotation, booking confirmation or other agreed service description.",
          "The exact scope of each service may vary depending on the type of cleaning booked and the condition of the property.",
          "Before a service begins, you should ensure that you understand what is included in your chosen service.",
          "Where a quotation or booking confirmation specifies particular tasks, that information will form part of the agreed service.",
          "Additional work requested outside the agreed scope may be subject to additional charges.",
        ],
      },
    ],
  },
  {
    id: "service-bookings",
    title: "Service Bookings",
    summary: "How a booking is confirmed",
    chunks: [
      {
        paragraphs: [
          "A booking is confirmed when we have accepted your request and provided booking confirmation.",
          "Depending on the service, we may require information such as:",
        ],
        bullets: [
          "Your name",
          "Contact details",
          "Service address",
          "Preferred date and time",
          "Type of cleaning required",
          "Property details relevant to the service",
          "Any specific cleaning requirements",
        ],
      },
      {
        paragraphs: [
          "We reserve the right to decline a booking where we are unable to provide the requested service or where the requested service falls outside our normal service scope.",
        ],
      },
    ],
  },
  {
    id: "quotes-and-prices",
    title: "Quotes and Prices",
    summary: "How pricing works",
    chunks: [
      {
        paragraphs: [
          "Prices may be provided through our website, quotation, booking system or directly by our team.",
          "Unless expressly stated otherwise, prices are based on the information provided when the booking or quotation is made.",
          "If the actual condition, size or requirements of the property differ materially from the information provided, we may discuss an adjustment to the quoted price before carrying out additional work.",
          "Any additional charge will be communicated to you before the additional work is carried out wherever reasonably possible.",
        ],
      },
    ],
  },
  {
    id: "payment",
    title: "Payment",
    summary: "When and how to pay",
    chunks: [
      {
        paragraphs: [
          "Payment must be made using an accepted payment method.",
          "Accepted payment methods are card, bank transfer, or cash at the office.",
          "Advance payment is required at the time of booking.",
          "A deposit is also required.",
          "If payment is not received when due, we may suspend or cancel the relevant service, subject to any rights you may have under applicable law.",
        ],
      },
    ],
  },
  {
    id: "cancellations",
    title: "Cancellations and Rescheduling",
    summary: "Changing an appointment",
    chunks: [
      {
        paragraphs: [
          "If you need to cancel or reschedule a booking, please contact us as soon as possible.",
          "Cancellation charges apply immediately; no advance notice period.",
          "The late cancellation fee of £70 is applicable.",
          "We do not accept cancellations; if you inform the company in advance, a cancellation fee of £70 will apply. If you request cancellation after the cleaners reach the property, you will not receive a refund of the full advance payment.",
          "Where applicable, we will communicate before or at the time of booking.",
          "The company will not cancel on you.",
          "Nothing in this section affects any cancellation or refund rights that cannot legally be excluded or restricted.",
        ],
      },
    ],
  },
  {
    id: "access",
    title: "Access to the Property",
    summary: "Getting us inside safely",
    chunks: [
      {
        paragraphs: [
          "You are responsible for providing safe and reasonable access to the property at the agreed time.",
          "Where keys, access codes or other entry arrangements are required, you must provide accurate instructions before the appointment.",
          "If our cleaner cannot access the property because the required access arrangements have not been provided, this may result in a delay, cancellation, or applicable charge.",
          "You should tell us in advance about any access restrictions, parking restrictions, security procedures, or other circumstances that could affect the service.",
        ],
      },
    ],
  },
  {
    id: "customer-responsibilities",
    title: "Customer Responsibilities",
    summary: "What we need from you",
    chunks: [
      {
        paragraphs: [
          "To allow us to provide the service safely and effectively, you are responsible for:",
        ],
        bullets: [
          "Providing accurate booking information",
          "Providing safe access to the property",
          "Informing us of relevant hazards or unusual conditions",
          "Securing valuable, fragile or particularly sensitive items",
          "Removing personal items where necessary to allow cleaning of the relevant area",
          "Providing any information reasonably necessary to carry out the agreed service",
          "Ensuring that children and pets are kept away from areas where cleaning work is being carried out where reasonably necessary",
        ],
      },
      {
        paragraphs: [
          "You should also inform us before the service if there are any known issues with surfaces, materials, fixtures, fittings or items that could be affected by cleaning.",
        ],
      },
    ],
  },
  {
    id: "products-and-equipment",
    title: "Cleaning Products and Equipment",
    summary: "What we use",
    chunks: [
      {
        paragraphs: [
          "Where we supply cleaning products or equipment, we will use products and methods reasonably appropriate for the agreed service.",
          "Certain materials, surfaces or items may require specialist cleaning methods or products.",
          "We may decline to clean an item or surface where we reasonably believe that doing so could cause damage or where the required specialist treatment is outside the agreed service.",
        ],
      },
    ],
  },
  {
    id: "property-condition",
    title: "Condition of the Property",
    summary: "What affects the result",
    chunks: [
      {
        paragraphs: [
          "The condition of a property can affect the time, effort and results required to complete a cleaning service.",
          "Where a property is significantly more soiled, cluttered or difficult to clean than described at the time of booking, we may discuss additional time, work or charges with you.",
          "Some stains, marks, odours, damage or deterioration may not be completely removable through normal cleaning methods.",
          "We do not guarantee that every stain, mark or odour will be removed where this is not reasonably achievable through the agreed cleaning service.",
        ],
      },
    ],
  },
  {
    id: "special-items",
    title: "Special Items and Surfaces",
    summary: "Tell us before we start",
    chunks: [
      {
        paragraphs: [
          "You must inform us before the service if the property contains particularly delicate, valuable or specialist items or surfaces requiring specific cleaning methods.",
          "This may include, for example:",
        ],
        bullets: [
          "Delicate fabrics",
          "Specialist flooring",
          "Natural stone",
          "Antique or valuable items",
          "Special finishes",
          "Fragile fixtures",
          "Specialist appliances or equipment",
        ],
      },
      {
        paragraphs: [
          "We may decline to clean items where appropriate instructions, products or specialist expertise are required.",
        ],
      },
    ],
  },
  {
    id: "inspection",
    title: "Service Completion and Customer Inspection",
    summary: "Check the finished work",
    chunks: [
      {
        paragraphs: [
          "Where reasonably possible, you should inspect the completed service at or shortly after completion.",
          "If you believe that an agreed cleaning task has not been completed to the expected standard, please contact us promptly with details of the issue.",
          "We may ask for photographs, descriptions or other reasonable information to help us assess the complaint.",
        ],
      },
    ],
  },
  {
    id: "satisfaction",
    title: "Satisfaction and Re-Cleaning",
    summary: "If something is missed",
    chunks: [
      {
        paragraphs: [
          "If a service does not meet the agreed cleaning standard, we may offer an opportunity to return and address the relevant issue where appropriate.",
          "The company does not offer a satisfaction guarantee.",
          "A re-cleaning opportunity does not automatically mean that a refund is due.",
          "Any refund will be considered in accordance with the circumstances of the complaint and applicable consumer law.",
        ],
      },
    ],
  },
  {
    id: "damage-and-loss",
    title: "Damage and Loss",
    summary: "How incidents are reviewed",
    chunks: [
      {
        paragraphs: [
          "We take reasonable care when providing our services. No damage is expected; claims are discussed only after proof is provided.",
          "If you believe that our team has caused damage to your property or belongings during a service, please notify us as soon as reasonably possible.",
          "We may ask you to provide:",
        ],
        bullets: [
          "A description of the damage",
          "Photographs or other evidence",
          "Details of the affected item",
          "Information about when and how the damage was discovered",
          "Evidence of ownership or value where reasonably necessary",
        ],
      },
      {
        paragraphs: [
          "We will review reported incidents and, where appropriate, investigate them in accordance with our procedures.",
          "Nothing in these Terms excludes or limits liability where doing so would be unlawful.",
        ],
      },
    ],
  },
  {
    id: "items-of-value",
    title: "Items of Value",
    summary: "Secure valuables first",
    chunks: [
      {
        paragraphs: [
          "You are responsible for securing cash, jewellery, important documents, electronic devices and other valuable or highly personal items before the service.",
          "Where reasonably possible, valuable or fragile items should be stored safely before cleaning begins.",
          "We are not responsible for loss or damage resulting from circumstances outside our reasonable control or where the loss or damage was caused by the customer's own actions or failure to provide relevant information, subject to applicable law.",
        ],
      },
    ],
  },
  {
    id: "pets",
    title: "Pets and Animals",
    summary: "Keeping visits safe",
    chunks: [
      {
        paragraphs: [
          "You should inform us before the service if pets or other animals are present at the property.",
          "For safety reasons, we may ask you to keep animals away from areas where cleaning is taking place.",
          "We are not responsible for animals that escape, move freely around the property, or interfere with the cleaning service where this results from circumstances outside our reasonable control.",
        ],
      },
    ],
  },
  {
    id: "health-and-safety",
    title: "Health and Safety",
    summary: "Known hazards",
    chunks: [
      {
        paragraphs: [
          "We are committed to carrying out services in a reasonably safe manner.",
          "You must inform us before the appointment about any known hazards that could affect the safety of our cleaners.",
          "This may include:",
        ],
        bullets: [
          "Dangerous substances",
          "Structural hazards",
          "Significant infestations",
          "Unsafe electrical equipment",
          "Aggressive or dangerous animals",
          "Excessive waste",
          "Other conditions that could present a health or safety risk",
        ],
      },
      {
        paragraphs: [
          "We may refuse or stop a service where we reasonably believe that continuing would create an unacceptable health or safety risk.",
        ],
      },
    ],
  },
  {
    id: "services-we-may-decline",
    title: "Services We May Decline",
    summary: "When we cannot proceed",
    chunks: [
      {
        paragraphs: ["We may decline or stop a service where:"],
        bullets: [
          "The requested work falls outside our agreed service scope",
          "The property presents a significant health or safety risk",
          "Specialist equipment or expertise is required",
          "The property condition is materially different from what was described",
          "The customer or another person behaves abusively, threateningly or inappropriately towards our staff",
          "Providing the service would require us to breach a legal or safety requirement",
        ],
      },
      {
        paragraphs: [
          "Where a service cannot reasonably proceed, we will explain the reason to you where appropriate.",
        ],
      },
    ],
  },
  {
    id: "customer-behaviour",
    title: "Customer Behaviour",
    summary: "Respect on both sides",
    chunks: [
      {
        paragraphs: [
          "We expect customers and our staff to treat each other respectfully.",
          "We do not tolerate threatening, abusive, discriminatory or intimidating behaviour towards our staff.",
          "Where serious or inappropriate behaviour occurs, we may suspend or terminate the service or refuse future bookings.",
          "This does not affect your statutory consumer rights.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "Our Liability",
    summary: "What we are responsible for",
    chunks: [
      {
        paragraphs: [
          "We will provide services with reasonable care and skill as required by applicable law.",
          "Nothing in these Terms is intended to exclude or restrict any liability that cannot legally be excluded or restricted.",
          "Subject to applicable law, we will not be responsible for loss or damage that:",
        ],
        bullets: [
          "Was caused by circumstances outside our reasonable control",
          "Results from inaccurate or incomplete information supplied by you",
          "Results from pre-existing damage, defects or deterioration",
          "Results from your failure to follow reasonable instructions",
          "Results from items or surfaces requiring specialist treatment that were not disclosed to us beforehand",
        ],
      },
    ],
  },
  {
    id: "consumer-rights",
    title: "Guarantees and Consumer Rights",
    summary: "Statutory rights stay intact",
    chunks: [
      {
        paragraphs: [
          "Any guarantee or service promise offered by Cleaning Services London will be subject to the specific terms communicated to you at the time of booking.",
          "Nothing in these Terms affects your statutory rights as a consumer.",
          "Where a service does not conform to the requirements imposed by applicable consumer law, you may have legal remedies regardless of any additional guarantee we provide.",
        ],
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints",
    summary: "How we review issues",
    chunks: [
      {
        paragraphs: [
          "If you are unhappy with our service, please contact us as soon as possible.",
          "We will review your complaint and may request information that helps us understand what happened.",
          "Depending on the circumstances, we may offer an appropriate remedy such as:",
        ],
        bullets: [
          "Re-cleaning of the affected area",
          "Corrective work",
          "A partial or full refund where appropriate",
          "Another reasonable resolution",
        ],
      },
      {
        paragraphs: [
          "The remedy available will depend on the circumstances and applicable law.",
        ],
      },
    ],
  },
  {
    id: "events-outside-control",
    title: "Events Outside Our Control",
    summary: "Delays we cannot prevent",
    chunks: [
      {
        paragraphs: [
          "We will not be responsible for delays or failure to provide a service where this results from circumstances outside our reasonable control.",
          "Such circumstances may include:",
        ],
        bullets: [
          "Severe weather",
          "Transport disruption",
          "Utility failures",
          "Government restrictions",
          "Emergencies",
          "Serious illness",
          "Unforeseen property access issues",
          "Other events that could not reasonably have been prevented or anticipated",
        ],
      },
      {
        paragraphs: [
          "Where possible, we will contact you and arrange an alternative service time.",
        ],
      },
    ],
  },
  {
    id: "booking-changes",
    title: "Changes to a Booking",
    summary: "Date, time or scope",
    chunks: [
      {
        paragraphs: [
          "If you need to change the date, time, property address or scope of a booking, please contact us as soon as possible.",
          "Changes may be subject to availability and, where applicable, additional charges.",
        ],
      },
    ],
  },
  {
    id: "termination",
    title: "Termination or Refusal of Future Services",
    summary: "When a service may end",
    chunks: [
      {
        paragraphs: [
          "We may refuse future bookings or terminate an ongoing service arrangement where there is a legitimate reason to do so, including repeated non-payment, serious misconduct, unsafe working conditions or material breaches of these Terms.",
          "Any termination will be subject to applicable consumer and contract law.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    summary: "Website content",
    chunks: [
      {
        paragraphs: [
          "Unless otherwise stated, the content of the Cleaning Services London website, including text, branding, graphics, photographs and other materials, is owned by or licensed to us.",
          "You may access and use the website for personal and legitimate purposes.",
          "You must not reproduce, modify, distribute or commercially exploit our content without appropriate permission.",
        ],
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    summary: "External providers",
    chunks: [
      {
        paragraphs: [
          "We may use third-party providers to support aspects of our business or services.",
          "Where a third party is directly responsible for a service or transaction, additional terms may apply.",
          "Nothing in these Terms creates a contract between you and a third party unless expressly stated.",
        ],
      },
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    summary: "Updates",
    chunks: [
      {
        paragraphs: [
          "We may update these Terms & Conditions from time to time to reflect changes to our services, business arrangements or legal requirements.",
          "The version applicable to your booking will generally be the version in force when your booking is accepted, unless a change is required by law or otherwise agreed with you.",
          "The latest version will be published on this website.",
        ],
      },
    ],
  },
  {
    id: "severability",
    title: "Severability",
    summary: "If one clause cannot apply",
    chunks: [
      {
        paragraphs: [
          "If any provision of these Terms is found to be invalid, unlawful or unenforceable, that provision will be interpreted or modified to the extent necessary to make it lawful where possible.",
          "The remaining provisions will continue to apply.",
        ],
      },
    ],
  },
  {
    id: "no-waiver",
    title: "No Waiver",
    summary: "Rights are reserved",
    chunks: [
      {
        paragraphs: [
          "If we do not immediately enforce a provision of these Terms, this does not mean that we waive our right to enforce that provision in the future.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    summary: "England and Wales",
    chunks: [
      {
        paragraphs: [
          "These Terms & Conditions are governed by the laws of England and Wales.",
          "Subject to any mandatory consumer rights, disputes relating to these Terms or our services will be subject to the jurisdiction of the courts of England and Wales.",
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    summary: "Questions about a booking",
    chunks: [
      {
        paragraphs: [
          "If you have questions about these Terms & Conditions, your booking or our services, please contact us:",
          "CL Cleaning Services London",
          "Trading as: Cleaning Services London",
          `Email: ${SITE_EMAIL}`,
          "Telephone: 020 3475 5539",
          "Registered office: 68 Granleigh Road, London E11 4RQ",
        ],
      },
    ],
  },
];

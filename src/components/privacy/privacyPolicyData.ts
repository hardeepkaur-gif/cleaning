import { SITE_EMAIL, SITE_PHONE_HREF } from "@/lib/site";

export const privacyLastUpdated = "14 September 2026";

export const privacyIntro = [
  "At CL Cleaning Services London, trading as Cleaning Services London, we respect your privacy and are committed to protecting your personal information.",
  "This Privacy Policy explains what personal information we collect, how we collect and use it, who we may share it with, how long we keep it, and the rights you have in relation to your personal information.",
  "We process personal information in accordance with applicable UK data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.",
];

export type PrivacyChunk = {
  paragraphs?: string[];
  bullets?: string[];
  subtitle?: string;
  notes?: string[];
};

export type PrivacySection = {
  id: string;
  title: string;
  summary?: string;
  chunks: PrivacyChunk[];
};

export const privacyContact = {
  email: SITE_EMAIL,
  emailHref: `mailto:${SITE_EMAIL}`,
  phone: "020 3475 5539",
  phoneHref: SITE_PHONE_HREF,
  address: "68 Granleigh Road, London E11 4RQ",
  icoUrl: "https://ico.org.uk/",
};

export const privacySections: PrivacySection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    summary: "Your data controller",
    chunks: [
      {
        paragraphs: [
          "CL Cleaning Services London (“we”, “us” or “our”) provides professional cleaning services in London.",
          "Company registration number: 02034755539",
          "Registered office: 68 Granleigh Road, London E11 4RQ",
          "VAT number: Pending",
          `Email: ${SITE_EMAIL}`,
          "Telephone: 020 3475 5539",
          "For data protection purposes, CL Cleaning Services London is the data controller responsible for the personal information covered by this Privacy Policy.",
        ],
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    summary: "What we collect",
    chunks: [
      {
        paragraphs: [
          "The information we collect depends on how you interact with our website and services.",
        ],
      },
      {
        subtitle: "Information you provide to us",
        paragraphs: [
          "When you contact us, request a quotation or book a cleaning service, we may collect:",
        ],
        bullets: [
          "Your name",
          "Email address",
          "Telephone number",
          "Property or service address",
          "Billing information",
          "Booking and appointment details",
          "Details of the cleaning service you require",
          "Information about your cleaning requirements",
          "Information you provide when contacting customer support",
          "Feedback, reviews, complaints or other communications",
          "Any other information you voluntarily provide to us",
        ],
      },
      {
        paragraphs: [
          "Please avoid providing sensitive personal information unless it is necessary for us to provide the requested service.",
        ],
      },
      {
        subtitle: "Information collected automatically",
        paragraphs: [
          "When you visit our website, certain technical information may be collected automatically. Depending on the technologies we use, this may include:",
        ],
        bullets: [
          "IP address",
          "Browser type and version",
          "Device type",
          "Operating system",
          "Pages visited",
          "Date and time of visits",
          "Referring website or source",
          "Website interactions",
          "Approximate location derived from technical information",
        ],
        notes: [
          "TO CONFIRM: Exact analytics, advertising and tracking technologies currently installed on the website.",
        ],
      },
    ],
  },
  {
    id: "how-we-collect",
    title: "How We Collect Your Information",
    summary: "Where it comes from",
    chunks: [
      {
        paragraphs: ["We may collect personal information when you:"],
        bullets: [
          "Visit or use our website",
          "Submit an enquiry or contact form",
          "Request a quotation",
          "Make a booking",
          "Contact us by telephone or email",
          "Communicate with us about a booking or service",
          "Provide feedback or submit a complaint",
          "Subscribe to marketing communications",
          "Interact with our website through cookies or similar technologies",
        ],
      },
      {
        paragraphs: [
          "We may also receive information from third parties where this is lawful and necessary for providing our services or managing our business.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    summary: "Why we process data",
    chunks: [
      {
        paragraphs: ["We may use your personal information to:"],
        bullets: [
          "Respond to enquiries",
          "Provide quotations",
          "Arrange and manage cleaning bookings",
          "Provide requested cleaning services",
          "Communicate with you about appointments and bookings",
          "Process payments and maintain relevant transaction records",
          "Respond to customer service requests",
          "Handle complaints, feedback and disputes",
          "Maintain business and financial records",
          "Improve our website and services",
          "Understand how visitors use our website",
          "Maintain website and information security",
          "Detect and prevent fraud, misuse or other unlawful activity",
          "Comply with applicable legal and regulatory requirements",
          "Establish, exercise or defend our legal rights",
          "Send relevant marketing communications where legally permitted",
        ],
      },
      {
        paragraphs: [
          "We will only use your information for purposes that are compatible with the reason it was collected or where otherwise permitted or required by law.",
        ],
      },
    ],
  },
  {
    id: "lawful-bases",
    title: "Lawful Bases for Processing",
    summary: "UK GDPR grounds",
    chunks: [
      {
        paragraphs: [
          "Under the UK GDPR, we must have a lawful basis for processing your personal information.",
          "Depending on the circumstances, we may rely on the following lawful bases:",
        ],
      },
      {
        subtitle: "Contract",
        paragraphs: [
          "We may process your information where it is necessary to enter into or perform a contract with you.",
          "For example, we may need your name, contact details, property address and booking information to arrange and provide a cleaning service.",
        ],
      },
      {
        subtitle: "Legitimate Interests",
        paragraphs: [
          "We may process personal information where it is necessary for our legitimate business interests and those interests are not overridden by your rights and interests.",
          "This may include managing enquiries, administering our business, improving our services, maintaining website security and preventing fraud or misuse.",
        ],
      },
      {
        subtitle: "Legal Obligation",
        paragraphs: [
          "We may process your information where necessary to comply with a legal or regulatory obligation.",
          "For example, certain financial and business records may need to be retained to meet legal or accounting requirements.",
        ],
      },
      {
        subtitle: "Consent",
        paragraphs: [
          "In certain circumstances, we may rely on your consent to process personal information.",
          "This may include certain marketing communications or the use of non-essential cookies and similar technologies where consent is required.",
          "Where we rely on consent, you may withdraw it at any time.",
        ],
      },
    ],
  },
  {
    id: "booking-information",
    title: "Booking and Customer Information",
    summary: "Service records",
    chunks: [
      {
        paragraphs: [
          "If you request or book a cleaning service, we may process information necessary to arrange and provide that service.",
          "This may include your contact details, service address, booking details and information about your cleaning requirements.",
          "We use this information to:",
        ],
        bullets: [
          "Arrange appointments",
          "Provide the requested service",
          "Contact you regarding your booking",
          "Manage changes to bookings",
          "Respond to service-related enquiries",
          "Maintain appropriate customer and business records",
        ],
        notes: [
          "TO CONFIRM: Booking system/CRM used and where customer booking information is stored.",
        ],
      },
    ],
  },
  {
    id: "payment-information",
    title: "Payment Information",
    summary: "How payments are handled",
    chunks: [
      {
        paragraphs: [
          "Payments for our services may be processed through third-party payment providers.",
        ],
        notes: ["TO CONFIRM: Payment provider(s)"],
      },
      {
        paragraphs: [
          "Where a third-party payment provider processes your payment, that provider may process your personal information in accordance with its own privacy policy and terms.",
          "We will only retain payment information where necessary and permitted for legitimate business, legal or accounting purposes.",
        ],
        notes: [
          "TO CONFIRM: Payment methods accepted and whether the business stores any payment/card information directly.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    summary: "Website tracking",
    chunks: [
      {
        paragraphs: [
          "Our website may use cookies and similar technologies to:",
        ],
        bullets: [
          "Make the website function properly",
          "Remember preferences",
          "Understand how visitors use the website",
          "Measure website performance",
          "Support marketing or advertising activities, where applicable",
        ],
      },
      {
        paragraphs: [
          "The exact cookies and technologies used on the website will depend on the services and tools currently installed.",
        ],
        notes: [
          "TO CONFIRM: Google Analytics / Google Ads / Meta Pixel / other analytics or advertising tools.",
        ],
      },
      {
        paragraphs: [
          "Where consent is required for non-essential cookies, we will request your consent before using them.",
          "You can manage your cookie preferences through our cookie consent mechanism and, where applicable, through your browser settings.",
          "For further information about the cookies used on this website, please see our [Cookies Policy](/cookies-policy).",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "Who We Share Your Information With",
    summary: "Third parties",
    chunks: [
      {
        paragraphs: [
          "We may share personal information with trusted third-party providers where this is necessary to operate our website, provide our services, process payments, communicate with customers or meet our legal obligations.",
          "Depending on our actual business arrangements, these providers may include:",
        ],
        bullets: [
          "Payment processors",
          "Booking and CRM providers",
          "Website hosting providers",
          "IT and software providers",
          "Email and communication providers",
          "Analytics providers",
          "Marketing platforms, where applicable",
          "Professional advisers such as accountants or legal advisers",
          "Government bodies, regulators or law enforcement authorities where legally required",
        ],
      },
      {
        paragraphs: [
          "Where a third party processes personal information on our behalf, we take appropriate steps to ensure that your information is handled in accordance with applicable data protection requirements.",
        ],
        notes: [
          "TO CONFIRM: Exact third-party providers currently receiving or processing customer data.",
        ],
      },
    ],
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    summary: "Data outside the UK",
    chunks: [
      {
        paragraphs: [
          "Some of the third-party providers we use may process personal information outside the United Kingdom.",
          "Where your information is transferred outside the UK, we will take appropriate steps to ensure that the transfer is lawful and that suitable safeguards are in place where required under applicable data protection law.",
        ],
        notes: [
          "TO CONFIRM: Whether any current website, booking, payment, CRM, email or analytics providers process data outside the UK, and the relevant countries.",
        ],
      },
    ],
  },
  {
    id: "retention",
    title: "How Long We Keep Your Information",
    summary: "Storage periods",
    chunks: [
      {
        paragraphs: [
          "We will not keep personal information for longer than reasonably necessary for the purposes for which it was collected.",
          "The appropriate retention period depends on the type of information and why we need it.",
          "We may retain information for purposes including:",
        ],
        bullets: [
          "Managing ongoing customer relationships",
          "Maintaining business and financial records",
          "Meeting legal or regulatory requirements",
          "Resolving complaints or disputes",
          "Establishing or defending legal claims",
          "Maintaining appropriate records of our services",
        ],
        notes: [
          "TO CONFIRM: Specific retention periods for enquiries, customer records, booking records, payment records and marketing data.",
        ],
      },
      {
        paragraphs: [
          "When information is no longer required, we will securely delete it or anonymise it where appropriate.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "How We Protect Your Information",
    summary: "Security measures",
    chunks: [
      {
        paragraphs: [
          "We take reasonable technical and organisational measures to protect personal information against:",
        ],
        bullets: [
          "Unauthorised access",
          "Accidental loss",
          "Unauthorised disclosure",
          "Misuse",
          "Alteration or destruction",
        ],
      },
      {
        paragraphs: [
          "Access to personal information is restricted to individuals and organisations that need it for legitimate business purposes.",
          "However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Data Protection Rights",
    summary: "Control over your data",
    chunks: [
      {
        paragraphs: [
          "Under applicable data protection law, you may have the right to:",
        ],
        bullets: [
          "Request access to the personal information we hold about you",
          "Ask us to correct inaccurate or incomplete information",
          "Ask us to delete your personal information in certain circumstances",
          "Ask us to restrict how we process your information in certain circumstances",
          "Object to certain processing activities",
          "Request the transfer of certain information to you or another organisation",
          "Withdraw consent where we rely on consent as our lawful basis",
        ],
      },
      {
        paragraphs: [
          "These rights are subject to certain legal conditions and exemptions.",
          "If you wish to exercise any of your rights, please contact us using the details in the Contact Us section below.",
        ],
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Communications",
    summary: "Offers and updates",
    chunks: [
      {
        paragraphs: [
          "We may send information about our services, offers or updates where this is permitted under applicable law.",
          "Where consent is required, we will obtain the appropriate consent before sending marketing communications.",
          "You can opt out of marketing communications at any time by:",
        ],
        bullets: [
          "Following the unsubscribe instructions in the relevant communication; or",
          "Contacting us using the details provided below.",
        ],
      },
      {
        paragraphs: [
          "Opting out of marketing communications will not affect service-related communications, such as information about an existing booking or appointment.",
        ],
      },
    ],
  },
  {
    id: "children",
    title: "Children’s Information",
    summary: "Not aimed at children",
    chunks: [
      {
        paragraphs: [
          "Our website and cleaning services are not specifically directed at children.",
          "We do not knowingly collect personal information from children unless there is a lawful reason to do so.",
          "If you believe that a child has provided us with personal information unnecessarily, please contact us so that we can review the information and take appropriate action.",
        ],
      },
    ],
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites",
    summary: "External links",
    chunks: [
      {
        paragraphs: [
          "Our website may contain links to websites or services operated by third parties.",
          "These websites have their own privacy policies and terms. We are not responsible for the privacy practices, security or content of third-party websites.",
          "We recommend reviewing the privacy policy of any third-party website before providing personal information.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    summary: "Updates",
    chunks: [
      {
        paragraphs: [
          "We may update this Privacy Policy from time to time to reflect changes to:",
        ],
        bullets: [
          "Our services",
          "The way we process personal information",
          "Website technologies",
          "Third-party service providers",
          "Legal or regulatory requirements",
        ],
      },
      {
        paragraphs: [
          "Any changes will be published on this page, together with an updated “Last updated” date.",
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    summary: "Questions and requests",
    chunks: [
      {
        paragraphs: [
          "If you have questions about this Privacy Policy, want to exercise your data protection rights or have concerns about how we process your personal information, please contact us.",
          "CL Cleaning Services London",
          `Email: ${SITE_EMAIL}`,
          "Telephone: 020 3475 5539",
          "Registered office: 68 Granleigh Road, London E11 4RQ",
        ],
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints",
    summary: "ICO",
    chunks: [
      {
        paragraphs: [
          "If you have concerns about how we use your personal information, please contact us first so that we have an opportunity to address your concerns.",
          "You also have the right to complain to the Information Commissioner's Office (ICO), the UK's independent supervisory authority for data protection.",
          "You can find information about your data protection rights and how to make a complaint on the ICO's website.",
          "ICO: https://ico.org.uk/",
        ],
      },
    ],
  },
];

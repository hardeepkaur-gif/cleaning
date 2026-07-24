export const privacyLastUpdated = "24 July 2026";

export const privacyIntro =
  "Cleaning Services London respects your privacy. This Privacy Policy explains how we collect, use, store and protect personal information when you use our website, contact us for a quote, or book a cleaning service.";

export type PrivacySection = {
  id: string;
  title: string;
  summary?: string;
  paragraphs: string[];
  bullets?: string[];
};

export const privacySections: PrivacySection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    summary: "Your data controller",
    paragraphs: [
      "Cleaning Services London provides domestic, carpet, end of tenancy and gutter cleaning services across East London and Greater London.",
      "For the purposes of UK data protection law, Cleaning Services London is the data controller responsible for your personal information.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    summary: "What you share with us",
    paragraphs: [
      "We only collect information that helps us respond to enquiries, deliver cleaning services, and improve your experience.",
    ],
    bullets: [
      "Name, email address, phone number and WhatsApp contact details",
      "Property address, postcode and access instructions",
      "Service preferences, booking dates and property type",
      "Messages you send through our contact form, email or phone",
      "Basic technical data such as browser type and pages visited (via cookies or analytics, where used)",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    summary: "Why we process data",
    paragraphs: [
      "We use your personal information for clear, limited purposes related to our cleaning services.",
    ],
    bullets: [
      "To provide quotes and respond to enquiries",
      "To schedule, confirm and deliver cleaning appointments",
      "To communicate about bookings, access, payments and follow-ups",
      "To improve our website, service quality and customer experience",
      "To meet legal, insurance and safeguarding obligations where required",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    summary: "UK GDPR grounds",
    paragraphs: [
      "We process personal data under one or more of the following lawful bases:",
    ],
    bullets: [
      "Contract — to take steps before entering a contract or to perform a booked service",
      "Legitimate interests — to respond to enquiries, prevent misuse and improve our services",
      "Consent — where you opt in to marketing or non-essential cookies",
      "Legal obligation — where we must keep records for tax, insurance or regulatory reasons",
    ],
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    summary: "Who may see your data",
    paragraphs: [
      "We do not sell your personal information. We only share data when necessary to deliver our services or meet legal requirements.",
    ],
    bullets: [
      "Trusted cleaners and operational staff assigned to your booking",
      "Service providers who support our website, communications or payments",
      "Professional advisers, insurers or authorities where legally required",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Website Analytics",
    summary: "Browsing experience",
    paragraphs: [
      "Our website may use essential cookies to make pages work correctly. Where we use analytics or non-essential cookies, we will do so in line with applicable cookie rules and, where required, with your consent.",
      "You can control cookies through your browser settings. Blocking some cookies may affect how certain site features work.",
    ],
  },
  {
    id: "retention",
    title: "How Long We Keep Data",
    summary: "Storage periods",
    paragraphs: [
      "We keep personal information only for as long as needed for the purpose it was collected, including to meet booking, accounting, insurance and legal requirements.",
      "When information is no longer required, we will delete or anonymise it securely where practicable.",
    ],
  },
  {
    id: "security",
    title: "How We Protect Your Data",
    summary: "Security measures",
    paragraphs: [
      "We take appropriate technical and organisational measures to protect personal information against unauthorised access, loss, misuse or alteration.",
      "No method of transmission over the internet is completely secure, but we work to keep your information safe through careful access controls and responsible handling practices.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    summary: "Control over your data",
    paragraphs: [
      "Under UK GDPR, you may have the right to:",
    ],
    bullets: [
      "Access the personal data we hold about you",
      "Ask us to correct inaccurate or incomplete information",
      "Request deletion of your data in certain circumstances",
      "Object to or restrict certain types of processing",
      "Withdraw consent where processing is based on consent",
      "Lodge a complaint with the Information Commissioner’s Office (ICO)",
    ],
  },
  {
    id: "contact",
    title: "Contact Us About Privacy",
    summary: "Questions & requests",
    paragraphs: [
      "If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact Cleaning Services London.",
      "Email: info@cleaninglondon.co.uk · Phone: +44 12 3456 7890 · Address: London, UK",
    ],
  },
];

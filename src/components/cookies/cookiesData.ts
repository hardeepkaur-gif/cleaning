import { SITE_EMAIL } from "@/lib/site";

export const cookiesLastUpdated = "14 September 2026";

export type CookiesChunk = {
  subtitle?: string;
  paragraphs?: string[];
  bullets?: string[];
  notes?: string[];
};

export type CookiesSection = {
  id: string;
  title: string;
  summary?: string;
  chunks: CookiesChunk[];
};

export const cookiesSections: CookiesSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    summary: "How this policy applies",
    chunks: [
      {
        paragraphs: [
          "This Cookies Policy explains how CL Cleaning Services London (“we”, “us”, “our”) uses cookies and similar technologies on clcleaningserviceslondon.co.uk. It should be read alongside our [Privacy Policy](/privacy-policy) and [Terms and Conditions](/terms-and-conditions).",
          "By continuing to browse our website, you agree to our use of cookies as described in this policy, unless you adjust your settings as explained below.",
        ],
      },
    ],
  },
  {
    id: "what-are-cookies",
    title: "What Are Cookies",
    summary: "A short explanation",
    chunks: [
      {
        paragraphs: [
          "Cookies are small text files placed on your device when you visit a website. They help the site remember information about your visit, such as your preferences and how you use the site, making your next visit easier and the site more useful.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-cookies",
    title: "How We Use Cookies",
    summary: "Why cookies are used",
    chunks: [
      {
        paragraphs: ["We use cookies on our website for a few reasons:"],
      },
      {
        subtitle: "Essential cookies",
        paragraphs: [
          "These are necessary for the website to function properly, such as letting you move between pages, use the booking form, or access secure areas. The site can’t work properly without these.",
        ],
      },
      {
        subtitle: "Performance and analytics cookies",
        paragraphs: [
          "These help us understand how visitors use our site, for example, which pages are most popular and whether people run into errors so that we can improve the experience. We may use tools such as [GOOGLE ANALYTICS / OTHER TOOL NAME — CONFIRM WITH MANAGER: which analytics tool is actually installed on the site] for this.",
        ],
        notes: [
          "CONFIRM WITH MANAGER: Which analytics tool is actually installed on the site, such as Google Analytics or another tool.",
        ],
      },
      {
        subtitle: "Functionality cookies",
        paragraphs: [
          "These remember choices you make, such as your location or service preferences, so we can offer a more personalised experience on return visits.",
        ],
      },
      {
        subtitle: "Advertising and targeting cookies",
        paragraphs: [
          "These are used to deliver adverts more relevant to you and your interests, and to measure the effectiveness of advertising campaigns. We may use these through platforms such as [GOOGLE ADS / META / OTHER PLATFORM NAME — CONFIRM WITH MANAGER].",
        ],
        notes: [
          "CONFIRM WITH MANAGER: Is the site running any paid ads? If yes, keep this section and specify the platform. If no, delete this paragraph entirely.",
        ],
      },
    ],
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Cookies",
    summary: "Cookies set by others",
    chunks: [
      {
        paragraphs: [
          "Some cookies on our site are placed by third-party services we use, such as booking systems, payment providers, or analytics tools. These third parties may collect information about your visit in accordance with their own privacy and cookie policies. We don’t control these cookies directly, so we’d encourage you to check the relevant third party’s own policy for more detail.",
          "Third parties we currently use include: [CONFIRM WITH MANAGER: name of booking software, payment provider (e.g. Stripe), analytics tool, ad pixel — brand pack doesn’t mention any of these].",
        ],
        notes: [
          "CONFIRM WITH MANAGER: Name of booking software, payment provider (for example Stripe), analytics tool and any ad pixel. The brand pack does not mention these.",
        ],
      },
    ],
  },
  {
    id: "how-long-cookies-stay",
    title: "How Long Cookies Stay on Your Device",
    summary: "Session and persistent cookies",
    chunks: [
      {
        paragraphs: [
          "Session cookies are temporary and are deleted once you close your browser.",
          "Persistent cookies stay on your device for a set period, or until you delete them manually, and are used to remember your preferences across visits.",
        ],
      },
    ],
  },
  {
    id: "managing-preferences",
    title: "Managing Your Cookie Preferences",
    summary: "Banner and browser settings",
    chunks: [
      {
        paragraphs: [
          "When you first visit our website, you’ll see a cookie banner where you can accept or manage your preferences. You can change your choices at any time by [CONFIRM WITH MANAGER: how does the site’s cookie settings actually work — footer icon, banner re-trigger, etc.].",
          "You can also control or delete cookies through your browser settings. Most browsers allow you to see what cookies you have and delete them individually, or block cookies from particular or all websites. Please note that if you block or delete essential cookies, parts of our website may not work as intended.",
          "For more information on how to manage cookies in your browser, you can visit:",
        ],
        bullets: [
          "[Google Chrome](https://support.google.com/chrome/answer/95647)",
          "[Safari](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)",
          "[Mozilla Firefox](https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer)",
          "[Microsoft Edge](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)",
        ],
        notes: [
          "CONFIRM WITH MANAGER: How cookie settings work on the site — footer icon, banner re-trigger, or another method.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    summary: "Updates",
    chunks: [
      {
        paragraphs: [
          "We may update this Cookies Policy from time to time to reflect changes in the cookies we use or for legal reasons. Any changes will be posted on this page with an updated revision date.",
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    summary: "Questions about cookies",
    chunks: [
      {
        paragraphs: [
          "If you have any questions about our use of cookies, please get in touch:",
          "CL Cleaning Services London",
          "68 Granleigh Road, London E11 4RQ, United Kingdom",
          `Email: ${SITE_EMAIL}`,
          "Phone: 020 3475 5539",
        ],
      },
    ],
  },
];

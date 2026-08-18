import type { Metadata } from "next";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactStepsSection from "@/components/contact/ContactStepsSection";
import ContactTrustStrip from "@/components/contact/ContactTrustStrip";
import JsonLd from "@/components/seo/JsonLd";
import { contactPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Contact Us | Cleaning Services London — Free Quote",
  description:
    "Contact Us for a free, no-obligation cleaning quote in London. Call, email, WhatsApp or fill in our quick form — most enquiries answered same day.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <main>
        <ContactHero />
        <ContactStepsSection />
        <ContactFormSection />
        <ContactTrustStrip />
        <ContactMapSection />
      </main>
    </>
  );
}

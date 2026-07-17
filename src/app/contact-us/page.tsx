import type { Metadata } from "next";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactStepsSection from "@/components/contact/ContactStepsSection";
import ContactTrustStrip from "@/components/contact/ContactTrustStrip";

export const metadata: Metadata = {
  title: "Contact Us | Cleaning Services London",
  description:
    "Get a free, no-obligation cleaning quote in London. Call, email, WhatsApp or fill in our quick contact form — most enquiries answered same day.",
};

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <ContactStepsSection />
      <ContactFormSection />
      <ContactTrustStrip />
      <ContactMapSection />
    </main>
  );
}

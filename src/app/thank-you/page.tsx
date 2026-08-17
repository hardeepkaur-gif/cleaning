import type { Metadata } from "next";
import ThankYouHero from "@/components/thank-you/ThankYouHero";
import ThankYouSection from "@/components/thank-you/ThankYouSection";
import "./thank-you.css";

export const metadata: Metadata = {
  title: "Thank You | Cleaning Services London",
  description:
    "Thank you for contacting Cleaning Services London. We have received your request and will be in touch shortly with your quote.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouHero />
      <ThankYouSection />
    </main>
  );
}

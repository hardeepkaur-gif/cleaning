import type { Metadata } from "next";
import CookiesHero from "@/components/cookies/CookiesHero";
import CookiesContent from "@/components/cookies/CookiesContent";
import JsonLd from "@/components/seo/JsonLd";
import { cookiesPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Cookies Policy | Cleaning Services London",
  description:
    "Read how CL Cleaning Services London uses cookies and similar technologies on clcleaningserviceslondon.co.uk.",
  alternates: {
    canonical: "/cookies-policy",
  },
};

export default function CookiesPolicyPage() {
  return (
    <>
      <JsonLd data={cookiesPageSchema} />
      <main>
        <CookiesHero />
        <CookiesContent />
      </main>
    </>
  );
}

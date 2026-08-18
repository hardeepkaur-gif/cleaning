import type { Metadata } from "next";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";
import JsonLd from "@/components/seo/JsonLd";
import { privacyPageSchema } from "@/lib/pageSchemas";

export const metadata: Metadata = {
  title: "Privacy Policy | Cleaning Services London",
  description:
    "Read how Cleaning Services London collects, uses and protects your personal information when you enquire about or book cleaning services in London.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={privacyPageSchema} />
      <main>
        <PrivacyHero />
        <PrivacyPolicyContent />
      </main>
    </>
  );
}

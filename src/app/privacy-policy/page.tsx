import type { Metadata } from "next";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Cleaning Services London",
  description:
    "Read how Cleaning Services London collects, uses and protects your personal information when you enquire about or book cleaning services in London.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyPolicyContent />
    </main>
  );
}

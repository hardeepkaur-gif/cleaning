import type { Metadata } from "next";
import Header from "@/components/menu/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import "./thank-you/thank-you.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clcleaningserviceslondon.co.uk"),
  title: "Cleaning Services London for Homes Landlords and Businesses",
  description:
    "Professional cleaning services in London for homes and businesses. DBS-checked, insured cleaners with fixed pricing and completion photo reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

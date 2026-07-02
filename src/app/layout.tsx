import type { Metadata } from "next";
import Header from "@/components/menu/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cleaning Services London — Professional Cleaning",
  description:
    "Professional cleaning — fast, safe & reliable. Keep your home fresh and healthy with our expert cleaning solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

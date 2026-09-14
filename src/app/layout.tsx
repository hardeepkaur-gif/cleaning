import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import Header from "@/components/menu/Header";
import Footer from "@/components/footer/Footer";
import { SITE_INDEXABLE } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clcleaningserviceslondon.co.uk"),
  title: "Cleaning Services London for Homes Landlords and Businesses",
  description:
    "Professional cleaning services in London for homes and businesses. DBS-checked, insured cleaners with fixed pricing and completion photo reports.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  ...(!SITE_INDEXABLE && {
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${rubik.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

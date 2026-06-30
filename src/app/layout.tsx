import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import Header from "@/components/menu/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "CleanPro — Professional Cleaning Services",
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
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

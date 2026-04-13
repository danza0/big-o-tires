import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Big O Tires Victoria | Tires, Auto Repair & Custom Wheels in Victoria, BC",
    template: "%s | Big O Tires Victoria",
  },
  description: "Shop Tires & Auto Repair in Victoria, BC. Voted Victoria's Best Tire Store — 30+ years of trusted service. Tires, custom wheels, brake service, oil changes & more.",
  keywords: "Big O Tires Victoria, auto repair victoria bc, oil change victoria bc, tires victoria bc, brake repair victoria bc, wheel alignment victoria bc, custom wheels victoria bc, tire shop victoria",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Big O Tires Victoria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

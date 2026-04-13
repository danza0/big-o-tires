import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Big O Tires Victoria | Tires, Auto Repair & Custom Wheels",
  description: "Shop Tires & Auto Repair in Victoria, BC. Voted Victoria's Best Tire Store for 3 years straight. Visit us for tires, custom wheels, brake service, oil changes & more.",
  keywords: "Big O Tires Victoria, auto repair victoria bc, oil change victoria bc, mechanic victoria bc, tire repair victoria bc, tire shop victoria, brake repair victoria bc, wheel alignment victoria, custom wheels victoria bc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

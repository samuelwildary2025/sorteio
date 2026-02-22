import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "eBook Raffle - Win Big by Reading",
  description: "Purchase eBooks and get a chance to win amazing prizes.",
};

import { StickyPurchaseWidget } from "@/components/layout/StickyPurchaseWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ubuntu.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyPurchaseWidget />
      </body>
    </html>
  );
}

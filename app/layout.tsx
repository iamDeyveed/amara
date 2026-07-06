import type { Metadata } from "next";
import {
  Bitcount_Single,
  Instrument_Sans,
  Mrs_Saint_Delafield,
  Poppins
} from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CursorFollower } from "@/components/CursorFollower";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap"
});

const bitcount = Bitcount_Single({
  subsets: ["latin"],
  variable: "--font-bitcount",
  adjustFontFallback: false,
  display: "swap"
});

export const metadata: Metadata = {
  title: "Big_Hub - Amarachi Mbanta | Product Designer",
  description:
    "A black and gold portfolio for Amarachi Mbanta, a product designer crafting digital experiences across web, mobile, and brand systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="top"
        className={`${instrumentSans.variable} ${poppins.variable} ${script.variable} ${bitcount.variable} font-sans antialiased`}
      >
        <CursorFollower />
        <ScrollProgress />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}

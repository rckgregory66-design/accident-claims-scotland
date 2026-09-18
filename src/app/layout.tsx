import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, webSiteSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Accident Claims Scotland | Personal Injury & Medical Negligence Solicitors",
  description:
    "Speak to Scottish accident claim solicitors about personal injury, medical negligence, industrial disease and workplace accident compensation claims. Start a free claim check today.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`h-full ${inter.className}`}>
      <head>
        <JsonLd data={[organizationSchema(), webSiteSchema()]} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}

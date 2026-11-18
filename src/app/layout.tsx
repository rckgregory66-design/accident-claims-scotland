import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import TelClickListener from "@/components/TelClickListener";
import EnquiryStatusBanner from "@/components/EnquiryStatusBanner";
import CallbackForm from "@/components/CallbackForm";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, webSiteSchema } from "@/lib/schema";
import { SITE } from "@/data/siteConfig";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Accident Claims Scotland | Personal Injury & Medical Negligence Claim Information",
  description:
    "Plain-English information on personal injury, medical negligence, industrial disease and workplace accident claims in Scotland: time limits, evidence, funding and next steps. Not a law firm.",
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
        <TelClickListener />
        <Header />
        <EnquiryStatusBanner />
        <div id="request-callback" className="callback-panel border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div className="w-full max-w-md">
                <CallbackForm location="layout_panel" />
              </div>
              <a href="#main-content" className="text-sm text-slate-600 underline shrink-0">Close</a>
            </div>
          </div>
        </div>
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}

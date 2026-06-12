import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trailervault.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TrailerVault – Latest Movie Trailers",
    template: "%s | TrailerVault",
  },
  description:
    "Watch the latest movie trailers from Hollywood and beyond. Discover upcoming films across action, sci-fi, horror, comedy, animation, and more. Updated hourly.",
  keywords: ["movie trailers", "film trailers", "upcoming movies", "cinema", "Hollywood", "new trailers"],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "TrailerVault",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "TrailerVault – Latest Movie Trailers",
    description: "Watch the latest movie trailers. Updated hourly with new releases.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "TrailerVault" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrailerVault – Latest Movie Trailers",
    description: "Watch the latest movie trailers. Updated hourly with new releases.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <head>
        {ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export const metadata: Metadata = {
  title: {
    default: "TrailerVault – Latest Movie Trailers",
    template: "%s | TrailerVault",
  },
  description:
    "Watch the latest movie trailers from Hollywood and beyond. Discover upcoming films across action, sci-fi, horror, comedy, animation, and more.",
  keywords: ["movie trailers", "film trailers", "upcoming movies", "cinema", "Hollywood"],
  openGraph: {
    siteName: "TrailerVault",
    type: "website",
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
      </body>
    </html>
  );
}

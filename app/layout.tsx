import Link from "next/link";
import { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EUDI Wallet & eIDAS 2.0 per PMI italiane",
    template: "%s | EUDI Wallet & eIDAS 2.0 per PMI"
  },
  description:
    "Guide pratiche, vendor e strumenti su EUDI Wallet, eIDAS 2.0, firme elettroniche e onboarding KYC/KYB.",
  alternates: {
    canonical: siteUrl
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "EUDI & eIDAS per PMI",
    url: siteUrl
  },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#f5f5f5" />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

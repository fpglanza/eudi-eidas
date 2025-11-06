import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Suspense } from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"\;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EUDI Wallet & eIDAS 2.0 per PMI italiane",
    template: "%s | EUDI Wallet & eIDAS 2.0 per PMI",
  },
  description:
    "Guide pratiche, vendor e strumenti su EUDI Wallet, eIDAS 2.0, firme elettroniche e onboarding KYC/KYB.",
  openGraph: {
    type: "website",
    siteName: "EUDI & eIDAS per PMI",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EUDI & eIDAS per PMI",
              url: siteUrl,
            }),
          }}
        />
        <Suspense fallback={null}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}

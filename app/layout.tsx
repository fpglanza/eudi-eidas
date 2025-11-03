import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EUDI & eIDAS per PMI italiane",
    template: "%s | EUDI & eIDAS per PMI",
  },
  description:
    "Guide, vendor e strumenti sull'identità digitale europea, eIDAS 2.0 ed EUDI Wallet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

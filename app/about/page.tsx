import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://eudi-eidas.example"\;

export const metadata: Metadata = {
  title: "Chi siamo | EUDI & eIDAS per PMI",
  description:
    "Progetto editoriale per PMI italiane su EUDI Wallet, eIDAS 2.0, firme elettroniche e onboarding KYC/KYB.",
  openGraph: { url: `${siteUrl}/about` },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Chi siamo</h1>
      <p className="mt-3 text-muted-foreground">
        Siamo un hub indipendente di contenuti tecnici e comparativi su EUDI Wallet,
        eIDAS 2.0 e servizi fiduciari in Italia. Aiutiamo PMI, startup e integratori IT
        a scegliere vendor e implementare onboarding e firma conformi.
      </p>

      {/* JSON-LD (Organization + WebSite) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EUDI & eIDAS per PMI",
            url: siteUrl,
            logo: `${siteUrl}/icon-512.png`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: siteUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/search?q={query}`,
              "query-input": "required name=query",
            },
          }),
        }}
      />
    </main>
  );
}

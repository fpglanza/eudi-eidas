import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Chi siamo | EUDI & eIDAS per PMI",
  description:
    "Informazioni sul progetto EUDI & eIDAS per PMI italiane: guide, strumenti e analisi sull'identità digitale europea.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "Chi siamo | EUDI & eIDAS per PMI",
    description:
      "Progetto indipendente per aiutare le PMI italiane ad adottare EUDI Wallet ed eIDAS 2.0.",
    url: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EUDI & eIDAS per PMI",
    legalName: "EUDI & eIDAS per PMI",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/eudiwallet/",
      "https://github.com/fpglanza/eudi-eidas"
    ],
    description:
      "Hub di contenuti e comparazione per servizi EUDI Wallet, eIDAS 2.0, firme elettroniche e onboarding digitale.",
    foundingDate: "2025-01-01",
    founder: {
      "@type": "Person",
      name: "Filippo Lanza",
      jobTitle: "Founder",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "info",
        email: "info@eudiwallet.it",
        availableLanguage: ["Italian", "English"],
      },
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EUDI & eIDAS per PMI",
    url: siteUrl,
    inLanguage: "it-IT",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Chi siamo</h1>
      <p>
        <strong>EUDI & eIDAS per PMI</strong> è un progetto indipendente che
        aiuta imprese, professionisti e integratori italiani a comprendere e
        implementare le novità dell’identità digitale europea.
      </p>

      <p>
        Il sito raccoglie <em>guide pratiche</em>, <em>confronti tra vendor</em>{" "}
        e <em>strumenti</em> per adottare tecnologie wallet-ready, firme
        elettroniche e onboarding KYC/KYB in linea con eIDAS 2.0.
      </p>

      <p>
        La nostra missione è semplificare la conformità e accelerare
        l’innovazione per le PMI europee.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Contatti</h2>
        <ul className="list-disc ml-5">
          <li>Email: info@eudiwallet.it</li>
          <li>GitHub: <a href="https://github.com/fpglanza/eudi-eidas" className="underline">fpglanza/eudi-eidas</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/company/eudiwallet/" className="underline">EUDI Wallet Italia</a></li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteLd),
        }}
      />
    </main>
  );
}

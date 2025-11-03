import { type Metadata } from "next";
import vendors from "@/data/vendors.json";
import VendorTable from "@/components/VendorTable";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Vendor EUDI/eIDAS: confronto per PMI",
  description:
    "Confronta provider di identità digitale, QTSP e firme elettroniche, KYC/KYB e soluzioni wallet-ready per PMI italiane.",
  alternates: { canonical: `${siteUrl}/vendors` },
  openGraph: {
    title: "Vendor EUDI/eIDAS: confronto per PMI",
    description:
      "Tabella comparativa con ricerca e ordinamento di vendor per identità, firme e onboarding.",
    url: `${siteUrl}/vendors`,
  },
};

export default function VendorsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: (vendors as any[]).map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: v.name,
      url: v.website,
    })),
  };

  const orgGraphLd = {
    "@context": "https://schema.org",
    "@graph": (vendors as any[]).map((v) => ({
      "@type": "Organization",
      name: v.name,
      url: v.website,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Vendor", item: `${siteUrl}/vendors` },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Vendor EUDI / eIDAS</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Confronto operativo tra provider di identità, firme elettroniche (QTSP) e soluzioni KYC/KYB
        compatibili con EUDI Wallet ed eIDAS 2.0.
      </p>

      {/* @ts-expect-error static json import typing */}
      <VendorTable data={vendors} />

      {/* JSON-LD SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgGraphLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </main>
  );
}

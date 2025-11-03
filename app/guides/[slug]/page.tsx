import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GuideBody from "@/components/GuideBody";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateStaticParams() {
  return allGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = allGuides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: { title: guide.title, description: guide.description, url: guide.url },
    alternates: { canonical: `${siteUrl}${guide.url}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = allGuides.find((g) => g.slug === slug);
  if (!guide) return notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Guide", item: `${siteUrl}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}${guide.url}` },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: new Date(guide.date).toISOString(),
    dateModified: new Date(guide.date).toISOString(),
    author: [{ "@type": "Organization", name: "EUDI & eIDAS per PMI" }],
    mainEntityOfPage: `${siteUrl}${guide.url}`,
    keywords: guide.tags?.join(", "),
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/guides", label: "Guide" },
          { label: guide.title },
        ]}
      />
      <h1 className="text-3xl font-bold mb-6">{guide.title}</h1>
      <GuideBody code={guide.body.code} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </main>
  );
}

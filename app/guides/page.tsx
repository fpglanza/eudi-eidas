import { allGuides } from "contentlayer/generated";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide EUDI & eIDAS 2.0",
  description: "Raccolta di guide pratiche su EUDI Wallet, eIDAS 2.0 e identità digitale per PMI.",
};

export default function GuidesIndex() {
  const guides = allGuides
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Guide pratiche EUDI & eIDAS</h1>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <li
            key={g.slug}
            className="rounded-xl border p-4 hover:shadow-md transition"
          >
            <Link href={g.url}>
              <h2 className="font-semibold text-lg mb-1 hover:text-primary">
                {g.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">
                {g.description}
              </p>
              <div className="flex flex-wrap gap-1 text-xs text-foreground/70">
                {g.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-muted rounded">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Schema.org ArticleList for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: guides.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://eudiwallet.it${g.url}`,
              name: g.title,
            })),
          }),
        }}
      />
    </main>
  );
}

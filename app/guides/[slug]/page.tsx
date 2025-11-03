import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GuideBody from "@/components/GuideBody";

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
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = allGuides.find((g) => g.slug === slug);
  if (!guide) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{guide.title}</h1>
      <GuideBody code={guide.body.code} />
    </main>
  );
}

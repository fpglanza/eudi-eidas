"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";

export default function GuideBody({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);
  return (
    <article className="prose max-w-none">
      <MDXContent />
    </article>
  );
}

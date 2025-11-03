import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="breadcrumbs" className="mb-6 text-sm">
      <ol className="flex flex-wrap gap-2 text-muted-foreground">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-foreground underline-offset-4 hover:underline">
                {it.label}
              </Link>
            ) : (
              <span className="text-foreground">{it.label}</span>
            )}
            {i < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

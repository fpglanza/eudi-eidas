"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guide" },
  { href: "/vendors", label: "Vendor" },
  { href: "/about", label: "Chi siamo" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background/60 backdrop-blur-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg">EUDI & eIDAS</Link>
        <ul className="flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "hover:text-foreground/80 transition",
                  pathname === l.href ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

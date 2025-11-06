import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          EUDI & eIDAS per PMI
        </Link>
        <nav className="flex gap-5 text-sm">
          <Link href="/guides" className="hover:underline">Guide</Link>
          <Link href="/vendors" className="hover:underline">Vendor</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/admin/stats" className="hover:underline">Admin</Link>
        </nav>
      </div>
    </header>
  );
}

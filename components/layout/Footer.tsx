import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-background/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} EUDI & eIDAS per PMI —{" "}
          <Link href="/about" className="underline underline-offset-2 hover:text-foreground">Chi siamo</Link>
        </p>
        <nav className="flex gap-4">
          <Link href="/guides" className="hover:text-foreground">Guide</Link>
          <Link href="/vendors" className="hover:text-foreground">Vendor</Link>
        </nav>
      </div>
    </footer>
  );
}

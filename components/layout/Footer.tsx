export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-4 text-xs sm:text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} EUDI & eIDAS per PMI — contenuti informativi,
          senza garanzia.
        </p>
      </div>
    </footer>
  );
}

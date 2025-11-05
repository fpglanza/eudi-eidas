import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Pagina non trovata</h1>
      <p className="mt-2 text-muted-foreground">
        La risorsa che stai cercando non esiste o è stata spostata.
      </p>
      <div className="mt-6">
        <Link href="/" className="inline-block rounded-md border px-4 py-2">
          Torna alla Home
        </Link>
      </div>
    </main>
  );
}

import { loginAction } from "./actions";
import Link from "next/link";

export const metadata = { title: "Login admin" };

export default async function AdminLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const error = params?.error;
  const next = params?.next || "/admin/stats";

  return (
    <main className="mx-auto max-w-sm px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Login area admin</h1>
      {error ? (
        <p className="mb-3 text-sm text-red-600">Chiave errata</p>
      ) : null}
      <form action={loginAction} className="space-y-3">
        <input type="hidden" name="next" value={next} />
        <label className="block text-sm">
          Chiave di accesso
          <input
            name="key"
            type="password"
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="••••••••••••"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-md border px-3 py-2 font-medium"
        >
          Entra
        </button>
      </form>

      <p className="mt-6 text-xs text-muted-foreground">
        <Link href="/">← Torna al sito</Link>
      </p>
    </main>
  );
}

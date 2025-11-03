import { sql } from "@/lib/db";

export const dynamic = "force-dynamic"; // per aggiornare ad ogni visita

export default async function StatsPage() {
  const rows = await sql<{ url: string; views: string }[]>`
    select url, count(*)::text as views
    from pageviews
    group by url
    order by count(*) desc
    limit 50;
  `;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Statistiche visite</h1>
      <table className="w-full text-sm border-t">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">URL</th>
            <th className="text-left py-2">Visite</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.url} className="border-b">
              <td className="py-2">{r.url}</td>
              <td className="py-2">{r.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

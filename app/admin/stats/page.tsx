import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function StatsPage() {
  // query per contare totale e ultime 24h
  const [tot, last24] = await Promise.all([
    sql`select count(*)::int as total from pageviews;`,
    sql`select count(*)::int as last24 from pageviews where created_at > now() - interval '24 hours';`,
  ]);

  const rows = await sql<{ url: string; views: number }[]>`
    select url, count(*)::int as views
    from pageviews
    group by url
    order by count(*) desc
    limit 50;
  `;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Statistiche visite</h1>

      <div className="mb-8 flex gap-6 text-sm text-muted-foreground">
        <span>Totale visite: <b>{tot[0].total}</b></span>
        <span>Ultime 24h: <b>{last24[0].last24}</b></span>
      </div>

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

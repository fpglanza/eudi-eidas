import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

type Row = { url: string; views: number };

export default async function StatsPage() {
  // conteggi
  const [tot, last24] = await Promise.all([
    sql`select count(*)::int as total from pageviews;`,
    sql`select count(*)::int as last24 from pageviews where created_at > now() - interval '24 hours';`,
  ]);

  const total = Number((tot as any)[0]?.total ?? 0);
  const last24h = Number((last24 as any)[0]?.last24 ?? 0);

  // top URL (N = 20)
  const rows = (await sql`
    select url, count(*)::int as views
    from pageviews
    group by url
    order by views desc
    limit 20;
  `) as unknown as Row[];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Admin · Stats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Totale pageviews</div>
          <div className="text-3xl font-semibold">{total}</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Ultime 24 ore</div>
          <div className="text-3xl font-semibold">{last24h}</div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-3">Top URL</h2>
      <div className="rounded-lg border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left px-3 py-2">URL</th>
              <th className="text-right px-3 py-2">Visite</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="px-3 py-2 break-all">{r.url}</td>
                <td className="px-3 py-2 text-right">{r.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

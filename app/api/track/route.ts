import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    // se manca il DB in questo ambiente, non bloccare la build/deploy
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const { url } = await request.json().catch(() => ({ url: "/" }));
    if (!url) return NextResponse.json({ ok: false }, { status: 400 });

    await sql`insert into pageviews (url) values (${url});`;
    return NextResponse.json({ ok: true });
  } catch (e) {
    // non fallire mai la build/deploy per tracking
    console.error("track error:", e);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}

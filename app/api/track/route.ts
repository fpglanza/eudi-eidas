import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "edge";

// hash SHA-256 compatibile Edge
async function sha256Hex(input: string) {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(req: Request) {
  try {
    const { url, referrer, ua } = await req.json().catch(() => ({}));
    if (!url || typeof url !== "string") {
      return NextResponse.json({ ok: false, error: "missing url" }, { status: 400 });
    }

    // x-forwarded-for può essere vuoto in dev: è ok
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();
    const ip_hash = ip ? await sha256Hex(ip) : null;

    await sql`
      insert into pageviews (url, referrer, ua, ip_hash)
      values (${url}, ${referrer || null}, ${ua || null}, ${ip_hash || null})
    `;

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

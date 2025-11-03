import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("❌ Missing DATABASE_URL in .env.local");
}

// Raw value, trimmed and de-quoted
const raw = process.env.DATABASE_URL.trim().replace(/^psql\s+/, "").replace(/^'|'$/g, "");

// Strong normalize: capture user/pass/host/db from postgres:// or postgresql:// and rebuild
const m = raw.match(/^postgres(?:ql)?:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)/);
if (!m) {
  throw new Error(`❌ Unrecognized DATABASE_URL format: "${raw}"`);
}
const [, user, pass, host, db] = m;
const cleanUrl = `postgres://${user}:${pass}@${host}/${db}`;

// Singleton
let cached: ReturnType<typeof neon> | null = null;
export const sql = cached ??= neon(cleanUrl);

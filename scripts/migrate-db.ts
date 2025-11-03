import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) throw new Error("Missing DATABASE_URL");

const raw = process.env.DATABASE_URL.trim().replace(/^psql\s+/, "").replace(/^'|'$/g, "");
const m = raw.match(/^postgres(?:ql)?:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)/);
if (!m) throw new Error(`Bad DATABASE_URL format: "${raw}"`);
const [, user, pass, host, db] = m;
const cleanUrl = `postgres://${user}:${pass}@${host}/${db}`;

const sql = neon(cleanUrl);

async function main() {
  await sql`alter table if exists pageviews add column if not exists created_at timestamptz default now();`;
  console.log("✅ Migration OK: added created_at (if missing)");
}
main().catch((e) => {
  console.error("❌ Migration error:", e);
  process.exit(1);
});

import { neon } from "@neondatabase/serverless";

// connessione singleton per evitare reconnect multipli in dev
export const sql = neon(process.env.DATABASE_URL!);

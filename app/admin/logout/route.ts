import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL("/admin/login", req.url);
  const res = NextResponse.redirect(url);
  res.cookies.set("admin_key", "", { path: "/", maxAge: 0 });
  return res;
}

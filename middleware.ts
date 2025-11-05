import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  // pubblico: pagina di login
  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  // proteggi tutto l'admin
  if (pathname.startsWith("/admin")) {
    const key = req.cookies.get("admin_key")?.value;
    const expected = process.env.ADMIN_KEY;
    if (!expected || key !== expected) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = search || "";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

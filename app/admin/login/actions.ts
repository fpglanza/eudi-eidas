"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const input = String(formData.get("key") || "");
  const expected = process.env.ADMIN_KEY || "";
  if (!expected || input !== expected) {
    redirect("/admin/login?error=1");
  }
  const cookieStore = await cookies();
  cookieStore.set("admin_key", expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  const next = String(formData.get("next") || "/admin/stats");
  redirect(next);
}

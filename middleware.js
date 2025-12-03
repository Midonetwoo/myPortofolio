import { NextResponse } from "next/server";

export function middleware(req) {
  const isDashboard = req.nextUrl.pathname.startsWith("/admin/dashboard");
  if (!isDashboard) return NextResponse.next();

  const isAuthed = req.cookies.get("admin-auth")?.value === "true";
  if (!isAuthed) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"]
};

import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "scrapbook-studio-self-hosted-secret-key-2026-secure"
);
const COOKIE_NAME = "sb_session";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  let user = null;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      user = payload;
    } catch {
      user = null;
    }
  }

  const { pathname } = request.nextUrl;

  // Proteksi halaman privat (dashboard, editor)
  const isProtected = pathname.startsWith("/dashboard") || pathname.startsWith("/editor");
  if (isProtected && !user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect user yang sudah login dari /login atau /register ke /dashboard
  const isAuthPage = pathname === "/login" || pathname === "/register";
  if (isAuthPage && user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Berlaku untuk semua rute kecuali:
     * - _next/static (file statis Next.js)
     * - _next/image (optimasi gambar)
     * - favicon.ico
     * - uploads (file upload lokal)
     * - file ekstensi gambar & aset statis (svg, png, jpg, jpeg, gif, webp, css, js)
     */
    "/((?!_next/static|_next/image|favicon.ico|uploads|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)",
  ],
};

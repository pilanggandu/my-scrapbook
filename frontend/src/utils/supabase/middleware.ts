import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    ""
  );

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // Ambil user aktif dari Supabase Auth
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // 1. Rute yang WAJIB LOGIN:
  // - Dashboard (/dashboard)
  // - Editor album (/editor/:id)
  // - Panel Admin (/admin)
  const isProtectedPath =
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/") ||
    pathname.startsWith("/editor") ||
    pathname.startsWith("/admin");

  // 2. Rute Autentikasi (login / register)
  const isAuthPath = pathname === "/login" || pathname === "/register";

  // Jika mencoba mengakses rute terproteksi tanpa login, arahkan ke /login
  if (isProtectedPath && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";
    redirectUrl.searchParams.set("redirect", pathname + request.nextUrl.search);
    return NextResponse.redirect(redirectUrl);
  }

  // Jika sudah login dan membuka /login atau /register, arahkan ke /dashboard
  if (isAuthPath && user) {
    const redirectParam = request.nextUrl.searchParams.get("redirect");
    const redirectUrl = request.nextUrl.clone();
    if (redirectParam && redirectParam.startsWith("/")) {
      redirectUrl.pathname = redirectParam;
      redirectUrl.search = "";
    } else {
      redirectUrl.pathname = "/dashboard";
      redirectUrl.search = "";
    }
    return NextResponse.redirect(redirectUrl);
  }

  // Rute PUBLIK tetap bebas diakses siapa saja:
  // - Beranda ("/")
  // - Pratinjau / Lihat Buku Digital ("/preview/:slug")
  // - Engine scrapbook interaktif ("/engine.html")
  return supabaseResponse;
}

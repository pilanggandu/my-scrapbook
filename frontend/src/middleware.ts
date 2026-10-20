import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Berlaku untuk semua rute kecuali:
     * - _next/static (file statis Next.js)
     * - _next/image (optimasi gambar)
     * - favicon.ico
     * - file ekstensi gambar & aset statis (svg, png, jpg, jpeg, gif, webp, css, js)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)",
  ],
};

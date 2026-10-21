"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#faf7f0] flex items-center justify-center p-6 text-[#382e25]">
      <div className="bg-[#fffdf8] border border-[#ded5c4] rounded-3xl p-8 max-w-md w-full text-center shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-[#fee8de] text-[#8c3b24] flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-xl font-bold text-[#342a20] mb-2">
          Terjadi Kendala Memuat Halaman
        </h2>
        <p className="text-xs text-[#6e6252] leading-relaxed mb-6">
          {error?.message || "Mohon maaf, halaman ini mengalami gangguan sementara saat memuat data."}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="px-4 py-2.5 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Coba Lagi</span>
          </button>
          <Link
            href="/"
            className="px-4 py-2.5 bg-[#f6eee2] hover:bg-[#ebe0d0] text-[#4d3f32] border border-[#ded3bf] rounded-xl text-xs font-semibold transition flex items-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

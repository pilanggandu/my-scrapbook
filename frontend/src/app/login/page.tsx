"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, BookOpen, Lock, Mail } from "lucide-react";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateSlug = searchParams.get("template");

  const templateNames: Record<string, string> = {
    "romantic-islamic-keepsake": "Romantic Islamic Keepsake",
    "vintage-travel-story": "Vintage Wanderlust & Tale",
    "minimalist-linen-journal": "Minimalist Linen Journal",
  };

  const selectedTemplate = templateSlug ? (templateNames[templateSlug] || templateSlug) : null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message || "Gagal masuk. Periksa kembali email dan kata sandi Anda.");
      setLoading(false);
      return;
    }

    // Periksa role user
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profile?.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-full max-w-md bg-[#fffdf8] rounded-3xl border border-[#ded5c4] shadow-sm p-8">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#4b6958] text-[#fffdf5] flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-3 shadow-xs">
          📖
        </div>
        <h1 className="font-serif text-2xl font-bold text-[#3d3328]">Selamat Datang Kembali</h1>
        <p className="text-xs text-[#706454] mt-1.5">
          Masuk ke akunmu untuk mengelola dan melanjutkan album kenangan.
        </p>
      </div>

      {selectedTemplate && (
        <div className="mb-6 p-3.5 rounded-2xl bg-[#f4ece0] border border-[#dcd1bd] flex items-center gap-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-[#4b6958] text-[#fffdf5] flex items-center justify-center shrink-0 shadow-xs">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-[#7e7261] font-bold">
              Melanjutkan Template
            </span>
            <span className="block text-xs font-bold text-[#3d3328]">
              {selectedTemplate}
            </span>
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="p-3 mb-6 rounded-xl bg-[#fbeae8] border border-[#f5c6c0] text-xs text-[#8c2d20] leading-relaxed">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#493e32] mb-1.5">
            Alamat Email
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#8a7d6d] absolute left-3.5 top-3" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#c8bead] rounded-xl text-sm text-[#1a1612] placeholder-[#8c8070] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4b6958] transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#493e32] mb-1.5">
            Kata Sandi
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-[#8a7d6d] absolute left-3.5 top-3" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#c8bead] rounded-xl text-sm text-[#1a1612] placeholder-[#8c8070] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4b6958] transition"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-sm font-bold shadow-sm transition disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Masuk ke Studio"}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-[#ede5d6] text-center text-xs text-[#6e6252]">
        Belum memiliki akun?{" "}
        <Link
          href={templateSlug ? `/register?template=${templateSlug}` : "/register"}
          className="font-bold text-[#4b6958] hover:underline"
        >
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col justify-center items-center px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#665a4c] hover:text-[#385342] mb-8 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </Link>

      <Suspense fallback={<div className="text-center text-xs text-[#786c5e]">Memuat formulir masuk...</div>}>
        <LoginContent />
      </Suspense>
    </div>
  );
}

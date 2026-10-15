"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: "user",
        },
      },
    });

    if (error) {
      setErrorMsg(error.message || "Gagal mendaftar. Silakan coba kembali.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col justify-center items-center px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#665a4c] hover:text-[#385342] mb-8 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </Link>

      <div className="w-full max-w-md bg-[#fffdf8] rounded-3xl border border-[#ded5c4] shadow-sm p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#4b6958] text-[#fffdf5] flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-3 shadow-xs">
            ✨
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#3d3328]">Mulai Akun Baru</h1>
          <p className="text-xs text-[#706454] mt-1.5">
            Buat akun untuk menyimpan template dan album scrapbook pribadimu.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 mb-6 rounded-xl bg-[#fbeae8] border border-[#f5c6c0] text-xs text-[#8c2d20] leading-relaxed">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#493e32] mb-1.5">
              Nama Lengkap
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#8a7d6d] absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Misal: Gilang Romadhon"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#c8bead] rounded-xl text-sm text-[#1a1612] placeholder-[#8c8070] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4b6958] transition"
              />
            </div>
          </div>

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
              Kata Sandi (Min. 6 Karakter)
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#8a7d6d] absolute left-3.5 top-3" />
              <input
                type="password"
                required
                minLength={6}
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
            {loading ? "Mendaftarkan..." : "Daftar & Masuk"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#ede5d6] text-center text-xs text-[#6e6252]">
          Sudah memiliki akun?{" "}
          <Link href="/login" className="font-bold text-[#4b6958] hover:underline">
            Masuk di Sini
          </Link>
        </div>
      </div>
    </div>
  );
}

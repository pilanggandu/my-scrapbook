"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TemplatePreviewPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col">
      {/* Top Bar Preview */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-6 py-3.5 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-8 h-8 rounded-lg bg-[#f6eee2] hover:bg-[#ede3d3] text-[#554738] flex items-center justify-center transition"
              title="Kembali ke Katalog"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-[#3d3328]">
                  Romantic Islamic Keepsake
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fbeee8] text-[#8c3b24] border border-[#eed3c8]">
                  Template #1
                </span>
              </div>
              <span className="block text-[10px] uppercase tracking-wider text-[#7e7261]">
                Live Interactive Canvas &amp; Studio Editor
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/register"
              className="px-4 py-2 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition shadow-xs"
            >
              Simpan ke Akunku
            </Link>
          </div>
        </div>
      </header>

      {/* Frame Engine Scrapbook Lengkap */}
      <main className="flex-1 w-full bg-[#f5f2eb]">
        <iframe
          ref={iframeRef}
          src="/engine.html"
          className="w-full h-[calc(100vh-61px)] border-0"
          title="Scrapbook Engine Live Preview"
        />
      </main>
    </div>
  );
}

import Link from "next/link";
import { BookOpen, Sparkles, Heart, Printer, Layers, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const templates = [
    {
      id: "romantic-islamic-keepsake",
      title: "Romantic Islamic Keepsake",
      subtitle: "Menyambut Pernikahan & Hari Milad",
      category: "Wedding & Keepsake",
      badge: "Template Utama",
      description: "Paduan anggun kertas linen vintage, tiket kenangan perjalanan cinta, kalender milad, dan komitmen ikhtiar sakinah.",
      themeColor: "from-[#badccd]/40 to-[#d6c5e2]/40",
      layoutsCount: "9 Pilihan Layout Foto",
      pagesCount: "5 Halaman Tematik",
      previewHref: "/preview/romantic-islamic-keepsake",
      useHref: "/register?template=romantic-islamic-keepsake",
      isAvailable: true
    },
    {
      id: "vintage-travel-story",
      title: "Vintage Wanderlust & Tale",
      subtitle: "Perjalanan Dua Insan Menjelajah",
      category: "Travel & Memories",
      badge: "Segera Hadir",
      description: "Nuansa prangko pos vintage, paspor perjalanan cinta, dan tiket memorial dari kota pertama hingga masa depan.",
      themeColor: "from-[#f8d0b5]/40 to-[#faeaed]/40",
      layoutsCount: "Layout Kolase Eksplorasi",
      pagesCount: "4 Halaman Cerita",
      previewHref: "#",
      useHref: "#",
      isAvailable: false
    },
    {
      id: "minimalist-linen-journal",
      title: "Minimalist Linen Journal",
      subtitle: "Sederhana, Bersih, dan Mendalam",
      category: "Monochrome & Pure",
      badge: "Segera Hadir",
      description: "Garis tipografi klasik, fokus foto portrait tunggal yang megah, dan kutipan doa tulus berbingkai elegan.",
      themeColor: "from-[#f7f2e4]/60 to-[#e2dabf]/40",
      layoutsCount: "Layout Clean & Hero",
      pagesCount: "3 Halaman Intim",
      previewHref: "#",
      useHref: "#",
      isAvailable: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f0]">
      {/* Navbar Atas */}
      <header className="sticky top-0 z-30 bg-[#fbf8f2]/90 backdrop-blur-md border-b border-[#e5ddcf] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#4b6958] text-[#fffdf5] flex items-center justify-center font-serif text-xl font-bold shadow-sm">
              📖
            </div>
            <div>
              <span className="block font-serif text-xl font-bold text-[#3d3328] group-hover:text-[#4b6958] transition">
                Scrapbook Studio
              </span>
              <span className="block text-[10px] tracking-widest text-[#7a6f5f] uppercase font-semibold">
                Platform Album Kenangan &amp; Pernikahan
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-[#5c5042] hover:text-[#385342] transition"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-sm font-bold shadow-sm transition flex items-center gap-2"
            >
              <span>Mulai Buat Album</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2e9dc] border border-[#dcd0bf] text-xs font-semibold text-[#744530] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#9f495e]" />
          <span>Seni Album Fisik &amp; Digital Bersatu</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3b3126] font-bold tracking-tight leading-tight mb-6">
          Koleksi Template Album Kenangan Menuju Hari Bahagia
        </h1>

        <p className="text-base sm:text-lg text-[#6b5f4f] leading-relaxed max-w-2xl mx-auto mb-10">
          Ubah momen terindah dengan calon pasangan hidupmu menjadi lembaran scrapbook penuh makna. Dilengkapi foto polaroid asli, stiker ilustrasi tematik, dan kit cetak terpisah per lembar kertas.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/engine.html?view=book"
            target="_blank"
            className="px-6 py-3.5 bg-[#f4ece0] hover:bg-[#e8decb] text-[#3a2d20] border-2 border-[#d5c7b3] rounded-xl text-sm font-bold shadow-sm transition flex items-center gap-2"
          >
            <span>📖 Buka Buku Digital 3D (Duplex)</span>
          </Link>
          <Link
            href="#templates"
            className="px-6 py-3.5 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-sm font-bold shadow-md transition flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Jelajahi Koleksi Template</span>
          </Link>
          <Link
            href="/preview/romantic-islamic-keepsake"
            className="px-6 py-3.5 bg-[#fffdf8] hover:bg-[#f6eee2] text-[#4b4034] border border-[#d6caba] rounded-xl text-sm font-semibold transition flex items-center gap-2"
          >
            <span>Coba Live Editor Demo</span>
          </Link>
        </div>
      </section>

      {/* Nilai Unggulan (Features) */}
      <section className="px-6 py-12 bg-[#f4eee2] border-y border-[#e2d7c5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#ded5c4] shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#fee8de] text-[#8c3b24] flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-[#3d3328] mb-2 font-serif">9 Variasi Tata Letak Foto</h2>
            <p className="text-xs text-[#6e6353] leading-relaxed">
              Dari 1 foto hero megah, 2 foto bertumpuk romantis, hingga 3 strip film sinematik yang dapat dipilih secara visual di setiap babak.
            </p>
          </div>

          <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#ded5c4] shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#eee4f7] text-[#53386d] flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-[#3d3328] mb-2 font-serif">Personalisasi Sincere &amp; Sakinah</h2>
            <p className="text-xs text-[#6e6353] leading-relaxed">
              Kustomisasi nama panggilan, kalender milad otomatis, tiket memorabilia rute perjumpaan, dan surat cinta sebelum hari akad.
            </p>
          </div>

          <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[#ded5c4] shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#e8f2ec] text-[#2e533d] flex items-center justify-center mb-4">
              <Printer className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-[#3d3328] mb-2 font-serif">Kit Cetak Terpisah (DIY Friendly)</h2>
            <p className="text-xs text-[#6e6353] leading-relaxed">
              Dipisahkan menjadi Lembar Dasar (kertas karton/linen), Lembar Foto Polaroid, dan Lembar Stiker Gunting dengan skala presisi 1:1.
            </p>
          </div>
        </div>
      </section>

      {/* Katalog Template */}
      <section id="templates" className="px-6 py-20 max-w-6xl mx-auto w-full">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7a3a28] bg-[#fbeee8] px-3 py-1 rounded-full border border-[#eed3c8]">
            Katalog Templates
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3a3026] mt-3">
            Pilih Tema Scrapbook Sesuai Ceritamu
          </h2>
          <p className="text-sm text-[#6f6354] mt-2 max-w-lg mx-auto">
            Gunakan template sebagai titik awal, lalu sesuaikan setiap tulisan, foto, dan tata letak secara leluasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((tpl) => (
            <article
              key={tpl.id}
              className="bg-[#fffdf8] rounded-3xl border border-[#ded5c4] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Kartu */}
                <div className={`h-48 bg-gradient-to-br ${tpl.themeColor} p-6 flex flex-col justify-between relative border-b border-[#e6decb]`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-xs text-[#40362c] shadow-xs">
                      {tpl.category}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#4b6958] text-[#fffdf5]">
                      {tpl.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#342b22] leading-tight">
                      {tpl.title}
                    </h3>
                    <p className="text-xs text-[#5e5346] mt-1 font-medium">{tpl.subtitle}</p>
                  </div>
                </div>

                {/* Deskripsi & Meta */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#6a5e50] leading-relaxed">
                    {tpl.description}
                  </p>
                  <div className="pt-3 border-t border-[#eee7da] flex flex-wrap gap-2 text-[11px] text-[#716554] font-medium">
                    <span className="bg-[#f5ede0] px-2.5 py-1 rounded-lg">✓ {tpl.pagesCount}</span>
                    <span className="bg-[#f5ede0] px-2.5 py-1 rounded-lg">✓ {tpl.layoutsCount}</span>
                  </div>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="p-6 pt-0 flex gap-2.5">
                {tpl.isAvailable ? (
                  <>
                    <Link
                      href={tpl.useHref}
                      className="flex-1 py-2.5 text-center bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition shadow-xs"
                    >
                      Gunakan Template
                    </Link>
                    <Link
                      href={tpl.previewHref}
                      className="px-3.5 py-2.5 text-center bg-[#f6eee2] hover:bg-[#ebe1d3] text-[#524638] rounded-xl text-xs font-semibold transition"
                    >
                      Pratinjau
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="flex-1 py-2.5 text-center bg-[#ece4d6] text-[#8e8170] rounded-xl text-xs font-semibold cursor-not-allowed border border-[#ded5c4] select-none"
                      title="Template ini sedang dalam tahap pengembangan"
                    >
                      Gunakan Template (Segera Hadir)
                    </button>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="px-3.5 py-2.5 text-center bg-[#f3ede3] text-[#a09484] rounded-xl text-xs font-medium cursor-not-allowed border border-[#ded5c4] select-none"
                      title="Pratinjau belum tersedia"
                    >
                      Pratinjau
                    </button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#f0e8d9] border-t border-[#dfd4c1] px-6 py-8 text-center text-xs text-[#736655]">
        <p>© 2026 Scrapbook Studio. Dibuat dengan penuh cinta untuk calon pendamping hidup.</p>
      </footer>
    </div>
  );
}

-- ============================================================================
-- SKEMA SUPABASE: PLATFORM SCRAPBOOK MULTI-TEMPLATE
-- ============================================================================

-- 1. Enable extension UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUM ROLE PENGGUNA
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- 3. TABEL PROFIL PENGGUNA (Tersambung otomatis ke auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'user' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. TABEL TEMPLATE SCRAPBOOK (Dikelola oleh Admin, Digunakan oleh User)
CREATE TABLE IF NOT EXISTS public.templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT DEFAULT 'wedding' NOT NULL, -- 'wedding', 'birthday', 'travel', dll.
  thumbnail_url TEXT,
  preview_badge TEXT DEFAULT 'Rekomendasi',
  default_config JSONB NOT NULL,            -- Konfigurasi awal: pages, layouts, stickers, theme
  is_active BOOLEAN DEFAULT TRUE NOT NULL,
  is_featured BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. TABEL ALBUM PENGGUNA (Setiap proyek scrapbook milik user)
CREATE TABLE IF NOT EXISTS public.albums (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  template_id UUID REFERENCES public.templates(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  person_name TEXT DEFAULT 'Calon Istriku',
  special_date DATE,
  pages_data JSONB NOT NULL,               -- Data interaktif 5 halaman (teks, foto URL, layout)
  status TEXT DEFAULT 'draft' NOT NULL,    -- 'draft', 'published', 'archived'
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. TRIGGER OTOMATIS: BUAT PROFIL SAAT USER MENDAFTAR DI SUPABASE AUTH
-- Menggunakan SECURITY DEFINER, SET search_path = public, dan EXCEPTION handler agar fail-safe
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_name TEXT;
  v_role public.user_role;
BEGIN
  -- Ambil nama lengkap secara aman
  v_name := COALESCE(
    NEW.raw_user_meta_data->>'full_name',
    split_part(NEW.email, '@', 1)
  );

  -- Tentukan role secara aman (default 'user')
  IF NEW.raw_user_meta_data->>'role' = 'admin' THEN
    v_role := 'admin'::public.user_role;
  ELSE
    v_role := 'user'::public.user_role;
  END IF;

  -- Masukkan profil baru
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    v_name,
    v_role
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = COALESCE(EXCLUDED.full_name, public.profiles.full_name);

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log warning agar tidak menggagalkan proses pendaftaran auth.users
    RAISE WARNING 'handle_new_user exception: %', SQLERRM;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. SETUP ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.albums ENABLE ROW LEVEL SECURITY;

-- Kebijakan RLS Profiles
DROP POLICY IF EXISTS "Public profiles are viewable by authenticated users" ON public.profiles;
CREATE POLICY "Public profiles are viewable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Kebijakan RLS Templates
CREATE POLICY "Active templates are viewable by everyone"
  ON public.templates FOR SELECT
  USING (is_active = true OR EXISTS (
    SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

CREATE POLICY "Admins can insert templates"
  ON public.templates FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

CREATE POLICY "Admins can update templates"
  ON public.templates FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

CREATE POLICY "Admins can delete templates"
  ON public.templates FOR DELETE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

-- Kebijakan RLS Albums
CREATE POLICY "Users can view own albums"
  ON public.albums FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR EXISTS (
    SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

CREATE POLICY "Users can insert own albums"
  ON public.albums FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own albums"
  ON public.albums FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own albums"
  ON public.albums FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- 8. STORAGE BUCKET UNTUK FOTO SCRAPBOOK
INSERT INTO storage.buckets (id, name, public)
VALUES ('scrapbook-photos', 'scrapbook-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Kebijakan Storage
CREATE POLICY "Public can view scrapbook photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'scrapbook-photos');

CREATE POLICY "Authenticated users can upload scrapbook photos"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'scrapbook-photos');

CREATE POLICY "Users can update own photos"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'scrapbook-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete own photos"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'scrapbook-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

-- 9. SEED TEMPLATE DEFAULT: "ROMANTIC ISLAMIC KEEPSAKE"
INSERT INTO public.templates (slug, title, description, category, preview_badge, is_active, is_featured, default_config)
VALUES (
  'romantic-islamic-keepsake',
  'Romantic Islamic Keepsake',
  'Scrapbook kenangan ulang tahun dan menyambut pernikahan dengan sentuhan kertas linen vintage, tiket memorabilia perjalanan cinta, dan doa sakinah.',
  'wedding',
  'Template Utama',
  true,
  true,
  '{
    "theme": "vintage-islamic",
    "totalPages": 5,
    "pages": {
      "0": { "titleCutout": "OuR StOrY", "subtitle": "A Little Keepsake for My Future Wife", "captions": ["bidadariku, calon pendamping hidup"] },
      "1": { "themeTitle": "Hari Istimewa", "layout": "single-hero", "captions": ["senyum manis calon istriku", "menghitung hari menuju akad nikah", "selamat ulang tahun, bidadariku"] },
      "2": { "themeTitle": "Perjalanan Cinta", "layout": "duo-overlap", "captions": ["kencan pertama penuh rasa malu", "perjalanan mempertemukan dua keluarga", "melangkah mantap menuju akad nikah"], "ticketRoute": "Dari awal perjumpaan hingga melangkah mantap menuju akad nikah" },
      "3": { "themeTitle": "Surat Calon Istri", "layout": "single-letter", "captions": ["wanita yang kupilih seumur hidup", "pelukan terhangat calon istri", "tatapan tulus menuju masa depan"], "letterText": "Selamat ulang tahun calon istriku tersayang. Terima kasih sudah menerima kekuranganku dan memilihku. Bulan depan, dengan izin Allah, saat ijab kabul terucap di hadapan wali dan saksi, kita mengikat mitsaqan ghalidza." },
      "4": { "themeTitle": "Kado Pernikahan", "layout": "duo-overlap", "captions": ["sepatu & baju set maroon untukmu", "buket bunga untuk calon istriku", "tiup lilin ultah terakhir sebelum nikah"], "giftCardText": "Sepatu & baju set maroon, buket bunga mekar, dan birthday cake spesial untuk calon istri tercantikku." },
      "5": { "themeTitle": "Akad & Doa", "layout": "single-hero", "captions": ["menatap masa depan berdua", "doa terbaik untuk keluarga kecil kita", "bismillah menuju hari akad nikah"] }
    }
  }'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

-- 10. GRANTS HAK AKSES DASAR
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;


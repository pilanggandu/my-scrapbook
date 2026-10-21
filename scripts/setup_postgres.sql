-- =============================================================================
-- Self-Hosted PostgreSQL Schema for Scrapbook Studio
-- Database: PostgreSQL 14+ (Cocok untuk aaPanel / Docker / Bare Metal)
-- =============================================================================

-- Pastikan extension pgcrypto atau uuid-ossp aktif untuk uuid otomatis
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Tabel Users (Native Email + Password Hash)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- 2. Tabel Templates
CREATE TABLE IF NOT EXISTS templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cover_image TEXT,
    is_free BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Template Seed Data Awal
INSERT INTO templates (slug, name, description, cover_image, is_free)
VALUES
    ('romantic-islamic-keepsake', 'Romantic Islamic Keepsake', 'Album cinta islami elegan dengan nuansa pastel sage & rose dust, dilengkapi doa sakinah dan kalender milad.', '/covers/romantic.jpg', TRUE),
    ('vintage-travel-story', 'Vintage Wanderlust & Tale', 'Kliping petualangan vintage bernuansa kertas tua, tiket kencan, dan stiker perangko klasik.', '/covers/vintage.jpg', TRUE),
    ('minimalist-linen-journal', 'Minimalist Linen Journal', 'Jurnal monokrom bersih dengan tekstur kain linen, fokus pada ketajaman potret kenangan.', '/covers/minimalist.jpg', TRUE)
ON CONFLICT (slug) DO NOTHING;

-- 3. Tabel Albums (Penyimpanan Data Album & Scrapbook)
CREATE TABLE IF NOT EXISTS albums (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL DEFAULT 'Album Kenangan Cinta',
    person_name VARCHAR(255) DEFAULT 'Calon Istriku',
    special_date VARCHAR(50) DEFAULT '2026-06-18',
    template_slug VARCHAR(100) DEFAULT 'romantic-islamic-keepsake',
    pages_data JSONB DEFAULT '{}'::jsonb,
    status VARCHAR(50) DEFAULT 'draft',
    is_sample BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE albums ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'draft';

CREATE INDEX IF NOT EXISTS idx_albums_user_id ON albums(user_id);
CREATE INDEX IF NOT EXISTS idx_albums_created_at ON albums(created_at DESC);

-- Trigger untuk auto-update kolom updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS trigger_update_users_updated_at ON users;
CREATE TRIGGER trigger_update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_update_albums_updated_at ON albums;
CREATE TRIGGER trigger_update_albums_updated_at
    BEFORE UPDATE ON albums
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

#!/usr/bin/env bash
set -e

# ==============================================================================
# Script Otomatis Setup PostgreSQL untuk Scrapbook Studio di Server / VPS
# Kompatibel: Ubuntu, Debian, CentOS, AlmaLinux, RockyLinux (Termasuk aaPanel)
# ==============================================================================

echo "=========================================================="
echo "   🚀 Memulai Instalasi & Setup PostgreSQL Scrapbook Studio"
echo "=========================================================="

DB_NAME="scrapbook"
DB_USER="scrapbook_user"
DB_PASS="ScrapbookPass2026!"
DB_PORT="5432"

# 1. Deteksi Distro & Instalasi PostgreSQL jika belum terpasang
if ! command -v psql >/dev/null 2>&1; then
  echo ">>> [1/5] PostgreSQL belum terpasang. Menginstal PostgreSQL..."
  if command -v apt-get >/dev/null 2>&1; then
    sudo apt-get update -y
    sudo apt-get install -y postgresql postgresql-contrib
  elif command -v dnf >/dev/null 2>&1; then
    sudo dnf install -y postgresql-server postgresql-contrib
    sudo postgresql-setup --initdb || true
  elif command -v yum >/dev/null 2>&1; then
    sudo yum install -y postgresql-server postgresql-contrib
    sudo postgresql-setup initdb || true
  else
    echo "❌ Paket manajer tidak didukung secara otomatis. Silakan instal PostgreSQL manual lewat App Store aaPanel."
    exit 1
  fi
else
  echo ">>> [1/5] PostgreSQL sudah terinstal di server."
fi

# 2. Pastikan Service PostgreSQL berjalan
echo ">>> [2/5] Memastikan service PostgreSQL aktif..."
sudo systemctl enable postgresql || true
sudo systemctl restart postgresql || true

# 3. Buat User & Database
echo ">>> [3/5] Mengkonfigurasi User ($DB_USER) & Database ($DB_NAME)..."
sudo -u postgres psql << EOF
DO \$\$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '$DB_USER') THEN
    CREATE USER $DB_USER WITH ENCRYPTED PASSWORD '$DB_PASS';
  ELSE
    ALTER USER $DB_USER WITH ENCRYPTED PASSWORD '$DB_PASS';
  END IF;
END
\$\$;

SELECT 'CREATE DATABASE $DB_NAME OWNER $DB_USER'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$DB_NAME')\gexec

GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
ALTER DATABASE $DB_NAME OWNER TO $DB_USER;
EOF

# 4. Impor Skema Tabel & Data Awal dari setup_postgres.sql
echo ">>> [4/5] Mengimpor skema tabel (users, templates, albums)..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SQL_FILE="$SCRIPT_DIR/setup_postgres.sql"

if [ -f "$SQL_FILE" ]; then
  sudo -u postgres psql -d "$DB_NAME" -f "$SQL_FILE"
  # Berikan hak akses tabel ke DB_USER
  sudo -u postgres psql -d "$DB_NAME" -c "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $DB_USER;"
  sudo -u postgres psql -d "$DB_NAME" -c "GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO $DB_USER;"
  sudo -u postgres psql -d "$DB_NAME" -c "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO $DB_USER;"
  sudo -u postgres psql -d "$DB_NAME" -c "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO $DB_USER;"
  echo "✅ Skema tabel berhasil diimpor."
else
  echo "⚠️ File $SQL_FILE tidak ditemukan, melewati impor skema."
fi

# 5. Konfigurasi .env.local Aplikasi
echo ">>> [5/5] Mengupdate file .env.local aplikasi..."
# Cari lokasi root proyek (bisa di direktori ini atau /www/wwwroot/my-scrapbook)
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$PROJECT_ROOT/frontend/.env.local"

mkdir -p "$PROJECT_ROOT/frontend"

DATABASE_URL="postgresql://$DB_USER:$DB_PASS@127.0.0.1:$DB_PORT/$DB_NAME"
JWT_SECRET="production-scrapbook-jwt-secret-key-2026-secure"

if [ ! -f "$ENV_FILE" ]; then
  cat << EOF > "$ENV_FILE"
NEXT_PUBLIC_API_URL=/api
DATABASE_URL=$DATABASE_URL
JWT_SECRET=$JWT_SECRET
EOF
  echo "✅ File $ENV_FILE baru berhasil dibuat."
else
  # Perbarui DATABASE_URL jika sudah ada
  if grep -q "DATABASE_URL=" "$ENV_FILE"; then
    sed -i "s|DATABASE_URL=.*|DATABASE_URL=$DATABASE_URL|g" "$ENV_FILE"
  else
    echo "DATABASE_URL=$DATABASE_URL" >> "$ENV_FILE"
  fi

  if ! grep -q "JWT_SECRET=" "$ENV_FILE"; then
    echo "JWT_SECRET=$JWT_SECRET" >> "$ENV_FILE"
  fi

  if ! grep -q "NEXT_PUBLIC_API_URL=" "$ENV_FILE"; then
    echo "NEXT_PUBLIC_API_URL=/api" >> "$ENV_FILE"
  fi
  echo "✅ File $ENV_FILE berhasil diperbarui dengan koneksi PostgreSQL."
fi

echo ""
echo "=========================================================="
echo "   🎉 SETUP POSTGRESQL SELESAI DENGAN SUKSES!"
echo "=========================================================="
echo "Detail Koneksi Database:"
echo " - Host:     127.0.0.1"
echo " - Port:     $DB_PORT"
echo " - Database: $DB_NAME"
echo " - User:     $DB_USER"
echo " - Password: $DB_PASS"
echo " - URL:      $DATABASE_URL"
echo "=========================================================="

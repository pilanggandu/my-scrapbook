#!/usr/bin/env bash
set -e

# ==============================================================================
# Script Khusus PostgreSQL yang Sudah Terpasang via aaPanel GUI
# Tidak melakukan instalasi ulang paket, hanya import skema & update .env.local
# ==============================================================================

echo "=== Menghubungkan ke PostgreSQL aaPanel & Mengimpor Skema Scrapbook ==="

DB_NAME="${1:-scrapbook}"
DB_USER="${2:-scrapbook}"
DB_PASS="${3:-w4Ljix8N55JNbjit}"
DB_HOST="${4:-127.0.0.1}"
DB_PORT="${5:-5432}"

# Tambahkan PATH PostgreSQL aaPanel jika ada
export PATH="/www/server/pgsql/bin:$PATH"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SQL_FILE="$SCRIPT_DIR/setup_postgres.sql"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$PROJECT_ROOT/frontend/.env.local"

# 1. Eksekusi skema SQL
echo ">>> [1/2] Mengimpor skema tabel ke database '$DB_NAME'..."
if command -v psql >/dev/null 2>&1; then
  PGPASSWORD="$DB_PASS" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -f "$SQL_FILE" || {
    echo "Gagal koneksi langsung via $DB_USER, mencoba akses via user postgres..."
    sudo -u postgres psql -d "$DB_NAME" -f "$SQL_FILE" || /www/server/pgsql/bin/psql -U postgres -d "$DB_NAME" -f "$SQL_FILE"
  }
else
  echo "⚠️ 'psql' tidak ditemukan di PATH. Jika menggunakan GUI aaPanel, Anda bisa mengimpor file $SQL_FILE lewat phpPgAdmin atau Web CLI."
fi

# 2. Update .env.local
echo ">>> [2/2] Memperbarui file frontend/.env.local..."
mkdir -p "$PROJECT_ROOT/frontend"
DATABASE_URL="postgresql://$DB_USER:$DB_PASS@$DB_HOST:$DB_PORT/$DB_NAME"
JWT_SECRET="production-scrapbook-jwt-secret-key-2026-secure"

if [ ! -f "$ENV_FILE" ]; then
  cat << EOF > "$ENV_FILE"
NEXT_PUBLIC_API_URL=/api
DATABASE_URL=$DATABASE_URL
JWT_SECRET=$JWT_SECRET
EOF
  echo "✅ File frontend/.env.local baru dibuat."
else
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
  echo "✅ File frontend/.env.local berhasil diperbarui."
fi

echo ""
echo "=========================================================="
echo "   🎉 DATABASE POSTGRESQL SIAP DIGUNAKAN!"
echo "=========================================================="
echo " - Connection URL: $DATABASE_URL"
echo "=========================================================="

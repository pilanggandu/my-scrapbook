#!/bin/bash
set -e

echo "=== [1/5] Masuk ke Direktori Project & Sinkronisasi Git ==="
cd /www/wwwroot/my-scrapbook || cd /www/wwwroot/vr.papergode.xyz || exit 1
git fetch --all
git reset --hard origin/main

echo "=== [2/5] Memuat PATH Node.js & Environment ==="
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
if [ -d "$HOME/.nvm" ]; then
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi
for npath in /www/server/nodejs/*/bin; do
  if [ -d "$npath" ]; then
    export PATH="$npath:$PATH"
  fi
done

echo "Node.js Version: $(node -v 2>/dev/null || echo 'Tidak terdeteksi')"
echo "NPM Version:     $(npm -v 2>/dev/null || echo 'Tidak terdeteksi')"

echo "=== [3/5] Menyiapkan .env.local Frontend ==="
mkdir -p frontend
if [ ! -f "frontend/.env.local" ]; then
  echo "Membuat file frontend/.env.local default..."
  cat << 'EOF' > frontend/.env.local
NEXT_PUBLIC_API_URL=/api
DATABASE_URL=postgresql://scrapbook:w4Ljix8N55JNbjit@localhost:5432/scrapbook
JWT_SECRET=production-scrapbook-jwt-secret-key-2026-secure
EOF
else
  echo "File frontend/.env.local sudah ada, mempertahankan konfigurasi..."
  # Tambahkan variabel jika belum ada
  if ! grep -q "DATABASE_URL" frontend/.env.local; then
    echo "DATABASE_URL=postgresql://scrapbook:w4Ljix8N55JNbjit@localhost:5432/scrapbook" >> frontend/.env.local
  fi
  if ! grep -q "JWT_SECRET" frontend/.env.local; then
    echo "JWT_SECRET=production-scrapbook-jwt-secret-key-2026-secure" >> frontend/.env.local
  fi
  if ! grep -q "NEXT_PUBLIC_API_URL" frontend/.env.local; then
    echo "NEXT_PUBLIC_API_URL=/api" >> frontend/.env.local
  fi
fi

echo "=== [4/5] Menginstal Dependencies & Build Next.js ==="
cd frontend
# Pastikan devDependencies terinstal (TypeScript & Tailwind diperlukan saat build)
npm install --include=dev --no-audit --no-fund
NODE_OPTIONS="--max-old-space-size=1536" npm run build
cd ..

echo "=== [5/5] Memulai / Merestart Service Node (Port 3000) ==="
if command -v pm2 >/dev/null 2>&1; then
  echo "Menggunakan PM2 untuk manajemen proses..."
  # Reload atau start jika belum ada di PM2
  pm2 reload ecosystem.config.cjs --update-env || pm2 start ecosystem.config.cjs || pm2 restart all || true
  pm2 save || true
  echo "Status PM2:"
  pm2 list || true
else
  echo "PM2 tidak ditemukan di PATH, menggunakan background runner..."
  if command -v fuser >/dev/null 2>&1; then
    fuser -k 3000/tcp || true
  fi
  cd frontend
  nohup npm run start -- -p 3000 > ../app.log 2>&1 &
  cd ..
fi

echo "=== DEPLOYMENT SELESAI DENGAN SUKSES ==="

#!/bin/bash
set -e

echo "=== [1/5] Memuat Environment Server ==="
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
export PATH=$PATH:/usr/local/bin:/usr/bin:/bin:/root/.nvm/versions/node/$(ls /root/.nvm/versions/node 2>/dev/null | tail -n 1)/bin

# Masuk ke direktori root website (sesuaikan jika berbeda di aaPanel)
SITE_DIR="/www/wwwroot/vr.papergode.xyz"
if [ -d "$SITE_DIR" ]; then
  cd "$SITE_DIR"
fi

echo "Direktori kerja: $(pwd)"

echo "=== [2/5] Menyiapkan .env.local Frontend ==="
if [ ! -f "frontend/.env.local" ]; then
  echo "frontend/.env.local tidak ditemukan, membuat file secara otomatis..."
  cat << 'EOF' > frontend/.env.local
NEXT_PUBLIC_SUPABASE_URL=https://mjiqyirmtsdsqunrvkyr.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_l_zhIGulmkWD55hL6-eYCw_w4SZdQLX
EOF
  echo ".env.local berhasil dibuat."
else
  echo ".env.local sudah ada, melewati pembuatan."
fi

echo "=== [3/5] Menginstal Dependencies Frontend ==="
cd frontend
npm install --no-audit --no-fund

echo "=== [4/5] Membangun Aplikasi Next.js (Production Build) ==="
npm run build
cd ..

echo "=== [5/5] Merestart Proses Aplikasi via PM2 ==="
if command -v pm2 >/dev/null 2>&1; then
  if pm2 describe scrapbook >/dev/null 2>&1; then
    echo "Mereload aplikasi PM2 'scrapbook'..."
    pm2 reload scrapbook || pm2 restart scrapbook
  else
    echo "Memulai aplikasi PM2 'scrapbook' pertama kali..."
    pm2 start ecosystem.config.cjs || pm2 start npm --name "scrapbook" --cwd ./frontend -- start -- -p 3000
  fi
  pm2 save
  echo "Status PM2:"
  pm2 list
else
  echo "PM2 tidak ditemukan, me-restart proses background node di port 3000..."
  fuser -k 3000/tcp || true
  cd frontend
  nohup npm run start -- -p 3000 > ../app.log 2>&1 &
  cd ..
fi

echo "=== DEPLOYMENT SELESAI DENGAN SUKSES ==="

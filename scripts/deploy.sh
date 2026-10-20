#!/bin/bash
set -e

echo "=== [1/5] Masuk ke Direktori Project & Sinkronisasi Git ==="
cd /www/wwwroot/my-scrapbook || exit 1
git fetch --all
git reset --hard origin/main

echo "=== [2/5] Memuat PATH Node.js ==="
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

echo "=== [3/5] Menyiapkan .env.local Frontend ==="
mkdir -p frontend
cat << 'EOF' > frontend/.env.local
NEXT_PUBLIC_SUPABASE_URL=https://mjiqyirmtsdsqunrvkyr.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_l_zhIGulmkWD55hL6-eYCw_w4SZdQLX
EOF

echo "=== [4/5] Menginstal Dependencies & Build Next.js ==="
cd frontend
npm install --no-audit --no-fund
npm run build
cd ..

echo "=== [5/5] Merestart Service Node ==="
if command -v pm2 >/dev/null 2>&1; then
  pm2 restart all || true
fi

echo "=== DEPLOYMENT SELESAI DENGAN SUKSES ==="

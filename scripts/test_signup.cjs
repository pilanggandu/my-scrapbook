const { createClient } = require('../frontend/node_modules/@supabase/supabase-js');
const fs = require('fs');

const envText = fs.readFileSync('frontend/.env.local', 'utf-8');
const env = {};
envText.split('\n').forEach(line => {
  const [k, ...v] = line.trim().split('=');
  if (k && v.length) env[k.trim()] = v.join('=').trim();
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

async function test() {
  const testEmail = `user_${Date.now()}@testscrapbook.com`;
  const testPassword = 'Password123!';
  console.log('--- TEST REGISTRATION SUPABASE ---');
  console.log('Email:', testEmail);

  const res = await supabase.auth.signUp({
    email: testEmail,
    password: testPassword,
    options: {
      data: {
        full_name: 'Akun Uji Coba Scrapbook',
        role: 'user'
      }
    }
  });

  if (res.error) {
    console.error('FAILED:', res.error.message, 'Status:', res.error.status);
    process.exit(1);
  } else {
    console.log('SUCCESS!');
    console.log('User ID:', res.data.user?.id);
    console.log('Session active:', !!res.data.session);
    process.exit(0);
  }
}

test();

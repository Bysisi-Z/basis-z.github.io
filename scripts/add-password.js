#!/usr/bin/env node
// Usage: node scripts/add-password.js <password> [days]
// Env:   CLOUDFLARE_API_TOKEN, CF_ACCOUNT_ID, KV_NAMESPACE_ID

const [,, password, daysArg = '10'] = process.argv;

if (!password) {
  console.error('Usage: node scripts/add-password.js <password> [days]');
  process.exit(1);
}

const { CLOUDFLARE_API_TOKEN, CF_ACCOUNT_ID, KV_NAMESPACE_ID } = process.env;
if (!CLOUDFLARE_API_TOKEN || !CF_ACCOUNT_ID || !KV_NAMESPACE_ID) {
  console.error('Missing env vars: CLOUDFLARE_API_TOKEN, CF_ACCOUNT_ID, KV_NAMESPACE_ID');
  process.exit(1);
}

const days = parseInt(daysArg, 10);
const expires = Date.now() + days * 24 * 60 * 60 * 1000;
const ttlSeconds = Math.floor((expires - Date.now()) / 1000);

const key = `pw:${password}`;
const value = JSON.stringify({ expires });

const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/${encodeURIComponent(key)}?expiration_ttl=${ttlSeconds}`;

const res = await fetch(url, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
    'Content-Type': 'text/plain',
  },
  body: value,
});

const json = await res.json();
if (!json.success) {
  console.error('Failed:', JSON.stringify(json.errors));
  process.exit(1);
}

const expiryDate = new Date(expires).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
console.log(`✓ Password "${password}" added — expires in ${days} days (${expiryDate})`);

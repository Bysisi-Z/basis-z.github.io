#!/usr/bin/env node
// Emergency lockdown: immediately invalidates ALL passwords and sessions.
// Usage: node scripts/lockdown.js

const { CLOUDFLARE_API_TOKEN, CF_ACCOUNT_ID, KV_NAMESPACE_ID } = process.env;
if (!CLOUDFLARE_API_TOKEN || !CF_ACCOUNT_ID || !KV_NAMESPACE_ID) {
  console.error('Missing env vars: CLOUDFLARE_API_TOKEN, CF_ACCOUNT_ID, KV_NAMESPACE_ID');
  process.exit(1);
}

const base = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}`;
const headers = { 'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}` };

const listRes = await fetch(`${base}/keys`, { headers });
const { result: keys, success } = await listRes.json();

if (!success || !keys.length) {
  console.log('No keys found — Journey is already inaccessible.');
  process.exit(0);
}

const keyNames = keys.map(k => k.name);

const deleteRes = await fetch(`${base}/bulk`, {
  method: 'DELETE',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify(keyNames),
});

const result = await deleteRes.json();
if (!result.success) {
  console.error('Failed:', JSON.stringify(result.errors));
  process.exit(1);
}

const pwCount = keyNames.filter(k => k.startsWith('pw:')).length;
const sCount = keyNames.filter(k => k.startsWith('session:')).length;
console.log(`🔒 Lockdown complete — ${pwCount} password(s) and ${sCount} session(s) deleted.`);
console.log('   All active users will be blocked on next page load.');

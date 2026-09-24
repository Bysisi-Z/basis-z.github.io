// GET /api/quotes?symbols=MRK,PFE
// Latest price per symbol for the S² Capital page (Yahoo Finance, fetched server-side).
// Responses are edge-cached for 5 minutes so page visits don't each hit Yahoo.

const MAX_SYMBOLS = 20;
const SYMBOL = /^[A-Z0-9.\-^=]{1,12}$/;

export async function onRequestGet({ request, waitUntil }) {
  const url = new URL(request.url);
  const symbols = [...new Set((url.searchParams.get('symbols') || '')
    .toUpperCase().split(',').map((s) => s.trim()).filter(Boolean))];

  if (!symbols.length || symbols.length > MAX_SYMBOLS || !symbols.every((s) => SYMBOL.test(s))) {
    return json({ error: 'bad symbols' }, 400);
  }

  const cache = caches.default;
  const cacheKey = new Request(`${url.origin}/api/quotes?symbols=${symbols.sort().join(',')}`);
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const quotes = {};
  await Promise.all(symbols.map(async (s) => {
    try {
      const res = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(s)}?range=1d&interval=1m`,
        { headers: { 'User-Agent': 'Mozilla/5.0' } },
      );
      if (!res.ok) return;
      const meta = (await res.json()).chart?.result?.[0]?.meta;
      if (meta?.regularMarketPrice != null) {
        quotes[s] = { price: meta.regularMarketPrice, time: meta.regularMarketTime };
      }
    } catch { /* leave symbol out; the page falls back to the last close */ }
  }));

  const res = json({ quotes }, 200, { 'Cache-Control': 'public, max-age=300' });
  waitUntil(cache.put(cacheKey, res.clone()));
  return res;
}

function json(body, status, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

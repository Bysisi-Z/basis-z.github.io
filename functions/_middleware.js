export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  if (!url.pathname.startsWith('/career')) {
    return next();
  }

  const KV = env.JOURNEY_AUTH;

  if (request.method === 'POST') {
    const formData = await request.formData();
    const password = (formData.get('password') || '').trim();

    if (password) {
      const raw = await KV.get(`pw:${password}`);
      if (raw) {
        const { expires } = JSON.parse(raw);
        if (Date.now() < expires) {
          const token = crypto.randomUUID();
          const ttl = Math.floor((expires - Date.now()) / 1000);
          await KV.put(`session:${token}`, '1', { expirationTtl: ttl });
          return new Response(null, {
            status: 302,
            headers: {
              'Location': url.href,
              'Set-Cookie': `jauth=${token}; Path=/career; HttpOnly; Secure; SameSite=Lax; Max-Age=${ttl}`,
            },
          });
        }
      }
    }

    return new Response(renderForm('Invalid or expired passcode'), {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  const cookie = request.headers.get('Cookie') || '';
  const token = getCookie(cookie, 'jauth');
  if (token && await KV.get(`session:${token}`)) {
    return next();
  }

  return new Response(renderForm(null), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

function getCookie(str, name) {
  const m = str.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m ? m[1] : null;
}

function renderForm(error) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Journey — Si</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Inter:wght@200;300&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FAFAF8;
      font-family: 'Inter', sans-serif;
      font-weight: 200;
    }
    .wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 3rem 2rem;
      width: min(360px, 100%);
    }
    .heading { text-align: center; }
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-style: italic;
      font-size: 2.2rem;
      color: #1A1A1A;
      letter-spacing: 0.02em;
    }
    .sub {
      margin-top: 0.3rem;
      font-size: 0.72rem;
      color: #847B7B;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    form { display: flex; flex-direction: column; gap: 0.9rem; width: 100%; }
    input[type="password"] {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 1px solid #E2DEDB;
      background: #fff;
      font-family: 'Inter', sans-serif;
      font-weight: 200;
      font-size: 0.9rem;
      color: #1A1A1A;
      outline: none;
      letter-spacing: 0.08em;
      transition: border-color 0.2s;
    }
    input[type="password"]:focus { border-color: #c17d9d; }
    button {
      padding: 0.8rem;
      background: #c17d9d;
      color: #fff;
      border: none;
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    button:hover { opacity: 0.82; }
    .error {
      font-size: 0.76rem;
      color: #c17d9d;
      letter-spacing: 0.04em;
      text-align: center;
    }
    .note {
      font-size: 0.78rem;
      color: #847B7B;
      line-height: 1.7;
      text-align: center;
    }
    .divider {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: #E2DEDB;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
    }
    .divider::before, .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #E2DEDB;
    }
    .email-btn {
      display: block;
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #E2DEDB;
      background: transparent;
      color: #847B7B;
      font-family: 'Inter', sans-serif;
      font-weight: 300;
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s;
    }
    .email-btn:hover { border-color: #c17d9d; color: #c17d9d; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="heading">
      <h1>Journey</h1>
      <p class="sub">Private access</p>
    </div>
    <p class="note">This section contains personal information and is accessible only to visitors who have received a passcode from the author.</p>
    <form method="POST" style="width:100%;display:flex;flex-direction:column;gap:0.9rem;">
      <input type="password" name="password" placeholder="Enter passcode" autofocus autocomplete="off">
      ${error ? `<p class="error">${error}</p>` : ''}
      <button type="submit">Enter</button>
    </form>
    <div style="width:100%;display:flex;flex-direction:column;gap:0.9rem;">
      <div class="divider">or</div>
      <a class="email-btn" href="mailto:giselle.z1989@gmail.com">Email me</a>
    </div>
  </div>
</body>
</html>`;
}

# Portfolio Analytics Setup Guide

Your portfolio uses **Cloudflare Web Analytics** — a free, lightweight tracker that records page views and referrers with no cookies and no GDPR cookie banner required.

---

## One-time setup (~2 minutes)

### Step 1 — Create a free Cloudflare account
Go to [cloudflare.com](https://cloudflare.com) and sign up. No credit card needed.

### Step 2 — Add your site to Web Analytics
1. Log in and click **Web Analytics** in the left sidebar.
2. Click **Add a site**.
3. Enter your portfolio's public URL (e.g. `https://gbemicharles.replit.app`).
4. Cloudflare will generate a script tag. Your **token** is the long string inside `"token": "…"`.

### Step 3 — Drop the token into `index.html`
Open `index.html` (in the project root) and find this line:

```html
data-cf-beacon='{"token": "YOUR_CLOUDFLARE_BEACON_TOKEN"}'
```

Replace `YOUR_CLOUDFLARE_BEACON_TOKEN` with the token you copied from Cloudflare.

### Step 4 — Rebuild and redeploy
```bash
npm run build
```
Then click **Publish** in Replit to push the updated build live.

---

## Checking your stats (no code required)

Visit [dash.cloudflare.com](https://dash.cloudflare.com) → **Web Analytics** at any time to see:

| Metric | What it tells you |
|---|---|
| **Page views** | Total visits over any time range |
| **Unique visitors** | Distinct people, not repeat hits |
| **Top pages** | Which sections get the most traffic |
| **Top referrers** | Where visitors come from (Google, LinkedIn, etc.) |
| **Countries** | Geographic breakdown |
| **Browsers / devices** | Desktop vs. mobile split |

---

## What Cloudflare Web Analytics does NOT do
- No cookies are set — visitors see no cookie consent banner.
- No personal data is stored — fully GDPR / CCPA compliant.
- No impact on page load speed — the script is ~1 KB and loads after the page.

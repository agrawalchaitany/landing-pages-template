# Landing Pages Template

This project hosts static landing pages with Cloudflare Pages, and uses a Cloudflare Worker to send form submissions to Google Sheets.

## Setup

1. Create a Google Sheet and add an Apps Script Web App endpoint.
2. Replace `GSHEET_WEBHOOK` in `wrangler.toml` with your Web App URL.
3. Deploy static pages via Cloudflare Pages (connect GitHub repo).
4. Deploy the Worker:
   ```bash
   npm install -g wrangler
   wrangler login
   wrangler publish
   ```
5. Ask infra team to map:
   - `example.com/pages/*` → Cloudflare Pages
   - `example.com/api/*` → Worker

## Add more pages

Duplicate `pages/promo1` into new folders (`promo2`, etc.), edit HTML.

## Analytics

Replace `G-XXXXXXX` with your Google Analytics 4 ID in `index.html`.

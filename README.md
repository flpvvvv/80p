# 80points

Static website for the 80points card game: landing page, online rules (EN/中文), and a downloadable PDF.

## Pages

- `index.html` — landing page with theme + language toggle
- `rules_en.html` — English rules (Mermaid diagrams, table of contents, scroll progress, beginner/full mode)
- `rules.html` — 中文规则（同上功能）

## Features

- Dark/light mode with system preference + persistence (`localStorage`)
- EN/中文 toggle on the landing page (routes to the matching rules page)
- Online rules with responsive layout, sidebar ToC + mobile drawer, and scroll progress indicator
- Mermaid diagrams on rules pages
- PDF download (`public/80P_SCN_V2.pdf`) and contact email link
- Mobile + reduced-motion performance tweaks

## Tech

- Plain HTML + Tailwind CSS (CDN)
- Small shared JS: `public/js/theme.js`
- Mermaid (CDN) on rules pages

## Local development

```bash
python3 -m http.server 3000
```

Open `http://localhost:3000`.

## Deployment

Deploy as static files (Vercel supported via `vercel.json`).

## Vercel Web Analytics

This project is plain HTML, so it loads the Web Analytics tracking script directly.

1. In the Vercel Dashboard, open your Project → **Analytics** → **Enable**.
   - This creates routes under `/_vercel/insights/*` on the next deployment.
2. Deploy (a new deployment is required after enabling Analytics).
3. Verify it’s working:
   - Open the deployed site in the browser.
   - In DevTools → Network, you should see a request to `/_vercel/insights/view`.

Note: when running locally (e.g. `python3 -m http.server`), `/_vercel/insights/*` is not available, so you won’t see analytics requests until the site is deployed on Vercel.

## License

See `LICENSE`.

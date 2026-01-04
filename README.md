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

## License

See `LICENSE`.

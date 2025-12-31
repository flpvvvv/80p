# 80p - Document Download Site

A minimalist, production-ready static HTML5 single-page site for downloading PDF documents.

## Features

- 🎨 **Dark/Light Mode Toggle** - Seamless theme switching with Sun/Moon icons
- 💾 **localStorage Persistence** - Theme preference saved across sessions
- 🌓 **System Preference Detection** - Automatically detects user's OS theme preference
- 📱 **Fully Responsive** - Mobile-first design using TailwindCSS
- ⚡ **Zero Dependencies** - Uses TailwindCSS CDN (no build process required)
- 🚀 **Vercel Ready** - Production-ready for instant deployment

## Live Demo

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/flpvvvv/80p)

## Project Structure

```
├── index.html           # Main HTML file with inline CSS/JS
├── public/
│   └── doc.pdf         # PDF document for download
└── vercel.json         # Vercel deployment configuration
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/flpvvvv/80p.git
cd 80p
```

2. Serve locally (any static server works):
```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx serve

# Using PHP
php -S localhost:8080
```

3. Open http://localhost:8080 in your browser

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Other Platforms

This is a static site and can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any web server (Apache, Nginx, etc.)

## Customization

### Change the PDF

Replace `public/doc.pdf` with your own PDF document.

### Customize Colors

Edit the Tailwind classes in `index.html` to match your brand:
- Primary color: `bg-blue-600` → `bg-[your-color]-600`
- Dark mode: Modify `dark:` prefixed classes

### Update Content

Edit the text in `index.html`:
- Title: `<h1>` tag
- Description: `<p>` tag
- Footer: `<footer>` section

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Tech Stack

- **HTML5** - Semantic markup
- **TailwindCSS** (via CDN) - Utility-first CSS framework
- **Vanilla JavaScript** - No frameworks, lightweight and fast

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

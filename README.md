# 80points - Play for fun

A modern, responsive website for the 80points card game, featuring rule downloads and contact information. This project is a revitalization of the original 80points content, updated with a fresh design and dark mode support.

## Features

- 🎨 **Modern UI/UX** - Glassmorphism design with 3D tilt interactions and smooth transitions.
- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection and persistence.
- 🎭 **Dynamic Background** - Animated floating card suits and ambient gradient effects.
- 📄 **Download Section** - Easy access to the 80points game rules (PDF).
- 📱 **Mobile First** - Fully responsive design that works great on all devices.
- ⚡ **Lightweight** - Single-file HTML structure using Tailwind CSS via CDN.

## Project Structure

```
├── index.html           # Main entry point
├── public/              # Static assets
│   ├── 80logo_blue.svg  # Project logo
│   └── 80P_SCN_V2.pdf   # Game rules PDF
└── vercel.json          # Deployment configuration
```

## Local Development

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd 80p
   ```

2. Serve locally using any static file server. For example:

   **Using Python:**

   ```bash
   python3 -m http.server 3000
   ```

   **Using Node.js (npx):**

   ```bash
   npx serve
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Deployment

This project is ready to be deployed on Vercel or any other static hosting provider.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/flpvvvv/80p)

## Credits

- Original content by FLP.
- Icons by [Heroicons](https://heroicons.com/).
- Fonts: Aclonica, Audiowide, Averia Libre via Google Fonts.

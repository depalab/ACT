# ACT — AI Assisted Coding and Tooling

Marketing site for ACT, an AI-native software studio that builds developer tooling and integrates AI into engineering workflows.

## Structure

```
.
├── index.html       # Single-page site
├── styles.css       # All styles (no preprocessor)
├── script.js        # Small vanilla JS (counters, scroll reveal)
└── assets/
    └── act-logo.png # Brand logo
```

## Local preview

No build step. Just open `index.html` in a browser, or serve the folder:

```bash
# Python 3
python3 -m http.server 8000

# Or Node
npx serve .
```

Then visit http://localhost:8000

## Tech

- Pure HTML, CSS, JavaScript — no framework, no build
- Google Fonts: Fraunces, JetBrains Mono, Inter Tight
- IntersectionObserver for scroll reveals (with `unobserve` cleanup)
- `prefers-reduced-motion` respected

## Deployment

Drop the folder onto any static host:

- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Netlify** — drag-and-drop the folder, or connect this repo
- **Vercel** — `vercel` from the project root
- **Cloudflare Pages** — connect this repo

## Editing copy

All visible text lives in `index.html`. Search for the section you want (`<!-- HERO -->`, `<!-- SERVICES -->`, etc.) and edit in place.

## License

© ACT. All rights reserved.

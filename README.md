# ACT — AI Assisted Coding and Tooling

Marketing site for **ACT**, an educational program of the **Center for Equitable AI and Machine Learning Systems (CEAMLS)** at **Morgan State University**.

ACT teaches AI-assisted coding and tooling skills to students, schools, and universities through three program tracks:

1. **Monthly workshops** — delivered through student organizations, K–12 schools, universities, and the Learn & Lunch series hosted by CEAMLS.
2. **NSEA — National Symposium on Effective & Ethical AI** — the annual flagship convening hosted by CEAMLS at Morgan State. [equitableaisymposium.com](https://www.equitableaisymposium.com/)
3. **Educational events & conferences** — panels, demos, hackathons, and conference programming across the academic and civic community.

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

No build step required. Open `index.html` in any browser, or serve the folder:

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
- IntersectionObserver for scroll reveals (with `unobserve` cleanup — no memory leaks)
- `prefers-reduced-motion` respected throughout

## Deployment

Drop the folder onto any static host:

- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Netlify** — drag-and-drop the folder, or connect this repo
- **Vercel** — `vercel` from the project root
- **Cloudflare Pages** — connect this repo

## Editing copy

All visible text lives in `index.html`. Search for the section you want (`<!-- HERO -->`, `<!-- PROGRAMS -->`, `<!-- NSEA SPOTLIGHT -->`, etc.) and edit in place.

## Related links

- [CEAMLS at Morgan State](https://www.morgan.edu/ceamls)
- [NSEA Symposium](https://www.equitableaisymposium.com/)
- [Morgan State University](https://www.morgan.edu/)

## License

© ACT — A program of CEAMLS, Morgan State University. All rights reserved.

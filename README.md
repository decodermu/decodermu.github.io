# Junxi Mu — Personal Website

Personal website for **Junxi Mu (穆俊羲)**, deployed on GitHub Pages. A single corner for academic work, side-project software, and home-cooked recipes.

- 🌐 **5 pages:** About (home) · Experience · Research · Software · Cooking
- 🌐 Bilingual: English (default) / 中文 — toggle in the navbar, remembered across pages
- 🌗 **Light/dark theme** — auto day/night (06:00–17:59 light, else dark), manual toggle, defaults to light. Preference saved in `localStorage` and applied before first paint (no flash).
- 🎨 Tech / minimalist theme, consistent across all pages
- ⚡ Pure static: HTML + CSS + vanilla JS, no build step, no frameworks
- 📱 Responsive (desktop / tablet / mobile)

---

## 📁 Project structure

```
junximu.github.io/
├── index.html          # About — simplified landing page + portal to other pages
├── experience.html     # Education + research timeline + technical skills
├── research.html       # Citation stats + research interests + publications
├── software.html       # Vibe-coded side projects (rendered from i18n.js)
├── cooking.html        # Original recipes (rendered from i18n.js)
├── style.css           # shared tech-style dark theme
├── i18n.js             # EN / ZH dictionaries + publications + projects + recipes data
├── main.js             # language switch, active nav, reveal, counters, page renderers
├── assets/favicon.svg
├── CNAME               # custom domain (optional — edit or delete)
└── README.md
```

Every page shares the same `<header class="nav">` and `<footer>`, loads `i18n.js` then `main.js`, and sets `data-page="..."` on `<body>` so `main.js` knows which dynamic content to render.

## 🚀 Deploy to GitHub Pages

### 1. Create the repository
- Go to https://github.com/new
- **Repository name MUST be** `<your-username>.github.io` (e.g. `junximu.github.io`). This exact name is what makes a *user* site live at `https://<your-username>.github.io/`.

### 2. Push the files
```bash
cd /Users/mujunxi/ZCodeProject/junximu.github.io
git init
git add .
git commit -m "Initial multi-page website"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/junximu.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Repo **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**
- Wait ~1–2 min. Live at `https://<YOUR_GITHUB_USERNAME>.github.io/`

### 4. (Optional) Custom domain
The included `CNAME` contains `junximu.me`. To use it: buy the domain, point DNS (A record to GitHub Pages IPs, or CNAME `www` → `<user>.github.io`), edit `CNAME` to your domain, and set the same domain in **Settings → Pages → Custom domain**, then tick **Enforce HTTPS**. Not using a custom domain? Just **delete the `CNAME` file**.

## 🔧 Preview locally

```bash
cd /Users/mujunxi/ZCodeProject/junximu.github.io
python3 -m http.server 8000
# open http://127.0.0.1:8000/  (visit /experience.html, /research.html, /software.html, /cooking.html)
```

## ✏️ Editing content

All visible text lives in **`i18n.js`**, keyed under `en` and `zh` blocks. The HTML files only reference keys via `data-i18n="..."`.

| Want to change… | Where |
|---|---|
| Page text / translations | `i18n.js` — `en` and `zh` blocks (keep both in sync) |
| Email / Scholar link | each `*.html` (the `href`s in nav/hero/footer) |
| Colors / theme | `style.css` → `:root` CSS variables |
| **Add a publication** | `i18n.js` → add an entry to `_pubs` in **both** `en` and `zh` |
| **Add a software project** | `i18n.js` → add an entry to `_projects` in **both** `en` and `zh` |
| **Add a recipe** | `i18n.js` → add an entry to `_recipes` in **both** `en` and `zh` |

### Example: add a software project
In **both** the `en` and `zh` blocks of `i18n.js`, add to the `_projects` array:
```js
_projects: [
  {
    icon: "🧪",                 // emoji shown in the icon box
    title: "My Cool Tool",
    desc: "One-line description of what it does.",
    stack: ["Python", "FastAPI"],  // shown as chips
    url: "https://github.com/you/my-cool-tool"  // omit, or set "" for "Coming soon"
  }
],
```

### Example: add a recipe
In **both** the `en` and `zh` blocks of `i18n.js`, add to the `_recipes` array:
```js
_recipes: [
  {
    emoji: "🍜",               // shown if no img
    img: "",                   // optional image URL; leave "" to use emoji
    title: "15-min Soy Noodles",
    desc: "Pantry-friendly weeknight noodles.",
    time: 15,                  // minutes (optional)
    serves: 2,                 // servings (optional)
    url: ""                    // link to full recipe, or "" for "Coming soon"
  }
],
```

When `_projects` / `_recipes` are empty, the page shows a friendly "coming soon" empty state automatically.

## 🌍 Language behavior
- Default landing language is **English** (set in `main.js` → `detectLang()`).
- Click **中文** in the top bar to switch; the choice is saved in `localStorage` and applies site-wide.
- Append `#zh` to any URL to force Chinese for that visit.

## 🌗 Theme behavior (light/dark)
The site ships with **both light and dark themes**; **light is the default**.

- **Auto day/night:** with no manual preference set, the site picks by local time — **06:00–17:59 → light**, **18:00–05:59 → dark**. A 5-minute interval re-checks the rule, so it also switches if you keep a tab open across dusk/dawn.
- **Manual toggle:** the sun/moon button in the navbar overrides the auto rule. Your choice is saved in `localStorage` (`junximu-theme`) and applied on every page.
- **No flash:** an inline script in each page's `<head>` applies the theme *before* first paint, so there's never a dark→light flicker on load.
- **Fallback:** if the browser blocks `localStorage`/`Date`, the site falls back to **light**.

Where to tweak:
- Colors → `style.css`: the `:root {…}` block is **light**, `:root[data-theme="dark"] {…}` is **dark**.
- Day/night boundary (currently 06:00/18:00) → `isNight()` in `main.js` and the matching inline script in each `*.html` `<head>`.

---

© Junxi Mu. Academic content sourced from CV (2025-05) and Google Scholar profile.

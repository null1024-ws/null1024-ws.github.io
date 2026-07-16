# Personal Academic Homepage

A minimal, editorial academic homepage listing affiliation, education,
publications, and experience, plus an interactive travel map page.

## Design

Built in the **kami** design language: a warm parchment canvas (`#f5f4ed`),
a single ink-blue accent (`#1B365D`), and a serif-led hierarchy.

- Headings: **Cormorant Garamond**
- Body: **EB Garamond**
- Fonts loaded from Google Fonts; palette and type tokens live in `css/style.css` `:root`.

## Structure

- `index.html` — main page (intro, education, publications, experience).
- `travel/index.html` — interactive travel map (amCharts).
- `css/style.css` — shared styles and design tokens.
- `css/travel.css`, `js/travel.js` — travel map styles and city data.

## How to edit

- Update your intro, education, publications, and experience in `index.html`.
- Add cities/countries in `js/travel.js` (the map updates automatically after deploy).
- Adjust colors or fonts via the CSS variables in `css/style.css` `:root`.

## Local preview

Serve the folder over HTTP (relative links to `travel/` resolve correctly):

```bash
py -m http.server 8000    # or: python -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Deployed via GitHub Pages using `.github/workflows/static.yml`.

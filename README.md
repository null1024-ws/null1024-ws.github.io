# Homepage

Personal site built with [Zola](https://www.getzola.org/) and the [Serene](https://github.com/isunjn/serene) theme.

## Structure

- `zola.toml` — site title, bio, nav buttons, and social links
- `content/_index.md` — homepage intro
- `content/pubs/` — publications collection
- `content/travel/` — travel map page
- `content/miscellaneous/` — other notes and projects
- `content/posts/` — blog posts
- `static/js/travel.js` — cities and visited countries for the map

## How to edit

- Change name, bio, nav, or social icons in `zola.toml`
- Add or edit papers in `content/pubs/pubs.toml`
- Add cities or countries in `static/js/travel.js`
- Write posts as Markdown files under `content/posts/`

## Local preview

Install [Zola 0.23.4+](https://www.getzola.org/documentation/getting-started/installation/), then:

```bash
zola serve
```

Open the URL Zola prints (usually http://127.0.0.1:1111).

## Deploy

GitHub Actions builds with Zola and deploys `public/` via `.github/workflows/static.yml`.

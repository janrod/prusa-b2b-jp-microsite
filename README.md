# Prusa B2B microsite (Japan)

Public landing page for Prusa's business offer in Japan: https://b2b.prusa3d.jp

Static HTML, CSS and JS with no build step. Open `index.html` directly or serve the folder from any static host.

- One page, Japanese by default, English with the JA/EN switch or `?lang=en`. Each text appears twice, as `lang="ja"` and `lang="en"`.
- The contact button address is `contactEmail` in `site.js` (japan@prusa3d.com). If it is emptied, the page shows a red draft note under the button.
- `og:image`, `og:url` and the canonical link in `index.html` are absolute URLs on b2b.prusa3d.jp. Change them if the domain changes.
- Photo sources are listed in `img/SOURCES.md`. The spool data chart is an illustration and is labelled as one.
- Japanese text uses the visitor's system gothic font (Hiragino, Yu Gothic, Noto Sans JP). Only Barlow Condensed is self-hosted (OFL, licence in `fonts/`).

## Deploying

Every push to `main` publishes the site to GitHub Pages (`.github/workflows/pages.yml`). The custom domain is set in Settings → Pages, with the DNS record `b2b.prusa3d.jp` CNAME → `janrod.github.io`.

This repo is split out of the internal `prusa-b2b-jp` project, which holds the print materials and is not public. Keep prices and internal data out of this repo.

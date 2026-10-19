# «Из Калтыр» website

This workspace contains a dependency-free static website. It can be opened directly from `index.html` or previewed in VS Code with a local static server extension. No package installation or build step is required.

## Project files

- `index.html` — page shell and metadata.
- `styles.css` — responsive styling, accessibility states, and reduced-motion rules.
- `app.js` — navigation, translated page content, filters, FAQ, and demo-form validation.
- `data.js` — the shared local records and automatically calculated statistics.
- `favicon.svg`, `robots.txt`, and `sitemap.xml` — branding and crawl configuration placeholders.
- `.gitattributes` — existing Git text normalization settings.

## Languages and demo data

Kyrgyz is the default language. The language choice is stored in browser `localStorage` and is retained while navigating. Russian and English translations are in the same translation dictionary in `app.js`.

The site is deliberately marked as a demo. The records in `data.js` are empty until verified content is supplied, so the impact totals remain zero instead of presenting invented figures. Totals count non-deleted published scholars, non-deleted visible sponsors/partners, non-deleted active volunteers, and non-deleted published events. Names, sponsors, team profiles, deadlines, contact details, and program rules must be supplied and approved by the organization before publication.

Forms validate their fields in the browser, but do not send or save submissions. Their status explicitly explains this. Do not treat this static form validation as spam protection or as a replacement for server-side validation.

## Backend and administration

No backend credentials or server are configured. The admin route is therefore informational only; it does not provide a pretend client-side login or public editing controls. Real administration requires server-enforced authentication and authorization, protected storage, validation, and private submission handling. Connect a backend (for example, Supabase) before enabling those features.

## Before deployment

Replace the reserved example host in `sitemap.xml` with the organization's verified production domain, and update the page metadata and social links with approved information. The hero image is an illustrative third-party photo, not an official organization image; replace it with a properly licensed, approved photo before launch. The existing empty `из-калтыр/изкалтыр/` directory is not used by the site.

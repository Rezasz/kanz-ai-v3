# Kanz.ai Website

Marketing and consulting site for **Kanz.ai**, a Dubai-based AI & digital
transformation consultancy (702 Opal Tower, Business Bay).

- **Live:** https://www.kanz.ai
- **Repo:** https://github.com/Rezasz/kanz-ai-v3
- **Hosting:** Vercel (auto-deploys from `main`)

## Stack

- **React 18 + TypeScript** on **Vite 5**
- **React Router v6** (38 client-side routes — see below)
- **Tailwind CSS** with CSS-variable design tokens + shadcn-style HSL vars
- **Framer Motion** for entrance animations (legacy detail pages only)
- **Chart.js / react-chartjs-2** for radar charts in the assessments
- **jsPDF + html2canvas** for PDF export of assessment reports
- **Lucide React** for all icons
- **OmniInbox** for contact-form intake (no other backend)
- **40 long-form articles** served as static HTML from `public/articles/`
- **AI Readiness Framework v3.0.0** consumed from `src/data/aiReadinessSpec.json` (canonical upstream)

Pure SPA — no server runtime. Vercel serves static files from `dist/`.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint
```

## Design system

The site uses an **ink + technical** palette derived from the brand PDF.
Dark paper, warm-cream ink, and a saturated amber-orange accent.

| Token | Value | Purpose |
|---|---|---|
| `--paper` | `#0A0A09` | Default surface (near-black, slightly warm) |
| `--paper-2` | `#15140F` | Section / card surface inset from paper |
| `--ink` | `#F5F1EA` | Default foreground (warm cream) |
| `--ink-2` | `#E5DFD3` | Slightly dimmer ink for body copy |
| `--muted` | `#9B968E` | Captions, eyebrow labels, mono codes |
| `--accent` | `#F2A024` | Brand amber-orange — italic words, dots, bullets, dark CTA |
| `--paper-light` | `#F5F1EA` | Inverse cream surface (UAE Pride, Capabilities, Featured paper) |
| `--ink-on-light` | `#0E0E0C` | Dark text used on `--paper-light` |
| `--display` | `Space Grotesk` | Display + italic accent words (faux-italic) |
| `--sans` | `Inter` | Body copy |
| `--mono` | `JetBrains Mono` | Eyebrows, codes (`01`, `I/02`, `F/03`, `CASE/04`) |

⚠️ **CSS variable name collision to know about** — shadcn's tokens
(`--primary`, `--accent`, `--muted`, etc.) share names with what the brand
system wants to use directly. The shadcn variants are renamed to
`--accent-hsl` / `--muted-hsl` and wrapped in `hsl(...)` inside
`tailwind.config.js`. **Don't rename them back** — see HANDOFF.md →
"CSS variable collision (the bug that hid the accent)".

The design primitives — `Container`, `Eyebrow`, `DisplayHead`, `GoldItalic`,
`ArrowBtn`, `ArrowLink`, `KanzMark`, `PageHero`, `PageCTA`, `MarqueeStrip`,
`HeroBackdrop`, `StatBlock`, `MaturityRadar`, `Section`, `FeatureGrid`,
`BulletList`, `MonoList` — all live in `src/components/design/index.tsx`.

The 27 detail pages (services/\*, industries/\*, insights/\*, framework/\*)
keep their original markup; `src/legacy-overrides.css` translates the
"light mode" Tailwind utility classes (`bg-white`, `text-gray-600`,
`shadow-md`, `from-pwc-orange`, …) into the ink palette without per-file
rewrites.

## Project structure

```
src/
  App.tsx                     38 routes + ScrollToTop on route change
  main.tsx
  index.css                   Design tokens + base typography
  legacy-overrides.css        Tailwind utility → ink palette remap for detail pages
  components/
    design/index.tsx          All shared design primitives + tokens
    ContactForm.tsx           Reusable form, calls submitToOmniInbox
    layout/Navbar.tsx         Overlay nav, scroll blur, active-route dot
    layout/Footer.tsx         5-column footer w/ gold dots + italic tagline
    ui/button.tsx             shadcn-style Button (cva variants)
  data/
    aiReadinessSpec.json      Upstream questionnaire-app-spec.json (438 KB, 208 Q)
    aiReadinessActions.json   YAML-derived action library (152 actions)
  lib/
    aiReadinessFramework.ts   Typed wrapper over the JSON spec + scoring helpers
    omniinbox.ts              submitToOmniInbox helper (env-configured)
    utils.ts                  cn() — clsx + tailwind-merge
  pages/
    Home.tsx                  Hero w/ radar backdrop, framework radar, services list,
                              capabilities thesis (cream), industries grid,
                              UAE Pride (cream), insights cards, assessments CTA
    About.tsx, Services.tsx, Framework.tsx,
    Industries.tsx, Insights.tsx, Contact.tsx,
    AssessYourOrganization.tsx
    AIReadiness.tsx            5 intro screens → 52 dimensions × (C/T/R) →
                               per-pillar summary → dashboard (radar, RAU, actions)
    DataMaturityAssessment.tsx
    AIRiskAssessment.tsx       7-domain × 0-4 scoring + radar (gold-tinted)
    framework/                 5 framework pages
    industries/                6 industry pages
    services/                  6 service pages
    insights/                  10 legacy long-form articles (routes still wired)
  utils/pdfExport.ts           html2canvas → jsPDF, A4 multi-page
public/
  favicon.svg                  Kanz mark (ink + gold)
  uae-pride.png                Legacy hero image (no longer used on Home)
  robots.txt                   Allows all + explicit /articles/
  sitemap.xml                  80 URLs (site + 40 articles + 10 legacy insights)
  articles/                    40 static long-form HTML articles (01-…html → 40-…html)
vercel.json                    SPA rewrite — every path → /index.html
.env.example                   OmniInbox env var template
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services index (6 cards) |
| `/services/{ai-strategy,digital-transformation,ai-implementation,ai-governance,data-analytics,ai-risk-management}` | Service detail pages |
| `/framework` | Framework index |
| `/framework/{maturity-model,ai-readiness,ai-strategy,consulting-process,maturity-assessment}` | Framework detail pages |
| `/industries` | Industries index |
| `/industries/{energy,banking-finance,manufacturing,healthcare,public-sector,retail}` | Industry detail pages |
| `/insights` | Insights index — lists all 50 (40 new articles + 10 legacy) |
| `/articles/<NN-slug>.html` | 40 long-form articles served as static HTML from `public/articles/` |
| `/insights/{...10 legacy slugs...}` | Original 10 React-route articles (kept for inbound links) |
| `/assess` | Assessments hub (4 cards) |
| `/ai-readiness` | AI Readiness Assessment — Framework v3.0.0, 9 pillars / 52 dimensions |
| `/data-maturity` | Data Maturity Assessment |
| `/ai-risk-assessment` | AI Risk Self-Assessment (7 domains, 35 + 3 questions) |
| `/contact` | Contact form (OmniInbox) |

`App.tsx` mounts a `<ScrollToTop>` watcher inside `<Router>` that resets
scroll on every route change (and scrolls to `#anchor` if the URL has a hash).

## Environment variables

The OmniInbox shared values are baked into `src/lib/omniinbox.ts` as
fallbacks, so the form works without any env-var setup. Override them via
**Vercel → Project Settings → Environment Variables** in production, or in
`.env.local` for local dev (gitignored).

```env
# Base URL only — the helper appends /public/contact-form.
VITE_OMNIINBOX_ENDPOINT=https://omniinbox.kanz.ai
VITE_OMNIINBOX_TOKEN=omni-shared-...
VITE_OMNIINBOX_SLUG=kanz-ai
```

See `.env.example` for the template. When the OmniInbox operator rotates
the token, **update both** the Vercel env var and the bundled fallback in
`src/lib/omniinbox.ts` — see HANDOFF.md → "Token rotation" for the full
checklist and the failure mode if you only update one.

## Deployment

Vercel auto-deploys on push to `main` (build command `npm run build`,
output `dist/`). The SPA rewrite in `vercel.json` ensures direct URLs like
`/insights` or `/services/ai-risk-management` serve `index.html` so React
Router can handle them.

```bash
# Verify the deploy:
curl -I https://www.kanz.ai/                          # 200
curl -I https://www.kanz.ai/insights                  # 200 (SPA fallback)
curl -I https://www.kanz.ai/services/ai-risk-management  # 200
```

## Contact form (OmniInbox)

The contact form follows the [OmniInbox external developer
guide](https://github.com/Rezasz/omniinbox/blob/main/docs/external-developer-guide.md)
Vite + React reference pattern:

- `src/lib/omniinbox.ts` — typed `submitToOmniInbox()` helper
- `src/components/ContactForm.tsx` — reusable form with honeypot + time-trap
- `src/pages/Contact.tsx` — thin page that renders `<ContactForm />`

To add another form (e.g. demo request, partnership), copy
`ContactForm.tsx`, adjust fields, and pass different metadata:

```ts
await submitToOmniInbox({
  email, message, name, phone, company,
  subject: 'Demo request',
  metadata: { form: 'book_demo', preferred_time: '...' },
});
```

End-to-end test (no React needed):

```bash
curl -i -X POST 'https://omniinbox.kanz.ai/public/contact-form' \
  -H 'Authorization: Bearer omni-shared-IqT-sVE1QXYpYVZDGQNHp8UxcUggL5tY' \
  -H 'Content-Type: application/json' \
  -d '{"company_slug":"kanz-ai","email":"qa@example.com","message":"sanity check"}'
# Expect: 201 Created, {"success":true,"message_id":N,...}
```

## Notes

- **Token in browser bundle** — Option A from the OmniInbox guide. Public-but-unguessable shared token. To move it server-side, switch to Option B (would require a backend, e.g. a Vercel serverless function).
- **Honeypot + 2.5s time-trap** — submissions in under 2.5 seconds silently show success without POSTing (see `ContactForm.tsx`). This catches bots but can fool fast manual testers — wait at least 3 seconds when verifying.
- **TS strict warnings** — `DataMaturityAssessment.tsx` and a few of the legacy detail pages still have pre-existing `noImplicitAny` and unused-import warnings. Build passes. The rewritten `AIReadiness.tsx` and the new design-system/article/Insights code are clean.
- **Bundle size** — single ~2.1 MB JS chunk (gzip ~510 KB). The AI Readiness JSON spec adds ~440 KB raw; not yet code-split. Lazy-loading `/ai-readiness` via `React.lazy()` would drop the rest of the site back below 1.7 MB.
- **AI Readiness data refresh** — replace `src/data/aiReadinessSpec.json` with the latest `questionnaire-app-spec.json` from `Kanz-ai-Org/Ai-Maturity-Framwork` to refresh. The wrapper in `src/lib/aiReadinessFramework.ts` adapts automatically.

## License

Proprietary — Kanz.ai.

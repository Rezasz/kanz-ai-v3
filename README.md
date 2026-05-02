# Kanz.ai Website

Marketing and consulting site for **Kanz.ai**, a Dubai-based AI & digital
transformation consultancy (702 Opal Tower, Business Bay).

- **Live:** https://www.kanz.ai
- **Repo:** https://github.com/Rezasz/kanz-ai-v3
- **Hosting:** Vercel (auto-deploys from `main`)

## Stack

- **React 18 + TypeScript** on **Vite 5**
- **React Router v6** (38 client-side routes — see below)
- **Tailwind CSS** with shadcn-style HSL CSS vars
- **Framer Motion** for entrance animations
- **Chart.js / react-chartjs-2** for radar charts in the assessments
- **jsPDF + html2canvas** for PDF export of assessment reports
- **Lucide React** for all icons
- **OmniInbox** for contact-form intake (no other backend)

Pure SPA — no server runtime. Vercel serves static files from `dist/`.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint
```

## Project structure

```
src/
  App.tsx                     38 routes wired here
  main.tsx
  index.css                   Tailwind + shadcn HSL vars
  components/
    ContactForm.tsx           Reusable form, calls submitToOmniInbox
    layout/Navbar.tsx         Fixed top nav, mobile hamburger, "Assess" CTA
    layout/Footer.tsx         4-column footer
    ui/button.tsx             shadcn-style Button (cva variants)
  lib/
    omniinbox.ts              submitToOmniInbox helper (env-configured)
    utils.ts                  cn() — clsx + tailwind-merge
  pages/
    Home.tsx, About.tsx, Services.tsx, Framework.tsx,
    Industries.tsx, Insights.tsx, Contact.tsx,
    AssessYourOrganization.tsx
    AIReadiness.tsx, DataMaturityAssessment.tsx,
    AIRiskAssessment.tsx       7-domain × 0-4 scoring + radar
    framework/   5 framework pages
    industries/  6 industry pages
    services/    6 service pages (AIRiskManagement is newest)
    insights/    10 long-form articles
  utils/pdfExport.ts           html2canvas → jsPDF, A4 multi-page
public/
  uae-pride.png                Hero image for Home UAE Pride section
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
| `/insights` | Insights index |
| `/insights/{...10 articles...}` | Insight detail pages |
| `/assess` | Assessments hub (4 cards) |
| `/ai-readiness` | AI Readiness Assessment |
| `/data-maturity` | Data Maturity Assessment |
| `/ai-risk-assessment` | AI Risk Self-Assessment (7 domains, 35 + 3 questions) |
| `/contact` | Contact form (OmniInbox) |

## Brand

- `pwc-orange` `#d04a02` — primary CTA, headings, icons
- `pwc-gray` `#2d2d2d` — body text, nav
- Hero gradient — `from-pwc-orange to-[#b33f02]`

(Names date from a PwC-style template the project was scaffolded from. Not affiliated with PwC.)

## Environment variables

Optional — only needed if you want to override the OmniInbox shared values
baked into `src/lib/omniinbox.ts` (e.g. to rotate the token without a code
push). Set in **Vercel → Project Settings → Environment Variables** for
production, or in `.env.local` for local dev (gitignored).

```env
VITE_OMNIINBOX_ENDPOINT=https://omniinbox.kanz.ai/public/contact-form
VITE_OMNIINBOX_TOKEN=omni-shared-...
VITE_OMNIINBOX_SLUG=kanz-ai
```

See `.env.example` for the template.

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
  -H 'Authorization: Bearer omni-shared-vxaLteemYkqFMYaAgCwHXgHraNiweFKY' \
  -H 'Content-Type: application/json' \
  -d '{"company_slug":"kanz-ai","email":"qa@example.com","message":"sanity check"}'
# Expect: 201 Created, {"success":true,"message_id":N,...}
```

## Notes

- **Token in browser bundle** — Option A from the OmniInbox guide. Public-but-unguessable shared token. To move it server-side, switch to Option B (would require a backend, e.g. a Vercel serverless function).
- **Honeypot + 2.5s time-trap** — submissions in under 2.5 seconds silently show success without POSTing (see `ContactForm.tsx`). This catches bots but can fool fast manual testers — wait at least 3 seconds when verifying.
- **TS strict warnings** — assessment pages (`AIReadiness.tsx`, `DataMaturityAssessment.tsx`) and several others have pre-existing `noImplicitAny` and unused-import warnings. Build still passes; the new code (`AIRiskAssessment.tsx`, `omniinbox.ts`, `ContactForm.tsx`) is clean.
- **Bundle size** — single ~1.6 MB JS chunk. Not yet code-split. Consider `manualChunks` if it becomes a perf concern.

## License

Proprietary — Kanz.ai.

# Handoff Notes

Snapshot of the project state, recent work, and operational know-how that
isn't obvious from reading the code.

## Recent work (last few sessions, newest first)

| Commit | Change |
|---|---|
| `8fddac7` | Rotate OmniInbox token (old one returned 401) and tolerate base-URL or full-path `VITE_OMNIINBOX_ENDPOINT` |
| `3ac6de8` | Add README and HANDOFF docs |
| `a1b0a74` | Refactor contact form to OmniInbox reference pattern (helper + reusable component + env vars) |
| `cd87b99` | Add `vercel.json` SPA rewrite — fixes 404 on direct URLs like `/insights` |
| `e779523` | Add AI Risk Self-Assessment (`/ai-risk-assessment`, 35 + 3 questions, banded scoring, radar) |
| `0391f51` | Align contact form with updated OmniInbox guide (`metadata.form`, UTM tracking, default subject) |
| `249c78f` | Add AI Risk Management service page (`/services/ai-risk-management`) |
| `5b14c0a` | Replace HubSpot contact form with OmniInbox API |
| `4ff1ad4` | Add UAE Pride section to Home page |

## OmniInbox operations

**Endpoint base:** `https://omniinbox.kanz.ai` (helper appends `/public/contact-form`)
**Slug:** `kanz-ai`
**Token:** `omni-shared-IqT-sVE1QXYpYVZDGQNHp8UxcUggL5tY` (also baked into bundle as fallback)
**Spec:** https://github.com/Rezasz/omniinbox/blob/main/docs/external-developer-guide.md

### Verify a real browser submission landed

SSH to the OmniInbox VPS, then:

```bash
docker compose exec -T db psql -U postgres -d inbox_ai \
  -c "SELECT id, from_email, subject, status, created_at, metadata->>'form' AS form
      FROM messages
      WHERE company_slug = 'kanz-ai'
      ORDER BY id DESC LIMIT 20;"
```

Expect new rows within ~1 second of submission, `status` flips to
`analyzed` after the AI classifies them.

### Token rotation

The token lives in two places and **both must be updated together**, otherwise a
missing or stale Vercel env var silently falls back to a dead bundled token and
every submission returns 401 (this is exactly what happened before commit
`8fddac7`).

1. In Vercel → kanz-ai-v3 → Settings → Environment Variables, set:
   - `VITE_OMNIINBOX_TOKEN=<new-token>`
2. Edit `src/lib/omniinbox.ts` and replace the fallback string in the `TOKEN`
   constant with `<new-token>`. Commit and push.
3. Pushing to `main` triggers a Vercel auto-deploy. Verify with the curl test
   in the README, then submit a real form and watch the OmniInbox DB
   (see "Verify a real browser submission landed" above).

To remove the bundled fallback entirely (env-var-only mode), drop the `||`
defaults in `src/lib/omniinbox.ts`. Costs you graceful degradation when the env
var is missing; gains you "no stale token in the bundle" — pick the trade-off
that fits how you operate.

### Adding a new form (e.g. /book-demo, /partnership)

The reference pattern is set up for this. Copy `src/components/ContactForm.tsx`,
swap the field set, and pass different metadata to `submitToOmniInbox`:

```ts
await submitToOmniInbox({
  email, message, name, phone, company,
  company_size: data.company_size,    // first-class top-level field
  country: data.country,              // first-class top-level field
  subject: 'Demo request',            // shown in OmniInbox brief
  metadata: {
    form: 'book_demo',                // SQL filter: WHERE metadata->>'form' = 'book_demo'
    preferred_time: data.preferred_time,
  },
});
```

For partnership / select-list forms, mirror the selected enum into
`subject` so it shows in the daily brief — see the OmniInbox guide's
`/partnerships` example.

### What we deliberately don't send

Per the OmniInbox guide's "What NOT to send" section, our payload omits:

- `metadata.referrer` — server overwrites from `Referer` header
- `metadata.user_agent` — server overwrites from `User-Agent` header
- `metadata.source_ip` — server overwrites from `X-Forwarded-For`
- Anything starting with `_omni_` — reserved prefix

The doc's reference helper still injects `referrer`/`user_agent`; we
follow the more recent explicit warning instead. No functional difference
either way (server overrides), just cleaner payload.

### Spam protection

- **Honeypot:** hidden `website_field` input. If filled, silent success.
- **Time-trap:** submissions under 2.5 seconds from page load show silent
  success without POSTing. Bots fire instantly; humans usually take
  longer. **This will fool a fast manual tester** — wait 3+ seconds.

If you see a spike in spam, the next step (per the guide) is Cloudflare
Turnstile or moving to Option B (server-side proxy). Neither is set up.

## AI Risk Self-Assessment scoring (`/ai-risk-assessment`)

If you ever want to tweak questions, scoring, or recommendations, the
math is centralized in `src/pages/AIRiskAssessment.tsx`:

- **35 risk questions**, 5 per domain, 7 domains, scored **0–4**:
  - 0 = N/A (we don't use AI here)
  - 1 = Low (controlled)
  - 2 = Moderate
  - 3 = High
  - 4 = Critical
- **Domain max:** 20. Status bands per domain:
  - 0–5 Controlled, 6–10 Emerging, 11–15 High, 16–20 Critical
- **Total max:** 140. Overall bands:
  - 0–30 Low, 31–65 Moderate, 66–100 High, 101–140 Critical
- **3 causal questions** (who / when / intent) generate the diagnosis
  paragraph in `buildCausalDiagnosis()`.
- **Top 3 priority** = highest-scoring domains, sorted desc.
- **Recommended priority** = fixed (governance, data protection, human
  oversight) per the spec.

The 7-domain radar uses Chart.js; scale is fixed 0-20 per domain.
Recommended actions per band live in `overallBandConfig`.

## Vercel deployment

- **Auto-deploy:** any push to `main` triggers a build.
- **SPA rewrite:** `vercel.json` rewrites `/(.*)` → `/index.html`. Static
  assets in `dist/assets/*` and `dist/uae-pride.png` are served directly
  because filesystem matches take precedence.
- **Headers:** none customized — defaults are fine.
- **Build hash visible at:** `curl -s https://www.kanz.ai/contact | grep -oE 'index-[A-Za-z0-9_-]+\.js'` — compare against local `ls dist/assets/` to confirm the deploy is current.

## Known issues / future work

- **TS strict warnings (~170)** — pre-existing in `AIReadiness.tsx`,
  `DataMaturityAssessment.tsx`, plus `React unused` and missing `@/` path
  alias in `tsconfig`. New code is clean. Cleanup is mechanical but not
  urgent — build passes regardless.
- **Bundle size** — single ~1.6 MB JS chunk (gzip ~430 KB). Code-splitting
  via `manualChunks` (or `React.lazy()` per-route) would help LCP. Not done.
- **Footer brand inconsistency** — `Footer.tsx` uses `text-blue-400` for
  the brain icon, while everything else uses `pwc-orange`. Should swap to
  `text-pwc-orange` for consistency. Cosmetic.
- **Favicon** — `index.html` references `/vite.svg`, which isn't in
  `public/`. Browsers fall back to the default. Add a real favicon.
- **`package.json` name** — still `"modir-website"`, not `"kanz-ai-v3"`.
  Cosmetic; rename in a future cleanup.
- **Navbar `assessments` array** — declared in `Navbar.tsx` but never
  rendered. If you want a dropdown of all four assessments in the nav,
  wire that array into the JSX. Currently only the "Assess Your
  Organization" CTA links to the hub.
- **Spec inconsistency** — OmniInbox guide uses `metadata.form` in three
  places and `metadata.form_type` in one. We use `form` for SQL
  consistency. If the spec changes, update the constant in
  `ContactForm.tsx`.
- **No tests** — no test runner configured. If/when you add one, Vitest
  fits naturally with Vite.

## Useful commands

```bash
# Dev
npm install
npm run dev
npm run build
npm run lint

# Verify deploy is current
curl -s https://www.kanz.ai/contact | grep -oE 'index-[A-Za-z0-9_-]+\.js'
ls dist/assets/ | grep -E '^index-.*\.js$'      # should match the above

# Test OmniInbox endpoint directly
curl -i -X POST 'https://omniinbox.kanz.ai/public/contact-form' \
  -H 'Authorization: Bearer omni-shared-IqT-sVE1QXYpYVZDGQNHp8UxcUggL5tY' \
  -H 'Content-Type: application/json' \
  -d '{"company_slug":"kanz-ai","email":"qa@example.com","message":"test"}'

# Check CORS for the live origin
curl -sI -X OPTIONS 'https://omniinbox.kanz.ai/public/contact-form' \
  -H 'Origin: https://www.kanz.ai' \
  -H 'Access-Control-Request-Method: POST' \
  -H 'Access-Control-Request-Headers: authorization,content-type' | grep -iE 'HTTP|access-control'

# Check what routes are wired (sanity)
grep -E 'Route path' src/App.tsx
```

## Where things live (cheat-sheet)

| Concern | File |
|---|---|
| All routes | `src/App.tsx` |
| Top nav | `src/components/layout/Navbar.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Reusable Button | `src/components/ui/button.tsx` |
| Contact form (UI) | `src/components/ContactForm.tsx` |
| OmniInbox helper | `src/lib/omniinbox.ts` |
| AI Risk Assessment logic | `src/pages/AIRiskAssessment.tsx` |
| AI Risk service page | `src/pages/services/AIRiskManagement.tsx` |
| Assessments hub | `src/pages/AssessYourOrganization.tsx` |
| Services hub | `src/pages/Services.tsx` |
| PDF export utility | `src/utils/pdfExport.ts` |
| Brand colors / Tailwind config | `tailwind.config.js` |
| SPA rewrite for Vercel | `vercel.json` |
| Env var template | `.env.example` |

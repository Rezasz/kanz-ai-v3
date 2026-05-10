# Handoff Notes

Snapshot of the project state, recent work, and operational know-how that
isn't obvious from reading the code.

## Recent work (last few sessions, newest first)

| Commit | Change |
|---|---|
| `7f4f76f` | Center radar on the visible hero (square translate-centered element instead of section-filling SVG) |
| `64dd16f` | Hero backdrop: proper rotating radar sweep (90° trailing wedge + bright leading beam) |
| `ce7c75a` | **Bug fix:** `--accent` and `--muted` CSS vars were silently shadowed by shadcn HSL triplets — renamed shadcn ones to `--accent-hsl` / `--muted-hsl`. This single fix unlocked all gold accents that looked broken before. |
| `6f595c8` | Push accent everywhere in the brand PDF — sans-italic for gold words, brighter `#F2A024`, gold mono codes (`01`, `I/02`, `F/03`, `CASE/04`), detail-page glow + H2 left bar |
| `8093f98` | Brand-PDF calibration: warmer accent and cream inverse sections (UAE Pride, Capabilities, Featured paper, active framework button) |
| `d48619c` | `ScrollToTop` on route change (and hash-target jump if URL has `#anchor`) |
| `51d7c49` | Redesign — ink palette + Space Grotesk/Inter/JetBrains Mono, design primitives in `src/components/design/`, all top-level pages rewritten, legacy-overrides bridge for the 27 detail pages |
| `61098e1` | Document token rotation flow and env-var fallback |
| `8fddac7` | Rotate OmniInbox token (old one returned 401) and tolerate base-URL or full-path `VITE_OMNIINBOX_ENDPOINT` |

## CSS variable collision (the bug that hid the accent)

Before `ce7c75a`, `src/index.css` defined the brand color tokens in `:root`
**and then** the shadcn HSL tokens in the same `:root` block — and shadcn
uses the same names (`--accent`, `--muted`, `--primary`, …) with raw HSL
triplets as values, e.g. `--accent: 35 90% 55%`.

CSS cascade: same selector, same property name, **later wins**. So every
`color: var(--accent)` in the codebase resolved to the string
`35 90% 55%`, which is not a valid CSS color, the browser ignored the
declaration, and the text fell back to the inherited color. Same for
`var(--muted)`.

Symptom was severe but invisible: the hero "AI" rendered cream instead of
gold, the radar polygon went translucent-white, the eyebrow dash + dot
went white-ish, every gold mono code (`01`, `I/02`, …) was muted.

Fix: rename the shadcn duplicates to `--accent-hsl` and `--muted-hsl` in
`src/index.css`, and update `tailwind.config.js` so the shadcn-shaped
utilities (`bg-accent`, `bg-muted`, `text-muted-foreground`) wrap them in
`hsl(...)`. **If you add new shadcn-style tokens, do not let them
clash with the brand var names again.**

The same trap waits for `--primary`, `--secondary`, etc. — those don't
currently collide because the brand system doesn't use those names, but
keep an eye if you ever introduce one.

## Design system

The site uses a single palette: **ink** (dark) with a **cream inverse**
surface for signature sections. See README.md → "Design system" for the
full token table. Quick mental model:

- Default surface: `--paper` (`#0A0A09`), default ink `--ink` (`#F5F1EA`)
- Inset / card surface: `--paper-2`
- Inverse cream surface (used 4 places — see below): `--paper-light` +
  `--ink-on-light`
- Accent: `--accent` `#F2A024` (saturated amber-orange)

### Where the cream inverse surface is used

These four sections render on cream paper with dark ink for visual rhythm
(the brand PDF alternates dark/cream slabs):

1. UAE Pride section on Home (`Home.tsx` → `UAEPride`)
2. Capabilities thesis on Home (`Home.tsx` → `Thesis`)
3. Featured whitepaper card — on Home (`InsightsSection`, the first card)
   and on `/insights` (the big featured card at the top)
4. Active framework option in the maturity radar picker (`Home.tsx` →
   `MaturityVisual`, when `i === active`)

If you add more "highlight" sections, the cream palette is the right tool.

### GoldItalic / italic words

Gold italic words (`<GoldItalic>AI</GoldItalic>`, `comprehensive`,
`globally`, `whitepapers`, etc.) render in the **display font Space
Grotesk** at faux-italic (the browser slants it). Don't switch
`GoldItalic` to a serif font — that breaks the brand voice. The italic
word should sit cleanly inside the surrounding headline.

### Detail pages (services/\*, industries/\*, insights/\*, framework/\*)

These 27 pages keep their original markup; visual upgrade is done via
`src/legacy-overrides.css`:

- Tailwind utilities like `bg-white`, `bg-gray-50`, `text-gray-{600..900}`
  remap to the ink palette
- Original `bg-gradient-to-r from-pwc-orange to-[#b33f02]` hero gets
  replaced with the dark paper + corner gold glow + bottom gold rule
- `pt-16` (assumed-fixed-height nav offset) is bumped to 80px so the hero
  clears the new overlay nav on first paint
- `bg-orange-100` haloes lock to `var(--accent)` for the SVG icons inside

If you ever rewrite a detail page in the new system, drop the `pt-16` and
use `PageHero` from `src/components/design/` instead — that way
`legacy-overrides.css` will progressively shrink in scope as detail pages
are migrated.

### Hero radar

`HeroBackdrop` (`src/components/design/index.tsx`) is a square element
centered via `translate(-50%,-50%)` inside the hero section, sized at
`min(110vmin, 1100px)`. Inside is a 1200×1200 viewBox SVG with:

- concentric range rings + cross-hairs (fixed)
- a 90° trailing wedge with linear gradient (solid leading edge → fading
  trail) — the "phosphor afterglow"
- a bright leading beam line
- rotation around the SVG center `(600, 600)` at 50°/sec, time-based
  (`requestAnimationFrame` with `performance.now()`)

Animation is set up with `setAttribute('transform', 'rotate(angle 600
600)')` on the inner `<g>` — **don't** use CSS `transform-origin` in
SVG coords, that interferes in some browsers.

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

The Chart.js radar fill/stroke colors are hardcoded RGBA strings tuned to
the brand accent: `rgba(237, 156, 49, 0.24)` fill, `rgba(237, 156, 49, 1)`
stroke. The chart options also override `pointLabels.color`,
`grid.color`, and `ticks.color` to read on the dark surface. If the
accent ever shifts, update these in `AIReadiness.tsx`,
`DataMaturityAssessment.tsx`, and `AIRiskAssessment.tsx`.

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
  alias in `tsconfig`. New design-system + page-rewrite code is clean.
  Cleanup is mechanical but not urgent — build passes regardless.
- **Bundle size** — single ~1.6 MB JS chunk (gzip ~442 KB). Code-splitting
  via `manualChunks` (or `React.lazy()` per-route) would help LCP. Not done.
- **27 detail pages still on legacy markup** — they look right thanks to
  `legacy-overrides.css`, but each one is still its own Framer-Motion +
  Tailwind page from the original PwC-template scaffold. Migrating them
  to `PageHero` + the design primitives would let us delete the legacy CSS.
- **`package.json` name** — still `"modir-website"`, not `"kanz-ai-v3"`.
  Cosmetic; rename in a future cleanup.
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
| All routes + ScrollToTop | `src/App.tsx` |
| Design tokens (CSS vars) | `src/index.css` |
| Tailwind design tokens | `tailwind.config.js` |
| Legacy Tailwind → ink palette remap | `src/legacy-overrides.css` |
| Design primitives (Container, Eyebrow, DisplayHead, ArrowBtn, PageHero, PageCTA, HeroBackdrop, MaturityRadar, etc.) | `src/components/design/index.tsx` |
| Top nav | `src/components/layout/Navbar.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Reusable Button (shadcn) | `src/components/ui/button.tsx` |
| Contact form (UI) | `src/components/ContactForm.tsx` |
| OmniInbox helper | `src/lib/omniinbox.ts` |
| Home (all 8 sections) | `src/pages/Home.tsx` |
| AI Risk Assessment logic | `src/pages/AIRiskAssessment.tsx` |
| AI Risk service page | `src/pages/services/AIRiskManagement.tsx` |
| Assessments hub | `src/pages/AssessYourOrganization.tsx` |
| Services hub | `src/pages/Services.tsx` |
| PDF export utility | `src/utils/pdfExport.ts` |
| Favicon (Kanz mark) | `public/favicon.svg` |
| SPA rewrite for Vercel | `vercel.json` |
| Env var template | `.env.example` |

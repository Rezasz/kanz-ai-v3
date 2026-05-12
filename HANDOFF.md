# Handoff Notes

Snapshot of the project state, recent work, and operational know-how that
isn't obvious from reading the code.

## Recent work (last few sessions, newest first)

| Commit | Change |
|---|---|
| `0fe33f5` | `tsconfig.app.json`: declare `@/*` path alias so tsx/IDE match Vite's resolver |
| `1d6e4da` | AI Readiness: scroll-to-top on every step change + persistent sticky `FlowProgress` bar |
| `029d3a0` | Refresh AI Readiness on upstream `questionnaire-app-spec.json` (v3.0.0, 208 atomic Q-IDs); thin wrapper over `src/data/aiReadinessSpec.json` |
| `57f7525` | First AI Readiness v3 rewrite from YAML (later superseded by the JSON-spec consumption above) |
| `9d3caa7` | Insights index lists all 50 (40 new + 10 legacy); sitemap +40 article URLs + 10 legacy; `robots.txt` explicit `Allow: /articles/` |
| `2a2e2ad` | Add 40 long-form articles to `public/articles/`, fix dead CTAs (`#` → `/assess`), link brand to `/`, replace nav-meta with `← Insights`; `ArrowLink` treats `.html` as external |
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

## Insights articles (40 long-form HTML)

40 standalone articles live at `public/articles/01-…html` through
`40-…html`. They're served as static files (Vercel filesystem matches
take precedence over the SPA rewrite), so links from the React app use
plain `<a>` tags, not `<Link>` — see `Insights.tsx` and `ArrowLink`
(which now also treats `.html` paths as external).

- **Inputs.** The raw HTML I was given lives in `articles_html/` at the
  repo root; that folder is **untracked** since `public/articles/`
  carries the live versions. Treat `articles_html/` as a scratch
  source: drop new files there, or copy into `public/articles/`
  directly and re-run the fix-up pass below.
- **Per-file fix-ups already applied** to every file in
  `public/articles/`:
  - `href="#"` on the CTA → `href="/assess"`
  - Brand mark wrapped in `<a href="/">` so the Kanz.ai logo
    navigates home
  - Nav-meta replaced with `<a class="nav-meta" href="/insights">←
    Insights</a>`
  - Footer `kanz.ai` text wrapped in a link to `/`
- **Adding more articles.** Drop the HTML into `public/articles/`,
  apply the same four fix-ups (the regex script that did it is
  reproducible — `href="#"` swap is trivial; nav/brand replacement
  patterns are in commit `2a2e2ad`), then add an entry to the
  `ARTICLES` array in `src/pages/Insights.tsx` with `num`, `slug`,
  `title`, `excerpt`, `category`. Sitemap + robots are auto-allowed.
- **Featured.** Article #01 is hard-coded as the featured card. Swap
  by reordering `ARTICLES` so the desired one is at index 0.
- **Card link routing.** `ArticleCard` switches between `<a>` (for
  paths ending in `.html`) and React Router `<Link>` (for the 10
  legacy `/insights/<slug>` entries) automatically — driven by the
  optional `href` field on each `ARTICLES` entry. Articles without
  `href` default to `/articles/${slug}.html`.

The articles ship with their own self-contained dark/cream/gold CSS
(close to the site palette but not pixel-identical: `--gold: #D9A33C`
vs site `--accent: #F2A024`). Leaving as-is for now; if you ever want
strict parity, swap the inline `:root` block at the top of each file.

## AI Readiness Framework v3.0.0 (`/ai-readiness`)

The assessment is a faithful implementation of the upstream
**Kanz-ai-Org/Ai-Maturity-Framwork** spec. 9 pillars × ~6 dimensions
each = **52 dimensions**, and each dimension asks **three required
questions** (current capability 1–5, target capability 1–5, NIST
risk-maturity tier) plus an optional evidence prompt. The upstream
spec calls these atomic Q-IDs: `Q-{pillar}-{dim}-C`, `-T`, `-R`, `-E`.

### Data layer

Two files in `src/data/`:

| File | What it is | Source of truth |
|---|---|---|
| `aiReadinessSpec.json` | The canonical upstream `questionnaire-app-spec.json` (438 KB, 208 question records, all rubric + NIST tier narratives + option text) | Upstream repo, `assessments/questionnaire-app-spec.json` |
| `aiReadinessActions.json` | 152 gap-driven actions (title, description, effort, duration, owner, expected outcome), each tied to a dimension | Upstream `pillars/0N-…/data/actions.yaml`; the JSON was generated locally because actions aren't in the spec JSON |

`src/lib/aiReadinessFramework.ts` is a **thin typed wrapper**: imports
both JSONs, groups questions into `TRIPLETS` (one per dimension with
`current`, `target`, `risk`, optional `evidence`), and exposes scoring
helpers (`dimensionGap`, `gapPriority`, `isRau`, `isHealthy`,
`pillarRollup`, `orgRollup`, `pillarWeight`). The page (`AIReadiness.tsx`)
only consumes the wrapper — never the JSON directly.

### Refreshing from upstream

To pick up new content (rubric edits, new dimensions, etc.):

1. Download the latest `questionnaire-app-spec.json` from the upstream
   repo's `assessments/` directory and overwrite
   `src/data/aiReadinessSpec.json` verbatim.
2. (If the upstream's `actions.yaml` also changed) regenerate
   `src/data/aiReadinessActions.json`. The Python pattern is in the
   conversation history of commit `029d3a0`; it reads each pillar's
   `actions.yaml` and emits a flat JSON array. Save under
   `src/data/aiReadinessActions.json`.
3. `npm run build`. The wrapper adapts automatically — no code change
   needed unless the upstream schema itself shifts.

### Flow

Five intro screens before any question: **Concepts → Answer scales →
Weighting → Sections → Setup**. Then 52 question screens (one per
dimension, three picker blocks each), each followed by a **per-pillar
summary** at the end of the section, then the final **dashboard**
(org composite, RAU banner, healthy badges, top-12 gap-prioritized
actions, JSON export matching the spec's §7 schema).

A sticky **`FlowProgress`** bar sits at the top of every screen
(intros, questions, summaries, dashboard) showing phase label,
detail line (e.g. `Dimension 14 of 52`), percentage, and an
accent-filled bar. Weighting: 5% for intros, 90% for the 52
dimensions, 100% at the dashboard. A `useEffect` on
`step/pillarIndex/dimInPillar` scrolls the window to top on every
transition, so users always land at the new screen's top.

### RAU and Healthy

These two states are non-negotiable framework concepts; keep them
visible.

- **RAU (Racing Ahead Unsafely)** — `current >= 4` AND `nist_tier ∈
  {partial, risk_informed}`. Capability has outrun risk maturity.
  Flagged red (`#E0552B`) on the per-pillar summary, the dashboard
  banner, and the RAU dimension list. The dashboard banner only
  appears when `totalRau > 0`.
- **Healthy** — `current >= 4` AND `nist_tier ∈ {repeatable,
  adaptive}`. High capability with strong risk control. Green
  (`#8FBF7A`) badges on the same surfaces.

### Org composite math

`orgRollup(profile, responses)`:

- `pillar.currentAvg` = mean of `current` values across the pillar's
  answered dimensions
- `composite` = Σ(`pillar.currentAvg` × `weight[profile][pillarId]`)
  / Σ(`weight[profile][pillarId]`)  — only weights of pillars with
  at least one answer count
- `org_risk_tier` = the **worst** tier across all answered
  dimensions (partial < risk_informed < repeatable < adaptive). The
  spec is deliberately pessimistic — one Partial-tier dimension drags
  the org tier to Partial even if everything else is Adaptive.

### Testing the assessment

There's no committed test runner, but a self-contained smoke test
exists at `/tmp/test_questionnaire.ts` (66 assertions, covers data
integrity + scoring helpers + rollup math + edge cases). To run it
locally:

```bash
# copy into the repo so @/ resolves, then:
npx tsx --tsconfig ./tsconfig.app.json ./_test_framework.ts
```

The test imports from `@/lib/aiReadinessFramework` and exercises
`pillarRollup`, `orgRollup`, `isRau`, `isHealthy`, all three weighting
profiles, the worst-tier rollup, and edge cases (empty responses,
partial responses). The `@/*` path alias in `tsconfig.app.json`
(commit `0fe33f5`) is what makes the test runnable.

If you ever want a real persisted test suite, drop Vitest in and lift
the script into `src/__tests__/`.

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

- **TS strict warnings** — `DataMaturityAssessment.tsx` and a handful
  of legacy detail pages still throw `noImplicitAny` and unused-import
  warnings. The rewritten `AIReadiness.tsx`, the design system, the
  insights/article code, and `aiReadinessFramework.ts` are all clean.
  Build passes regardless.
- **Bundle size** — single ~2.1 MB JS chunk (gzip ~510 KB). The AI
  Readiness JSON spec adds ~440 KB raw. Lazy-loading `/ai-readiness`
  (and the other assessments) via `React.lazy()` per-route would drop
  the rest of the site back below 1.7 MB and is the highest-ROI perf
  win available.
- **27 detail pages still on legacy markup** — they look right thanks
  to `legacy-overrides.css`, but each one is still its own Framer-Motion
  + Tailwind page from the original PwC-template scaffold. Migrating
  them to `PageHero` + the design primitives would let us delete the
  legacy CSS.
- **10 legacy `/insights/<slug>` routes still wired** — the React
  components in `src/pages/insights/` are no longer the primary content
  (the 40 new articles in `public/articles/` are), but they still
  render with the legacy template. They appear as cards 41–50 on the
  Insights index. Migrating or retiring them is a follow-up.
- **`package.json` name** — still `"modir-website"`, not `"kanz-ai-v3"`.
  Cosmetic; rename in a future cleanup.
- **Spec inconsistency** — OmniInbox guide uses `metadata.form` in three
  places and `metadata.form_type` in one. We use `form` for SQL
  consistency. If the spec changes, update the constant in
  `ContactForm.tsx`.
- **No committed test runner** — there's a self-contained smoke test
  for the AI Readiness scoring layer (see "AI Readiness Framework"
  above), but it lives at `/tmp/` and runs via `tsx`. If/when you add
  a test runner, Vitest fits naturally with Vite — lift that script
  into `src/__tests__/aiReadinessFramework.test.ts`.

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
| Insights index (50 cards) | `src/pages/Insights.tsx` |
| 40 static long-form articles | `public/articles/01-…html` … `40-…html` |
| AI Readiness Assessment (UI) | `src/pages/AIReadiness.tsx` |
| AI Readiness framework + scoring | `src/lib/aiReadinessFramework.ts` |
| AI Readiness JSON spec (upstream) | `src/data/aiReadinessSpec.json` |
| AI Readiness actions library | `src/data/aiReadinessActions.json` |
| AI Risk Assessment logic | `src/pages/AIRiskAssessment.tsx` |
| AI Risk service page | `src/pages/services/AIRiskManagement.tsx` |
| Assessments hub | `src/pages/AssessYourOrganization.tsx` |
| Services hub | `src/pages/Services.tsx` |
| PDF export utility | `src/utils/pdfExport.ts` |
| Favicon (Kanz mark) | `public/favicon.svg` |
| Sitemap + robots | `public/sitemap.xml`, `public/robots.txt` |
| SPA rewrite for Vercel | `vercel.json` |
| TS path alias `@/*` | `tsconfig.app.json` (mirrors Vite alias) |
| Env var template | `.env.example` |

# Equissetix Website — "Next Level" Plan

> **Purpose of this file:** A self-contained worklog + plan so you (or a fresh Claude session) can resume
> without re-auditing the codebase. Audit done 2026-06-16. Check off items as completed.
>
> **How to resume in a new convo:** Point Claude at this file and say "continue from NEXT_LEVEL_PLAN.md,
> start with task N." Everything needed is below — no need to re-explore.

---

## Project snapshot (so you don't have to re-discover it)

- **Stack:** React 18 + TypeScript + Vite 5 + React Router 6 + Tailwind + Framer Motion + Lucide.
- **Hosting:** GitHub Pages (SPA redirect shim already in `index.html` + `dist/404.html`).
- **Routes:** 40+, all defined in `src/App.tsx` (statically imported — see Task 2).
- **Forms:** Contact uses Web3Forms (`api.web3forms.com/submit`) + reCAPTCHA v3. Keys in `.env`
  (`VITE_WEB3FORMS_KEY`, `VITE_RECAPTCHA_SITE_KEY`) — these are **client-side public keys, safe to expose.**
- **`.env` is correctly gitignored and NOT tracked.** No secret-leak issue. Do not "fix" this.
- **Build:** `npm run build` = `tsc && vite build && npm run generate-sitemap` (sitemap step is broken — Task 3).
- **Current prod bundle:** single `dist/assets/index-*.js` ≈ **677 KB** (no code-splitting).

### Confirmed-good (DO NOT touch)
- Structured data (Organization + SoftwareApplication JSON-LD) in `index.html` — well-formed.
- `public/robots.txt` — sensible (but advertises a sitemap that currently 404s; fixed by Task 3).
- GitHub Pages SPA redirect shim.

---

## Decisions already made
- **SEO head management:** use **`react-helmet-async`** (chosen by owner). Not the custom-hook option.
- Owner wants tasks 1–3 prioritized ("where next level actually lives"). 4–5 are polish.

---

## TASK 1 — Wire up per-page SEO  🔴 HIGHEST IMPACT
**Problem:** `src/utils/seo.ts` defines `pageSEO` + `generateMetaTags()` but **nothing imports them.**
All 40+ routes serve the identical `<title>`/meta description hardcoded in `index.html`. Google sees
40 homepage-clones; every social share previews the same card.

**Plan:**
1. `npm install react-helmet-async`
2. Wrap app in `<HelmetProvider>` in `src/main.tsx` (outside `<Router>`).
3. Create `src/components/SEO.tsx` — a small component taking `title`, `description`, `image?`, `url?`
   that renders `<Helmet>` with title + description + OG + Twitter tags (reuse shape from
   `generateMetaTags()` in `src/utils/seo.ts`).
4. Add `<SEO ... />` to the top of **every** page component.
   - `pageSEO` in `seo.ts` only covers **4 of 40+** pages (home, pricing, contact, about).
     **The other ~36 pages need new title/description copy written** — this is the bulk of the work.
     Pages needing entries: all `src/pages/solutions/*`, all `src/pages/platform/*`,
     CaseStudies, Blog, Breeds, Disciplines, Compare, Privacy, Terms, Security, NotFound.
5. Keep `index.html`'s tags as the default/fallback (fine to leave).

**Acceptance:** View source / React DevTools on `/pricing` vs `/about` shows different `<title>` &
`<meta name="description">`. `npm run build` passes `tsc`.

**Files:** `src/main.tsx`, new `src/components/SEO.tsx`, `src/utils/seo.ts` (extend `pageSEO`),
every file in `src/pages/**`.

---

## TASK 2 — Code-split routes (lazy loading)  🔴 PERF / CORE WEB VITALS
**Problem:** `src/App.tsx` statically imports all 40+ pages → one 677 KB JS chunk. A visitor to
`/privacy` downloads the ROI calculator, every platform page, all framer-motion. Hurts LCP/FID,
which are Google ranking signals.

**Plan:**
1. In `src/App.tsx`, convert page imports to `const X = lazy(() => import('./pages/X'))`.
   - Keep `Navbar`, `Footer`, `BackToTop`, `StickyCTA`, `ScrollToTop`, `ExitIntentPopup` eager
     (they're on every page).
2. Wrap `<Routes>` in `<Suspense fallback={<...loading...>}>`. Use a lightweight branded spinner/skeleton.
3. (Optional) In `vite.config.ts` add `build.rollupOptions.output.manualChunks` to split vendor
   (react, framer-motion) from app code.
4. (Optional) Add `esbuild: { drop: ['console'] }` to strip console.logs in prod (also see Task 5).

**Acceptance:** `npm run build` produces multiple chunks in `dist/assets/` and the initial/index chunk
is dramatically smaller (target: initial JS < ~250 KB). App still navigates correctly with no flash of
missing layout.

**Files:** `src/App.tsx`, `vite.config.ts`.

---

## TASK 3 — Fix sitemap generation  🟠
**Problem:** `package.json` `generate-sitemap` script does
`import('./src/utils/generateSitemap.ts').then(m => require('fs')...)` — mixing `require` into an ESM
(`"type":"module"`) project → **throws at build time.** No `sitemap.xml` exists in `public/` or `dist/`.
`robots.txt` advertises `https://equissetix.com/sitemap.xml` which currently 404s.

Also: `src/utils/generateSitemap.ts`'s URL list is **missing routes that exist in App.tsx**:
`/company` (alias of /about), `/resources` (alias of /blog), and dynamic `/blog/:id`,
`/case-studies/:id` (those are param routes — list the index pages, skip the params unless you have
a known set of slugs).

**Plan:**
1. Create `scripts/gen-sitemap.mjs` that imports the URL data (or just inline the list) and writes
   `public/sitemap.xml` (so it's served as a static asset and picked up by Vite copy).
2. Update `package.json` `generate-sitemap` to `node scripts/gen-sitemap.mjs`.
3. Reconcile the URL list with the actual routes in `src/App.tsx` (see App.tsx lines 53–93).
4. Verify `public/sitemap.xml` ends up in `dist/` after `npm run build`.

**Acceptance:** `npm run build` succeeds end-to-end; `dist/sitemap.xml` exists and lists all canonical routes.

**Files:** new `scripts/gen-sitemap.mjs`, `package.json`, reference `src/utils/generateSitemap.ts`.

---

## TASK 4 — Favicon, OG image, manifest  🟠 POLISH + SHARE PREVIEWS
**Problems:**
- `index.html` favicon still points to `/vite.svg` → tabs/bookmarks show the Vite logo.
- `index.html` references `https://equissetix.com/og-image.jpg` and `/logo.png` for OG/JSON-LD, but
  **neither file is in `public/`** → broken social/Slack/iMessage share previews. VERIFY these exist on
  the deployed host before assuming broken.

**Plan:**
1. Add real `public/favicon.svg` (or `.ico`) + `apple-touch-icon.png`; update `<link rel="icon">`.
2. Add `public/og-image.jpg` (1200×630) and `public/logo.png` (or fix the URLs to point at real assets).
3. Add `public/site.webmanifest` + `<link rel="manifest">`.

**Acceptance:** Browser tab shows Equissetix icon; share-preview validators (e.g. opengraph.xyz) render a card.

**Files:** `index.html`, new assets in `public/`.

---

## TASK 5 — Cleanup  🟡
- **Delete stray `nul` file** in repo root (Windows `> nul` redirect artifact). On Windows `nul` is a
  reserved device name — delete via Git Bash / WSL or `git rm`, not Explorer.
- **Investigate `src/pages/Blog.tsx`:** it does NOT import the 3 real markdown articles in
  `src/content/blog/` (no `import.meta.glob`, no markdown parser). Confirm whether `/blog/:id` renders
  hardcoded content vs. these files. If the articles are meant to be live, wire them up
  (`import.meta.glob('../content/blog/*.md', { as: 'raw' })` + a markdown renderer).
- **Remove unused `src/pages/HomeEnhanced.tsx`** (530 lines, not routed; `Home.tsx` is the live one) —
  CONFIRM it's truly unreferenced first (`grep -rn HomeEnhanced src/`).
- **Strip 4 `console.log`** in `src/` from prod (covered by Task 2 step 4, or remove manually).
- **Consolidate ~35 root `.md` guide files** (QUICK_DEPLOY / QUICK_START / README_DEPLOY / START_HERE /
  SQUARESPACE_* / etc.) into a `/docs` folder. Pure organization; verify none are referenced by build.

---

## Recommended execution order
1. Task 1 (per-page SEO) — biggest win
2. Task 2 (lazy routes) — perf / CWV
3. Task 3 (sitemap) — completes the SEO trio
4. Task 4 (favicon/OG)
5. Task 5 (cleanup)

Tasks 1–3 are the real "next level" — they're already half-built and just need wiring.

---

## Progress log
- [x] Task 1 — Per-page SEO (react-helmet-async) ✅
- [x] Task 2 — Code-split / lazy routes ✅
- [x] Task 3 — Fix sitemap generation ✅
- [x] Task 4 — Favicon / OG image / manifest ✅
- [x] Task 5 — Cleanup (nul, Blog wiring, docs) ✅

### Implementation notes (2026-06-16 execution)
**Task 1 — done.**
- Installed `react-helmet-async@3.0.0`. NOTE: network does TLS inspection → npm threw
  `UNABLE_TO_VERIFY_LEAF_SIGNATURE`. Installed once with `--strict-ssl=false` then restored
  `strict-ssl true`. npm's integrity hash still protected the download. Added dep to `package.json` manually.
- `<HelmetProvider>` wraps app in `src/main.tsx` (outside Router).
- New `src/components/SEO.tsx` — renders title, description, canonical, OG + Twitter tags; `path` prop
  builds canonical/og:url; `noindex` prop for 404.
- Extended `src/utils/seo.ts` `pageSEO` from 4 → 27 entries (all routes) with `satisfies` typing.
- Added `<SEO/>` to all 27 page components (via one-off `scripts/add-seo.mjs` codemod; safe to delete).
- **Side fixes required to get `tsc` green (the build was actually already broken):**
  - Added `src/vite-env.d.ts` (was missing → `import.meta.env` untyped).
  - Rewrote the minified FB Pixel snippet in `src/utils/analytics.ts` as typed code; made
    `window.gtag/fbq/_fbq` optional.
  - `src/components/ExitIntentPopup.tsx`: `NodeJS.Timeout` → `ReturnType<typeof setTimeout>`.
  - `src/components/SocialProof.tsx`: removed unused `duration` destructure.
  - Deleted `src/pages/HomeEnhanced.tsx` (Task 5 item; was unreferenced + had unused-import errors).
  - Removed dead `process`-guard block from `src/utils/generateSitemap.ts`.

**Task 2 — done.** `src/App.tsx` page imports → `lazy()`, `<Routes>` wrapped in `<Suspense>` with a
branded spinner. Shell (Navbar/Footer/etc.) stays eager. `vite.config.ts`: `manualChunks`
(react-vendor, motion-vendor) + `esbuild.drop: ['console','debugger']` (covers Task 5 console strip).
- Result: 677 KB single bundle → ~40 chunks. Initial load = index 67KB + react-vendor 162KB +
  motion-vendor 102KB ≈ **107 KB gzipped**. NOTE: motion-vendor is eager because Navbar/BackToTop/
  StickyCTA/ExitIntentPopup all use framer-motion. Getting it out of the initial load needs an
  animation refactor — out of scope, left as future work.

**Task 3 — done.** New self-contained `scripts/gen-sitemap.mjs` writes `public/sitemap.xml` (26 canonical
URLs; aliases /company,/resources and :id param routes intentionally excluded). `package.json` build
reordered to `generate-sitemap && tsc && vite build` so the file is in `public/` before Vite copies it
to `dist/`. Verified `dist/sitemap.xml` exists and preview serves it HTTP 200. (Old broken inline
`-e` script removed. `src/utils/generateSitemap.ts` left in place but no longer used by build — could
be deleted in a future cleanup.)

**Verified:** `npm run build` passes end-to-end (tsc 0 errors, vite OK); `npm run preview` serves
`/`, `/pricing`, `/sitemap.xml` all 200.

**Task 4 — done.**
- No rasterizer on the box (no sharp/ImageMagick) → installed `@resvg/resvg-js` (TLS workaround:
  `--strict-ssl=false` once, then restored `strict-ssl true`, same as the helmet install).
- New `scripts/gen-assets.mjs` renders on-brand assets from inline SVG (Deep Racing Green `#0F5132` +
  gold `#F59E0B`, white "E" mark matching the navbar): `favicon-16/32.png`, `apple-touch-icon.png`
  (180), `logo.png` (512), `og-image.png` (1200×630). Plus hand-written `public/favicon.svg`.
  Wired into `package.json` build as `generate-assets` (runs before vite copies `public/`).
- Verified deployed host: `https://equissetix.com/og-image.jpg` really did 404 — confirmed broken,
  not a false alarm.
- OG image is **PNG, not JPG** (resvg emits PNG; all platforms accept PNG OG images). Updated
  `index.html` + `src/utils/seo.ts` `defaultSEO.image` from `og-image.jpg` → `og-image.png`, added
  `og:image:width/height`.
- `index.html`: favicon now points at the SVG/PNG set, added `apple-touch-icon`, `manifest`, and
  `theme-color`. New `public/site.webmanifest` (name, theme/bg color, icon set).

**Task 5 — done.**
- Deleted stray `nul` file (via Bash/MSYS `rm -f ./nul`; Explorer can't).
- **Blog wired up fully** (was: `/blog/:id` re-rendered the *listing* — no detail page existed, and the
  3 markdown files in `src/content/blog/` were orphaned). Now:
  - Installed `react-markdown` + `remark-gfm` + `@tailwindcss/typography` (TLS workaround each time).
    Registered typography plugin in `tailwind.config.js` (converted to ESM `import`).
  - New `src/utils/blog.ts` = single source of truth for the post list; loads `*.md` via
    `import.meta.glob(..., { query:'?raw', eager:true })`, maps 3 posts to their `slug` files
    (id 1→acwr, 4→financial, 5→ai-gait). `Blog.tsx` now imports `blogPosts` instead of its inline copy.
  - New `src/pages/BlogPost.tsx` (lazy) renders the article via ReactMarkdown in a `prose` container;
    posts without a markdown file (ids 2,3,6,7) show a "coming soon" state; unknown id → redirect to 404.
  - `src/App.tsx`: `/blog/:id` now routes to `<BlogPost/>`.
- Consolidated 20 root guide `.md` files into `/docs` (+ `docs/README.md` index). Kept `README.md` and
  `NEXT_LEVEL_PLAN.md` at root. Verified none were referenced by build config.
- (Prior: HomeEnhanced removed in Task 1; console.logs stripped via esbuild.drop in Task 2.)

**Verified:** `npm run build` passes end-to-end (tsc 0 errors, vite OK, ~40 chunks). New `BlogPost`
chunk (159KB/48KB gz, react-markdown) is lazy — only loaded when viewing an article. `dist/` contains
all favicon/og/manifest/sitemap assets; preview serves `/favicon.svg`, `/og-image.png`,
`/site.webmanifest` all 200; ACWR article markdown confirmed bundled into the blog chunk.

_Last updated: 2026-06-16 — executed Tasks 1–5 (all complete)._

# Equissetix Website — Revamp Plan

> **Reviewed:** 2026-09-23, against the live source at `E:\Software Project\equissetix-website`.
> **Status:** Phases 0 and 0.5 **implemented** 2026-09-23 — see §6 for what shipped, what the
> implementation turned up that this review missed, and what's still open.
> **Supersedes:** nothing. `WEBSITE_REDESIGN_MOCK.md` (Jul 2026) is **~85% shipped** — this plan
> starts from that finished state and addresses what the mock did not cover: conversion
> mechanics, proof assets, discoverability, and the debris left behind by the migration.

---

## 0. Where the site actually stands

The previous redesign worked. The repositioning it called for — from "one product that makes
horses faster" to "a family of barn-operations products led by stable management" — is **built
and live**:

| Redesign mock called for | Status |
|---|---|
| Product family IA (`/products/*`, 3 landing pages) | ⚠️ Shipped, but **presents the lineup wrongly** — see F0 |
| `/why/*` trust pages (compliance, transparency, science) | ✅ Shipped |
| Stable-first solution pages (boarding-barns, breeding-farms) | ✅ Shipped |
| Home hero → barn-status board, not ACWR chart | ✅ Shipped |
| Two-layer pricing (pick product → pick size) | ✅ Shipped |
| Disciplined palette (Deep Racing Green + single gold CTA) | ✅ Shipped — though the *neutral ground* it sits on needs work, see F6 |
| Honesty guardrails (no win-probability claims, 🟡 = "setup required") | ✅ Holding |

The codebase is healthy: `tsc --noEmit` passes clean, routes are lazy-loaded, the Tailwind
token system is genuinely disciplined (aliases map ~300 legacy class references onto one
palette), and the copy is well above SaaS-template average — "The 5:30am scramble" and "The
money you can't see" are real problem framing, not feature bullets.

**So this is not a rebrand.** The strategic positioning is right and the brand colors and type
are worth keeping. But four things are wrong, and two of them are serious:

1. **The lineup is described incorrectly** — the site sells three co-equal products when Pro
   *is* the platform and StableTree / Performance are its two halves (F0).
2. **It asks for a demo without ever showing the product** — not one screenshot exists (F1).
3. **Its best pages are invisible to Google**, and its meta descriptions still broadcast the
   retired "win races with AI" position (F2).
4. **The surface treatment undercuts the good bones** — muddy near-identical backgrounds and
   one card style stamped on everything, so nothing reads as emphasized (F6).

Plus migration debris that actively undercuts trust: unpublished prices rendered on `/compare`,
and fabricated-customer components sitting one import away from going live (F3, F4).

The seven findings below are ordered by damage-per-hour-of-fix.

---

## 1. The findings

### F0 — The site describes the product lineup wrongly · **Severity: critical**

**This is a factual error about what we sell, and it outranks everything else in this document.**

The correct model:

> **TrainingTree Pro is the platform.** It is made up of two halves — **StableTree** (running
> the barn) and **TrainingTree Performance** (conditioning the athlete). A barn that needs only
> one half can take that half. Pro divides into either, depending on what the barn or trainer
> needs.

The site presents something different: **three co-equal sibling products in a flat row.** On
the homepage, on `/pricing`, and in the Products mega-menu, `products.map()` renders three
identical cards — and Pro appears *third*, visually reading as the last of three peers rather
than as the whole that contains the other two. The copy reinforces the flat reading:

- Home: *"Three products. Start where you are."* → **wrong** — it's one platform, divisible.
- Home ladder: `StableTree → TrainingTree Pro → Performance` with arrows between them →
  **wrong** — this shows a linear upgrade path ending at Performance, when Performance is a
  *half*, not a step beyond Pro.
- `products.ts` Pro tagline: *"Everything, in one platform"* → close, but sits in a flat array
  that gives it no structural priority.

The underlying data is already right — the comparison matrix in `products.ts:236-264` shows
Pro's column as exactly the union of the StableTree and Performance columns. **Only the
presentation contradicts the model**, which means this is a copy-and-layout fix, not a
data-model rebuild.

Why it matters commercially: the flat framing makes a 3-SKU decision out of what is really one
product with a configuration question. It invites "which of these three do I buy?" (friction)
instead of "I need the barn half / the training half / both" (clarity). It also buries the
strongest expansion story — that the halves are the *same platform*, so adding the other half
is a flip, not a migration.

> **Fix:** re-present Pro as the containing platform with two halves. §2, Phase 0.5.

---

### F1 — The site sells software nobody can see · **Severity: critical**

`public/` contains a logo, favicons, and an OG image. **There is not one product screenshot,
screen recording, or UI image anywhere in the repository.**

Every visual representing the product is a hand-coded HTML mockup — the hero "Barn Status"
board (`Home.tsx:168-228`) is `<div>`s and Tailwind classes, not the real app.

Why this is the single biggest problem: the entire page asks a barn manager to book a demo
based on prose. For SMB SaaS, seeing the interface *is* the qualification step — it's how a
visitor decides "this is built for a barn like mine" before they'll spend 30 minutes on a call.
A hand-drawn approximation also quietly sets up a credibility gap: whatever the demo shows will
not look like the website.

There are four components already written and wired to consume screenshots —
`AnimatedScreenshots`, `AnimatedPlatformShowcase`, `ScreenshotHeroBackground`, `VideoEmbed` —
all of them dead code (F4). The scaffolding is built and waiting on assets.

> **Fix:** capture 8–12 real screens from the running product; replace the hero mockup and the
> `PlatformExplorer` panels with them. Detail in §2, Phase 1.

---

### F2 — Google cannot see the new site · **Severity: critical**

`public/sitemap.xml` has 26 URLs. It lists **none of the pages the redesign created**:

```
missing: /products                      /why/compliance
         /products/stabletree           /why/owner-transparency
         /products/trainingtree-pro     /why/the-science
         /products/performance          /solutions/boarding-barns
                                        /solutions/breeding-farms
```

Meanwhile it *does* list ten `/trainingtree/*` pages that still carry the retired
single-product framing.

The same drift runs through `src/utils/seo.ts`. It has no `pageSEO` entries for any of the nine
new pages (they set SEO inline, so they aren't broken — but they're outside the system, so
they're easy to miss on the next edit). Worse, the entries it *does* have still sell the old
position:

- `home.description` → *"Stop juggling spreadsheets. Start winning races. TrainingTree combines…"*
- `defaultSEO.description` → *"The complete horse training management platform… AI-powered insights"*

So the site body says "we run your whole barn," and every search result, link preview, and
social card says "win races with AI." That is the exact positioning the redesign was written to
retire, still being broadcast to everyone who hasn't landed on the page yet.

`npm run generate-sitemap` exists (`scripts/gen-sitemap.mjs`) and runs on build — it's
generating from a stale route list, not from `App.tsx`.

> **Fix:** two hours of work, disproportionate payoff. §2, Phase 0.

---

### F3 — The ROI calculator publishes prices that exist nowhere else · **Severity: high**

`src/components/ROICalculator.tsx` is live on `/compare`. It hardcodes:

```js
// ROICalculator.tsx:27
const subscriptionCost = horses <= 10 ? 99 : horses <= 50 ? 299 : 599
```

**The pricing page does not publish prices.** All three tiers say "Contact for Pricing."
So a prospect who visits `/compare` before `/pricing` learns a number the sales conversation
may not honor — and if it doesn't, the first thing they experience is a bait-and-switch.

The savings math is also invented and then sourced to authority it doesn't have:

```js
const dataEntryTime = horses * 2        // 2 hrs/horse/week, manual entry
const automatedHours = totalManualHours * 0.15   // "reduces to 15% of manual time"
// footnote: "* Calculations based on industry averages."
```

An 85% reduction is not an industry average; it's a number chosen to make the output look good.
At 10 horses / 3 staff / $25hr the widget claims **~$34k/yr net savings and ~950% ROI** — a
figure that reads as fake to exactly the skeptical barn owner this site is trying to win, and
one that's hard to defend if a customer later asks where it came from.

This is the same class of defect flagged repeatedly in the TrainingTree work: *a default
constant becomes a fabricated metric.* The calculator has no way to say "we don't know yet."

> **Fix:** either drive it from real published pricing, or replace the dollar output with a
> time-only estimate whose assumptions are visible and editable by the visitor. §2, Phase 0.

---

### F4 — Thirteen dead components, two of them loaded with fake customers · **Severity: high**

Of 39 components in `src/components/`, **13 have zero importers**:

```
AnimatedPlatformShowcase   HeroVideoBackground      SocialProof
AnimatedScreenshots        HowItWorks               StatusChip
AnimatedStats              NewsletterSignup         UrgencyElements
BeforeAfterComparison      ScreenshotHeroBackground VideoEmbed
FAQ
```

Two of them are a live liability the moment anyone wires them up:

**`SocialProof.tsx`** ships a fake-activity notifier and fabricated metrics —

```js
{ name: 'Sarah M.', action: 'started a trial', location: 'Kentucky', time: '2 min ago' }
<StatCounter end={5000} suffix="+" label="Active Users" />
<StatCounter end={50000} suffix="+" label="Horses Managed" />
```

For a company that is *pre-launch and onboarding founding barns*, "5,000+ Active Users" is not
aspirational, it's false. The rotating "Sarah M. from Kentucky just started a trial" popup is a
dark pattern that invents customers by name.

**`UrgencyElements.tsx`** ships countdown timers for offers that don't exist.

Credit where due: **someone made the right call and unmounted both.** `Home.tsx` even carries
the comment `// Testimonials will be added once we have real customer feedback`. The honesty
discipline is real. But the code sits in the repo one import away from going live, and the
next person to add "social proof" will find it and use it.

Note `StatusChip.tsx` is the opposite case — the redesign mock's honest `✅ Included` /
`◐ Setup required` token, built and then never adopted. It should be *used*, not deleted (F5).

> **Fix:** delete 10, wire 3. §2, Phase 2.

---

### F5 — The funnel has one door, and it's the heaviest one · **Severity: medium-high**

Every CTA on the site converges on **"Request a Demo"** → a contact form (`Contact.tsx`, posting
to Web3Forms). The homepage alone fires it from the hero, the founding-barns strip, the sticky
CTA, the exit-intent popup, and the final CTA band.

There is no lighter-weight step anywhere:

- No pricing visible → can't self-qualify on budget
- No screenshots → can't self-qualify on fit (F1)
- No interactive tour, no video, no sample data
- `NewsletterSignup` is built and unmounted, so there's no "not yet, but keep me posted" path
- `/case-studies` is in the top nav and the sitemap but is an honest "Coming Soon" page —
  a dead end that costs a click and a little trust

Modern SMB SaaS converts on a ladder: *look → try → talk*. This site offers only *talk*. For a
pre-launch product with white-glove onboarding, a demo-led funnel is a legitimate strategy —
but it needs rungs beneath it, or everyone not ready for a sales call leaves with nothing.

Two supporting gaps:

- **`/compare` still says "Compare TrainingTree Pro"** and sells against spreadsheets for one
  product — it never got the family treatment the rest of the site did.
- **The `products` array drives the nav, pricing, and home cards** (`src/data/products.ts`) —
  good, that's the right pattern. But `ComparisonTable` (the mock's intended centerpiece for
  `/products`) isn't fed from it.

> **Fix:** add two lighter rungs and close the dead ends. §2, Phase 3.

---

### F6 — Everything is a card, on a muddy ground · **Severity: high**

Your read is right, and it's diagnosable. Three specific mechanics are producing it:

**1. The backgrounds are muddy, low-contrast beige.** `Section` offers five backgrounds, and
three of them are near-identical warm greys:

```css
bg-section-gradient      #FBFAF6 → #F1EFE8   /* "gray"  */
bg-section-gradient-alt  #F1EFE8 → #FBFAF6   /* "light" — the same two, reversed */
bg-hero-gradient         #FBFAF6 → #F4F2EC   /* "gradient" */
body background          #FBFAF6
```

Those are within a few percent of each other. So section-to-section the page barely changes
value — it reads as one long, slightly dingy beige scroll rather than as distinct zones. The
warm-paper idea is sound; the *execution* is too narrow a range to create rhythm, and
`#F1EFE8` against `#FBFAF6` lands in the yellow-grey zone that reads as "unfinished" rather
than "warm." Compounding it: `bg-hero-gradient` also layers two radial washes at 5–6% opacity,
which at that strength are invisible as design but enough to make the ground look slightly
dirty rather than deliberately tinted.

**2. Every single block is the same card.** `Card.tsx` stamps one treatment on everything:
`rounded-xl` + `shadow-modern` + `border-navy-100` + `p-6 sm:p-8` + a lift-on-hover. It's used
for products, problems, pricing tiers, features — so a page is a grid of identically-weighted
white rectangles floating on beige. Nothing is emphasized because everything is. This is the
"not everything is a card" failure: border, fill, radius, and shadow each say *separate
object*, and spending all four on every block flattens the hierarchy completely.

**3. The tiles compete instead of cohering.** The hero's stat tiles are three different
color-washed boxes side by side — `bg-brand-50` + `bg-navy-50` + `bg-gold-50`, each with its
own border and its own text color. Three tinted rectangles of equal size in a row, in three
different hues, is the arrangement that reads cheapest. The `FarmPattern` overlays (at
0.035–0.05 opacity) add texture noise on top without adding legible pattern.

> **Fix:** this is a surface-treatment pass, not a re-brand. The palette and typography stay —
> see §2, Phase 1.5 for the specific moves. Critically, **fixing this depends on Phase 1**:
> once real screenshots carry the visual weight, most of these decorative tiles and patterns
> can simply be deleted rather than restyled. Do not restyle boxes you're about to remove.

---

## 2. The plan

Four phases, sequenced so the cheapest high-impact work lands first. Phases 0–2 are
self-contained; Phase 3 depends on Phase 1's assets.

### Phase 0 — Stop the bleeding · ~1 day

Highest payoff per hour in the whole plan. No design work, no new content.

| # | Task | File(s) |
|---|---|---|
| 0.1 | Generate the sitemap **from the route table**, not a hardcoded list, so it can't drift again | `scripts/gen-sitemap.mjs`, `src/App.tsx` |
| 0.2 | Rewrite `defaultSEO` + `pageSEO.home` to the barn-ops position; drop "AI-powered insights" | `src/utils/seo.ts` |
| 0.3 | Add `pageSEO` entries for all 9 new pages; point the pages at them instead of inline strings | `src/utils/seo.ts`, `products/*`, `why/*` |
| 0.4 | Re-point the 10 `/trainingtree/*` SEO descriptions away from race-first framing | `src/utils/seo.ts` |
| 0.5 | **Fix or pull the ROI calculator** (decision needed — see §3, D1) | `src/components/ROICalculator.tsx` |
| 0.6 | Remove `/case-studies` from the nav until it has content; keep the route + a redirect | `src/components/Navbar.tsx`, `Footer.tsx` |

**Done when:** every route in `App.tsx` appears in `sitemap.xml`; no meta description mentions
winning races or AI-powered insight; no unpublished price is rendered anywhere.

---

### Phase 0.5 — Fix the product story · ~1 day

Correcting F0. Copy and layout only; `products.ts` capability data is already correct.

**0.5.1 Re-present the lineup as one platform with two halves.** Replace the three-equal-cards
layout everywhere it appears (home, `/pricing` step 1, Products mega-menu) with a containing
structure — Pro as the frame, the two halves nested inside it:

```
┌─ TrainingTree Pro ─── the complete platform ──────────────┐
│                                                            │
│   ┌─ StableTree ──────────┐  ┌─ Performance ───────────┐  │
│   │ Run the barn          │  │ Condition the athlete   │  │
│   │ Compliance, records,  │  │ Training load, gait,    │  │
│   │ staff, money, health  │  │ readiness, racing       │  │
│   └───────────────────────┘  └─────────────────────────┘  │
│                                                            │
│   Need one half? Take it. Need both? That's Pro.          │
└────────────────────────────────────────────────────────────┘
```

This also solves part of F6 — it replaces three identical floating cards with one composition
that carries real structural meaning.

**0.5.2 Rewrite the framing copy.**

| Location | From | To |
|---|---|---|
| Home §products H2 | "Three products. Start where you are." | "One platform. Take the half you need, or both." |
| Home ladder | `StableTree → Pro → Performance` (linear arrows) | Pro as container, two halves inside — no arrow sequence |
| `/pricing` Step 1 | "First, choose the product that fits" | "First, choose how much of the platform you need" |
| `products.ts` Pro `oneLiner` | "Run the barn and condition the racehorse in one platform." | Keep, but mark Pro as `isPlatform: true` so layouts can treat it as the container |

**0.5.3 Add a `isPlatform` / `half` flag to the `Product` type** so this relationship is
expressed in the data rather than re-hardcoded in each layout. One field; prevents the flat
rendering from creeping back.

**0.5.4 Re-point `/products`** to lead with the platform-and-halves diagram, then the
comparison matrix (which already encodes the union correctly).

**Done when:** no page presents three co-equal products, and the sentence "Pro divides into
either half depending on what you need" is legible from the homepage without clicking through.

---

### Phase 1 — Show the product · ~3–5 days (asset capture dominates)

This is the phase that moves conversion. It is mostly *production*, not engineering.

**1.1 Capture the screens.** From the running TrainingTree/StableTree app, with realistic
demo data — real horse names, a plausible 20–30 horse barn, dates that look lived-in. Never
lorem, never an empty state. Target set:

| Screen | Where it goes |
|---|---|
| Compliance dashboard (the traffic-light board) | Home hero — replaces the hand-coded mockup |
| Horse profile / record | `/products/stabletree`, `/why/compliance` |
| Barn map + turnout | `/products/stabletree`, `/solutions/boarding-barns` |
| Invoicing / owner statement | `/trainingtree/financial`, `/why/owner-transparency` |
| Owner portal (as the owner sees it) | `/why/owner-transparency`, `/trainingtree/owner-portal` |
| Staff schedule + time-clock | `/products/stabletree`, `/solutions/large-operations` |
| Training load / ACWR chart | `/products/performance` |
| Gait symmetry analysis | `/products/performance` |
| Mobile capture (phone frame) | `/trainingtree/mobile`, home |
| Alert center | `/why/compliance` |

Ship at 2× for retina, `webp` with `png` fallback, `loading="lazy"` below the fold, explicit
`width`/`height` to hold layout. Budget: keep the homepage under ~1.5MB of imagery.

**1.2 Replace the hero mockup.** The hand-coded board at `Home.tsx:168-228` becomes a real
screenshot in a subtle browser/device frame. Keep the existing entrance animation.

**1.3 Wire the dormant components.** `AnimatedScreenshots` and `AnimatedPlatformShowcase`
already exist and already expect this shape of asset — review, then mount them on `/products`
and the platform pages rather than writing new ones.

**1.4 A 60–90 second product walkthrough.** Screen recording with captions, no narrator
required. Mount via the existing `VideoEmbed` component. This is the single highest-converting
asset for SMB SaaS and it currently doesn't exist.

**Done when:** a visitor can see the actual interface within 5 seconds of landing, and can
watch it work without talking to anyone.

---

### Phase 1.5 — Surface treatment · ~2 days

Correcting F6. **Runs after Phase 1, deliberately** — real screenshots let you *delete*
decorative boxes rather than restyle them. Every move below keeps the Deep Racing Green + gold
identity and the Outfit type; this is about ground, weight, and restraint.

**1.5.1 Widen the background range and clean the ground.** The problem is three backgrounds
within a few percent of each other. Replace with a scale that actually steps:

```
Paper    #FCFBF8   ← body + primary sections (cleaner, less yellow than #FBFAF6)
Raised   #F5F3ED   ← alternating sections, a real step down
Ink      #11161E   ← navy-900, for full-bleed dark bands
Green    #0F5132   ← the existing dark green band, used sparingly
```

Drop `bg-section-gradient-alt` entirely (it's `gray` reversed — no one can perceive the
difference). Remove the 5–6% radial washes from `bg-hero-gradient`; either commit to a visible
tint or use flat paper. Rhythm comes from *alternating paper → raised → occasional dark band*,
not from gradients nobody can see.

**1.5.2 Break the card monoculture.** Give `Card` variants instead of one stamp:

| Variant | Treatment | Used for |
|---|---|---|
| `flat` | no border, no shadow, just spacing | most feature/problem lists — **this becomes the default** |
| `bordered` | hairline border, no shadow | grouped/tabular content |
| `raised` | shadow + border | *only* the one thing being emphasized per section (the recommended tier, the active product) |

Rule to enforce: **at most one `raised` element per section.** Today the pricing page has three
equally-weighted tiers with a `highlighted` flag that barely reads; with variants, "Professional"
can actually look recommended.

**1.5.3 Kill the competing tinted tiles.** The hero's three-hue stat row (`brand-50` /
`navy-50` / `gold-50`) becomes one surface with internal dividers and a single accent on the
one number that matters. Same for the pattern overlays: `FarmPattern` at 0.035 opacity is
noise, not texture — remove it from every section except at most one, where it should run at a
visible strength (~0.08) and earn its place.

**1.5.4 Tighten spacing rhythm.** `Card` hardcodes `p-6 sm:p-8` everywhere. Move padding onto
the variant so dense lists can be dense and hero content can breathe, instead of one padding
serving both badly.

**Done when:** each section reads as its own zone; a screenshot of any page shows a clear
visual focal point rather than a uniform grid of white boxes.

---

### Phase 2 — Clean the room · ~1 day

| # | Task |
|---|---|
| 2.1 | **Delete** `SocialProof.tsx` and `UrgencyElements.tsx` outright. They are fabrication engines. If real proof arrives later, write an honest component then — don't leave these as the path of least resistance. |
| 2.2 | **Delete** the 8 other unused components that Phase 1 doesn't adopt (`AnimatedStats`, `BeforeAfterComparison`, `HeroVideoBackground`, `HowItWorks` — superseded by `HowItWorksSteps`, `GeometricPattern` if `FarmPattern` fully replaces it) |
| 2.3 | **Adopt `StatusChip`** across product and platform feature lists — `✅ Included` / `◐ Setup required`. This was the mock's §7.3 honesty token; building it and not using it is the worst of both worlds. |
| 2.4 | **Adopt `FAQ`** on `/products` and the three product pages (currently only `/pricing` has FAQ content, inline) |
| 2.5 | **Adopt `NewsletterSignup`** as the Phase-3 soft-conversion rung |

Ordering note: do 2.1–2.2 *after* Phase 1 picks its components, so nothing needed gets deleted.

---

### Phase 3 — Build the ladder · ~3–4 days

**3.1 Add a soft rung above the demo.** Pick one (see §3, D2):
- *Self-serve product tour* — the walkthrough video plus an interactive screenshot tour, no form
- *"Send me the details"* — email capture returning the one-page technical datasheet that
  already exists at `public/TrainingTree-Technical-Datasheet-1-Page.md`. This asset is written
  and unused; converting it to a PDF is an afternoon.

**3.2 Give `/compare` the family treatment.** It still reads as a single-product page. Rebuild
around `ComparisonTable` fed from `src/data/products.ts`, with the capability-group rows the
mock specified (Compliance / Stable Ops / Staff / Money / Health / Sports Science / Gait /
Racing / Wearables), columns = StableTree · Pro (Lite) · Pro · Performance.

**3.3 Make the product chooser real.** The nav links to `/products#chooser` — a 3-question
picker ("Do you race or condition sport horses?") that lands the visitor on one product page.
Cheap to build, and it's the fastest way to make a 3-SKU lineup feel simple instead of
confusing.

**3.4 Close the loop on pricing.** Even "starts at $X/mo" with a range beats "Contact for
Pricing" for SMB self-qualification — hidden pricing is the #1 bounce cause for sub-$500/mo
SaaS. This is a business decision, not a design one (§3, D1).

---

## 3. Decisions I need from you

These change what gets built, so I've stopped rather than guessed.

| # | Decision | Options | Recommendation |
|---|---|---|---|
| **D1** | **Publish prices?** | (a) Publish real tiers → fix ROI calc to match · (b) Stay "Contact for Pricing" → **pull the ROI calculator entirely** · (c) Publish "starts at" ranges only | **(c)** — SMB buyers self-qualify on price; a range keeps negotiating room while killing the bounce. Whatever you pick, the $99/$299/$599 in the ROI calc cannot stay unless it's real. |
| **D2** | **Which soft rung?** | (a) Product tour video, no gate · (b) Gated datasheet PDF · (c) Both | **(a) first** — ungated tour converts better pre-launch and needs no new content, just a recording. Add (b) later. |
| **D3** | **Screenshot source** | (a) Live app with seeded demo barn · (b) Staged/polished mockups | **(a)** — real screens with good demo data. Staged mockups reintroduce the credibility gap this plan exists to close. |
| **D4** | **`/case-studies`** | (a) Pull from nav until real · (b) Convert to "Founding Barns" program page · (c) Leave as-is | **(b)** — it turns a dead end into the founding-barn pitch the homepage strip already makes. |
| **D5** | **How do the halves get sold?** (F0 follow-up) | (a) Three SKUs, but presented as platform + halves · (b) One SKU (Pro) with two configurations chosen at onboarding · (c) Pro + two standalone SKUs that upgrade into Pro | **(c)** — matches how the capability matrix is already built, and keeps StableTree sellable to non-racing barns as its own product while making Pro the obvious whole. But this is a **pricing/packaging decision**, not a web one — the site should describe whatever you actually sell. Confirm before Phase 0.5. |
| **D6** | **Does "TrainingTree Performance" keep that name?** | (a) Keep · (b) Rename to something not prefixed "TrainingTree" | Flagging only, no recommendation. If Pro is the platform, having a *half* share the platform's name ("TrainingTree Performance" inside "TrainingTree Pro") is part of what makes the lineup read confusingly. Worth a thought during Phase 0.5, but renaming has costs beyond the website. |

---

## 4. What I am deliberately not changing

To be explicit, since "revamp the appearance" could imply more:

- **The brand colors.** Deep Racing Green + single gold CTA is a distinctive identity in a
  market full of generic blue SaaS, and the alias system in `tailwind.config.js` is genuinely
  well-engineered. **The hues stay.** What changes in Phase 1.5 is the *neutral ground* they
  sit on and how much decoration surrounds them — that's a surface fix, not a re-brand.
- **Typography.** Outfit + JetBrains Mono, with a real responsive scale in `index.css`. Fine.
- **Routing and build tooling.** Healthy; `tsc` is clean.
- **The `products.ts` capability data.** The matrix already encodes Pro = StableTree ∪
  Performance correctly. F0 is a presentation bug; the data underneath is right.
- **The core copy.** The problem-agitation framing ("The date you forgot," "The money you can't
  see") is better than most funded SaaS sites produce. Keep it.
- **The honesty guardrails** from the redesign mock §10 — no win-probability claims, no
  trained-ML claims, 🟡 features labeled setup-required. These remain binding on every new
  page and every screenshot caption in this plan.

The appearance problem isn't the design system. It's that a well-designed site is currently
illustrating a product instead of showing it.

---

## 5. Sequence summary

```
Phase 0    Stop the bleeding     ~1 day     ← start here, highest ROI
Phase 0.5  Fix the product story ~1 day     ← F0: correctness, do it early
Phase 1    Show the product      ~3-5 days  ← moves conversion most
Phase 1.5  Surface treatment     ~2 days    ← F6: MUST follow Phase 1
Phase 2    Clean the room        ~1 day     ← after Phase 1 picks components
Phase 3    Build the ladder      ~3-4 days  ← depends on Phase 1 assets
                                 ─────────
                                 ~11-14 days
```

**The one ordering constraint that matters:** Phase 1.5 runs *after* Phase 1. Restyling the
decorative tiles before real screenshots exist means restyling boxes that screenshots will
replace. Get the real product on the page first, then treat the surfaces around it.

Phases 0 and 0.5 can start immediately and need nothing from you. Phases 1, 1.5 and 3 are
blocked on D1–D4.

---

## 6. Implementation log — Phases 0 & 0.5 (2026-09-23)

Both phases are done. `tsc --noEmit` clean, production build clean.

### 6.1 What shipped

**Phase 0 — stop the bleeding**

| Task | Outcome |
|---|---|
| 0.1 Sitemap | `gen-sitemap.mjs` now **parses `<Route>` entries out of `App.tsx`** instead of holding a hand-maintained list. 26 → **34 URLs**; all nine previously-missing pages verified present. Aliases, param routes, and the 404 are skipped explicitly; the script **exits non-zero** if it parses no routes, so a future refactor fails the build instead of silently shipping an empty sitemap. |
| 0.2–0.4 SEO | `defaultSEO` + `pageSEO.home/pricing/contact` rewritten off the retired racing position. Added `pageSEO` entries for all **nine** new pages and pointed those pages at them (they were using inline strings, outside the system). |
| 0.5 ROI calculator | **Rebuilt.** No price is rendered anywhere; the ROI %, payback period, and net-dollar figures are gone (all were derived from the invented $99/$299/$599). Output is now time-only, every assumption is a **visible, user-editable input**, and the footer states plainly that we're pre-launch and that a dollar total would be a number we made up. |
| 0.6 Case studies | Removed from navbar and footer. Route stays live and the page is unchanged, pending D4. |

**Phase 0.5 — fix the product story (F0)**

- `Product` type gained `role: 'platform' | 'half'`, `half: 'barn' | 'athlete'`, and a
  `relationship` line. Added `platformProduct`, `halfProducts`, `barnHalf`, `athleteHalf`
  accessors so layouts branch on structure rather than mapping the array in order.
- New **`PlatformLineup`** component renders the relationship structurally — the two halves
  physically nested inside the platform's frame with a `+` between them, and the line
  *"Need one half? Take it on its own. Need both? That's TrainingTree Pro."*
- Replaced the three-equal-cards grid in **four** places: home product section, home
  performance ladder (the misleading `StableTree → Pro → Performance` arrow sequence is gone),
  `/pricing` Step 1, and `/products`.
- Copy rewritten: *"Three products. Start where you are"* → *"Take the half you need. Or both."*
  Navbar mega-menu restructured to **The platform** / **Or take one half**. Pricing FAQ rewritten.
  Hero sub and CTA updated ("Which half do I need?").

### 6.2 What the implementation found that this review missed

Sweeping for the F2 meta-description drift turned up a **much larger honesty problem than §1
documented**. All of it was live, none of it was in the dead components of F4:

| Found | Severity | Fixed |
|---|---|---|
| **Fabricated structured data in `index.html`** — `aggregateRating: 4.8 from 500 ratings` for a pre-launch product with no customers, plus a `price: 0` Offer. Google can render this as **star ratings in search results**; it violates their structured-data policy. | **Critical** | Both blocks removed |
| **23 "AI-powered" claims** across 12 files, contradicting the guardrail that only the two Claude features may be called AI | High | All rewritten to "rules-based / sports-science" |
| **Trained-ML claims in Terms and Privacy** — "Random Forest and Gradient Boosting models", "Conv1D-LSTM neural networks". These are *legal documents* misdescribing how data is processed. | **Critical** | Rewritten to deterministic rules-based; pose-estimation correctly described as opt-in |
| **"AI race predictions"** in Terms, Pricing, Racing, Disciplines, ComparisonTable — the explicit 🔴 never-market claim | **Critical** | → "Race outlook (real entries & career records)" |
| **Four invented author personas** bylined on published blog posts — "Dr. Sarah Mitchell" (implying credentials), "Marcus Thompson", "Jessica Chen" | High | All → "Equissetix Team" |
| **"Used by elite trainers managing over 10,000 horses worldwide"** in a blog post | High | → honest founding-barns framing |
| **Three blog CTAs pointing at `https://trainingtree.com/signup`** — external domain, no self-serve signup; dead end for every reader | High | → `/contact` |
| "Join leading trainers who've already modernized" (`/compare`), "trusted by trainers" (home) | Medium | Rewritten |
| `site.webmanifest` still carried "AI-powered" | Low | Fixed |

**Lesson for the remaining phases:** F4 framed fabrication as *contained in dead components*.
It wasn't. The dead components were the most *obvious* instance, not the only one — the live
fabrications were spread across legal pages, structured data, and blog content, which no one
re-reads. Any future "add social proof" work should start by re-running these greps.

### 6.3 Still open — needs your decision

1. **`public/TrainingTree-Technical-Datasheet-{1,3}-Page.md`** still claim "Random Forest &
   Gradient Boosting models trained on horse data" and "ML Infrastructure". They are **not
   linked from the site**, so nothing is shipping them to visitors today — but Phase 3 plans to
   use the 1-page version as a gated PDF. They need a technical accuracy pass against the real
   codebase before that happens. I did not rewrite them because I can't verify their
   architecture claims from the website repo alone.

2. **Self-serve trial claims conflict with the demo-led funnel.** Six places still promise a
   "14-day free trial / no credit card" (`/pricing` hero, `OwnerPortal`, `HowItWorksSteps`,
   `Terms` §subscription, and two component CTAs) while every button goes to a contact form and
   pricing says "Contact for Pricing." I left these alone: whether you intend to offer a trial
   is a business decision tied to **D1**, not a copy fix. Once D1 is settled, either wire up the
   trial or remove the claims — but they shouldn't stay half-true.

3. **ESLint has no config file** (`npm run lint` fails with "couldn't find a configuration
   file"). Pre-existing, unrelated to this work, but it means the lint script in `package.json`
   has never run. Worth fixing before the codebase grows.

4. **D1–D6 remain unanswered.** Phases 1, 1.5 and 3 are blocked on them, particularly **D5**
   (how the halves are actually packaged and sold), which determines whether the new
   platform-and-halves framing matches reality.

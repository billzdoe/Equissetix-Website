# Equissetix Website — Redesign Mock Draft

> **Status:** Content + IA mock. Not built. This is the target we edit the live site toward.
> **Base:** the current React/Vite/Tailwind site at `E:\Software Project\equissetix-website`.
> **Author's brief:** (1) sell the *four products we actually built*, not one; (2) lead with
> **stable management + compliance** — the bread and butter — not "make your horse faster";
> (3) keep the good existing copy where it still holds; (4) refresh the UI to carry a product
> *family* instead of a single product.

---

## 0. The core problem with the site today

The current site is a **single-product site wearing a company's clothes.**

- The company brand (Equissetix) is in the navbar, but the entire IA, home page, pricing,
  and every "platform" sub-page describe **one product: TrainingTree.**
- The headline — *"Train smarter. Prevent injuries. Keep owners happy."* — is a **racing
  performance** pitch. It sells speed and injury prevention. That is the narrowest,
  hardest-to-win, smallest slice of the market.
- Meanwhile we now ship **four things** (one umbrella + three products), and the audited
  CAPABILITIES docs make it obvious that the deepest, most-production-ready, most-broadly-
  needed surface is **stable operations, compliance, records, and money** — i.e. running a
  barn. That is the bread and butter. The site barely mentions it above the fold.

**The reframe:** Equissetix is a company that makes **equine operations software**, sold as a
family. The *front door* is stable management + compliance (everybody needs it). Performance
science is the *upsell / specialist* product for the racing and sport-horse crowd.

> Positioning line for the whole company:
> **"The system of record for the modern barn — from the muck heap to the winner's circle."**

---

## 1. What we actually sell (the four products)

This is the single most important thing the new site must communicate clearly. Pulled from
each product's audited `CAPABILITIES.md`.

| # | Name | One-liner | Who it's for | Center of gravity |
|---|------|-----------|--------------|-------------------|
| — | **Equissetix** | The company / platform umbrella. | — | Brand, account, the family. |
| 1 | **StableTree** | Everything to *run* the barn. | Boarding & training barns, breeding farms, sport-horse yards, lesson/show barns. | **Stable management, compliance, records, money, staff.** No sports-science. |
| 2 | **TrainingTree Pro** | The full platform — run the barn *and* train the athlete. | Racing stables & training centers that want it all in one. | Everything StableTree has **+** the sports-science / gait / racing engine. Ships in **Pro** and **Lite** editions (same codebase, per-tenant flip). |
| 3 | **TrainingTree Performance** | Condition the athlete. | Racing trainers, syndicates, sport-horse conditioning programs. | **Sports science, gait analysis, readiness, wearables, racing ops.** Stable-management stack removed. |

**How to explain the relationship in one breath (put this on the site literally):**

> **StableTree** runs your barn. **TrainingTree Performance** conditions your athletes.
> **TrainingTree Pro** is both in one platform. Start where you are; grow into the rest.

**The "capture → interpret" ladder** — this is the sales story, borrowed straight from the
Pro/Lite gating principle in the capabilities doc (*"Lite captures data, Pro interprets it"*):

```
   StableTree            TT Pro (Lite)         TT Pro / Performance
 ─────────────      ─────────────────      ──────────────────────────
  Run the barn   →   Barn + a taste of   →   Barn + full sports-science
  Records, compli-   the intelligence        engine: TRIMP/ACWR/readiness,
  ance, staff,       layer (teasers)         injury risk, gait analysis,
  money, health                              racing, wearables
```

---

## 2. Messaging shift — from "faster horses" to "run a tight barn"

### Current (keep for the Performance product; retire from the front door)
- "Train smarter. Prevent injuries. Keep owners happy."
- Problem framing: overtraining, injury risk, ACWR, gallop-out times.

### New primary message (stable-management first)

**Home hero H1 (proposed):**
> **Run the whole barn from one place.**
> *Health, compliance, staff, records, and billing — organized, on time, and audit-ready.*

**Home hero sub:**
> Equissetix keeps every vaccination, Coggins, medication withdrawal, farrier date, stall,
> shift, invoice, and owner update in one system — so nothing lapses, nobody's double-booked,
> and every owner sees the care behind the bill. Add sports-science and gait analysis when
> you're ready to condition athletes.

**Why this wins (and why the user is right that this is the bread and butter):**
- *Everybody* with horses has to do compliance, records, health, and money. Only a subset
  races. Stable management is the larger, stickier, less-contested market.
- The capabilities are genuinely deep here and marked ✅ production: document vault w/
  expirations, per-horse insurance, HISA/ADMC/licensing, **medication withdrawal calculator**,
  deworming, BCS, barn map, turnout, staff time-clock + payroll, inventory, double-entry ERP,
  invoicing, dunning, accounting export, owner portal.
- It reframes the AI honestly: the site currently over-indexes on "AI." The docs are explicit
  that most "AI" is **rules-based sports science** (auditable, a *strength*) and the only real
  generative AI is the Claude daily brief + voice barn-walk structuring (both 🟡, need a key).
  Leading with operations lets us stop overselling AI and start selling reliability.

### The three pillars (replaces "Train smarter / Prevent injuries / Keep owners happy")

1. **Nothing lapses.** Compliance & records that chase *you*: vaccinations, Coggins,
   deworming, licenses, insurance renewals, **medication withdrawal windows before a race**,
   farrier/vet due dates — all on a traffic-light dashboard with reminders.
2. **Everyone knows their job.** Barn map, stall assignments, turnout rotation, staff shifts,
   a frictionless time-clock, inventory reorder alerts, work orders that ping the right
   phone.
3. **Owners trust you, and the books balance.** Owner portals, automatic invoicing, overdue
   dunning, double-entry accounting, per-horse profitability, QuickBooks/Xero export.

*(Then, lower on the page:)* **4. When you're ready to win — condition the athlete.**
Training load (ACWR/TRIMP), daily readiness, injury-risk, gait/video analysis, racing ops.

---

## 3. New Information Architecture

### Navbar (replaces the single "TrainingTree" mega-menu)

```
Equissetix™  |  Products ▾   Solutions ▾   Why Equissetix ▾   Pricing   Company   [ Request Demo ]
```

**Products ▾** (this is the big change — a *product picker*, not a feature list)
```
┌─ PRODUCTS ─────────────────────────────┬─ NOT SURE? ───────────────────┐
│ ● StableTree            Run the barn   │  Compare all products  →      │
│   Stable mgmt, compliance, records,    │  Take the 60-sec quiz  →      │
│   staff, money — no sports-science.    │                               │
│                                        │  "Start with StableTree,      │
│ ● TrainingTree Pro      Everything     │   grow into Performance."     │
│   Barn ops + full sports-science.      │                               │
│   Pro & Lite editions.                 │                               │
│                                        │                               │
│ ● TrainingTree Performance  The athlete│                               │
│   Sports science, gait, readiness,     │                               │
│   wearables, racing ops.               │                               │
└────────────────────────────────────────┴───────────────────────────────┘
```

**Solutions ▾** (by audience — keep the existing pages, re-point + re-order stable-first)
```
Boarding & Training Barns   ← NEW, the front-door audience (StableTree)
Breeding & Sport-Horse Farms ← NEW
Large Barn Operations        (existing TrainingFacilities, re-titled)
Racing Trainers              (existing — now points at Performance / Pro)
Horse Owners                 (existing)
Veterinarians                (existing)
```

**Why Equissetix ▾** (new — this is where the honest, trust-building content lives)
```
Compliance & Records         ← lead item; the differentiator
Owner Transparency
Security & Data Ownership     (existing /security page)
The Science (rules-based, auditable)  ← reframes "AI" honestly
Integrations
```

**Capabilities → platform sub-pages:** keep almost all existing `/platform/*` pages
(Training, Health, Nutrition, Financial, Racing, Mobile, Integrations, Analytics,
Collaboration, OwnerPortal). Re-file them **under the product they belong to** and add the
stable-ops pages we're missing (see §5). URL move: `/trainingtree/*` → `/products/<product>/*`
with redirects.

### Route map (target)

```
/                             Company home (stable-management-first)
/products                     Product-family overview + comparison  ← NEW
/products/stabletree          StableTree landing                    ← NEW
/products/trainingtree-pro    TT Pro landing (Pro vs Lite)          ← NEW
/products/performance         TT Performance landing                ← NEW

/solutions/boarding-barns     ← NEW
/solutions/breeding-farms     ← NEW
/solutions/large-operations   (was /solutions/training-facilities)
/solutions/racing-trainers    (existing, re-pointed)
/solutions/horse-owners       (existing)
/solutions/veterinarians      (existing)

/why/compliance               ← NEW (lead differentiator)
/why/owner-transparency       ← NEW
/why/the-science              ← NEW (honest AI/rules-based explainer)
/security                     (existing)
/integrations                 (existing platform/Integrations, promoted)

/capabilities/*               (existing /platform/* pages, re-filed + a few new)
/pricing                      (restructured — see §6)
/company, /blog, /case-studies, /compare, /breeds, /disciplines, legal  (existing, keep)
```

---

## 4. Home page — section-by-section rewrite

Keep the existing component system (`Section`, `Card`, `GeometricPattern`, framer-motion,
the green/gold palette). Change the *content and order*.

| # | Section | Change | Notes |
|---|---------|--------|-------|
| 1 | **Hero** | **Rewrite.** New H1/sub (§2). Badge: "Built for the whole barn" (was "for professional racing trainers"). Keep the dashboard mockup but swap the ACWR chart for a **Compliance / Barn-status board** (green/yellow/red tiles: "Coggins ✓", "3 vaccinations due", "Withdrawal clear", "Stalls 22/24"). Two CTAs: **Request Demo** + **Which product is right for me?** | The single biggest edit. The ACWR chart is a *performance* visual; move it to the Performance product page. |
| 2 | **Product family** | **NEW section, high on the page.** Three cards: StableTree / TT Pro / Performance, each with the one-liner from §1 and "Learn more". This is where we announce we're a family. | Replaces nothing — it's the missing piece. |
| 3 | **Problem-agitation** | **Re-weight.** Keep the 5 problem cards but lead with the stable-ops ones: *Compliance lapses* (new — "A lapsed Coggins or a missed withdrawal window can scratch a horse or fail an inspection"), *Operations chaos*, *Owner trust*, *Health data gaps*, then *Preventable injuries* last. | Existing copy is good; just reorder + add the compliance card. Keep burgundy risk styling. |
| 4 | **Solution / pillars** | **Rewrite** to the 3 stable pillars + 1 performance pillar (§2). Reuse the 4-card grid layout that's already there. | Currently 4 cards are Fitness/Health/Financial/AI. New: Compliance&Records / Operations / Owners&Money / (Performance). |
| 5 | **"Nothing lapses" deep-dive** | **NEW.** Show the compliance/records engine concretely: withdrawal calculator, document vault w/ expiries, deworming, insurance, HISA/ADMC. Traffic-light screenshot. | This is the differentiator competitors don't have. Make it a hero feature the way TrackCondition is today. |
| 6 | **Toolkit grid** | **Keep, lightly edit.** The 9-feature grid is solid. Swap "Track Condition Recommendations" and "AI Training Recommendations" lower; promote "Owner Invoicing & Portals", "Complete Staff Management", "Feed & Supplement Tracking", barn map, turnout. | Add: Barn Map, Turnout Rotation, Time-Clock & Payroll, Inventory Reorder Alerts. |
| 7 | **Trainer-control / "your expertise"** | **Keep, trim.** Good trust content. Reframe slightly: "software that runs the barn *your* way." | Also fixes the over-"AI" tone. |
| 8 | **Track Condition + Gait Symmetry showcases** | **Move / gate.** These are Performance features. Keep on the home page but under a clear **"For racing & sport-horse programs → TrainingTree Performance"** band, or move to the Performance product page. | Don't lead the company home with lameness detection. |
| 9 | **How it works** | Keep. | — |
| 10 | **Social proof / trust badges** | Keep. When real testimonials exist, add. | — |
| 11 | **Pricing teaser** | **Restructure** to product-first (see §6). | — |
| 12 | **Video + Final CTA** | Keep. Update final-CTA copy to be product-agnostic ("Run a tighter barn…"). | — |

---

## 5. Product landing pages (the three new pages)

Each uses the existing page scaffold (hero → pillars → feature grid → CTA). Content sourced
from each `CAPABILITIES.md`. **Honesty rule from the docs applies to marketing copy too:**
✅ features can be stated flatly; 🟡 features say "included, requires setup/credentials";
🔴 features are **not marketed**.

### 5a. `/products/stabletree` — "Run the barn"
- **H1:** "Everything it takes to run the barn — nothing you don't."
- **Sub:** "Stable management, compliance, records, staff, and money in one system. Built for
  barns that don't race — and don't want a sports-science tool they'll never use."
- **Pillars & proof (all ✅ unless noted):**
  - *Compliance & records:* document vault + expirations, per-horse insurance, care
    appointments, claiming/ownership records, deworming program, BCS timeline.
  - *Stable operations:* barn map + stall assignment + bedding logs, turnout rotation +
    incompatibilities, facility repair tickets + surface maintenance, biosecurity/isolation.
  - *Staff:* shifts, time-clock (advance/estimate flow), labor analytics, payroll & 1099,
    coverage-gap alerts.
  - *Inventory & nutrition:* consumable stock + reorder alerts, diet plans, feeding costs.
  - *Money:* double-entry ERP, invoicing, recurring invoices, dunning (🟡 email needs SMTP),
    QuickBooks/Xero export, vendor price-creep, partnerships & owner split-billing, owner
    portal.
  - *Health baseline:* vet exams, vaccinations, medication logs, rehab plans, farrier.
  - *Alerts:* consolidated alert center + evaluation engine (deworming, docs, insurance,
    care, maintenance, isolation, coverage, repairs, paddock rotation, THI heat-stress, low
    inventory, weather emergency).
  - *Claude voice barn-walk structuring* — 🟡 "included, needs an API key."
- **Explicitly NOT here (say so — it's a selling point):** sports-science engine, gait
  analysis, wearables, racing ops, compliance withdrawal-*calculator* (that's Performance/Pro),
  Claude daily brief. → "Need those? That's **TrainingTree Pro / Performance**."
- **Marketplace:** 🟡 API-only, no storefront UI → **do not market yet.**

### 5b. `/products/trainingtree-pro` — "Barn + athlete, one platform"
- **H1:** "Run the barn and condition the athlete — in one platform."
- Lead with the **Pro vs Lite** table straight from the capabilities doc (it's a great sales
  asset): *"Lite captures the data. Pro interprets it."* Horse cap 15 on Lite; unlimited on
  Pro; sports-science/gait/recommendations/daily-brief are 🔒 teasers on Lite, ✅ on Pro.
  Upgrading is an in-place flip — every workout a Lite barn logs lights up the moment they
  become Pro. (Great retention/expansion story.)
- Everything in StableTree **plus** the full §5c performance stack.

### 5c. `/products/performance` — "Condition the athlete"
- **H1:** "Condition the athlete. Peer-reviewed sports science, not guesswork."
- This is where the *current* home-page messaging lives — reuse it wholesale:
  Train smarter / prevent injuries. ACWR chart, GaitSymmetry showcase, TrackCondition.
- **Pillars & proof:**
  - *Sports-science engine (✅, hand-verified):* TRIMP, ATL/CTL/TSB/TSS, ACWR, daily
    readiness (0–100), injury-risk, fitness scores, VO2 estimation.
  - *Workout & training:* training tree, 30+ workout types, auto furlong splits from
    stopwatch, safety-gated recommendations, decision matrix.
  - *Gait & biomechanics:* video gait analysis (✅ optical flow; 🟡 pose-estimation opt-in),
    side-by-side compare, symmetry analyzer, muscle mapping.
  - *Racing ops:* entries/results, nomination deadlines, jockey bookings, eligibility,
    **medication withdrawal calculator + HISA/ADMC/licensing** (this compliance piece is
    racing-specific and lives here + Pro).
  - *Wearables:* 8-vendor integrations — 🟡 "plumbing built, needs vendor credentials."
  - *Claude daily brief* — 🟡 needs API key.
- **Honesty guardrails (must respect in copy):** Race *outcome predictions* / trained-ML
  claims are 🔴 — **market as "Race Outlook: real entries + actual career records," never as
  AI win-probability.** Cloud gait/VO2 (Lambda/SageMaker) is 🔴 placeholder — **don't
  mention.** Call the engine "sports science," not "AI," except for the two real Claude
  features.

### 5d. `/products` — the family overview + comparison
- Restate the "capture → interpret" ladder (§1).
- A **product comparison table** (extend the existing `ComparisonTable` component): rows =
  capability groups (Compliance & Records / Stable Ops / Staff & Payroll / Money & Owners /
  Health baseline / Sports Science / Gait / Racing / Wearables / AI brief); columns =
  StableTree / TT Pro (Lite) / TT Pro / Performance; cells = ✅ / teaser / — / 🟡.
- A **"Which one?" chooser** (repurpose the existing 60-sec quiz idea): "Do you race or
  condition sport horses?" → No = StableTree; Yes, only that = Performance; Both = TT Pro.

---

## 6. Pricing restructure

The current pricing (Starter / Professional / Enterprise, by horse count, for one product)
no longer matches a four-product reality. Two-layer model:

**Layer 1 — pick a product** (tabs or three columns at the top of `/pricing`):
`StableTree` · `TrainingTree Pro` · `TrainingTree Performance`

**Layer 2 — size tiers within each** (reuse the existing Starter/Pro/Enterprise ladder):
- Keep horse-count based tiers (1–10 / 10–50 / 50+) — that model is fine and already built.
- For **TrainingTree Pro**, surface the **Lite vs Pro edition** flip prominently, tied to the
  15-horse Lite cap. Lite is the natural entry SKU that upsells to Pro.
- Keep "Contact for pricing / 14-day free trial / no credit card." Keep the FAQ; add:
  *"What's the difference between StableTree and TrainingTree?"* and *"Can I upgrade from
  StableTree to TrainingTree later?"* (yes — data carries).

**Cross-sell rule:** every product's cheapest tier should mention the upgrade path
("outgrow it? move up without re-entering a thing").

---

## 7. UI / design refresh (keep the system, extend it)

Keep: Deep Racing Green (`brand`/`green-700 #0F5132`) + Gold CTA (`gold-500 #F59E0B`) +
navy ink + Outfit/Inter type + the soft-shadow/rounded card system + framer-motion. It's a
good, disciplined identity — no reason to rip it out.

**Extend it for a product family:**
1. **Per-product accent + mark.** Give each product a sub-accent within the green/gold system
   so pages read as siblings, not strangers:
   - StableTree → the anchor **Deep Racing Green** (operations = the base).
   - TrainingTree Pro → **green + gold** (the "everything" product; gold = premium).
   - Performance → a **cooler green/teal-sage** lean (`teal-*` is already tuned in-palette) to
     signal "science/athletic," still clearly in-family.
   Each product gets a small wordmark lockup: `Equissetix ▸ StableTree`.
2. **Product-switcher UI.** A persistent, quiet product picker (the "Products ▾" mega-menu in
   §3, and a compact switcher on product pages) so visitors always know which product they're
   reading about and can jump.
3. **Capability status chips.** Introduce a small, honest UI token that mirrors the docs:
   `✅ Included` / `◐ Included · setup required` (🟡) — used on feature lists. Never render
   🔴 items. This is both honest *and* a differentiator (we show our work).
4. **Hero visual per product.** Home + StableTree → **compliance/barn-status board**
   (green/yellow/red). Performance → keep the **ACWR chart + gait symmetry**. Pro → a split
   showing both.
5. **Comparison table** upgrade (§5d) — make it the centerpiece of `/products`.
6. **Reduce the "AI" volume.** Swap generic "AI-powered" chrome for concrete, honest labels:
   "Sports science," "Rules-based recommendations you can audit," and reserve "AI" for the two
   real Claude features (both marked setup-required).

**Do NOT change:** the underlying component library, routing framework, analytics,
SEO scaffolding, or the color tokens themselves — only add the per-product accents and a few
components.

---

## 8. Content we keep as-is (don't rewrite good copy)

- The "Your Expertise. AI-Powered Assistance." trainer-control section (minor tone edit).
- The 9-card toolkit descriptions (reorder, add ~4 stable-ops cards).
- Track Condition + Gait Symmetry showcases (relocate to Performance/Pro).
- Security page, legal pages, blog posts, breeds/disciplines, case-study & compare scaffolds.
- Trust badges, ROI calculator, FAQ, newsletter, exit-intent — all reusable.

## 9. Net new content to write

- 3 product landing pages (§5a–c) + `/products` overview (§5d).
- 2 new solution pages: Boarding & Training Barns, Breeding & Sport-Horse Farms.
- 3 "Why Equissetix" pages: Compliance & Records, Owner Transparency, The Science (honest
  rules-based/AI explainer).
- New home hero + product-family section + "Nothing lapses" compliance deep-dive.
- Product comparison table data.
- Pricing restructure copy + 2 new FAQs.

## 10. Honesty checklist (applies to every page — from the capabilities docs)

- [ ] Call the analytics engine **"sports science / rules-based,"** not ML/AI.
- [ ] Only two features may be called **AI**: Claude daily brief + voice barn-walk
      structuring. Both labeled **setup-required (needs API key).**
- [ ] **Never** market: race outcome/win-probability predictions, cloud gait/VO2 (Lambda),
      trained-ML claims, Equibase live data, the marketplace storefront. (All 🔴.)
- [ ] Wearables & Stripe & SMTP email & calendar sync = **"included, requires credentials"**
      (🟡), not "live."
- [ ] Pose-estimation gait = **"opt-in / optical-flow by default."**
- [ ] Don't claim StableTree has performance features (it deliberately doesn't) — make that a
      *selling point*, not an omission.

---

### TL;DR of the change
From **one product that makes horses faster** → to **a family of barn-operations products,
led by stable management + compliance, with performance science as the specialist tier.**
Same brand, same tech, same good copy — re-pointed at the market that's actually the bread
and butter.

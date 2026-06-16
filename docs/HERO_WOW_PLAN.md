# Homepage Hero — "Wow" Plan

> **Goal:** Make the Equissetix homepage hero deliver a genuine "wow" the moment it loads — the kind of
> polish that makes a professional horse trainer think *"these people are serious."* Respectfully
> premium, not gimmicky.
>
> **Direction chosen:** Premium & data-driven (sleek, confident, enterprise-grade — animated stats,
> live-feeling dashboard, smooth reveals). Scope: **homepage hero first.**
>
> **Brand:** Deep Racing Green `#0F5132` + gold `#F59E0B`. Audience: pro equine trainers, owners, vets, facilities.
> **Stack:** React 18 + TS + Vite + Tailwind + Framer Motion. Hero lives in `src/pages/Home.tsx` (lines ~164–331).

---

## Improved prompt (reusable)

> **Goal:** Make the Equissetix website deliver a genuine "wow" the moment it loads — premium, not gimmicky.
>
> **Context:** React 18 + TS + Vite + Tailwind + Framer Motion site (SEO/perf/assets done — see
> `NEXT_LEVEL_PLAN.md`). Brand = Deep Racing Green `#0F5132` + gold `#F59E0B`. Audience = professional
> equine trainers, owners, vets, facilities.
>
> **Do:**
> 1. Audit the current experience first — run the site, look at the hero + key pages, say what's flat
>    *before* changing anything.
> 2. Propose 3–5 high-impact "wow" moves ranked by impact-vs-effort, one-line rationale each. Let me pick.
> 3. Keep it fast and tasteful — no layout shift, respect `prefers-reduced-motion`, mobile-first, accessible.
>
> **Don't:** redesign the brand, add deps without flagging them, or break the perf budget.

---

## Audit — what's holding the hero back

1. **The dashboard is static after load.** Bars animate in once, then freeze. A "data-driven" platform's
   hero should feel *alive* — like watching real telemetry. Right now it's a screenshot that animates on mount.
2. **The "94% / 1.2 / High" stats are hardcoded text.** No count-up, no movement. The single most
   effective "wow" for a data product is numbers that *animate to their value* — reads as live.
3. **A wall of 9 colored-dot feature labels** competes with the headline and dilutes the premium feel.
   Enterprise heroes show *less*, more confidently.
4. **`bg-${bar.color}-500` is a dynamic Tailwind class** — purged in production builds, so the chart bars
   may render colorless on the live site. This is a latent bug, not just polish.
5. **No depth.** Flat cards on a flat gradient. Premium = subtle layering, glass, glow, a sense of 3D.

---

## Proposed "wow" moves (ranked by impact ÷ effort)

| # | Move | Why it wows | Effort |
|---|------|-------------|--------|
| 1 | **Live count-up stats** (94%, ACWR 1.2, Readiness) animating on load + a subtle re-pulse | Instantly reads "real-time data." Highest ROI. | Low |
| 2 | **Self-animating dashboard** — bars that gently breathe/re-sample, a sweeping "live" indicator dot, a moving trend line | Turns the screenshot into a living product demo | Med |
| 3 | **Glassmorphic depth + glow** on the dashboard card, soft floating shadow, layered accent cards behind it | Premium enterprise polish | Low |
| 4 | **Fix the dynamic-color chart bug** + tasteful gradient bars | Correctness + better looking | Low |
| 5 | **Tighten the feature list** — collapse 9 dots into 3–4 confident pillars | Less clutter, more authority | Low |

All respecting `prefers-reduced-motion` and zero layout shift.

---

## Recommended execution order

1. **First pass (build together): #1 + #3 + #4** — biggest visible jump for least risk, and #4 fixes a
   real prod bug while we're in there.
2. React to the first pass.
3. **Second pass: #2** (heavier self-animating dashboard).
4. **Optional: #5** (tighten feature list).

---

## Acceptance

- Hero stats count up to their values on load; numbers feel "live."
- Dashboard card has visible depth (glass/glow/layered shadow) — no longer flat.
- Chart bars render correctly in `npm run build` output (no purged dynamic colors).
- `prefers-reduced-motion` disables/realizes motion instantly; no layout shift (CLS ~0).
- `npm run build` passes (tsc + vite). Mobile layout intact.

**Files:** `src/pages/Home.tsx` (hero section ~164–331); possibly a small reusable `CountUp`/animation helper.

_Created: 2026-06-16._

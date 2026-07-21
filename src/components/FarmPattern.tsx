import { motion } from 'framer-motion'
import { useMemo } from 'react'

/**
 * FarmPattern — horse & farm themed decorative background.
 *
 * Drop-in replacement for the old <GeometricPattern>: same props
 * (variant / opacity / color / animated) so it can be swapped 1:1 across
 * every Section without touching call sites.
 *
 * Motifs: horse silhouette, horseshoe, fence rails, rolling pasture hills,
 * oak leaf / grain. Rendered as a low-opacity, tiled SVG pattern that sits
 * behind content (pointer-events: none).
 *
 * `variant` maps onto a curated motif mix rather than an exact shape:
 *   horses    → horse silhouettes + the occasional horseshoe
 *   horseshoes→ horseshoes + grain
 *   fields    → rolling hills + fence rails (organic, calm)
 *   mixed     → a balanced scatter of everything (default)
 * (legacy variant names triangles/diamonds/lines are accepted and mapped so
 *  existing pages keep working.)
 */

type FarmVariant = 'horses' | 'horseshoes' | 'fields' | 'mixed'
type LegacyVariant = 'triangles' | 'diamonds' | 'lines'

interface FarmPatternProps {
  variant?: FarmVariant | LegacyVariant
  opacity?: number
  color?: string
  animated?: boolean
}

// ── Motif path data (drawn on a ~64×64 local box, scaled/positioned in-tile) ──

// Horseshoe (U opening downward) with nail holes — the hero motif. Bold, solid,
// reads at any size. Outer wall minus inner opening via even-odd fill.
const HORSESHOE_PATH =
  'M32 6c-11 0-20 9-20 22 0 11 4 22 9 28 1 1 3 1 4 0l3-3c1-1 1-3 0-4-4-5-7-13-7-21 0-8 4-13 8-13s8 5 8 13c0 8-3 16-7 21-1 1-1 3 0 4l3 3c1 1 3 1 4 0 5-6 9-17 9-28 0-13-9-22-20-22zm0 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm-9 12c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm18 0c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z'

// Wheat / grain stalk — central stem + three pairs of grains.
const WHEAT_PATH =
  'M31 60c0-8 0-16 0-24 0-10 1-20 1-30 0 0 1 0 2 0 0 10 1 20 1 30 0 8 0 16 0 24z' +
  'M32 8c3 2 5 5 5 9 0 4-2 7-5 9-3-2-5-5-5-9 0-4 2-7 5-9zM32 20c3 2 5 5 5 9 0 4-2 7-5 9-3-2-5-5-5-9 0-4 2-7 5-9z' +
  'M24 16c4 0 7 2 9 5-1 4-4 6-8 7-4 0-7-2-9-5 1-4 4-6 8-7zM40 16c-4 0-7 2-9 5 1 4 4 6 8 7 4 0 7-2 9-5-1-4-4-6-8-7z' +
  'M24 28c4 0 7 2 9 5-1 4-4 6-8 7-4 0-7-2-9-5 1-4 4-6 8-7zM40 28c-4 0-7 2-9 5 1 4 4 6 8 7 4 0 7-2 9-5-1-4-4-6-8-7z'

// Post-and-rail paddock fence — two rails on two posts.
const FENCE_PATH =
  'M4 26h56v6H4zM4 40h56v6H4zM12 16h6v34h-6zM46 16h6v34h-6z'

// Rolling pasture hills (two overlapping ridgelines) — subtle organic filler.
const HILLS_PATH =
  'M0 40c12-14 22-14 34 0 10 12 20 12 30 2v22H0zM0 52c14-10 26-8 40 2 8 6 16 6 24 0v10H0z'

interface Motif {
  d: string
  fillRule?: 'evenodd' | 'nonzero'
}

const MOTIFS: Record<string, Motif> = {
  horseshoe: { d: HORSESHOE_PATH, fillRule: 'evenodd' },
  wheat: { d: WHEAT_PATH },
  fence: { d: FENCE_PATH },
  hills: { d: HILLS_PATH },
}

// Which motifs appear (and how often) per variant. The horseshoe is the hero
// equestrian mark; wheat & fence carry the "farm" read.
const VARIANT_MIX: Record<FarmVariant, string[]> = {
  horses: ['horseshoe', 'horseshoe', 'wheat', 'horseshoe'],
  horseshoes: ['horseshoe', 'horseshoe', 'fence', 'horseshoe'],
  fields: ['fence', 'wheat', 'horseshoe', 'hills'],
  mixed: ['horseshoe', 'wheat', 'horseshoe', 'fence', 'horseshoe', 'wheat'],
}

const LEGACY_MAP: Record<LegacyVariant, FarmVariant> = {
  triangles: 'horses',
  diamonds: 'horseshoes',
  lines: 'fields',
}

// Deterministic pseudo-random so the scatter is stable across re-renders
// (avoids motifs "jumping" and keeps SSR/hydration consistent).
function makeRng(seed: number) {
  let s = seed
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
}

interface Placement {
  key: string
  motif: Motif
  x: number
  y: number
  scale: number
  rotate: number
  delay: number
}

const FarmPattern = ({
  variant = 'mixed',
  opacity = 0.05,
  color = 'currentColor',
  animated = true,
}: FarmPatternProps) => {
  const resolved: FarmVariant =
    (LEGACY_MAP as Record<string, FarmVariant>)[variant] ??
    (variant as FarmVariant)
  const mix = VARIANT_MIX[resolved] ?? VARIANT_MIX.mixed

  // These motifs read best a bit bolder than the old abstract shapes; lift the
  // caller's opacity ~1.8× with a visible floor so the theme actually shows.
  const effOpacity = Math.min(0.14, Math.max(opacity * 1.8, 0.055))

  const patternId = `farm-pattern-${resolved}`
  const TILE = 400

  // Lay motifs on a jittered grid inside one tile.
  const placements = useMemo<Placement[]>(() => {
    const rng = makeRng(resolved.length * 7919 + mix.length * 104729)
    const cols = 3
    const rows = 3
    const cell = TILE / cols
    const out: Placement[] = []
    let i = 0
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const name = mix[i % mix.length]
        const motif = MOTIFS[name]
        const jitterX = (rng() - 0.5) * cell * 0.5
        const jitterY = (rng() - 0.5) * cell * 0.5
        const isOrganic = name === 'hills' || name === 'fence' || name === 'wheat'
        out.push({
          key: `${name}-${r}-${c}`,
          motif,
          x: c * cell + cell / 2 + jitterX,
          y: r * cell + cell / 2 + jitterY,
          scale: isOrganic ? 1.3 + rng() * 0.4 : 1.15 + rng() * 0.7,
          rotate: isOrganic ? 0 : (rng() - 0.5) * 30,
          delay: rng() * 3,
        })
        i++
      }
    }
    return out
  }, [resolved, mix])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={TILE}
            height={TILE}
            patternUnits="userSpaceOnUse"
          >
            {placements.map((p) => {
              const inner = (
                <path
                  d={p.motif.d}
                  fill={color}
                  fillRule={p.motif.fillRule ?? 'nonzero'}
                  opacity={effOpacity}
                />
              )
              // Motif is drawn on a 64-box; center it, then place in the tile.
              const transform = `translate(${p.x} ${p.y}) rotate(${p.rotate}) scale(${p.scale}) translate(-32 -32)`
              return animated ? (
                <motion.g
                  key={p.key}
                  transform={transform}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 5,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {inner}
                </motion.g>
              ) : (
                <g key={p.key} transform={transform}>
                  {inner}
                </g>
              )
            })}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

export default FarmPattern

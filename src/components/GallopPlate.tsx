import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

/**
 * Muybridge's "The Horse in Motion" (Palo Alto, 19 June 1878), frames 1-11 of
 * the gallop. Public domain; cropped and toned from the Wikimedia Commons scan
 * of the original plate. Frame 12 (the mare standing) is left out so the loop
 * is one stride.
 *
 * Frames 2 and 3 are the ones that settled the argument: all four feet off
 * the ground at once. The caption says so when either is showing.
 *
 * All frames are stacked and toggled by opacity rather than swapping one
 * <img> src, so playback never flashes an unloaded frame. They load eagerly:
 * index.css has `img[loading="lazy"] { opacity: 1 }`, which outranks
 * `opacity-0` and left every lazy frame showing, so the top one covered the
 * animation. Playback waits until every frame has decoded.
 */

const FRAMES = Array.from({ length: 11 }, (_, i) => `/images/muybridge/gallop-${String(i + 1).padStart(2, '0')}.webp`)
const AIRBORNE = new Set([1, 2]) // zero-based: plate frames 2 and 3
const FRAME_MS = 170 // one stride in ~1.9 s: several times slower than life, so each frame can be seen
const START = 2 // open on plate frame 3, the airborne proof

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const GallopPlate = () => {
  const [frame, setFrame] = useState(START)
  const [playing, setPlaying] = useState(false)
  const timer = useRef<number | null>(null)

  // Start once every frame has decoded, unless the visitor asked for less motion.
  useEffect(() => {
    if (prefersReducedMotion()) return
    let cancelled = false
    let t: number | undefined
    Promise.all(
      FRAMES.map((src) => {
        const img = new Image()
        img.src = src
        return img.decode().catch(() => undefined)
      }),
    ).then(() => {
      if (!cancelled) t = window.setTimeout(() => setPlaying(true), 900)
    })
    return () => {
      cancelled = true
      window.clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (!playing) return
    timer.current = window.setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), FRAME_MS)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [playing])

  const pick = (i: number) => {
    setPlaying(false)
    setFrame(i)
  }

  const airborne = AIRBORNE.has(frame)

  return (
    <figure className="w-full">
      <div className="relative aspect-[1290/820] overflow-hidden rounded-sm ring-1 ring-white/15 bg-plate">
        {FRAMES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === frame ? `Muybridge's 1878 photograph of the mare Sallie Gardner at a gallop, frame ${i + 1} of 11` : ''}
            aria-hidden={i !== frame}
            width={720}
            height={457}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-none ${i === frame ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Overlays are absolutely positioned and fixed-width, so nothing they
            show can move the layout. */}
        <span className="absolute left-3 bottom-3 whitespace-nowrap rounded-sm bg-ink/85 px-2 py-1 text-xs font-semibold text-white tabular">
          Frame <span className="inline-block w-[2ch] text-right">{frame + 1}</span> / 11
        </span>
        <span
          aria-hidden
          className={`absolute right-3 bottom-3 whitespace-nowrap rounded-sm bg-gold-400 px-2 py-1 text-xs font-semibold text-navy-900 ${airborne ? 'visible' : 'invisible'}`}
        >
          All four feet off the ground
        </span>
      </div>

      {/* Filmstrip: pick any frame; picking pauses playback */}
      <div className="mt-3 flex items-stretch gap-1.5">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause the gallop' : 'Play the gallop'}
          className="flex w-9 shrink-0 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <div className="grid flex-1 grid-cols-11 gap-1">
          {FRAMES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => pick(i)}
              aria-label={`Show frame ${i + 1}${AIRBORNE.has(i) ? ', all four feet off the ground' : ''}`}
              aria-pressed={i === frame}
              className={`relative overflow-hidden rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                i === frame ? 'ring-2 ring-gold-400' : 'opacity-55 hover:opacity-90'
              }`}
            >
              <img src={src} alt="" className="block aspect-[1290/820] w-full object-cover" />
              {AIRBORNE.has(i) && <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-gold-400" />}
            </button>
          ))}
        </div>
      </div>

      {/* One fixed caption. It used to swap text per frame, which changed its
          height and shifted the whole page several times a second. */}
      <figcaption className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
        Sallie Gardner at a gallop, Palo Alto, 19 June 1878. Nobody could say for certain whether a galloping horse
        ever has all four feet off the ground until Eadweard Muybridge photographed it. In frames 2 and 3, marked with
        gold dots, she does.
      </figcaption>
    </figure>
  )
}

export default GallopPlate

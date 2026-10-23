import { ReactNode } from 'react'
import { photos } from '../data/photos'
import { archive } from '../data/archive'
import DepthPhoto from './DepthPhoto'

/**
 * A scene: one picture pinned full-screen while its content scrolls over it,
 * until the next scene's picture slides up and takes over. The picture eases
 * from a slight zoom to rest across the scene (.scene-zoom in index.css);
 * archive pictures also come up from sepia.
 *
 * Children are stacked Beats. Each Beat is at least a screen tall, so the
 * picture holds while it passes.
 */

type Picture = { photo: keyof typeof photos } | { archive: keyof typeof archive }

type SceneProps = {
  picture: Picture
  alt: string
  /** CSS object-position, e.g. "50% 30%" */
  focus?: string
  /** where the shade sits so type over the picture stays readable */
  shade?: 'bottom' | 'left' | 'full'
  id?: string
  className?: string
  /** the first scene on a page loads its picture straight away */
  eager?: boolean
  children: ReactNode
}

const SHADES = {
  bottom: 'bg-gradient-to-t from-ink via-ink/55 to-ink/0',
  left: 'bg-gradient-to-r from-ink/90 via-ink/50 to-ink/0',
  full: 'bg-ink/60',
}

const source = (p: Picture) => {
  if ('photo' in p) {
    const name = photos[p.photo].name
    return { src: `/images/photos/${name}-1600.webp`, srcSet: `/images/photos/${name}-800.webp 800w, /images/photos/${name}-1600.webp 1600w`, aged: false }
  }
  const a = archive[p.archive]
  const base = `/images/archive/${a.name}`
  return { src: `${base}-${a.widths[0]}.webp`, srcSet: a.widths.map((w) => `${base}-${w}.webp ${w}w`).join(', '), aged: true }
}

export const Scene = ({ picture, alt, focus = '50% 50%', shade = 'bottom', id, className = '', eager, children }: SceneProps) => {
  const s = source(picture)
  return (
    <section id={id} className={`scene relative scroll-mt-20 bg-ink text-white ${className}`}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <img
          src={s.src}
          srcSet={s.srcSet}
          sizes="100vw"
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          className={`scene-zoom absolute inset-0 h-full w-full object-cover ${s.aged ? 'scene-aged' : ''}`}
          style={{ objectPosition: focus }}
        />
        {'photo' in picture && photos[picture.photo].depth && (
          <DepthPhoto
            src={`/images/photos/${photos[picture.photo].name}-${typeof window !== 'undefined' && window.innerWidth < 900 ? 800 : 1600}.webp`}
            depthSrc={`/images/photos/${photos[picture.photo].name}-depth.webp`}
            focus={focus}
            ratio={photos[picture.photo].ratio}
          />
        )}
        <div aria-hidden="true" className={`absolute inset-0 ${SHADES[shade]}`} />
      </div>
      <div className="relative z-10 -mt-[100svh]">{children}</div>
    </section>
  )
}

/** One screen of content inside a Scene. */
export const Beat = ({
  children,
  align = 'end',
  className = '',
}: {
  children: ReactNode
  /** vertical placement of the content on its screen */
  align?: 'start' | 'center' | 'end'
  className?: string
}) => (
  <div
    className={`container-custom flex min-h-[100svh] flex-col py-24 ${
      align === 'start' ? 'justify-start pt-32' : align === 'center' ? 'justify-center' : 'justify-end'
    } ${className}`}
  >
    {children}
  </div>
)

/** A reading pinned over a picture: a measured value with its label. */
export const Reading = ({
  label,
  value,
  note,
  compact = false,
  className = '',
}: {
  label: string
  value: string
  note: string
  /** the smaller size used in the row of readings on a phone */
  compact?: boolean
  className?: string
}) => (
  <div className={`bg-ink text-white ${compact ? 'px-3 py-2' : 'px-4 py-3'} ${className}`}>
    <p className={`${compact ? 'text-xs' : 'text-sm'} text-white/70`}>{label}</p>
    <p className={`tabular font-condensed font-extrabold leading-none ${compact ? 'text-2xl' : 'text-3xl'}`}>{value}</p>
    <p className={`mt-1 text-gold-300 ${compact ? 'text-xs leading-snug' : 'text-sm'}`}>{note}</p>
  </div>
)

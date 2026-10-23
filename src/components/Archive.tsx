/**
 * The archive: old photographs, watercolours and book plates, all public
 * domain, from public/images/archive. Sources are listed in data/archive.ts.
 *
 * ArchivePrint  a photograph or plate shown as a mounted print; it "develops"
 *               from faded sepia as it scrolls into view.
 * InkDrawing    a line drawing lifted off its page as ink only, so it sits on
 *               any background; it is drawn in, left to right, on scroll.
 */

import { archive, inks, type ArchiveId, type InkId } from '../data/archive'

type PrintProps = {
  id: ArchiveId
  alt: string
  caption?: string
  sizes?: string
  className?: string
  tone?: 'light' | 'dark'
}

export const ArchivePrint = ({ id, alt, caption, sizes = '(min-width: 1024px) 40vw, 100vw', className = '', tone = 'light' }: PrintProps) => {
  const a = archive[id]
  const base = `/images/archive/${a.name}`
  return (
    <figure className={className}>
      <div className={`p-2 sm:p-3 ${tone === 'dark' ? 'bg-white/10' : 'bg-white'}`}>
        <div className="relative overflow-hidden bg-plate" style={{ aspectRatio: String(a.ratio) }}>
          <img
            src={`${base}-${a.widths[0]}.webp`}
            srcSet={a.widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')}
            sizes={sizes}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="print-develop absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      {caption && (
        <figcaption className={`mt-3 text-sm leading-snug ${tone === 'dark' ? 'text-white/70' : 'text-navy-600'}`}>{caption}</figcaption>
      )}
    </figure>
  )
}

type InkProps = {
  id: InkId
  alt: string
  /** dark: chalk lines for the ink-green bands; light: ink lines for light pages */
  tone?: 'light' | 'dark'
  caption?: string
  className?: string
}

export const InkDrawing = ({ id, alt, tone = 'light', caption, className = '' }: InkProps) => {
  const d = inks[id]
  return (
    <figure className={className}>
      <img
        src={`/images/archive/${d.name}-${tone}.webp`}
        alt={alt}
        width={d.width}
        height={d.height}
        loading="lazy"
        decoding="async"
        className="ink-reveal h-auto w-full"
      />
      {caption && (
        <figcaption className={`mt-2 text-sm leading-snug ${tone === 'dark' ? 'text-white/60' : 'text-navy-600'}`}>{caption}</figcaption>
      )}
    </figure>
  )
}

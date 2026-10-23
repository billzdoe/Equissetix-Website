import { photos } from '../data/photos'

/**
 * A photograph from data/photos.ts, with an optional caption. The box holds the image's own
 * aspect ratio before it loads, so nothing shifts; `fill` lets a parent set the
 * shape instead (e.g. a full-bleed band) with object-cover cropping; a band drifts
 * gently as the page scrolls (.photo-drift in index.css).
 */

type Props = {
  id: keyof typeof photos
  alt: string
  caption?: string
  /** CSS object-position for cropped display, e.g. "50% 40%" */
  focus?: string
  /** fixed height classes for a band; omit to keep the photo's own ratio */
  fill?: string
  tone?: 'light' | 'dark'
  sizes?: string
  className?: string
  /** extra classes for the caption, e.g. container padding on a full-bleed band */
  captionClass?: string
  eager?: boolean
}

const Photo = ({ id, alt, caption, focus = '50% 50%', fill, tone = 'light', sizes = '(min-width: 1024px) 50vw, 100vw', className = '', captionClass = '', eager }: Props) => {
  const c = photos[id]
  const base = `/images/photos/${c.name}`
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-plate ${fill ?? ''}`} style={fill ? undefined : { aspectRatio: String(c.ratio) }}>
        <img
          src={`${base}-1600.webp`}
          srcSet={`${base}-800.webp 800w, ${base}-1600.webp 1600w`}
          sizes={sizes}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${fill ? 'photo-drift' : ''}`}
          style={{ objectPosition: focus }}
        />
      </div>
      {caption && (
        <figcaption className={`mt-2 text-sm leading-snug ${tone === 'dark' ? 'text-white/85' : 'text-navy-700'} ${captionClass}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default Photo

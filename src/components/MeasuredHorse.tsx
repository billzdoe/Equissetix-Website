import { photos } from '../data/photos'

/**
 * A running horse with its measurements drawn on: the hooves being tracked,
 * the ground they strike and the line its back travels, the way a side-on video clip is read. The SVG
 * uses the photo's 3:2 shape (150 by 100, hoof positions given as percent of
 * the frame), so the marks stay on the hooves at any width and circles stay round.
 *
 * Example values only. They stay inside what the video pipeline reports:
 * the gait read from stride frequency (canter band 1.9-2.4 Hz), strides
 * measured, and stride-to-stride consistency. Symmetry is not shown because
 * the canter is an uneven gait by nature; symmetry is read at the trot.
 * Marks are drawn in on scroll (.ink-reveal).
 */

const P = photos['canter-black']
const HOOVES: [number, number][] = [
  [25.5, 82.5],
  [35.5, 80.5],
  [48, 80],
  [60, 79.5],
]

const MeasuredHorse = ({ className = '' }: { className?: string }) => (
  <figure className={className}>
    <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: String(P.ratio) }}>
      <img
        src={`/images/photos/${P.name}-1600.webp`}
        srcSet={`/images/photos/${P.name}-800.webp 800w, /images/photos/${P.name}-1600.webp 1600w`}
        sizes="(min-width: 1280px) 1200px, 100vw"
        alt="A black horse cantering side-on across a dusty paddock, with its hooves and the line of its back marked"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <svg viewBox="0 0 150 100" preserveAspectRatio="none" className="ink-reveal absolute inset-0 h-full w-full" aria-hidden="true">
        {/* ground line through the footfalls */}
        <line x1="27" x2="102" y1="85.5" y2="85.5" stroke="#F59E0B" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
        {/* the span of hooves tracked in this frame */}
        <line x1="38.25" x2="90" y1="90" y2="90" stroke="#fff" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
        <line x1="38.25" x2="38.25" y1="88" y2="92" stroke="#fff" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
        <line x1="90" x2="90" y1="88" y2="92" stroke="#fff" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
        {/* the line the back travels over the stride */}
        <path d="M 45 31 Q 66 27 78 31 T 105 33" fill="none" stroke="#F59E0B" strokeWidth="0.45" strokeDasharray="1.2 0.8" vectorEffect="non-scaling-stroke" />
        {HOOVES.map(([x, y]) => (
          <circle key={x} cx={x * 1.5} cy={y} r="1.1" fill="none" stroke="#F59E0B" strokeWidth="0.45" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {/* labels sit in HTML so they stay sharp and readable */}
      <p className="absolute left-[24%] top-[91.5%] hidden bg-ink px-2 py-1 text-sm text-white sm:block">Hooves tracked</p>
      <p className="absolute left-[54%] top-[18%] hidden max-w-[16rem] bg-ink px-2 py-1 text-sm text-white sm:block">
        The back’s rise and fall, stride to stride
      </p>
    </div>
    <div className="grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-4">
      {[
        ['Gait', 'Canter', 'Read from the stride rate'],
        ['Stride frequency', '2.1 Hz', 'Typical of a canter'],
        ['Strides measured', '9', 'Across the clip'],
        ['Stride to stride', 'Steady', 'Little change in rhythm'],
      ].map(([label, value, note]) => (
        <div key={label} className="bg-ink px-4 py-4 text-white">
          <p className="text-sm text-white/70">{label}</p>
          <p className="tabular font-condensed text-3xl font-extrabold leading-none">{value}</p>
          <p className="mt-1 text-sm text-gold-300">{note}</p>
        </div>
      ))}
    </div>
    <figcaption className="mt-3 text-sm text-white/70">
      An example clip, read the way TrainingTree Pro reads a side-on phone video. Each clip is checked for frame rate
      and light before anything is measured.
    </figcaption>
  </figure>
)

export default MeasuredHorse

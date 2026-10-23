/**
 * Example gait readout, the way a video gait result reads in the app.
 * Only what video_gait_pipeline.py (optical_flow_v1) measures: stride
 * frequency, stride count, left-right symmetry and stride-to-stride
 * consistency, after the clip check (frame rate and light). Example data,
 * labelled as such. The stride strip is drawn in on scroll (.ink-reveal).
 */

// Left and right stride heights for the strip: near-even, as a sound trot.
const LEFT = [0.92, 0.95, 0.9, 0.94, 0.93, 0.96, 0.91, 0.94, 0.95, 0.92, 0.93, 0.95, 0.9, 0.94]
const RIGHT = [0.9, 0.93, 0.91, 0.92, 0.95, 0.92, 0.9, 0.93, 0.91, 0.94, 0.92, 0.9, 0.93, 0.91]

const W = 560
const H = 120
const MID = H / 2
const STEP = W / LEFT.length

const GaitReadout = ({ className = '' }: { className?: string }) => (
  <figure className={`bg-chalk p-5 text-navy-900 sm:p-6 ${className}`}>
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <p className="font-condensed text-2xl font-extrabold">Trot, filmed side-on</p>
      <p className="text-sm text-navy-500">Example clip</p>
    </div>

    <svg viewBox={`0 0 ${W} ${H}`} className="ink-reveal mt-4 h-auto w-full" role="img" aria-label="Fourteen strides, left side above the line and right side below, nearly equal in height">
      <line x1="0" x2={W} y1={MID} y2={MID} stroke="currentColor" strokeOpacity="0.25" />
      {LEFT.map((v, i) => (
        <rect key={`l${i}`} x={i * STEP + STEP * 0.2} y={MID - v * (MID - 6)} width={STEP * 0.6} height={v * (MID - 6)} fill="#0F2A20" />
      ))}
      {RIGHT.map((v, i) => (
        <rect key={`r${i}`} x={i * STEP + STEP * 0.2} y={MID} width={STEP * 0.6} height={v * (MID - 6)} fill="#F59E0B" />
      ))}
    </svg>
    <p className="mt-2 flex justify-between text-sm text-navy-600">
      <span>Left strides above the line</span>
      <span>Right strides below</span>
    </p>

    <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
      <div>
        <dt className="text-sm text-navy-600">Stride frequency</dt>
        <dd className="tabular font-condensed text-3xl font-extrabold">1.62 Hz</dd>
        <dd className="text-sm text-navy-600">Normal for this horse at the trot</dd>
      </div>
      <div>
        <dt className="text-sm text-navy-600">Left-right symmetry</dt>
        <dd className="tabular font-condensed text-3xl font-extrabold">0.97</dd>
        <dd className="text-sm text-navy-600">1.0 is perfectly even</dd>
      </div>
      <div>
        <dt className="text-sm text-navy-600">Strides measured</dt>
        <dd className="tabular font-condensed text-3xl font-extrabold">14</dd>
      </div>
      <div>
        <dt className="text-sm text-navy-600">Stride to stride</dt>
        <dd className="font-condensed text-3xl font-extrabold">Steady</dd>
      </div>
    </dl>
    <figcaption className="mt-5 text-sm text-navy-600">
      Clip check passed: the footage was good enough to measure. Taken from an ordinary phone video.
    </figcaption>
  </figure>
)

export default GaitReadout

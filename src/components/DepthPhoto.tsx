import { useEffect, useRef, useState } from 'react'

/**
 * A scene photograph with depth: as the page scrolls, near things (the
 * horses) move and grow more than far things (the rail, the trees), so the
 * picture reads as 3D. Billy, 2026-10-23: "make those photos appear 3d with
 * depth changes when we scroll".
 *
 * The depth maps are made offline with Depth Anything V2 Small (Apache-2.0),
 * one <photo>-depth.webp per photo, white = near. This is plain WebGL, no
 * library: one quad, one fragment shader that shifts each pixel by its depth.
 *
 * It sits over the ordinary <img>, which stays as the fallback: no WebGL,
 * reduced motion, or a texture that fails to load all leave the plain photo.
 */

const VERT = `
attribute vec2 p;
varying vec2 v;
void main() { v = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }
`

// u_cover maps canvas uv to image uv the way object-fit: cover with
// object-position does. u_t runs -1 (scene entering) to 1 (scene leaving).
const FRAG = `
precision mediump float;
varying vec2 v;
uniform sampler2D u_img;
uniform sampler2D u_depth;
uniform vec4 u_cover;
uniform float u_t;
void main() {
  vec2 uv = vec2(v.x, 1.0 - v.y) * u_cover.xy + u_cover.zw;
  float d = texture2D(u_depth, uv).r;
  vec2 c = uv - 0.5;
  // a slow push in across the scene, stronger for near things
  float zoom = 1.0 - (0.04 + 0.08 * d) * (u_t * 0.5 + 0.5);
  vec2 s = 0.5 + c * zoom;
  // near things rise faster than far ones as the page moves
  s.y += (d - 0.4) * 0.05 * u_t;
  s = clamp(s, 0.001, 0.999);
  gl_FragColor = texture2D(u_img, s);
}
`

type Props = {
  src: string
  depthSrc: string
  /** CSS object-position of the photo, e.g. "50% 25%" */
  focus: string
  /** the photo's width / height */
  ratio: number
  /** called once the depth picture is drawing, so the plain photo can step back */
  onReady?: () => void
}

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image()
    i.decoding = 'async'
    i.onload = () => resolve(i)
    i.onerror = reject
    i.src = src
  })

const DepthPhoto = ({ src, depthSrc, focus, ratio, onReady }: Props) => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = canvas.current
    if (!el) return
    let reduce = false
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch {
      /* old browsers: treat as no preference */
    }
    if (reduce) return
    const gl = el.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false })
    if (!gl) return

    let cancelled = false
    let frame = 0
    let visible = false
    const cleanup: (() => void)[] = []

    const shader = (type: number, code: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, code)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, shader(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uCover = gl.getUniformLocation(prog, 'u_cover')
    const uT = gl.getUniformLocation(prog, 'u_t')

    const texture = (unit: number, img: HTMLImageElement) => {
      const t = gl.createTexture()
      gl.activeTexture(gl.TEXTURE0 + unit)
      gl.bindTexture(gl.TEXTURE_2D, t)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img)
    }

    const [fx, fy] = focus.split(/\s+/).map((f) => parseFloat(f) / 100)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.round(el.clientWidth * dpr)
      const h = Math.round(el.clientHeight * dpr)
      if (el.width !== w || el.height !== h) {
        el.width = w
        el.height = h
        gl.viewport(0, 0, w, h)
      }
      // object-fit: cover -- the share of the image the canvas shows, and where
      const box = w / h
      const sx = box > ratio ? 1 : box / ratio
      const sy = box > ratio ? ratio / box : 1
      gl.uniform4f(uCover, sx, sy, (1 - sx) * (isNaN(fx) ? 0.5 : fx), (1 - sy) * (isNaN(fy) ? 0.5 : fy))
    }

    const draw = () => {
      frame = 0
      const section = el.closest('section') ?? el
      const r = section.getBoundingClientRect()
      const vh = window.innerHeight
      const t = Math.min(1, Math.max(0, (vh - r.top) / (r.height + vh)))
      gl.uniform1f(uT, t * 2 - 1)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    const schedule = () => {
      if (visible && !frame) frame = requestAnimationFrame(draw)
    }

    // Fetch the two pictures only when the scene is within a screen of view.
    const start = () => Promise.all([loadImage(src), loadImage(depthSrc)])
      .then(([img, depth]) => {
        if (cancelled) return
        texture(0, img)
        texture(1, depth)
        gl.uniform1i(gl.getUniformLocation(prog, 'u_img'), 0)
        gl.uniform1i(gl.getUniformLocation(prog, 'u_depth'), 1)
        resize()
        draw()
        setReady(true)
        onReady?.()

        const io = new IntersectionObserver(([e]) => {
          visible = e.isIntersecting
          schedule()
        })
        io.observe(el)
        const onResize = () => {
          resize()
          schedule()
        }
        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', onResize)
        cleanup.push(() => {
          io.disconnect()
          window.removeEventListener('scroll', schedule)
          window.removeEventListener('resize', onResize)
        })
      })
      .catch(() => {
        /* the plain photo stays */
      })
    const near = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        near.disconnect()
        start()
      },
      { rootMargin: '100% 0px' },
    )
    near.observe(el)
    cleanup.push(() => near.disconnect())

    return () => {
      cancelled = true
      if (frame) cancelAnimationFrame(frame)
      cleanup.forEach((f) => f())
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, depthSrc, focus, ratio])

  return (
    <canvas
      ref={canvas}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}

export default DepthPhoto

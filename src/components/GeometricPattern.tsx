import { motion } from 'framer-motion'

interface GeometricPatternProps {
  variant?: 'triangles' | 'diamonds' | 'lines' | 'mixed'
  opacity?: number
  color?: string
  animated?: boolean
}

const GeometricPattern = ({
  variant = 'mixed',
  opacity = 0.03,
  color = 'currentColor',
  animated = true
}: GeometricPatternProps) => {

  const Triangle = ({ x, y, rotation = 0, delay = 0 }: any) => (
    <motion.path
      d={`M ${x} ${y} L ${x + 40} ${y} L ${x + 20} ${y + 35} Z`}
      fill={color}
      opacity={opacity}
      initial={animated ? { opacity: 0, scale: 0 } : {}}
      animate={animated ? {
        opacity: opacity,
        scale: 1,
        rotate: rotation
      } : {}}
      transition={animated ? {
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      } : {}}
    />
  )

  const Diamond = ({ x, y, delay = 0 }: any) => (
    <motion.path
      d={`M ${x + 20} ${y} L ${x + 40} ${y + 20} L ${x + 20} ${y + 40} L ${x} ${y + 20} Z`}
      fill={color}
      opacity={opacity}
      initial={animated ? { opacity: 0 } : {}}
      animate={animated ? { opacity: [opacity, opacity * 1.5, opacity] } : {}}
      transition={animated ? {
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    />
  )

  const Line = ({ x1, y1, x2, y2, delay = 0 }: any) => (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="2"
      opacity={opacity}
      initial={animated ? { pathLength: 0 } : {}}
      animate={animated ? { pathLength: 1 } : {}}
      transition={animated ? {
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: "reverse"
      } : {}}
    />
  )

  const renderPattern = () => {
    switch (variant) {
      case 'triangles':
        return (
          <>
            {/* Grid of triangles - 8x6 grid */}
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => (
                <Triangle
                  key={`tri-${row}-${col}`}
                  x={col * 80}
                  y={row * 70}
                  rotation={Math.random() * 360}
                  delay={Math.random() * 2}
                />
              ))
            )}
          </>
        )

      case 'diamonds':
        return (
          <>
            {/* Grid of diamonds */}
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 7 }).map((_, col) => (
                <Diamond
                  key={`dia-${row}-${col}`}
                  x={col * 90}
                  y={row * 90}
                  delay={Math.random() * 2}
                />
              ))
            )}
          </>
        )

      case 'lines':
        return (
          <>
            {/* Diagonal and straight lines */}
            {Array.from({ length: 15 }).map((_, i) => (
              <Line
                key={`line-${i}`}
                x1={i * 50}
                y1={0}
                x2={i * 50 + 100}
                y2={600}
                delay={i * 0.1}
              />
            ))}
          </>
        )

      case 'mixed':
      default:
        return (
          <>
            {/* Mix of triangles and diamonds */}
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 6 }).map((_, col) => {
                const isTri = (row + col) % 2 === 0
                return isTri ? (
                  <Triangle
                    key={`shape-${row}-${col}`}
                    x={col * 100}
                    y={row * 90}
                    rotation={(row + col) * 45}
                    delay={Math.random() * 2}
                  />
                ) : (
                  <Diamond
                    key={`shape-${row}-${col}`}
                    x={col * 100}
                    y={row * 90}
                    delay={Math.random() * 2}
                  />
                )
              })
            )}

            {/* Add some diagonal lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <Line
                key={`diag-${i}`}
                x1={i * 100}
                y1={0}
                x2={i * 100 + 150}
                y2={600}
                delay={i * 0.2}
              />
            ))}
          </>
        )
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-100">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minHeight: '100%', minWidth: '100%' }}
      >
        <defs>
          <pattern
            id={`geometric-pattern-${variant}`}
            x="0"
            y="0"
            width="600"
            height="600"
            patternUnits="userSpaceOnUse"
          >
            {renderPattern()}
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#geometric-pattern-${variant})`}
        />
      </svg>
    </div>
  )
}

export default GeometricPattern

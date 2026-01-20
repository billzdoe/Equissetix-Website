import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Smartphone, Tablet } from 'lucide-react'

interface PlatformShowcaseProps {
  desktopImage: string
  mobileImage?: string
  tabletImage?: string
  title?: string
  description?: string
}

const AnimatedPlatformShowcase = ({
  desktopImage,
  mobileImage,
  tabletImage,
  title = "See TrainerTree Pro in Action",
  description = "Powerful desktop analytics, mobile QR scanning, seamless sync across all devices"
}: PlatformShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Parallax effects
  const yDesktop = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yMobile = useTransform(scrollYProgress, [0, 1], [150, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative py-24">
      <motion.div style={{ opacity, willChange: 'opacity' }} className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Device Showcase */}
        <div className="relative">
          {/* Desktop - Center */}
          <motion.div
            style={{ y: yDesktop }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-5xl mx-auto will-change-transform"
          >
            {/* Monitor Frame */}
            <div className="relative bg-charcoal-900 p-3 shadow-elevation">
              {/* Screen Bezel */}
              <div className="border-8 border-charcoal-800 relative overflow-hidden">
                {/* Screenshot */}
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    src={desktopImage}
                    alt="Desktop platform view"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Animated overlay elements to make it "alive" */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
                  />
                </div>
              </div>

              {/* Monitor Stand */}
              <div className="h-8 w-32 bg-charcoal-800 mx-auto mt-2" />
              <div className="h-2 w-48 bg-charcoal-900 mx-auto" />

              {/* Monitor Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-slate-600">
                <Monitor className="h-5 w-5" />
                <span className="font-semibold">Desktop Dashboard</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile - Right */}
          {mobileImage && (
            <motion.div
              style={{ y: yMobile }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 z-30 will-change-transform"
            >
              {/* Phone Frame */}
              <div className="relative bg-charcoal-900 p-3 shadow-2xl w-64">
                {/* Phone Notch */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-charcoal-900 z-40" />

                {/* Screen */}
                <div className="border-4 border-charcoal-800 overflow-hidden relative aspect-[9/19]">
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    src={mobileImage}
                    alt="Mobile app view"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Tap indicator animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute top-1/2 left-1/2 w-12 h-12 border-4 border-gold-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                {/* Home Button */}
                <div className="w-12 h-12 border-2 border-charcoal-700 rounded-full mx-auto mt-2" />

                {/* Mobile Label */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-slate-600 whitespace-nowrap">
                  <Smartphone className="h-5 w-5" />
                  <span className="font-semibold">Mobile App</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tablet - Left */}
          {tabletImage && (
            <motion.div
              style={{ y: yMobile }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute left-0 top-1/2 transform -translate-x-1/4 -translate-y-1/2 z-10 will-change-transform"
            >
              {/* Tablet Frame */}
              <div className="relative bg-charcoal-900 p-4 shadow-2xl w-80">
                <div className="border-6 border-charcoal-800 overflow-hidden aspect-[4/3]">
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    src={tabletImage}
                    alt="Tablet view"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Tablet Label */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-slate-600 whitespace-nowrap">
                  <Tablet className="h-5 w-5" />
                  <span className="font-semibold">Tablet View</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Floating Feature Tags */}
        <div className="mt-32 flex flex-wrap justify-center gap-4">
          {[
            'Real-time Sync',
            'Offline Support',
            'QR Code Scanning',
            'AI Insights',
            'Cloud Backup'
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-white border-2 border-teal-500 text-teal-700 font-semibold shadow-md"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AnimatedPlatformShowcase

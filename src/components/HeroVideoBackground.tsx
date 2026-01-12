import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface HeroVideoBackgroundProps {
  videoUrl?: string
  posterImage?: string
  gradientOverlay?: 'dark' | 'brand' | 'vibrant' | 'subtle'
  enableControls?: boolean
  autoPlay?: boolean
  loop?: boolean
  className?: string
}

const HeroVideoBackground = ({
  videoUrl = '/videos/hero-video.mp4',
  posterImage = '/images/hero-poster.jpg',
  gradientOverlay = 'vibrant',
  enableControls = true,
  autoPlay = true,
  loop = true,
  className = ''
}: HeroVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, will need user interaction
        setIsPlaying(false)
      })
    }
  }, [autoPlay])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Gradient overlay styles
  const gradientOverlays = {
    dark: 'bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/60 to-charcoal-900/80',
    brand: 'bg-gradient-to-br from-green-700/75 via-teal-500/60 to-blue-600/75',
    vibrant: 'bg-gradient-to-br from-green-700/70 via-transparent via-40% to-gold-500/70',
    subtle: 'bg-gradient-to-b from-cream-50/90 via-cream-50/70 to-cream-50/90'
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterImage}
        loop={loop}
        muted={isMuted}
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
        {/* Fallback */}
        Your browser does not support video playback.
      </video>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${gradientOverlays[gradientOverlay]}`} />

      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      {/* Video Controls */}
      {enableControls && isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 right-8 flex gap-3 z-10"
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 active:scale-95"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 active:scale-95"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </motion.div>
      )}

      {/* Loading Indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-charcoal-900 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  )
}

export default HeroVideoBackground

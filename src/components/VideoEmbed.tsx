import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoEmbedProps {
  videoId?: string
  platform?: 'youtube' | 'vimeo'
  thumbnail?: string
  title?: string
  className?: string
}

const VideoEmbed = ({ 
  videoId, 
  platform = 'youtube', 
  thumbnail,
  title = 'TrainingTree Demo',
  className = '' 
}: VideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const getVideoUrl = () => {
    if (!videoId) return null
    if (platform === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    }
    if (platform === 'vimeo') {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`
    }
    return null
  }

  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail
    if (platform === 'youtube' && videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }
    return null
  }

  if (!videoId) {
    // Placeholder for when video is not yet available
    return (
      <div className={`relative aspect-video bg-gradient-to-br from-brand-100 via-blue-100 to-purple-100 rounded-xl overflow-hidden border-2 border-brand-200 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-modern-lg">
              <Play className="h-10 w-10 text-white ml-1" />
            </div>
            <p className="text-lg font-semibold text-navy-900 mb-2">{title}</p>
            <p className="text-sm text-slate-600">Video coming soon</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative aspect-video rounded-xl overflow-hidden border-2 border-brand-200 ${className}`}>
      <AnimatePresence>
        {!isPlaying ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {getThumbnailUrl() ? (
              <img
                src={getThumbnailUrl()}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-100 via-blue-100 to-purple-100" />
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-blue-600 rounded-full flex items-center justify-center shadow-modern-lg group-hover:scale-110 transition-transform">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-lg mb-1">{title}</p>
              <p className="text-white/90 text-sm">Click to play</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-full"
          >
            <iframe
              src={getVideoUrl() || ''}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideoEmbed

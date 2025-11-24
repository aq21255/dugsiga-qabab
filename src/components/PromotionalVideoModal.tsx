'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Play, Volume2, VolumeX } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PromotionalVideoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string>('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const { language, t } = useLanguage()

  // List of available videos
  const videos = ['/video 1.mp4', '/promotional-video.mp4']
  
  // Function to get alternating video
  const getAlternatingVideo = () => {
    const lastVideo = localStorage.getItem('lastVideoPath')
    let selectedVideo = ''
    
    if (lastVideo) {
      // Alternate to the other video
      if (lastVideo === '/promotional-video.mp4') {
        selectedVideo = '/video 1.mp4'
      } else {
        selectedVideo = '/promotional-video.mp4'
      }
    } else {
      // First time - start with promotional-video
      selectedVideo = '/promotional-video.mp4'
    }
    
    console.log('Last video was:', lastVideo, 'Selected video:', selectedVideo)
    localStorage.setItem('lastVideoPath', selectedVideo)
    return selectedVideo
  }

  useEffect(() => {
    // Set initial timestamp when component mounts (user enters website)
    const pageLoadTime = localStorage.getItem('pageLoadTime')
    if (!pageLoadTime) {
      localStorage.setItem('pageLoadTime', Date.now().toString())
    }

    const checkAndShowVideo = () => {
      const pageLoadTime = localStorage.getItem('pageLoadTime')
      const lastShown = localStorage.getItem('promoVideoLastShown')
      const now = Date.now()
      const oneMinute = 60 * 1000 // 1 minute in milliseconds

      if (!pageLoadTime) {
        // Set initial page load time
        localStorage.setItem('pageLoadTime', now.toString())
        return
      }

      const timeSincePageLoad = now - parseInt(pageLoadTime)
      
      // Only show if 1 minute has passed since page load AND it hasn't been shown yet
      if (timeSincePageLoad >= oneMinute && !lastShown) {
        // Alternating video selection
        const selectedVideo = getAlternatingVideo()
        console.log('First time - Selected video:', selectedVideo)
        setCurrentVideo(selectedVideo)
        setIsOpen(true)
        localStorage.setItem('promoVideoLastShown', now.toString())
        // Reset page load time for next cycle
        localStorage.setItem('pageLoadTime', now.toString())
      } else if (lastShown) {
        // If already shown, check if 1 minute has passed since last shown
        const timeSinceLastShown = now - parseInt(lastShown)
        if (timeSinceLastShown >= oneMinute) {
          // Alternating video selection - switch to the other video
          const selectedVideo = getAlternatingVideo()
          console.log('Subsequent time - Selected video:', selectedVideo)
          setCurrentVideo(selectedVideo)
          setIsOpen(true)
          localStorage.setItem('promoVideoLastShown', now.toString())
          localStorage.setItem('pageLoadTime', now.toString())
        }
      }
    }

    // Don't check immediately - wait 10 seconds first
    const initialDelay = setTimeout(() => {
      checkAndShowVideo()
    }, 10000) // Wait 10 seconds before first check

    // Set up interval to check every 10 seconds
    const interval = setInterval(checkAndShowVideo, 10000) // Check every 10 seconds

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Set video properties for automatic playback with sound
      videoRef.current.muted = false
      videoRef.current.autoplay = true
      setIsMuted(false)
      
      // Force play immediately
      const forcePlay = () => {
        if (videoRef.current && isOpen) {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true)
              console.log('Video playing automatically')
            })
            .catch((error) => {
              console.log('Auto-play attempt failed, retrying...', error)
              // Retry after short delay
              setTimeout(() => {
                if (videoRef.current && isOpen) {
                  videoRef.current.play()
                    .then(() => {
                      setIsPlaying(true)
                      console.log('Video playing after retry')
                    })
                    .catch(() => {
                      console.log('Auto-play still failed')
                    })
                }
              }, 500)
            })
        }
      }

      // Try to play immediately
      forcePlay()

      // Also try when video can play
      const handleCanPlay = () => {
        if (videoRef.current && isOpen) {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true)
              console.log('Video playing on canplay event')
            })
            .catch(() => {})
        }
      }

      // Also try when video data is loaded
      const handleLoadedData = () => {
        if (videoRef.current && isOpen) {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true)
              console.log('Video playing on loadeddata event')
            })
            .catch(() => {})
        }
      }

      // Also try when video metadata is loaded
      const handleLoadedMetadata = () => {
        if (videoRef.current && isOpen) {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true)
              console.log('Video playing on loadedmetadata event')
            })
            .catch(() => {})
        }
      }

      videoRef.current.addEventListener('canplay', handleCanPlay, { once: true })
      videoRef.current.addEventListener('loadeddata', handleLoadedData, { once: true })
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true })

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay)
          videoRef.current.removeEventListener('loadeddata', handleLoadedData)
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
        }
      }
    } else if (!isOpen && videoRef.current) {
      // Pause when modal closes
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isOpen, currentVideo])

  const handleClose = () => {
    setIsOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  if (!isOpen) {
    console.log('Video modal is closed, isOpen:', isOpen)
    return null
  }

  console.log('Rendering video modal')

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-gradient-to-br from-white via-green-50/30 to-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label={language === 'ar' ? 'إغلاق' : 'Xidh'}
        >
          <X size={22} className="text-gray-700" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-xl md:text-2xl font-bold mb-1 ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'حفل تخرج' : 'Xaflada Qalin Jabinta'}
              </h2>
              <p className={`text-sm md:text-base opacity-90 ${language === 'ar' ? 'arabic-text' : ''}`}>
                {currentVideo === '/promotional-video.mp4' 
                  ? (language === 'ar' ? 'حفل تخرج أحد طلاب المدرسة' : 'Xaflada qalin jabinta ee mid ka mid ah ardayda dugsiga')
                  : (language === 'ar' ? 'حفل تخرج مؤسس ومدير المدرسة' : 'Xaflada qalin jabinta ee aasaaska iyo maamulaha dugsiga')
                }
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
                aria-label={isMuted ? (language === 'ar' ? 'تشغيل الصوت' : 'Dheh') : (language === 'ar' ? 'كتم الصوت' : 'Dheh')}
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-white" />
                ) : (
                  <Volume2 size={20} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative bg-black">
          <video
            key={currentVideo}
            ref={videoRef}
            className="w-full h-auto max-h-[60vh] pointer-events-none"
            controls={false}
            muted={false}
            loop
            playsInline
            autoPlay
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={(e) => {
              console.error('Video error:', e)
              // Show fallback if video fails to load
              const fallback = document.getElementById('video-fallback')
              if (fallback) {
                fallback.style.display = 'flex'
              }
            }}
            onClick={(e) => {
              // Prevent any click interactions
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {/* Video source - graduation ceremony video (alternating) */}
            <source src={currentVideo || getAlternatingVideo()} type="video/mp4" />
            {language === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو' : 'Browserkaagu ma taageero ciyaarista fiidiyowga'}
          </video>
          
          {/* Fallback message if video fails to load */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-600 to-green-700 text-white" style={{ display: 'none' }} id="video-fallback">
            <div className="text-center p-8">
              <p className={`text-xl font-bold mb-4 ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'فيديو حفل التخرج' : 'Fiidiyowga Xaflada Qalin Jabinta'}
              </p>
              <p className={`text-sm opacity-90 ${language === 'ar' ? 'arabic-text' : ''}`}>
                {language === 'ar' ? 'سيتم إضافة الفيديو قريباً' : 'Fiidiyowga waa la darsan doonaa'}
              </p>
            </div>
          </div>

          {/* Play/Pause Overlay Button - Only show if video is not playing after 3 seconds (hidden for auto-play) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
              <div className="bg-white/60 rounded-full p-6 shadow-2xl">
                <Play size={48} className="text-green-600 ml-1" fill="currentColor" />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-green-50 to-white p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={`text-sm text-gray-600 text-center sm:text-right ${language === 'ar' ? 'arabic-text' : ''}`}>
              {currentVideo === '/promotional-video.mp4'
                ? (language === 'ar' 
                    ? 'شاهد لحظات فخر وتكريم طلابنا في حفل التخرج'
                    : 'Daawado daawada sharaf iyo sharafinta ardaydeena ee xaflada qalin jabinta'
                  )
                : (language === 'ar' 
                    ? 'شاهد لحظات فخر وتكريم مؤسس ومدير المدرسة في حفل التخرج'
                    : 'Daawado daawada sharaf iyo sharafinta aasaaska iyo maamulaha dugsiga ee xaflada qalin jabinta'
                  )
              }
            </p>
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <span className={language === 'ar' ? 'arabic-text' : ''}>
                {language === 'ar' ? 'متابعة التصفح' : 'Sii Wado'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


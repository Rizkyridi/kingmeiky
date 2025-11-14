"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/images/IMG-20251114-WA0006.jpg",
  "/images/IMG-20251114-WA0007.jpg",
  "/images/IMG-20251114-WA0008.jpg",
  "/images/IMG-20251114-WA0009.jpg",
  "/images/IMG-20251114-WA0010.jpg",
  "/images/IMG-20251114-WA0011.jpg",
  "/images/IMG-20251114-WA0012.jpg",
  "/images/IMG-20251114-WA0013.jpg",
  "/images/IMG-20251114-WA0014.jpg",
  "/images/IMG-20251114-WA0016.jpg",
  "/images/IMG-20251114-WA0017.jpg",
  "/images/IMG-20251114-WA0018.jpg",
  "/images/IMG-20251114-WA0019.jpg",
  "/images/IMG-20251114-WA0020.jpg",
  "/images/IMG-20251114-WA0021.jpg",
  "/images/IMG-20251114-WA0022.jpg",
  "/images/IMG-20251114-WA0023.jpg",
  "/images/IMG-20251114-WA0024.jpg",
  "/images/IMG-20251114-WA0025.jpg",
  "/images/IMG-20251114-WA0026.jpg",
  "/images/WhatsApp Image 2025-11-14 at 19.24.02_7218d664.jpg",
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleNavigation = (newIndex: number) => {
    setIsTransitioning(true)
    setCurrentIndex(newIndex)
    setIsAutoPlay(false)
  }

  const goToPrevious = () => {
    handleNavigation((currentIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    handleNavigation((currentIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    handleNavigation(index)
  }

  const getVisibleIndices = () => {
    const indices = []
    for (let i = -2; i <= 2; i++) {
      indices.push((currentIndex + i + images.length) % images.length)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8">
      {/* Main Carousel Container */}
      <div className="w-full flex items-center justify-center gap-0 px-2 sm:px-4 perspective">
        {/* Left Navigation Button */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-110 z-30 -mx-2 sm:-mx-4"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Images Container - 3D perspective */}
        <div className="relative flex-1 flex items-center justify-center min-h-40 sm:min-h-56 md:min-h-80" style={{perspective: "1000px"}}>
          {visibleIndices.map((index, position) => {
            const isCenter = position === 2
            const offset = position - 2 // -2, -1, 0, 1, 2
            
            return (
              <div
                key={`${index}-${currentIndex}`}
                onClick={() => !isCenter && goToSlide(index)}
                className="absolute flex-shrink-0 transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${offset * 60}px) scale(${isCenter ? 1 : 0.65}) translateZ(${isCenter ? "0px" : "-100px"})`,
                  opacity: isCenter ? 1 : 0.6,
                  zIndex: isCenter ? 10 : 10 - Math.abs(offset),
                }}
              >
                <div
                  className={`relative ${
                    isCenter
                      ? "rounded-2xl shadow-2xl ring-2 ring-white/30"
                      : "rounded-2xl shadow-lg hover:ring-2 hover:ring-white/50"
                  } overflow-hidden flex-shrink-0 bg-black`}
                >
                  <div className="relative w-40 h-auto sm:w-60 md:w-80 lg:w-96">
                    <Image
                      src={images[index]}
                      alt={`Slide ${index + 1}`}
                      width={500}
                      height={700}
                      className={`w-full h-auto object-contain ${
                        isCenter ? "animate-fadeIn" : ""
                      }`}
                      priority={isCenter}
                    />
                  </div>
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-110 z-30 -mx-2 sm:-mx-4"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Image Counter */}
      <div className="text-white/70 text-xs sm:text-sm md:text-base">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Thumbnail Dots */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center px-2 sm:px-4 max-h-12 sm:max-h-16 overflow-y-auto">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full flex-shrink-0 ${
              index === currentIndex
                ? "bg-white w-2.5 h-2.5 sm:w-3 sm:h-3 shadow-lg"
                : "bg-white/30 w-1.5 h-1.5 sm:w-2 sm:h-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto Play Toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2"
      >
        {isAutoPlay ? (
          <>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
            Pause
          </>
        ) : (
          <>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </>
        )}
      </button>
    </div>
  )
}

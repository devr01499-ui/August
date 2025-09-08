'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'blur',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  // Generate blur placeholder
  const generateBlurDataURL = (w: number, h: number) => {
    if (typeof window === 'undefined') {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwQTFCMyMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDY2RkYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+'
    }
    
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, w, h)
      gradient.addColorStop(0, '#0A1B3C')
      gradient.addColorStop(1, '#0066FF')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)
    }
    return canvas.toDataURL()
  }

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width, height)

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={defaultBlurDataURL}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-electric-500 animate-pulse" />
      )}
    </div>
  )
}

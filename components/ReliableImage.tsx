'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ReliableImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  fallbackSrc?: string
}

export default function ReliableImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  fallbackSrc = '/images/placeholder.jpg'
}: ReliableImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setImgSrc(fallbackSrc)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-electric-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-electric-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        priority={priority}
        sizes={sizes}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}

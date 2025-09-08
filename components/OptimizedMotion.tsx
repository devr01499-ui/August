'use client'

import React, { ReactNode } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface OptimizedMotionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scaleIn' | 'float'
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
}

export default function OptimizedMotion({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true
}: OptimizedMotionProps) {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    triggerOnce
  })

  const shouldAnimate = triggerOnce ? hasIntersected : isIntersecting

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}ms`,
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform, opacity'
    }

    if (!shouldAnimate) {
      switch (animation) {
        case 'fadeIn':
          return { ...baseStyles, opacity: 0 }
        case 'slideUp':
          return { ...baseStyles, opacity: 0, transform: 'translate3d(0, 30px, 0)' }
        case 'slideDown':
          return { ...baseStyles, opacity: 0, transform: 'translate3d(0, -30px, 0)' }
        case 'scaleIn':
          return { ...baseStyles, opacity: 0, transform: 'translate3d(0, 0, 0) scale(0.9)' }
        case 'float':
          return { ...baseStyles, opacity: 0, transform: 'translate3d(0, 20px, 0)' }
        default:
          return { ...baseStyles, opacity: 0 }
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale(1)'
    }
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`gpu-accelerated ${className}`}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  )
}

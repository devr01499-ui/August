'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero.jpg',
        '/images/hr-consultancy.jpg',
        '/images/customer-support.jpg',
        '/images/lead-generation.jpg',
        '/images/tech-support.jpg',
        '/images/data-processing.jpg',
        '/images/it-solutions.jpg'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      const lazyImages = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })

      lazyImages.forEach(img => imageObserver.observe(img))
    }

    // Optimize animations for performance
    const optimizeAnimations = () => {
      // Use requestAnimationFrame for smooth animations
      const animatedElements = document.querySelectorAll('.animate-float, .animate-glow')
      animatedElements.forEach(el => {
        const element = el as HTMLElement
        element.style.willChange = 'transform'
        element.style.transform = 'translateZ(0)' // Force GPU acceleration
      })
    }

    // Prefetch next page routes
    const prefetchRoutes = () => {
      const routes = ['/about', '/services', '/careers', '/partner', '/contact']
      routes.forEach(route => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = route
        document.head.appendChild(link)
      })
    }

    // Initialize optimizations
    preloadCriticalResources()
    lazyLoadResources()
    optimizeAnimations()
    prefetchRoutes()

    // Cleanup
    return () => {
      // Remove any added elements
      const addedLinks = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]')
      addedLinks.forEach(link => link.remove())
    }
  }, [])

  return null
}

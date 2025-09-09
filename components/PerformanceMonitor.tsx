'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Skip performance monitoring in development for faster loading
    if (process.env.NODE_ENV === 'development') {
      return
    }

    // Performance monitoring - only run on client side
    if (typeof window === 'undefined' || !('performance' in window)) {
      return
    }

    // Measure page load performance
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        const metrics = {
          // Core Web Vitals
          FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          LCP: 0, // Will be measured by LCP observer
          FID: 0, // Will be measured by FID observer
          CLS: 0, // Will be measured by CLS observer
          
          // Additional metrics
          TTFB: navigation.responseStart - navigation.requestStart,
          DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          LoadComplete: navigation.loadEventEnd - navigation.fetchStart,
          TotalSize: performance.getEntriesByType('resource').reduce((total, resource) => {
            return total + ((resource as any).transferSize || 0)
          }, 0)
        }

        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('🚀 Performance Metrics:', metrics)
        }

        // Send to analytics in production
        if (process.env.NODE_ENV === 'production') {
          // You can send these metrics to your analytics service
          // Example: analytics.track('page_performance', metrics)
        }
      }
    }

    // Measure LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('🎯 LCP:', lastEntry.startTime)
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Measure FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        console.log('⚡ FID:', (entry as any).processingStart - entry.startTime)
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      })
      console.log('📐 CLS:', clsValue)
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    // Cleanup observers
    return () => {
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  return null
}
// Service Worker for Performance Optimization
const CACHE_NAME = 'admirerx-v1'
const STATIC_CACHE = 'admirerx-static-v1'
const DYNAMIC_CACHE = 'admirerx-dynamic-v1'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/careers',
  '/contact',
  '/partner',
  '/images/hero.jpg',
  '/images/customer-support.jpg',
  '/images/data-processing.jpg',
  '/images/lead-generation.jpg',
  '/images/tech-support.jpg',
  '/images/hr-consultancy.jpg',
  '/fonts/poppins-variable.woff2',
  '/fonts/inter-variable.woff2'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)
            .map((cacheName) => caches.delete(cacheName))
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests
  if (url.origin !== location.origin) return

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache)
              })

            return response
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/')
            }
          })
      })
  )
})

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  // Handle offline form submissions
  console.log('Background sync triggered')
}

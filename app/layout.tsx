import type { Metadata } from 'next'
import './globals.css'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'

export const metadata: Metadata = {
  title: 'AdmirerX Private Limited - We Admire Your Dreams',
  description: 'Premium BPO solutions delivering efficiency, security, and excellence. HR & Recruitment, Customer Support, Lead Generation, Technical Helpdesk, Data Processing, and Custom BPO Solutions.',
  keywords: 'BPO, Business Process Outsourcing, HR Recruitment, Customer Support, Lead Generation, Technical Helpdesk, Data Processing, Custom Solutions, AdmirerX',
  authors: [{ name: 'AdmirerX Private Limited' }],
  creator: 'AdmirerX Private Limited',
  publisher: 'AdmirerX Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://august-three.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AdmirerX Private Limited - We Admire Your Dreams',
    description: 'Premium BPO solutions delivering efficiency, security, and excellence.',
    url: 'https://august-three.vercel.app',
    siteName: 'AdmirerX Private Limited',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'AdmirerX Business Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdmirerX Private Limited - We Admire Your Dreams',
    description: 'Premium BPO solutions delivering efficiency, security, and excellence.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero.jpg" as="image" />
        
        {/* DNS prefetch for external resources - removed Google Fonts for Turbopack compatibility */}
        
        {/* Preconnect to external domains - removed Google Fonts for Turbopack compatibility */}
        
        {/* Critical CSS inlined */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .font-heading { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .bg-navy-900 { background-color: #0A1B3C; }
            .text-white { color: #ffffff; }
            .text-electric { color: #0066FF; }
            .text-purple { color: #4B2CE1; }
            .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
            .from-electric { --tw-gradient-from: #0066FF; }
            .to-purple { --tw-gradient-to: #4B2CE1; }
            .animate-float { animation: float 6s ease-in-out infinite; }
            @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
            .gpu-accelerated { transform: translateZ(0); will-change: transform; }
            .critical-animate { animation: criticalFadeIn 0.6s ease-out forwards; }
            .critical-slide { animation: criticalSlideUp 0.8s ease-out forwards; }
            @keyframes criticalFadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes criticalSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          `
        }} />
      </head>
      <body className="antialiased">
        <PerformanceOptimizer />
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'

// Font optimization with preloading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
})

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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero.jpg" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inlined */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: var(--font-inter), system-ui, sans-serif; }
            .font-heading { font-family: var(--font-poppins), system-ui, sans-serif; }
            .bg-navy-900 { background-color: #0A2540; }
            .text-white { color: #ffffff; }
            .text-electric-500 { color: #0061FF; }
            .text-coral-500 { color: #FF4B4B; }
            .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
            .from-electric-500 { --tw-gradient-from: #0061FF; }
            .to-coral-500 { --tw-gradient-to: #FF4B4B; }
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
      <body className={`${inter.className} antialiased`}>
        <PerformanceOptimizer />
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  )
}
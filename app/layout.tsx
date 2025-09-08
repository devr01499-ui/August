import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'AdmirerX Private Limited — Engineering Digital Growth with Precision & Vision',
  description: 'Innovative solutions, seamless partnerships, and transformative experiences for clients and talent. Premium BPO services that drive digital transformation and business growth.',
  keywords: 'AdmirerX, BPO, Business Process Outsourcing, Customer Support, Data Processing, Lead Generation, Technical Support, HR Recruitment, Digital Transformation, Enterprise Solutions, Partnership',
  authors: [{ name: 'AdmirerX Private Limited' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com'),
  openGraph: {
    title: 'AdmirerX Private Limited — Engineering Digital Growth with Precision & Vision',
    description: 'Innovative solutions, seamless partnerships, and transformative experiences for clients and talent. Premium BPO services that drive digital transformation and business growth.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com',
    siteName: 'AdmirerX',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AdmirerX Private Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdmirerX Private Limited — Engineering Digital Growth with Precision & Vision',
    description: 'Innovative solutions, seamless partnerships, and transformative experiences for clients and talent.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A1B3C" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/poppins-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero.jpg" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .gpu-accelerated { transform: translate3d(0,0,0); will-change: transform, opacity; }
            .animate-on-scroll { opacity: 0; transform: translate3d(0,30px,0); }
            .animate-on-scroll.visible { opacity: 1; transform: translate3d(0,0,0); }
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

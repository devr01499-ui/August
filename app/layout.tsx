import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdmirerX — Premium BPO for the Modern Enterprise',
  description: 'Scalable expertise, global focus, enterprise-grade reliability. Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security.',
  keywords: 'AdmirerX, BPO, Business Process Outsourcing, Customer Support, Data Processing, Lead Generation, Technical Support, HR Recruitment, Enterprise Solutions',
  authors: [{ name: 'AdmirerX' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com'),
  openGraph: {
    title: 'AdmirerX — Premium BPO for the Modern Enterprise',
    description: 'Scalable expertise, global focus, enterprise-grade reliability. Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com',
    siteName: 'AdmirerX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdmirerX — Premium BPO for the Modern Enterprise',
    description: 'Scalable expertise, global focus, enterprise-grade reliability. Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security.',
  },
  icons: {
    icon: '/favicon.ico',
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

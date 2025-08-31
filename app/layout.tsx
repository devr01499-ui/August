import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADMIRERX - Innovative BPO and IT Solutions',
  description: 'Empower your business with innovative BPO and IT solutions. Unlock efficiency with AdmirerX - Customer Support, IT Solutions, and Data Entry Services.',
  keywords: 'BPO, IT Solutions, Customer Support, Data Entry, Business Process Outsourcing',
  authors: [{ name: 'ADMIRERX' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com'),
  openGraph: {
    title: 'ADMIRERX - Innovative BPO and IT Solutions',
    description: 'Empower your business with innovative BPO and IT solutions.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com',
    siteName: 'ADMIRERX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADMIRERX - Innovative BPO and IT Solutions',
    description: 'Empower your business with innovative BPO and IT solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

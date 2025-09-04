import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdmirerX – Unlock Efficiency with Customer Support, IT & Data Entry',
  description: 'AdmirerX helps businesses scale with Customer Support, IT, and Data Entry services powered by efficiency and technology.',
  keywords: 'AdmirerX, BPO, IT Solutions, Customer Support, Data Entry, Outsourcing',
  authors: [{ name: 'AdmirerX' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com'),
  openGraph: {
    title: 'AdmirerX – Unlock Efficiency with Customer Support, IT & Data Entry',
    description: 'AdmirerX helps businesses scale with Customer Support, IT, and Data Entry services powered by efficiency and technology.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://admirerx.com',
    siteName: 'AdmirerX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdmirerX – Unlock Efficiency with Customer Support, IT & Data Entry',
    description: 'AdmirerX helps businesses scale with Customer Support, IT, and Data Entry services powered by efficiency and technology.',
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

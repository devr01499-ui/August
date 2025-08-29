import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADMIRERX - Innovative BPO and IT Solutions',
  description: 'Empower your business with innovative BPO and IT solutions. Unlock efficiency with AdmirerX - Customer Support, IT Solutions, and Data Entry Services.',
  keywords: 'BPO, IT Solutions, Customer Support, Data Entry, Business Process Outsourcing',
  authors: [{ name: 'ADMIRERX' }],
  openGraph: {
    title: 'ADMIRERX - Innovative BPO and IT Solutions',
    description: 'Empower your business with innovative BPO and IT solutions.',
    type: 'website',
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

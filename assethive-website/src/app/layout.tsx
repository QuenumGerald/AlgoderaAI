import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AssetHive - Decentralized RWA Marketplace on Hedera',
  description: 'AssetHive is a decentralized marketplace on Hedera that enables users to buy and sell tokenized real-world assets (RWAs) using our native payment token.',
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

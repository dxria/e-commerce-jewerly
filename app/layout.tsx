import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: 'Athena',
  description: 'Jewerly store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

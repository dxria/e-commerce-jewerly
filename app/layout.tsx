import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import ProvidersWrapper from "@/components/ProvidersWrapper"


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
        <ProvidersWrapper>
          <Header />
          <Navbar />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  )
}

import { Chakra_Petch, Quicksand } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const chakraPetch = Chakra_Petch({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-chakra-petch',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'Nobphanolio',
  description: 'My personal portfolio and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.variable} ${quicksand.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow px-4 md:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
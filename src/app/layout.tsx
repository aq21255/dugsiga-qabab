import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import LanguageToggle from '@/components/LanguageToggle'
import WelcomeModal from '@/components/WelcomeModal'
import PromotionalVideoModal from '@/components/PromotionalVideoModal'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://khabbab.online'),
  title: 'Mu\'asasadda Khabab Binu Arrati | مدرسة خباب بن الأرت',
  description:
    'Mu\'asasadda Khabab Binu Arrati (مدرسة خباب بن الأرت) waxay bixisaa waxbarasho Islaami ah oo dhamaystiran: xifdinta Qur\'aanka, tajweed, luqadda Carabiga iyo tarbiya. Ku yaal Muqdisho, Soomaaliya.',
  keywords:
    'Mu\'asasadda Khabab Binu Arrati, مدرسة خباب بن الأرت, Madarasa Khabab, Islamic school Mogadishu, dugsiga Qur\'aanka, tajweed Somalia, Arabic courses Somalia',
  authors: [{ name: 'Mu\'asasadda Khabab Binu Arrati' }],
  creator: 'Mu\'asasadda Khabab Binu Arrati',
  publisher: 'Mu\'asasadda Khabab Binu Arrati',
  robots: 'index, follow',
  openGraph: {
    title: 'Mu\'asasadda Khabab Binu Arrati | مدرسة خباب بن الأرت',
    description:
      'Waxbarasho Islaami ah oo tayo sare leh: Qur\'aan, tajweed, luqadda Carabiga iyo tarbiya. Ku yaal Muqdisho, Soomaaliya.',
    url: 'https://khabbab.online',
    siteName: 'Mu\'asasadda Khabab Binu Arrati',
    locale: 'ar_SO',
    type: 'website',
    images: [
      {
        url: '/logo (6).png',
        width: 800,
        height: 800,
        alt: 'Mu\'asasadda Khabab Binu Arrati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mu\'asasadda Khabab Binu Arrati | مدرسة خباب بن الأرت',
    description: 'Waxbarasho Islaami ah oo dhammaystiran ee Muqdisho, Soomaaliya.',
    images: ['/logo (6).png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#166534',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppFloat />
            <LanguageToggle />
            <WelcomeModal />
            <PromotionalVideoModal />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

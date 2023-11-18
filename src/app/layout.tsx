import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import SkypeSupport from '@/components/SkypeSupport'

export const metadata: Metadata = {
  title: {
    template: '%s - Bets Services',
    default: 'Bets Services - Online Bahis Yazılımları',
  },
  description: 'Bets Services, Betco entegreli online bahis yazılımları geliştiren bir yazılım şirketidir.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <SkypeSupport></SkypeSupport>
      </body>
    </html>
  )
}

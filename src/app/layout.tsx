import type { Metadata } from 'next'

import { ThemeProvider } from '@/app/contexts/theme-provider'
import Header from '@/components/header/header'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { CartPorvider } from './contexts/cart-context'
import './globals.css'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        className={cn('min-h-screen bg-background antialiased', inter.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartPorvider>
            <div className="grid grid-rows-app mx-auto max-w-[1600px] w-full gap-5 p-8 font-sans">
              <Header />
              {children}
            </div>
          </CartPorvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

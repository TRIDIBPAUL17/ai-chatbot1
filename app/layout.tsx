import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Next.js AI Chatbot',
    template: `%s - Next.js AI Chatbot`
  },
  description: 'An AI-powered chatbot template built with Next.js and Vercel.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#333' },
    { media: '(prefers-color-scheme: dark)', color: '#000' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased bg-gradient-to-r from-[#1e1e1e] via-[#333] to-[#1e1e1e] min-h-screen transition-colors duration-500 ease-in-out',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header className="shadow-xl bg-gradient-to-r from-[#444] to-[#333] dark:bg-gradient-to-r dark:from-[#333] dark:to-[#222] transition-shadow duration-300 ease-in-out" />
            <main className="flex flex-col flex-1 p-6 md:p-12 bg-gradient-to-br from-[#222] to-[#333] dark:from-[#1e1e1e] dark:to-[#111] rounded-xl shadow-xl transition-transform duration-500 ease-in-out transform-gpu hover:scale-105">
              {children}
            </main>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}

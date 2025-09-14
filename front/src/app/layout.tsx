import Logo from '@/components/layout/logo'
import { CreateProjectButton } from '@/components/project/create'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'robots',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <header className='pt-6 container mx-auto flex items-center mb-6'>
          <Logo />

          <CreateProjectButton />
        </header>

        <main>{children}</main>

        <Toaster />
      </body>
    </html>
  )
}

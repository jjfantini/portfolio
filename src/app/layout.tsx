import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import  Navbar from '@/components/ui/navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'
import { baseUrl } from './sitemap'
import { RootProvider } from '../components/root-provider'
import { DATA } from '@/data/app-details'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: DATA.seo.title.default,
    template: DATA.seo.title.template,
  },
  description: DATA.description,
  openGraph: {
    title: DATA.seo.openGraph.title,
    description: DATA.seo.openGraph.description,
    url: baseUrl,
    siteName: DATA.seo.openGraph.siteName,
    locale: DATA.seo.openGraph.locale,
    type: DATA.seo.openGraph.type,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        // 'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
        <body className="antialiased mx-4 mt-8 bg-background dark:bg-background">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2">
            <RootProvider>
              <Navbar />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </RootProvider>
          </main>
        </body>
    </html>
  )
}

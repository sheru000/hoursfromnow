import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalculatorNav from '@/components/CalculatorNav';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hoursfromnow.tech'),
  title: {
    default: 'Hours From Now Calculator - Time Calculator Tools',
    template: '%s | HoursFromNow.tech',
  },
  description: 'Free online time calculators including hours from now, time duration, days calculator, and more. Fast, accurate, and easy to use time calculation tools.',
  keywords: 'time calculator, hours from now, hours calculator, time duration calculator, days from now, date calculator, time tools',
  authors: [{ name: 'HoursFromNow.tech' }],
  creator: 'HoursFromNow.tech',
  publisher: 'HoursFromNow.tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hoursfromnow.tech',
    siteName: 'HoursFromNow.tech',
    title: 'Hours From Now Calculator - Time Calculator Tools',
    description: 'Free online time calculators for all your time calculation needs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hours From Now Calculator',
    description: 'Free online time calculators for all your time calculation needs.',
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
  verification: {
    google: 'your-google-site-verification-code',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HoursFromNow.tech',
  url: 'https://hoursfromnow.tech',
  logo: 'https://hoursfromnow.tech/logo.png',
  description: 'Free online time calculation tools and calculators',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HoursFromNow.tech',
  url: 'https://hoursfromnow.tech',
  description: 'Free online time calculators including hours from now, time duration, and more',
  publisher: {
    '@type': 'Organization',
    name: 'HoursFromNow.tech',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://hoursfromnow.tech/time-calculators?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <CalculatorNav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

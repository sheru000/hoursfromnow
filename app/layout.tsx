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
  });

  export const metadata: Metadata = {
    metadataBase: new URL('https://hoursfromnow.tech'),
    title: {
      default: 'Hours From Now Calculator: Time in Hours and Minutes Calculator Tool',
      template: '%s | HoursFromNow.tech',
    },
    description: 'Hours From Now calculator can calculate any number of hours and minutes from now, including other tools time calculator, time duration calculator, days from today calculator, and more. Fast, accurate, and easy to use time calculation tools.',
    keywords: 'hours from now calculator, hours from now, time calculator, hours calculator, time duration calculator, days from today, date calculator, time tools',
    authors: [{ name: 'Hours From Now' }],
    creator: 'Hours From Now',
    publisher: 'Hours From Now',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: '/favicon.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://hoursfromnow.tech',
      siteName: 'Hours From Now',
      title: 'Hours From Now Calculator: Time Calculator Tool',
      description: 'Hours From Now Calculator can calculate any number of hours and minutes from now',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hours From Now Calculator',
      description: 'Hours From Now Calculator can calculate any number of hours and minutes from now',
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
  };

 const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hoursfromnow.tech/#organization",
  "name": "Hours From Now",
  "url": "https://hoursfromnow.tech",
  "logo": "https://hoursfromnow.tech/logo.png",
  "description": "Hours From Now Calculator can calculate any number of hours and minutes from now, Calculate 72 hours from now, 16 hours from now, 8 hours from now with this precise hours from now calculator and have more time calculation tools are days from today, months from today, weeks from today calculators. ",
  "sameAs": []
};


  const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hoursfromnow.tech/#website",
  "url": "https://hoursfromnow.tech/",
  "name": "Hours From Now",
  "alternateName": [
    "Hours From Now Calculator",
    "HoursFromNow.tech",
    "Hours From Now Tool",
    "Hours From Now Calculator Online",
    "Later time Calculator",
    "Hours Calculator"
  ],
  "description": "Hours From Now Calculator can calculate any number of hours and minutes from now, Calculate 72 hours from now, 16 hours from now, 8 hours from now with this precise hours from now calculator.",
  "inLanguage": "en-US",
  "publisher": {
    "@type": "Organization",
    "@id": "https://hoursfromnow.tech/#organization",
    "name": "Hours From Now",
    "url": "https://hoursfromnow.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hoursfromnow.tech/logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://hoursfromnow.tech/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hoursfromnow.tech/"
  }
};


  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
            strategy="beforeInteractive"
          />
          <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
            strategy="beforeInteractive"
          />
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

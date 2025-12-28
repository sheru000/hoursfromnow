import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';

const MonthsFromNowComponent = dynamic(() => import('@/components/MonthsFromNow'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
      <div className="animate-pulse text-blue-600">Loading calculator...</div>
    </div>
  ),
  ssr: false
});

export const metadata: Metadata = {
  title: 'Months From Today Calculator: Calculate Future Dates by Months',
  description: 'Calculate any number of months from today with our precise months from today calculator. Find out what date it will be 1, 3, 6, or 12 months from today. Perfect for planning, pregnancy tracking, and scheduling.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/months-from-today',
  },
  keywords: 'months from today, months calculator, future date calculator, months calculator, 1 month from today, 2 months from today, 3 months from today, 6 months from today, 12 months from today, pregnancy calculator, planning tool, months from today, what date will it be, calculate months ahead, months from today calculator, date planning tool',

  openGraph: {
    title: 'Months From today Calculator - Calculate Future Dates',
    description: 'Instantly calculate what date it will be any number of months from today. Fast, accurate, and mobile-friendly months-from-today calculator.',
    url: 'https://hoursfromnow.tech/months-from-today',
    type: 'website',
    siteName: 'Hours From Now',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Months From today Calculator',
    description: 'Calculate future dates by adding months to today. Perfect for planning and scheduling.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function MonthsFromNowPage() {
  return (
    <>
      <Script
        id="schema-months-from-today"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Months From today Calculator',
            url: 'https://hoursfromnow.tech/months-from-today',
            description: 'Calculate what date it will be any number of months from now. Simple, fast, and accurate free online date calculator.',
            applicationCategory: 'Utility',
            operatingSystem: 'All',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://hoursfromnow.tech/months-from-today',
            },
            creator: {
              '@type': 'Organization',
              name: 'Hours From Now',
              url: 'https://hoursfromnow.tech',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Hours From Now',
              url: 'https://hoursfromnow.tech',
            },
            potentialAction: {
              '@type': 'ViewAction',
              name: 'Calculate Months From Today',
              target: 'https://hoursfromnow.tech/months-from-today',
            },
          }),
        }}
      />

      <Script
        id="schema-months-from-today-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Hours From Now',
                    item: 'https://hoursfromnow.tech/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Months From Today',
                    item: 'https://hoursfromnow.tech/months-from-today',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <MonthsFromNowComponent />
    </>
  );
}

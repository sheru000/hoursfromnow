import DaysFromNow from '@/components/DaysFromNow';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Days From Now Calculator | Calculate Future Dates From Today',
  description: 'Calculate what date it will be any number of days from now with our free days from now calculator. Find future dates from 1 day to 365 days from now instantly.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/days-from-now',
  },
  keywords: 'days from now, days from now calculator, days from today calculator, what date will it be, future date calculator, date calculator, 30 days from now, 60 days from now, 90 days from now, 7 days from now, days ahead calculator',

  openGraph: {
    title: 'Days From Now Calculator - Calculate Future Dates',
    description: 'Instantly calculate what date it will be any number of days from now. Fast and accurate future date calculator.',
    url: 'https://hoursfromnow.tech/days-from-now',
    type: 'website',
    siteName: 'HoursFromNow.tech',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Days From Now Calculator - Calculate Future Dates',
    description: 'Calculate what date it will be any number of days from now with our accurate date calculator.',
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

export default function DaysFromNowPage() {
  return (
    <>
      <Script
        id="schema-daysfromnow"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Days From Now Calculator',
            url: 'https://hoursfromnow.tech/days-from-now',
            description: 'Calculate what date it will be any number of days from now. Simple, fast, and accurate free online date calculator.',
            applicationCategory: 'Utility',
            operatingSystem: 'All',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://hoursfromnow.tech/days-from-now'
            },
            creator: {
              '@type': 'Organization',
              name: 'Hours From Now',
              url: 'https://hoursfromnow.tech',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Hours From Now',
              url: 'https://hoursfromnow.tech'
            },
            potentialAction: {
              '@type': 'ViewAction',
              name: 'Calculate Days From Now',
              target: 'https://hoursfromnow.tech/days-from-now',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
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
                    name: 'Home',
                    item: 'https://hoursfromnow.tech/'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Days From Now Calculator',
                    item: 'https://hoursfromnow.tech/days-from-now'
                  }
                ]
              }
            ]
          })
        }}
      />

      <DaysFromNow />
    </>
  );
}

import HoursAgo from '@/components/HoursAgo';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hours Ago Calculator | Time Calculator - Calculate Past Times',
  description: 'Calculate what time it was any number of hours ago with our precise hours ago calculator. Find out the exact time from 1 hour ago to 100 hours ago instantly.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/hours-ago',
  },
  keywords: 'hours ago, hours ago calculator, time calculator, what time was it hours ago, time ago calculator, past time calculator, 24 hours ago, 12 hours ago, 8 hours ago, 48 hours ago, hours back calculator, time tracker',

  openGraph: {
    title: 'Hours Ago Calculator - Calculate Past Times',
    description: 'Instantly calculate what time it was any number of hours ago. Fast and accurate hours ago calculator.',
    url: 'https://hoursfromnow.tech/hours-ago',
    type: 'website',
    siteName: 'HoursFromNow.tech',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hours Ago Calculator - Calculate Past Times',
    description: 'Instantly calculate what time it was any number of hours ago with our accurate time calculator.',
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

export default function HoursAgoPage() {
  return (
    <>
      <Script
        id="schema-hoursago"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Hours Ago Calculator',
            url: 'https://hoursfromnow.tech/hours-ago',
            description: 'Calculate what time it was any number of hours ago. Simple, fast, and accurate free online time calculator for past times.',
            applicationCategory: 'Utility',
            operatingSystem: 'All',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://hoursfromnow.tech/hours-ago'
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
              name: 'Calculate Hours Ago',
              target: 'https://hoursfromnow.tech/hours-ago',
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
                    name: 'Hours Ago Calculator',
                    item: 'https://hoursfromnow.tech/hours-ago'
                  }
                ]
              }
            ]
          })
        }}
      />

      <HoursAgo />
    </>
  );
}

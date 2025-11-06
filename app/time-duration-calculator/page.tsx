import TimeDurationCalculator from '@/components/TimeDurationCalculator';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Time Duration Calculator | Calculate Time Between Two Times',
  description: 'Calculate the time duration between two times with our free time duration calculator. Find the difference in hours, minutes, and seconds instantly.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/time-duration-calculator',
  },
  keywords: 'time duration calculator, time difference calculator, calculate time between two times, hours between times, time interval calculator, elapsed time calculator, work hours calculator, time span calculator',

  openGraph: {
    title: 'Time Duration Calculator - Calculate Time Between Two Times',
    description: 'Instantly calculate the duration between two times. Free and accurate time duration calculator.',
    url: 'https://hoursfromnow.tech/time-duration-calculator',
    type: 'website',
    siteName: 'HoursFromNow.tech',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Time Duration Calculator - Calculate Time Between Two Times',
    description: 'Calculate the precise duration between any two times with our free time duration calculator.',
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

export default function TimeDurationCalculatorPage() {
  return (
    <>
      <Script
        id="schema-timeduration"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Time Duration Calculator',
            url: 'https://hoursfromnow.tech/time-duration-calculator',
            description: 'Calculate the duration between two times. Simple, fast, and accurate free online time duration calculator.',
            applicationCategory: 'Utility',
            operatingSystem: 'All',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://hoursfromnow.tech/time-duration-calculator'
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
              name: 'Calculate Time Duration',
              target: 'https://hoursfromnow.tech/time-duration-calculator',
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
                    name: 'Time Duration Calculator',
                    item: 'https://hoursfromnow.tech/time-duration-calculator'
                  }
                ]
              }
            ]
          })
        }}
      />

      <TimeDurationCalculator />
    </>
  );
}

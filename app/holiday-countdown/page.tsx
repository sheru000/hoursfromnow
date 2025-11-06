import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import HolidayCountdownContent from '@/components/content/HolidayCountdownContent';
import { Card } from '@/components/ui/card';

const HolidayCountdown = dynamic(() => import('@/components/HolidayCountdown'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
      <div className="animate-pulse text-blue-600">Loading holiday countdown...</div>
    </div>
  ),
  ssr: false
});

export const metadata: Metadata = {
  title: 'Holiday Countdown Calendar | How Many Days Until Christmas, Halloween, Thanksgiving',
  description: 'Track how many days until Christmas, Halloween, Thanksgiving, Valentine\'s Day, and all major holidays. Real-time countdown to every federal and cultural holiday with days, hours, minutes, and seconds remaining.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/holiday-countdown',
  },
  keywords: 'how many days until christmas, days till christmas, countdown to christmas, how many days until halloween, days till halloween, countdown to halloween, how many days until thanksgiving, days till thanksgiving, countdown to thanksgiving, how many days until valentines day, days till valentine, how many days until new year, countdown to new year, how many days until easter, days till easter, how many days until mothers day, days till mothers day, how many days until fathers day, days till fathers day, how many days until july 4th, days till 4th of july, holiday countdown, days until holidays, christmas countdown, halloween countdown, thanksgiving countdown',

  openGraph: {
    title: 'Holiday Countdown Calendar - Days Until Christmas, Halloween & More',
    description: 'Never miss a holiday! Track exactly how many days until Christmas, Halloween, Thanksgiving, and every major holiday with our live countdown calendar.',
    url: 'https://hoursfromnow.tech/holiday-countdown',
    type: 'website',
    siteName: 'HoursFromNow.tech',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Holiday Countdown Calendar',
    description: 'Track how many days until Christmas, Halloween, Thanksgiving, and all major holidays with real-time countdowns.',
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

export default function HolidayCountdownPage() {
  return (
    <>
      <Script
        id="schema-holiday-countdown"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Holiday Countdown Calendar',
            url: 'https://hoursfromnow.tech/holiday-countdown',
            description: 'Track how many days until Christmas, Halloween, Thanksgiving, and all major holidays with real-time countdown timers.',
            applicationCategory: 'Utility',
            operatingSystem: 'All',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://hoursfromnow.tech/holiday-countdown',
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
              name: 'View Holiday Countdown',
              target: 'https://hoursfromnow.tech/holiday-countdown',
            },
          }),
        }}
      />

      <Script
        id="schema-holiday-countdown-breadcrumb"
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
                    name: 'Holiday Countdown',
                    item: 'https://hoursfromnow.tech/holiday-countdown',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How many days until Christmas?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Christmas Day is celebrated on December 25th every year. Use our holiday countdown calendar to see exactly how many days, hours, minutes, and seconds remain until Christmas.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many days until Halloween?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Halloween is celebrated on October 31st every year. Our countdown shows the exact time remaining until Halloween in days, hours, minutes, and seconds.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many days until Thanksgiving?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Thanksgiving is celebrated on the fourth Thursday of November. Track the countdown to Thanksgiving with our real-time holiday calendar.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many days until Valentine\'s Day?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Valentine\'s Day is celebrated on February 14th every year. See exactly how many days until Valentine\'s Day with our live countdown timer.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <HolidayCountdown />

      <div className="mt-12 container mx-auto px-4 max-w-7xl">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-sm">
          <HolidayCountdownContent />
        </Card>
      </div>
    </>
  );
}

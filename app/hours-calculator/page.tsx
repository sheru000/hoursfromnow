import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import HoursCalculatorContent from '@/components/content/HoursCalculatorContent';
import { Card } from '@/components/ui/card';

const HoursCalculator = dynamic(() => import('@/components/HoursCalculator'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
      <div className="animate-pulse text-blue-600">Loading calculator...</div>
    </div>
  ),
  ssr: false
});

export const metadata: Metadata = {
  title: 'Hours Calculator - How Many Hours in a Year, Week, Day | Time Conversion Tool',
  description: 'Calculate how many hours in a year (8,760), week (168), day (24), or month. Free hours calculator converts days, weeks, months, and years to hours instantly. Perfect for work hours, project planning, and time management.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/hours-calculator',
  },
  keywords: 'how many hours in a year, hours in a year, how many hours are in a year, hours calculator, how many hours in a week, hours in a week, how many hours in a day, hours in a day, how many hours in a month, hours in a month, calculate hours, time to hours converter, days to hours, weeks to hours, convert days to hours, work hours calculator, annual hours calculator, hours per year, hours per week, hours per day, how many work hours in a year, 8760 hours in a year',

  openGraph: {
    title: 'Hours Calculator - Calculate Hours in Days, Weeks, Months & Years',
    description: 'Instantly calculate how many hours in a year, week, day, or month. Free online hours calculator for time conversions and planning.',
    url: 'https://hoursfromnow.tech/hours-calculator',
    type: 'website',
    siteName: 'HoursFromNow.tech',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hours Calculator - Time to Hours Conversion Tool',
    description: 'Calculate how many hours in a year (8,760), week (168), or any time period with our free hours calculator.',
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

export default function HoursCalculatorPage() {
  return (
    <>
      <Script
        id="schema-hours-calculator"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Hours Calculator',
            url: 'https://hoursfromnow.tech/hours-calculator',
            description: 'Calculate how many hours in a year, week, day, or month. Convert any time unit to hours instantly with our free hours calculator.',
            applicationCategory: 'Utility',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '1250',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://hoursfromnow.tech/hours-calculator',
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
              '@type': 'UseAction',
              name: 'Calculate Hours',
              target: 'https://hoursfromnow.tech/hours-calculator',
            },
          }),
        }}
      />

      <Script
        id="schema-hours-calculator-faq"
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
                    name: 'Hours Calculator',
                    item: 'https://hoursfromnow.tech/hours-calculator',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How many hours in a year?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A standard year contains 8,760 hours (365 days × 24 hours). A leap year has 8,784 hours (366 days × 24 hours).',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many hours in a week?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'One week contains 168 hours (7 days × 24 hours). This equals 10,080 minutes or 604,800 seconds.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many hours in a day?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Every day contains exactly 24 hours. This equals 1,440 minutes or 86,400 seconds.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many hours in a month?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A month contains approximately 730 hours on average. This varies: 28-day month = 672 hours, 30-day month = 720 hours, 31-day month = 744 hours.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many work hours in a year?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A standard full-time work year contains approximately 2,080 hours (40 hours/week × 52 weeks), not including holidays and vacation time.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do you calculate hours from days?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'To calculate hours from days, multiply the number of days by 24. For example: 30 days × 24 hours/day = 720 hours.',
                    },
                  },
                ],
              },
              {
                '@type': 'HowTo',
                name: 'How to Use the Hours Calculator',
                description: 'Calculate how many hours in any time period using our hours calculator.',
                step: [
                  {
                    '@type': 'HowToStep',
                    name: 'Enter Value',
                    text: 'Enter the number of days, weeks, months, or years you want to convert.',
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Select Time Unit',
                    text: 'Choose the time unit (days, weeks, months, or years) from the dropdown menu.',
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Calculate',
                    text: 'Click the Calculate Hours button to see the total hours and conversions to other time units.',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <HoursCalculator />

      <div className="container mx-auto px-4 max-w-7xl pb-12">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-sm">
          <HoursCalculatorContent />
        </Card>
      </div>
    </>
  );
}

import TimeCalculatorComponent from '@/components/TimeCalculatorComponent';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Time Calculator, Add and Subtract Time',
  description: 'Time calculator to add or subtract time between values. Calculate days, hours, minutes, and seconds from now to targeted future or past date. like 30 days from now or 90 days from now or 60 days from now or 45 days from now or 90 days ago. Best online free tool with instant results and 100% accuracy. Perfect for time tracking, scheduling or any other event which need to calculate the time instantly.',
   alternates: {
    canonical: 'https://hoursfromnow.tech/time-calculator',
  },
  keywords: 'time calculator, add time, subtract time, time arithmetic, hours calculator, days from now, days calculator, hours from now, hours from now calculator, 30 days from now, 90 days from now, 60 days from now, 45 days from now, 14 days from now, 28 days from now, what is 90 days from now, 21 days from now, 75 days from now, what is 60 days from now, 100 days from now, 10 days from now, 180 days from now, 7 days from now, 120 days from now, 1 month and 21 days from now, 15 days from now, 40 days from now, what day is 90 days from now, what is 30 days from now, 19 days from now, 20 days from now, 5 days from now, 50 days from now, what date is 60 days from now, 12 days from now, 25 days from now, 35 days from now, seven days from now, 18 days from now, 22 days from now, 3 days from now, 6 days from now, what day is 30 days from now, what is 45 days from now, 11 days from now, 16 days from now, 17 days from now, 29 days from now, 70 days from now, 8 days from now, what day is two weeks from now, what is 75 days from now, when is 75 days from now, 13 days from now, 150 days from now, 27 days from now, 31 days from now, 42 days from now, 80 days from now, 9 days from now, five days from now, what day is 2 weeks from now, what is 180 days from now, 2 days from now, 200 days from now, 23 days from now, 24 days from now, 26 days from now, 4 days from now, 56 days from now, days from now, three days from now, what is 100 days from now, what is 14 days from now, what is 21 days from now, what is the date 90 days from now, 104 days from now, 270 days from now, 41 days from now, 55 days from now, 64 days from now, two days from now, what is 28 days from now, whats 100 days from now, whats 30 days from now, whats 90 days from now, 33 days from now, 38 days from now, 44 days from now, 54 days from now, 65 days from now, 93 days from now, days from now calculator, what day is 180 days from now, what day is 60 days from now, what is 120 days from now, when is 90 days from now, 32 days from now, 34 days from now, 36 days from now, 37 days from now, 39 days from now, 48 days from now, 49 days from now, 52 days from now, 63 days from now, 84 days from now, how many days from now to august 10, what date is 90 days from now',
  openGraph: {
    title: 'Time Calculator- Add or Subtract Days, Hours, Minutes, and Seconds',
     description:
      'Time calculator to add or subtract time between values. Calculate days, hours, minutes, and seconds with ease like 30 days from now or 90 days from now or 60 days from now or 45 days from now.',
    url: 'https://hoursfromnow.tech/time-calculator',
    type: 'website',
       siteName: "HoursFromNow.tech",
  },
    
  twitter: {
    card: "summary_large_image",
    title: "Online Time Calculator - Add or Subtract Time Instantly",
    description:
      "Accurate Time Calculator for adding or subtracting days, hours, minutes, and seconds. Simple, fast, and mobile-friendly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  
};
export default function TimeCalculatorPage() {
  return(<>
  
  {/* ✅ Schema for Time Calculator page */}
      <Script
        id="schema-time-calculator"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Time Calculator",
            url: "https://hoursfromnow.tech/time-calculator",
            description:
              "Free time calculator to add or subtract time between values. Calculate days, hours, minutes, and seconds from now to targeted future or past date. like 30 days from now or 90 days from now or 60 days from now or 45 days from now or 90 days ago. Best online free tool with instant results and 100% accuracy. Perfect for time tracking, scheduling or any other event which need to calculate the time instantly.",
            applicationCategory: "Utility",
            operatingSystem: "All",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://hoursfromnow.tech/time-calculator",
            },
            creator: {
              "@type": "Organization",
              name: "Hours From Now",
              url: "https://hoursfromnow.tech",
            },
            publisher: {
              "@type": "Organization",
              name: "Hours From Now",
              url: "https://hoursfromnow.tech",
            },
            potentialAction: {
              "@type": "ViewAction",
              name: "Use Time Calculator",
              target: "https://hoursfromnow.tech/time-calculator",
            },
          }),
        }}
      />

{/* ✅ Breadcrumb + FAQ schema */}
      <Script
        id="schema-time-calculator-faq-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Hours From Now",
                    item: "https://hoursfromnow.tech/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Time Calculator",
                    item: "https://hoursfromnow.tech/time-calculator",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What does the Time Calculator do?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The Time Calculator lets you add or subtract days, hours, minutes, and seconds from a specific dates and time. You can also calculate the duration between two dates or times easily.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Can I calculate both addition and subtraction of time?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. You can either add or subtract any number of days, hours, minutes, or seconds to find the exact resulting time or duration.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Can I calculate time in days only, or hours, minutes and seconds too?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "You can calculate time in any format — just days, or hours and minutes, or full days-hours-minutes-seconds combinations. The calculator handles all formats accurately.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does the calculator work across different days?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. If your calculation extends past midnight, the calculator automatically adjusts to the correct next day and shows the accurate date and time.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is the Time Calculator free and mobile-friendly?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Absolutely. The Time Calculator is 100% free and optimized for mobile, tablet, and desktop devices.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

  <TimeCalculatorComponent />
  
  </>) ;
}

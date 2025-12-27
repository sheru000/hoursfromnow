import TimeCalculatorComponent from '@/components/TimeCalculatorComponent';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Time Calculator, Add and Subtract Time',
  description: 'Use this time calculator to find out the number of days, hours, minutes, and seconds between the times on two different dates. Perfect for add or subtract time between values, time tracking, scheduling or any other event which need to calculate the time instantly.',
   alternates: {
    canonical: 'https://hoursfromnow.tech/time-calculator',
  },
  keywords: 'time calculator, add time, subtract time, time duration calculator',
  openGraph: {
    title: 'Time Calculator: Add or Subtract Days, Hours, Minutes, and Seconds',
     description:
      'Time calculator to add or subtract time between values. Calculate days, hours, minutes, and seconds with accurace and fast results.',
    url: 'https://hoursfromnow.tech/time-calculator',
    type: 'website',
       siteName: "Hours From Now",
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

{/* ✅ Breadcrumb schema only */}
<Script
  id="schema-time-calculator-breadcrumb"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hours From Now",
          "item": "https://hoursfromnow.tech/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Time Calculator",
          "item": "https://hoursfromnow.tech/time-calculator"
        }
      ]
    }),
  }}
/>


  <TimeCalculatorComponent />
  
  </>) ;
}

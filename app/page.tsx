import TimeCalculator from '@/components/TimeCalculator';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hours From Now | Time Calculator',
  description: 'Calculate any number of hours from now, like 72 hours from now, 16 hours from now, 8 hours from now with this precise hours-from-now calculator.', 
  alternates: {
    canonical: 'https://hoursfromnow.tech',
  },
  keywords: 'hours from now, time calculator, hours calculator, hours from now calculator, days calculator days from now, 72 hours from now, 16 hours from now, 8 hours from now, 6 hours from now, 20 hours from now, 14 hours from now, 48 hours from now, 12 hours from now is what time, 15 hours from now, 17 hours from now, 19 hours from now, 18 hours from now, 10 hours from now, 11 hours from now, 13 hours from now, 18 hours from now what time is it, 10 hours from now what time is it, 19 hours ago from now, 20 hours ago from now, 21 hours ago from now, 22 hours ago from now, 4 hours ago from now, 24 hours from now what time is it, 24 hours from now, what is 8 hours from now, 36 hours from now what time is it, what is 48 hours from now, what is 12 hours from now,15 hours ago from now,36 hours from now,18 hours ago from now is what time​,16 hours ago from now time,four hours from now,what is 16 hours from now,what is 18 hours from now,what is 24 hours from now​,what was 6 hours ago from now​,13 hours ago from now',
  

  openGraph: {
    title: 'Hours From Now Calculator',
     description:
      'Calculate any number of hours from now — find out what time it will be in 8, 12, or 72 hours from now.',
      
    url: 'https://hoursfromnow.tech',
    type: 'website',
    siteName: 'HoursFromNow.tech',
  //  images: [
  //     {
  //       url: 'https://hoursfromnow.tech/og-image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Hours From Now Calculator Preview',
  //     },
  //   ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hours From Now Calculator',
    description:
      'Instantly calculate what time it will be any number of hours from now, like 72 hours from now. Fast and accurate hours-from-now calculator.',
    //images: ['https://hoursfromnow.tech/og-image.png'],
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

export default function Home() {
  return (
    <>
    {/* ✅ SEO Schema Markup for Google */}
  <Script
        id="schema-hoursfromnow"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Hours From Now Calculator',
            url: 'https://hoursfromnow.tech',
            description:
              'Calculate what time it will be any number of hours from now.like 72 hours from now or 16 hours from now. Simple, fast, and accurate online time calculator.',
            applicationCategory: 'Utility',
            operatingSystem: 'All',
            potentialAction: {
              '@type': 'Action',
              name: 'Hours From Now',  
              target: 'https://hoursfromnow.tech',
            },
            rank:"hours from now",
          domainAuthority:'90',            
          }),
        }}
      />
       {/* Your main calculator component */}
  <TimeCalculator />
  </>
  );
}

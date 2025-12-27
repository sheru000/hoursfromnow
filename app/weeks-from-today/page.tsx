import Script from 'next/script';
import type { Metadata } from 'next';
import WeeksFromNow from '@/components/WeeksFromNow';
import { generateCalculatorSchema, generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Weeks From Today Calculator',
  description: 'Calculate any number of weeks from today, like 4 weeks from today, 8 weeks from today, 12 weeks from today with this precise weeks-from-today calculator.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/weeks-from-today',
  },
  keywords: 'weeks from today, time calculator, weeks calculator, weeks from today calculator, days calculator days from now, 4 weeks from today, 8 weeks from today, 12 weeks from today, 2 weeks from today, 3 weeks from today, 1 week from today, what is 4 weeks from today, what is 8 weeks from today, what is 12 weeks from today',
  openGraph: {
    title: 'Weeks From Today Calculator',
    description:
      'Calculate what date it will be any number of weeks from today — find out what date it will be in 4, 8, or 12 weeks from today.',
    url: 'https://hoursfromnow.tech/weeks-from-today',
    type: 'website',
    siteName: 'Hours From Now',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weeks From Today Calculator',
    description:
      'Instantly calculate what date it will be any number of weeks from today, like 8 weeks from today. Fast and accurate weeks-from-today calculator.',
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
  const calculatorSchema = generateCalculatorSchema({
    name: 'Weeks From Today Calculator',
    url: 'https://hoursfromnow.tech/weeks-from-today',
    description: 'Calculate what date it will be any number of weeks from today. Fast, accurate, and easy-to-use time calculator with live updates.',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://hoursfromnow.tech' },
    { name: 'Weeks From Today', url: 'https://hoursfromnow.tech/weeks-from-today' },
  ]);

  return (
    <>
      <Script
        id="calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <WeeksFromNow />
    </>
  );
}

import DaysFromNow from "@/components/DaysFromNow";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Days From Today Calculator: Calculate Future Dates From Today",
  description:
    "Calculate what date it will be any number of days from today with our free days from today calculator. Find future dates from 1 day to any days from today instantly.",
  alternates: {
    canonical: "https://hoursfromnow.tech/days-from-today",
  },
  keywords:
    "days from today, days from today calculator, days from now calculator, what date will it be, future date calculator, days calculator, 30 days from today, 60 days from today, 90 days from today, 7 days from today, days ahead calculator",

  openGraph: {
    title: "Days From Today Calculator: Calculate Future Dates",
    description:
      "Instantly calculate what date it will be any number of days from today. Fast and accurate future date calculator.",
    url: "https://hoursfromnow.tech/days-from-today",
    type: "website",
    siteName: "Hours From Now",
  },

  twitter: {
    card: "summary_large_image",
    title: "Days From Today Calculator - Calculate Future Dates",
    description:
      "Calculate what date it will be any number of days from today with our accurate date calculator.",
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
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What date and day will it be a certain number of months from today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To find out what date and day it will be a certain number of months from today, add the selected number of months to the current date. The exact result depends on today’s date and the number of days in each month. This calculator automatically shows the correct future date and day of the week without manual counting.",
      },
    },
  ],
};

export default function DaysFromNowPage() {
  return (
    <>
      <Script
        id="schema-daysfromnow"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Days From Today Calculator",
            url: "https://hoursfromnow.tech/days-from-today",
            description:
              "Calculate what date it will be any number of days from today. Simple, fast, and accurate free online date calculator.",
            applicationCategory: "Utility",
            operatingSystem: "All",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://hoursfromnow.tech/days-from-today",
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
              name: "Calculate Days From Today",
              target: "https://hoursfromnow.tech/days-from-today",
            },
          }),
        }}
      />

      <script
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
                    name: "Home",
                    item: "https://hoursfromnow.tech/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Days From Today",
                    item: "https://hoursfromnow.tech/days-from-today",
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Script
        id="faq-schema-days-from-today"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <DaysFromNow />
    </>
  );
}

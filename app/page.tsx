import Script from "next/script";
import type { Metadata } from "next";
import HoursFromNow from "@/components/HoursFromNow";
import {
  generateCalculatorSchema,
  generateBreadcrumbSchema,
} from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Hours From Now Calculator: Time in Hours and Minutes Later",
  description:
    "Hours From Now Calculator can calculate any number of hours and minutes from now. Calculate what time it will be hours from now like 72 hours from now with this precise hours from now calculator.",
  alternates: {
    canonical: "https://hoursfromnow.tech",
  },
  keywords:
    "hours from now calculator, hours from now, what time it will be hours from now, hours, calculate future hours, hours and minutes later.",

  openGraph: {
    title: "Hours From Now Calculator",
    description:
      "Hours From Now Calculator can calculate any number of hours and minutes from now. Calculate what time it will be hours from now like 72 hours from now with this precise hours from now calculator.",

    url: "https://hoursfromnow.tech",
    type: "website",
    siteName: "Hours From Now",
    images: [
      {
        url: "https://hoursfromnow.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hours From Now Calculator Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hours From Now Calculator",
    description:
      "Instantly calculate what time it will be any number of hours from now, like 72 hours from now. Fast and accurate hours from now calculator.",
    images: ["https://hoursfromnow.tech/og-image.png"],
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

export default function Home() {
  const calculatorSchema = generateCalculatorSchema({
    name: "Hours From Now",
    url: "https://hoursfromnow.tech",
    description:
      "Hours From Now Calculator can calculate any number of hours and minutes from now. Calculate what time it will be hours from now like 72 hours from now with this precise hours from now calculator.",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://hoursfromnow.tech" },
  ]);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What time will it be a specific number of hours from now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find out what time it will be a specific number of hours from now, simply add the selected hours to the current local time. Whether you are calculating 9 hours, 10 hours, 16 hours, 24 hours, or even more than a day ahead, the exact time depends on your current time zone. This calculator instantly shows the correct future time without manual calculation.",
        },
      },
      {
        "@type": "Question",
        name: "What time will it be if I leave right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you leave right now, the arrival time is calculated by adding the chosen number of hours to the current moment. The result updates in real time, ensuring accuracy whenever you check what time it will be hours from now.",
        },
      },
      {
        "@type": "Question",
        name: "How many hours and minutes are left until tomorrow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The remaining hours and minutes until tomorrow are calculated based on the current time today. As time passes, the countdown updates automatically to show exactly how much time is left until the next day.",
        },
      },
    ],
  };

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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <HoursFromNow />
    </>
  );
}

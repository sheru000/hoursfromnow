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
      
      <HoursFromNow />
    </>
  );
}

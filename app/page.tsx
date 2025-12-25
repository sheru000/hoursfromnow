import Script from "next/script";
import type { Metadata } from "next";
import HoursFromNow from "@/components/HoursFromNow";
import {
  generateCalculatorSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateHowToSchema,
} from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Hours From Now Calculator: Time in Hours and Minutes Later",
  description:
    "Hours From Now Calculator can calculate any number of hours and minutes from now, Calculate 72 hours from now, 16 hours from now, 8 hours from now with this precise hours from now calculator.",
  alternates: {
    canonical: "https://hoursfromnow.tech",
  },
  keywords:
    "hours from now calculator, time calculator, hours calculator, hours from now calculator, days calculator days from now, 72 hours from now, 16 hours from now, 8 hours from now, 6 hours from now, 20 hours from now, 14 hours from now, 48 hours from now, 12 hours from now is what time, 15 hours from now, 17 hours from now, 19 hours from now, 18 hours from now, 10 hours from now, 11 hours from now, 13 hours from now, 18 hours from now what time is it, 10 hours from now what time is it, 19 hours ago from now, 20 hours ago from now, 21 hours ago from now, 22 hours ago from now, 4 hours ago from now, 24 hours from now what time is it, 24 hours from now, what is 8 hours from now, 36 hours from now what time is it, what is 48 hours from now, what is 12 hours from now,15 hours ago from now,36 hours from now,18 hours ago from now is what time​,16 hours ago from now time,four hours from now,what is 16 hours from now,what is 18 hours from now,what is 24 hours from now​,what was 6 hours ago from now​,13 hours ago from now",

  openGraph: {
    title: "Hours From Now Calculator",
    description:
      "This Hours From Now Calculator can calculate any number of hours and minutes from now, like 72 hours from now, 16 hours from now, 8 hours from now with this precise hours from now calculator.",

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
    name: "Hours From Now Calculator: Time in Hours and Minutes Later",
    url: "https://hoursfromnow.tech",
    description:
      "This Hours From Now Calculator can calculate any number of hours and minutes from now, like 72 hours from now, 16 hours from now, 8 hours from now with this precise hours from now calculator.",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://hoursfromnow.tech" },
  ]);

  const faqs = [
    {
      question: "What time is 8 hours from now?",
      answer: "8 hours from now will be 6:00 PM if it is currently 10:00 AM.",
    },
    {
      question: "What time is 24 hours from now?",
      answer: "24 hours from now is the same time tomorrow.",
    },
    {
      question: "How do I calculate hours from now?",
      answer:
        "Use the Hours From Now Calculator on our homepage to calculate any number of hours and minutes.",
    },
    {
      question: "Can I calculate fractional hours?",
      answer:
        "Yes, the calculator supports minutes as well, so you can calculate partial hours.",
    },
    {
      question: "8 hours from now is what time?",
      answer:
        "Use the Hours From Now Calculator to find the exact time 8 hours from now.",
    },
    {
      question: "18 hours from now is what time?",
      answer:
        "Use the Hours From Now Calculator to find the exact time 18 hours from now.",
    },
    {
      question: "16 hours from now is what time?",
      answer:
        "Use the Hours From Now Calculator to find the exact time 16 hours from now.",
    },
    {
      question: "72 hours from now?",
      answer:
        "Use the Hours From Now Calculator to find the exact time 72 hours from now.",
    },
    {
      question: "8 hours from now is what time?",
      answer:
        "Use the Hours From Now Calculator to find the exact time 8 hours from now.",
    },
    {
      question: "8 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 8 hours from now.",
    },
    {
      question: "48 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 48 hours from now.",
    },
    {
      question: "12 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 12 hours from now.",
    },
    {
      question: "16 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 16 hours from now.",
    },
    {
      question: "15 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 15 hours from now.",
    },
    {
      question: "18 hours from now is what time",
      answer:
        "Use the Hours From Now Calculator to find the exact time 18 hours from now.",
    },
    {
      question: "14 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 14 hours from now.",
    },
    {
      question: "13 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 13 hours from now.",
    },
    {
      question: "18 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 18 hours from now.",
    },
    {
      question: "10 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 10 hours from now.",
    },
    {
      question: "11 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 11 hours from now.",
    },
    {
      question: "19 hours from now",
      answer:
        "Use the Hours From Now Calculator to find the exact time 19 hours from now.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const steps = [
    {
      name: "Open the Hours From Now Calculator",
      text: "Go to https://hoursfromnow.tech and open the calculator.",
    },
    {
      name: "Enter hours",
      text: "Type the number of hours, minutes and seconds you want to calculate.",
    },
    {
      name: "Click Calculate",
      text: "Press the calculate button to see the result.",
    },
    {
      name: "Read the result",
      text: "The calculator will display the exact time and date after the specified hours, minutes and seconds.",
    },
  ];

  const howToSchema = generateHowToSchema({
    name: "How to calculate hours from now",
    description:
      "Step-by-step guide to calculate any number of hours from now using the calculator.",
    steps: steps,
  });

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
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        type="application/ld+json"
        id="howto-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HoursFromNow />
    </>
  );
}

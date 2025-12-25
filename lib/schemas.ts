export function generateCalculatorSchema(config: {
  name: string;
  url: string;
  description: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
     '@type': 'SoftwareApplication',
    '@id': 'https://hoursfromnow.tech/#hours-from-now',
    name: config.name,
    url: config.url,
    description: config.description,
     mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://hoursfromnow.tech/',
    },
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      '@id': 'https://hoursfromnow.tech/#organization',
      name: 'Hours From Now',
      url: 'https://hoursfromnow.tech',
    },

    publisher: {
      '@type': 'Organization',
      '@id': 'https://hoursfromnow.tech/#organization',
      name: 'Hours From Now',
      url: 'https://hoursfromnow.tech',
    },
    inLanguage: 'en-US',
    accessibilityControl: ['fullKeyboardControl', 'fullMouseControl', 'fullTouchControl'],
    accessibilityFeature: ['alternativeText', 'longDescription', 'readingOrder'],
    accessibilityHazard: ['noFlashingHazard', 'noMotionSimulationHazard', 'noSoundHazard'],
    isAccessibleForFree: true,
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(config: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: config.name,
    description: config.description,
    totalTime: config.totalTime || 'PT1M',
    step: config.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

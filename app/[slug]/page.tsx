import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import { getHoursContent, getAllHoursSlugs } from '@/lib/hoursContent';
import { generateCalculatorSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import HoursFromNowTable from '@/components/content/HoursfromnowTable';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for SSG
export async function generateStaticParams() {
  const slugs = getAllHoursSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = getHoursContent(params.slug);

  if (!content) {
    return {
      title: 'Page Not Found',
    };
  }

  const canonicalUrl = `https://hoursfromnow.tech/${params.slug}`;
;

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'HoursFromNow.tech',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
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
}

export default function HoursFromNowPage({ params }: PageProps) {
  const content = getHoursContent(params.slug);

  if (!content) {
    notFound();
  }

  const canonicalUrl = `https://hoursfromnow.tech/${params.slug}`;

  // Calculate future time for specified hours from now
  const futureDate = new Date();
  futureDate.setHours(futureDate.getHours() + content.hours);

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    });
  };

  const formatShortDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const calculatorSchema = generateCalculatorSchema({
    name: content.title,
    url: canonicalUrl,
    description: content.description,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://hoursfromnow.tech' },
    { name: content.title, url: canonicalUrl },
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
              {content.hours} {content.hours === 1 ? 'Hour' : 'Hours'} From Now
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{content.intro}</p>
          </div>

          {/* Time Result Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 mb-8">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                {formatDateTime(futureDate)}
              </div>
              <div className="text-xl text-gray-700 font-normal mb-2">{formatShortDate(futureDate)}</div>
              <p className="text-gray-600">
                The current time is {formatDateTime(new Date())}, so {content.hours} {content.hours === 1 ? 'hour' : 'hours'} from now will
                be {formatDateTime(futureDate)}.
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 mb-12">
            {content.content.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          {content.faq && content.faq.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {content.faq.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hours From Now Table Component */}
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Interactive Hours From Now Table</h2>
            <HoursFromNowTable />
          </div>

          {/* Related Links */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Date & Time Calculators</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/days-from-today"
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
                >
                  Days From Today Calculator
                </a>
                <a
                  href="/hours-from-now"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                >
                  Hours From Now
                </a>
                <a
                  href="/months-from-today"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  Months From Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap - Hours From Now',
  description: 'Complete sitemap of all time calculator tools and pages on Hours From Now.',
};

export default function SitemapPage() {
  // Main time calculator pages
  const mainPages = [
    { href: '/', label: 'Hours From Now' },
    { href: '/hours-ago', label: 'Hours Ago' },
    { href: '/days-from-today', label: 'Days From Today' },
    { href: '/weeks-from-today', label: 'Weeks From Today' },
    { href: '/months-from-now', label: 'Months From Now' },
    { href: '/time-calculator', label: 'Time Calculator' },
    { href: '/hours-calculator', label: 'Hours Calculator' },
    { href: '/time-duration-calculator', label: 'Time Duration Calculator' },
    { href: '/holiday-countdown', label: 'Holiday Countdown' },
  ];

  // Days from today nested pages
  const daysPages = [
    '2-days-from-today', '3-days-from-today', '4-days-from-today', '5-days-from-today',
    '6-days-from-today', '7-days-from-today', '8-days-from-today', '9-days-from-today',
    '10-days-from-today', '11-days-from-today', '12-days-from-today', '13-days-from-today',
    '14-days-from-today', '15-days-from-today', '16-days-from-today', '17-days-from-today',
    '18-days-from-today', '19-days-from-today', '20-days-from-today', '21-days-from-today',
    '22-days-from-today', '23-days-from-today', '24-days-from-today', '25-days-from-today',
    '26-days-from-today', '27-days-from-today', '28-days-from-today', '29-days-from-today',
    '30-days-from-today', '31-days-from-today', '32-days-from-today', '33-days-from-today',
    '34-days-from-today', '35-days-from-today', '36-days-from-today', '37-days-from-today',
    '38-days-from-today', '39-days-from-today', '40-days-from-today', '41-days-from-today',
    '42-days-from-today', '43-days-from-today', '44-days-from-today', '45-days-from-today',
    '46-days-from-today', '47-days-from-today', '48-days-from-today', '49-days-from-today',
    '50-days-from-today', '51-days-from-today', '52-days-from-today', '53-days-from-today',
    '54-days-from-today', '55-days-from-today', '56-days-from-today', '57-days-from-today',
    '58-days-from-today', '59-days-from-today', '60-days-from-today', '61-days-from-today',
    '62-days-from-today', '63-days-from-today', '64-days-from-today', '65-days-from-today'
  ];

  // Weeks from today nested pages
  const weeksPages = [
    '1-week-from-today', '2-weeks-from-today', '3-weeks-from-today', '4-weeks-from-today',
    '5-weeks-from-today', '6-weeks-from-today', '7-weeks-from-today', '8-weeks-from-today',
    '9-weeks-from-today', '10-weeks-from-today', '11-weeks-from-today', '12-weeks-from-today',
    '13-weeks-from-today', '14-weeks-from-today', '15-weeks-from-today', '16-weeks-from-today',
    '17-weeks-from-today', '18-weeks-from-today', '19-weeks-from-today', '20-weeks-from-today',
    '21-weeks-from-today', '22-weeks-from-today', '23-weeks-from-today', '24-weeks-from-today'
  ];

  // About us pages
  const aboutPages = [
    { href: '/private-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms and Conditions' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Sitemap
          </h1>

          {/* Time Calculator Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
              Time Calculator
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {mainPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>

            {/* Days From Today Sub-section */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Days From Today Pages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {daysPages.map((slug) => (
                  <Link
                    key={slug}
                    href={`/days-from-today/${slug}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
                  >
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>

            {/* Weeks From Today Sub-section */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Weeks From Today Pages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {weeksPages.map((slug) => (
                  <Link
                    key={slug}
                    href={`/weeks-from-today/${slug}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
                  >
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
              About Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

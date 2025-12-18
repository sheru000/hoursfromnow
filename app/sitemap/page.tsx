import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap - Hours From Now',
  description: 'Complete sitemap of all time calculator tools and pages on Hours From Now.',
};

export default function SitemapPage() {

  // Main time calculator pages
  const mainPages: { href: string; label: string }[] = [
    { href: '/days-from-today', label: 'Days From Today' },
    { href: '/weeks-from-today', label: 'Weeks From Today' },
    { href: '/hours-from-now', label: 'Hours From Now' },
    { href: '/months-from-today', label: 'Months From Today' },
    { href: '/holiday-countdown', label: 'Holiday Countdown' },
    { href: '/time-calculator', label: 'Time Calculator' },
    { href: '/hours-calculator', label: 'Hours Calculator' },
    { href: '/hours-ago', label: 'Hours Ago' },
    { href: '/time-duration-calculator', label: 'Time Duration Calculator' },
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

  // Hours from now nested pages
  const hoursPages = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    return `${num}-hour${num === 1 ? '' : 's'}-from-now`;
  });

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
            {mainPages.map((page: { href: string; label: string }) => (
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
            <details className="mb-8">
              <summary className="text-xl font-medium text-gray-700 mb-4 cursor-pointer list-none">
                Days From Today Pages
              </summary>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
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
            </details>

            {/* Weeks From Today Sub-section */}
            <details className="mb-8">
              <summary className="text-xl font-medium text-gray-700 mb-4 cursor-pointer list-none">
                Weeks From Today Pages
              </summary>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
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
              <p><a href="https://www.linkedin.com/in/ali-riaz-developer/" target="_blank">Ali Riaz Developer | LinkedIn Profile</a>

<a href="https://www.linkedin.com/pulse/hours-from-now-productivity-technique-every-remote-worker-m-ali-riaz-ugffc" target="_blank">Hours From Now – Productivity Technique for Remote Workers</a>

<a href="https://www.linkedin.com/pulse/hours-from-now-calculator-your-complete-guide-time-planning-riaz-u2j8c/" target="_blank">Hours From Now Calculator — Complete Guide to Time Planning</a>

<a href="https://www.sitelike.org/similar/hoursfromnow.tech/" target="_blank">Sites Like HoursFromNow.tech | Similar Websites Explorer</a>

<a href="https://www.quora.com/How-do-I-calculate-72-hours-from-Friday-at-5-am" target="_blank">Quora: Calculating 72 Hours From Friday at 5 AM</a>

<a href="https://www.quora.com/How-long-is-72-hours-from-Friday-at-1pm" target="_blank">Quora: Duration of 72 Hours From Friday at 1 PM</a>

<a href="https://cyberkannadig.net/calc-calculator-modern-math-made-effortless/" target="_blank">Modern Math Made Effortless — Online Calc & Calculator Tools</a>

<a href="https://medium.com/@ar.arian786/8-hours-from-now-the-productivity-technique-every-remote-worker-should-use-274ff45f4544" target="_blank">8 Hours From Now: Remote Worker Productivity Technique</a>

<a href="https://www.linkedin.com/pulse/addition-subtraction-time-complete-guide-examples-m-ali-riaz-oh0xf" target="_blank">Addition & Subtraction of Time — Complete Guide With Examples</a>
</p>
            </details>

            {/* Hours From Now Sub-section */}
            <details className="mb-8">
              <summary className="text-xl font-medium text-gray-700 mb-4 cursor-pointer list-none">
                Hours From Now Pages
              </summary>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 max-h-96 overflow-y-auto">
                {hoursPages.map((slug) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
                  >
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            </details>
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

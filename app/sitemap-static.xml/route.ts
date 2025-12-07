import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://hoursfromnow.tech';
  const currentDate = new Date().toISOString();

  const urls = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hours-ago/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/time-calculator/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/time-calculators/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/time-duration-calculator/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hours-calculator/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/months-from-today/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/private-policy/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-conditions/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/holiday-countdown/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sitemap/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.5,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `<url>
<loc>${url.url}</loc>
<lastmod>${url.lastmod}</lastmod>
<changefreq>${url.changefreq}</changefreq>
<priority>${url.priority}</priority>
</url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

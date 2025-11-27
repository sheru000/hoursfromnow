import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://hoursfromnow.tech';

  const sitemaps = [
    { url: `${baseUrl}/sitemap-days.xml` },
    { url: `${baseUrl}/sitemap-weeks.xml` },
    { url: `${baseUrl}/sitemap-posts.xml` },
    { url: `${baseUrl}/sitemap-static.xml` },
    { url: `${baseUrl}/sitemap-hours.xml` },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `<sitemap><loc>${sitemap.url}</loc></sitemap>`).join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

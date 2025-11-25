import { NextResponse } from 'next/server';
import { getAllHoursSlugs } from '../../lib/hoursContent';

export async function GET() {
  const baseUrl = 'https://hoursfromnow.tech';
  const currentDate = new Date().toISOString();

  const urls = [];
  for (let i = 1; i <= 100; i++) {
    const slug = i === 1 ? '1-hour-from-now' : `${i}-hours-from-now`;
    urls.push({
      url: `${baseUrl}/${slug}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, lastmod, changefreq, priority }) => `<url>
<loc>${url}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://hoursfromnow.tech';
  const currentDate = new Date().toISOString();

  const urls = [];
  for (let i = 1; i <= 24; i++) {
    urls.push({
      url: `${baseUrl}/weeks-from-today/${i}-weeks-from-today/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8,
    });
  }

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

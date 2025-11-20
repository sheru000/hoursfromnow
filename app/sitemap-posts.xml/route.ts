import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const baseUrl = 'https://hoursfromnow.tech';
  const postsDirectory = path.join(process.cwd(), 'content/posts');

  const filenames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));

  const urls = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = filename.replace('.md', '');
    const lastmod = data.date ? new Date(data.date).toISOString() : new Date().toISOString();

    return {
      url: `${baseUrl}/blog/${slug}/`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.7,
    };
  });

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

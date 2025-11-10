const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = {
  siteUrl: 'https://hoursfromnow.tech',
  generateRobotsTxt: true,
  exclude: ['/404'],
  additionalPaths: async (config) => {
    const result = [];

    // Add dynamic blog posts
    const postsDirectory = path.join(process.cwd(), 'content/posts');
    if (fs.existsSync(postsDirectory)) {
      const fileNames = fs.readdirSync(postsDirectory);
      fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .forEach((fileName) => {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(fileContents);

          result.push({
            loc: `/blog/${slug}`,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: data.date || new Date().toISOString(),
          });
        });
    }

    // Add dynamic days-from-now pages (keeping existing logic but making it cleaner)
    const daysPages = [
      '14-days-from-today',
      '35-days-from-today',
      '45-days-from-today',
      '40-days-from-today',
      '30-days-from-today',
      '60-days-from-today',
      '90-days-from-today',
      '180-days-from-today',
      '2-days-from-today',
      '3-days-from-today',
      '4-days-from-today',
      '5-days-from-today',
      '6-days-from-today',
      '7-days-from-today',
      '8-days-from-today',
      '9-days-from-today',
      '10-days-from-today',
      '11-days-from-today',
      '12-days-from-today',
      '13-days-from-today',
      '14-days-from-today',
      '15-days-from-today',
      '16-days-from-today',
      '17-days-from-today',
      '18-days-from-today',
      '19-days-from-today',
      '20-days-from-today',
      '21-days-from-today',
      '22-days-from-today',
      '23-days-from-today',
      '24-days-from-today',
      '25-days-from-today',
      '26-days-from-today',
      '27-days-from-today',
      '28-days-from-today',
      '29-days-from-today',
      '30-days-from-today',
      '31-days-from-today',
      '32-days-from-today',
      '33-days-from-today',
      '34-days-from-today',
      '35-days-from-today',
      '36-days-from-today',
      '37-days-from-today',
      '38-days-from-today',
      '39-days-from-today',
      '40-days-from-today',
      '41-days-from-today',
      '42-days-from-today',
      '43-days-from-today',
      '44-days-from-today',
      '45-days-from-today',
      '46-days-from-today',
      '47-days-from-today',
      '48-days-from-today',
      '49-days-from-today',
      '50-days-from-today',
      '51-days-from-today',
      '52-days-from-today',
      '53-days-from-today',
      '54-days-from-today',
      '55-days-from-today',
      '56-days-from-today',
      '57-days-from-today',
      '58-days-from-today',
      '59-days-from-today',
      '60-days-from-today',
      '61-days-from-today',
      '62-days-from-today',
      '63-days-from-today',
      '64-days-from-today',
      '65-days-from-today'
    ];

    daysPages.forEach(slug => {
      result.push({
        loc: `/days-from-now/${slug}`,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/api/',
      },
    ],
  },
};

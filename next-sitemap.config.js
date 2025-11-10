module.exports = {
  siteUrl: 'https://hoursfromnow.tech',
  generateRobotsTxt: true,
  exclude: ['/404'],
  additionalPaths: async (config) => {
    const result = [];
    // Add dynamic days-from-now pages
    const daysPages = [
      '14-days-from-today',
      '35-days-from-today',
      '45-days-from-today',
      '40-days-from-today',
      '30-days-from-today',
      '60-days-from-today',
      '90-days-from-today',
      '180-days-from-today'
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
  Disallow: /api/
};

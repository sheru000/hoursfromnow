module.exports = {
  siteUrl: 'https://hoursfromnow.tech',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/api/',
      },
    ],
  },
};

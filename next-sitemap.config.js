/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://teaology.in',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/login',
    '/admin/**',
    '/api/**',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://teaology.in'}/sitemap-extra.xml`
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ]
  },
  transform: async (config, path) => {
    const url = `${config.siteUrl.replace(/\/$/, '')}${path}`;
    const nowIso = new Date().toISOString();
    
    return {
      loc: url,
      lastmod: nowIso,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : path.startsWith('/category') ? 0.8 : 0.7,
    };
  },
};

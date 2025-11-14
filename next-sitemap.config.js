/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://tealogy-cafe.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/login',
    '/admin/**',
    '/api/**',
    '/_next/*',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [
      `${siteUrl.replace(/\/$/, '')}/sitemap-extra.xml`
    ],
  },
  transform: async (config, path) => {
    const url = `${config.siteUrl.replace(/\/$/, '')}${path}`;
    
    return {
      loc: url,
      lastmod: new Date().toISOString(),
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : path.startsWith('/category') ? 0.8 : 0.7,
    };
  },
};

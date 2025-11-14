const fs = require('fs');
const path = require('path');

(async () => {
  const menuPath = path.join(process.cwd(), 'data', 'menu.json');
  if (!fs.existsSync(menuPath)) {
    console.log('menu.json not found, skipping extra sitemap generation');
    return;
  }

  const menu = JSON.parse(fs.readFileSync(menuPath, 'utf8'));
  const domain = process.env.SITE_URL || 'https://tealogy-cafe.vercel.app';
  const urls = [];

  // Add category pages explicitly
  (menu.categories || []).forEach(cat => {
    const slug = cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-');
    urls.push(`${domain}/category/${slug}`);
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ];

  for (const u of urls) {
    xml.push('  <url>');
    xml.push(`    <loc>${u}</loc>`);
    xml.push(`    <lastmod>${new Date().toISOString()}</lastmod>`);
    xml.push(`    <changefreq>weekly</changefreq>`);
    xml.push(`    <priority>0.8</priority>`);
    xml.push('  </url>');
  }

  xml.push('</urlset>');

  const outputPath = path.join(process.cwd(), 'public', 'sitemap-extra.xml');
  fs.writeFileSync(outputPath, xml.join('\n'));
  console.log('✓ sitemap-extra.xml created with', urls.length, 'category entries');
})();

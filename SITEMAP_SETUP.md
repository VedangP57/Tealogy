# Sitemap Setup Complete ✓

## What's Configured

1. **next-sitemap.config.js** — Main sitemap configuration
2. **scripts/generate-extra-sitemap.js** — Generates category pages from menu.json
3. **public/robots.txt** — Fallback robots file (overwritten on build)
4. **package.json** — `postbuild` script runs sitemap generation automatically
5. **app/layout.tsx** — Already has `metadataBase` set to https://teaology.in

## How It Works

When you run `bun run build`:
1. Next.js builds your app
2. `postbuild` script runs automatically
3. Generates `sitemap-extra.xml` with all 13 category pages
4. `next-sitemap` generates main sitemap and robots.txt
5. All sitemaps are available at:
   - `/sitemap.xml` (main sitemap index)
   - `/sitemap-0.xml` (pages discovered by next-sitemap)
   - `/sitemap-extra.xml` (category pages from menu.json)
   - `/robots.txt` (points to all sitemaps)

## Vercel Deployment

### 1. Set Environment Variable
In Vercel project settings → Environment Variables:
- **Variable**: `SITE_URL`
- **Value**: `https://teaology.in` (for production)
- **Environments**: Production ✓

For preview deployments, you can leave it unset (defaults to https://teaology.in) or set a preview-specific value.

### 2. Deploy
```bash
git add .
git commit -m "Add sitemap configuration"
git push
```

Vercel will automatically:
- Run `bun run build`
- Execute `postbuild` script
- Generate all sitemaps
- Serve them at your domain

### 3. Verify After Deploy
Check these URLs after deployment:
- https://teaology.in/sitemap.xml
- https://teaology.in/sitemap-extra.xml
- https://teaology.in/robots.txt

## Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for `https://teaology.in` (if not already added)
3. Navigate to **Indexing → Sitemaps**
4. Enter: `sitemap.xml`
5. Click **Submit**

Google will automatically discover:
- Main sitemap index
- All referenced sitemaps (including sitemap-extra.xml)

## Pages Included in Sitemap

✓ Home page (/)
✓ Menu page (/menu)
✓ Contact page (/contact)
✓ All 13 category pages:
  - /category/tea
  - /category/coffee
  - /category/hot-lemon-tea
  - /category/ice-crushes
  - /category/shakes
  - /category/fruit-shakes
  - /category/milk
  - /category/mocktails
  - /category/ice-tea
  - /category/bites
  - /category/cold-coffee
  - /category/maggi
  - /category/hot-beverages

## Local Testing

```bash
# Build and generate sitemaps
bun run build

# Start production server
bun run start

# View sitemaps
open http://localhost:3000/sitemap.xml
open http://localhost:3000/sitemap-extra.xml
open http://localhost:3000/robots.txt
```

## Troubleshooting

**Sitemap shows wrong domain?**
- Set `SITE_URL` environment variable in Vercel

**Category pages missing?**
- Check `data/menu.json` has categories with slugs
- Run `node scripts/generate-extra-sitemap.js` locally to test

**Google can't fetch sitemap?**
- Verify domain in Search Console matches `SITE_URL`
- Check sitemap is accessible publicly
- Wait 24-48 hours for Google to crawl

## Priority & Frequency

- Home page: priority 1.0, daily updates
- Category pages: priority 0.8, weekly updates
- Other pages: priority 0.7, weekly updates

# SEO Deployment Verification Guide

## Changes Made

All SEO assets now use `process.env.SITE_URL` with fallback to `https://tealogy-cafe.vercel.app`:

### Updated Files:
1. ✅ `next-sitemap.config.js` - Updated siteUrl and robotsTxt config
2. ✅ `app/layout.tsx` - Updated metadataBase, canonical, OG URLs, and JSON-LD
3. ✅ `app/category/[slug]/page.tsx` - Updated canonical and OG URLs
4. ✅ `scripts/generate-extra-sitemap.js` - Updated domain fallback
5. ✅ `package.json` - Added build:full script for Bun compatibility

## Vercel Environment Setup

### Required Environment Variable:
```
Key: SITE_URL
Value: https://tealogy-cafe.vercel.app
Scope: Production, Preview, Development
```

**To set this:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `SITE_URL` = `https://tealogy-cafe.vercel.app`
3. Select all environments (Production, Preview, Development)
4. Save and redeploy

### Build Settings (Recommended):
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm ci
Node Version: 18.x or higher
```

## Verification Steps

### 1. Check Sitemap & Robots (After Deploy)

```bash
# Check sitemap index
curl -I https://tealogy-cafe.vercel.app/sitemap.xml

# Check sitemap pages
curl -I https://tealogy-cafe.vercel.app/sitemap-0.xml
curl -I https://tealogy-cafe.vercel.app/sitemap-extra.xml

# Check robots.txt
curl https://tealogy-cafe.vercel.app/robots.txt
```

**Expected Results:**
- All should return `HTTP/2 200` or `200 OK`
- `robots.txt` should contain:
  ```
  Sitemap: https://tealogy-cafe.vercel.app/sitemap.xml
  Sitemap: https://tealogy-cafe.vercel.app/sitemap-extra.xml
  ```

### 2. Verify Page Source SEO Tags

Visit: https://tealogy-cafe.vercel.app/

View page source and verify:
- ✅ `<link rel="canonical" href="https://tealogy-cafe.vercel.app/">`
- ✅ `<meta property="og:url" content="https://tealogy-cafe.vercel.app/">`
- ✅ `<meta property="og:image" content="https://tealogy-cafe.vercel.app/og-image.jpg">`
- ✅ `<meta name="twitter:image" content="https://tealogy-cafe.vercel.app/og-image.jpg">`
- ✅ JSON-LD script with correct URLs

### 3. Check Build Logs

In Vercel deployment logs, look for:
```
✓ Generating static pages
✓ sitemap-extra.xml created with X category entries
[next-sitemap] Generation completed
```

### 4. Google Rich Results Test

1. Go to: https://search.google.com/test/rich-results
2. Enter: `https://tealogy-cafe.vercel.app/`
3. Verify:
   - ✅ No errors
   - ✅ CafeOrCoffeeShop schema detected
   - ✅ All required fields present

### 5. Google Search Console Setup

1. Go to: https://search.google.com/search-console
2. Add property: `https://tealogy-cafe.vercel.app`
3. Verify ownership (use HTML tag method from Vercel)
4. Submit sitemap: `https://tealogy-cafe.vercel.app/sitemap.xml`
5. Request indexing for key pages:
   - Homepage: `https://tealogy-cafe.vercel.app/`
   - Menu: `https://tealogy-cafe.vercel.app/menu`
   - Contact: `https://tealogy-cafe.vercel.app/contact`
   - Sample category: `https://tealogy-cafe.vercel.app/category/tea`

## Local Development

### Using npm/Node:
```bash
npm ci
npm run build    # Runs next build + postbuild (sitemap generation)
npm run start
```

### Using Bun:
```bash
bun install
bun run build:full   # Runs next build + bunx next-sitemap
bun run start
```

## Testing Locally

Set environment variable before building:
```bash
export SITE_URL=http://localhost:3000
npm run build
npm run start
```

Then verify:
```bash
curl http://localhost:3000/sitemap.xml
curl http://localhost:3000/robots.txt
```

## Future Domain Migration

When switching to a custom domain (e.g., `https://teaology.in`):

1. Update Vercel environment variable:
   - `SITE_URL` = `https://teaology.in`
2. Redeploy (no code changes needed)
3. Re-verify in Google Search Console
4. Submit new sitemap

## Troubleshooting

### Sitemap not generating:
- Check Vercel build logs for errors
- Ensure `postbuild` script runs after `next build`
- Verify `next-sitemap` is in dependencies

### Wrong domain in sitemap:
- Check `SITE_URL` environment variable in Vercel
- Redeploy after setting the variable
- Clear browser cache

### 404 on /sitemap.xml:
- Ensure build completed successfully
- Check that `public/sitemap.xml` exists in build output
- Verify no custom rewrites blocking the path

## Acceptance Criteria

- [x] All hard-coded `teaology.in` references replaced with `SITE_URL`
- [x] `metadataBase` uses `process.env.SITE_URL`
- [x] JSON-LD uses dynamic `SITE_URL`
- [x] `next-sitemap` generates files during build
- [x] Build scripts support both Node and Bun
- [ ] Vercel environment variable set
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] All URLs in sitemap use correct domain
- [ ] Google Search Console configured
- [ ] Rich Results test passes

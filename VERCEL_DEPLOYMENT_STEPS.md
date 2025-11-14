# Vercel Deployment Steps for SEO

## ✅ Code Changes Complete

All code has been updated to use `process.env.SITE_URL` with fallback to `https://tealogy-cafe.vercel.app`.

## 🚀 Deploy to Vercel

### Step 1: Set Environment Variable

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add new variable:
   - **Key**: `SITE_URL`
   - **Value**: `https://tealogy-cafe.vercel.app`
   - **Environments**: Select all (Production, Preview, Development)
4. Click **Save**

### Step 2: Deploy

Push your changes to trigger a new deployment:

```bash
git add .
git commit -m "fix: Update SEO assets to use tealogy-cafe.vercel.app domain"
git push origin main
```

Or manually trigger a redeploy in Vercel dashboard.

### Step 3: Verify Build Logs

In the Vercel deployment logs, confirm you see:

```
✓ sitemap-extra.xml created with 13 category entries
✅ [next-sitemap] Generation completed
```

### Step 4: Test SEO Assets

After deployment completes, run these commands:

```bash
# Check sitemap
curl -I https://tealogy-cafe.vercel.app/sitemap.xml

# Check robots.txt
curl https://tealogy-cafe.vercel.app/robots.txt

# Should show:
# Host: https://tealogy-cafe.vercel.app
# Sitemap: https://tealogy-cafe.vercel.app/sitemap.xml
```

Or use the verification script:

```bash
./scripts/verify-seo.sh https://tealogy-cafe.vercel.app
```

### Step 5: Verify Page SEO

Visit https://tealogy-cafe.vercel.app/ and view page source to confirm:

- ✅ `<link rel="canonical" href="https://tealogy-cafe.vercel.app/">`
- ✅ `<meta property="og:url" content="https://tealogy-cafe.vercel.app/">`
- ✅ `<meta property="og:image" content="https://tealogy-cafe.vercel.app/og-image.jpg">`
- ✅ JSON-LD with correct URLs

## 📊 Google Search Console Setup

### Step 1: Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Enter: `https://tealogy-cafe.vercel.app`
4. Choose verification method (HTML tag recommended)

### Step 2: Verify Ownership

For HTML tag method:
1. Copy the verification meta tag from Search Console
2. Add to Vercel environment variables or `app/layout.tsx`
3. Redeploy
4. Click "Verify" in Search Console

### Step 3: Submit Sitemap

1. In Search Console, go to **Indexing** → **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Wait for Google to process (may take a few hours)

### Step 4: Request Indexing

1. Go to **URL Inspection**
2. Enter key URLs:
   - `https://tealogy-cafe.vercel.app/`
   - `https://tealogy-cafe.vercel.app/menu`
   - `https://tealogy-cafe.vercel.app/contact`
   - `https://tealogy-cafe.vercel.app/category/tea`
3. Click **Request Indexing** for each

## 🧪 Rich Results Test

1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter: `https://tealogy-cafe.vercel.app/`
3. Verify:
   - ✅ No errors
   - ✅ CafeOrCoffeeShop schema detected
   - ✅ All fields valid (name, address, phone, hours, rating)

## 🔄 Future Domain Migration

When you get a custom domain (e.g., `teaology.in`):

1. Add custom domain in Vercel
2. Update environment variable:
   - `SITE_URL` = `https://teaology.in`
3. Redeploy (no code changes needed!)
4. Add new property in Google Search Console
5. Submit new sitemap

## 📝 Local Development with Bun

```bash
# Install dependencies
bun install

# Build with correct domain
SITE_URL=https://tealogy-cafe.vercel.app bun run build:full

# Or for local testing
SITE_URL=http://localhost:3000 bun run build:full

# Start server
bun run start
```

## ✅ Checklist

- [ ] Set `SITE_URL` environment variable in Vercel
- [ ] Deploy to Vercel
- [ ] Verify build logs show sitemap generation
- [ ] Test `/sitemap.xml` returns 200
- [ ] Test `/robots.txt` shows correct domain
- [ ] Verify page source has correct canonical URLs
- [ ] Add property to Google Search Console
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Request indexing for key pages
- [ ] Run Rich Results Test
- [ ] Monitor Search Console for indexing status

## 🆘 Troubleshooting

**Sitemap still shows old domain:**
- Ensure `SITE_URL` environment variable is set in Vercel
- Trigger a new deployment (don't just redeploy)
- Check build logs for sitemap generation

**404 on sitemap.xml:**
- Check Vercel build logs for errors
- Ensure `postbuild` script ran successfully
- Verify `public/sitemap.xml` exists in deployment

**Wrong URLs in page source:**
- Clear browser cache
- Check environment variable is set for correct environment
- Verify deployment used latest code

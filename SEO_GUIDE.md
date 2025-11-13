# Tealogy Cafe - SEO Implementation Guide

## Overview
This document describes the complete SEO setup for Tealogy Cafe website.

## What's Implemented

### 1. Global Metadata (`app/layout.tsx`)
- ✅ Optimized title and description
- ✅ Keywords targeting local search (Surat, Adajan)
- ✅ OpenGraph and Twitter Card tags
- ✅ Canonical URL configuration
- ✅ Favicon and app icons
- ✅ Web App Manifest integration
- ✅ Viewport configuration for mobile

### 2. JSON-LD Structured Data
- ✅ Organization schema with business details
- ✅ Address, phone, and email in structured format
- ✅ Opening hours specification
- ✅ Service cuisine categories
- ✅ Social media links

### 3. Dynamic Page Metadata
- ✅ Category pages with unique titles and descriptions
- ✅ Canonical URLs for each page
- ✅ OpenGraph images and social tags
- ✅ Location-based keywords

### 4. Technical SEO
- ✅ `robots.txt` with sitemap references
- ✅ `sitemap.xml` auto-generated with priority levels
  - Homepage: Priority 1.0 (daily)
  - Categories: Priority 0.9 (weekly)
  - Other pages: Priority 0.7 (weekly)
- ✅ Web App Manifest for PWA
- ✅ Mobile-friendly viewport settings
- ✅ Semantic HTML structure

## Performance Optimization Checklist

### Image Optimization
- [ ] Convert images to WebP format for faster loading
- [ ] Add lazy loading to all images
- [ ] Use Next.js Image component (already implemented)
- [ ] Optimize image sizes: 1200x630px for OG images

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

### Bundle Optimization
- [ ] Enable tree-shaking in Next.js
- [ ] Use dynamic imports for heavy components
- [ ] Monitor bundle size with `npm run build`

## Testing & Validation

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: https://teaology.in
3. Verify ownership (recommended: DNS record)
4. Submit sitemap: https://teaology.in/sitemap.xml
5. Monitor indexing status and crawl errors

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site: https://teaology.in
3. Submit sitemap: https://teaology.in/sitemap.xml
4. Check crawl statistics

### Google Rich Results Test
- Go to https://search.google.com/test/rich-results
- Enter: https://teaology.in
- Verify Organization schema shows correctly
- Check for any validation warnings

### Schema.org Validator
- Go to https://validator.schema.org
- Paste homepage source code
- Ensure Organization schema validates without errors

### Lighthouse SEO Audit
\`\`\`bash
npm run build
npm run start
# Open DevTools > Lighthouse > Performance + SEO
# Target score: ≥95 for SEO
\`\`\`

## Keyword Strategy

### Primary Keywords
- Tealogy Cafe
- Tea Cafe Surat
- Best Tea Cafe Adajan
- Premium Teas Online

### Category Keywords
- Adrak Tea Surat
- Masala Tea Adajan
- Cold Coffee Surat
- Milkshakes near me
- Handcrafted Beverages Surat

### Long-tail Keywords
- Best tea cafe in Adajan, Surat
- Fresh handcrafted teas near Madhuvan Circle
- Premium coffee and shakes in Surat
- Tea shop Velocity Business Hub

## Content Guidelines

### Page Titles
Format: `{Category} | Tealogy Cafe` for category pages
Examples:
- "Tea | Tealogy Cafe"
- "Coffee | Tealogy Cafe"
- "Cold Coffee | Tealogy Cafe"

### Meta Descriptions
- 155-160 characters
- Include location (Surat/Adajan)
- Include primary keyword
- Include CTA (Order online, Visit us)

### Headings Hierarchy
- `<h1>`: Page title (one per page)
- `<h2>`: Section titles (category names)
- `<h3>`: Subsections as needed

## Monitoring & Maintenance

### Monthly Tasks
- [ ] Check Google Search Console for new indexing issues
- [ ] Review top search queries and rankings
- [ ] Monitor Core Web Vitals in GSC
- [ ] Check for crawl errors

### Quarterly Tasks
- [ ] Audit all page titles and descriptions
- [ ] Review and update category descriptions
- [ ] Check competitor keyword rankings
- [ ] Generate performance reports

### Annually
- [ ] Full website SEO audit
- [ ] Update structured data as needed
- [ ] Review and refresh old content
- [ ] Plan new content strategy

## Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Verify `sitemap.xml` and `robots.txt` generated
- [ ] Deploy to Vercel
- [ ] Wait for DNS to propagate
- [ ] Verify site is accessible at https://teaology.in
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Monitor crawl stats for 7 days
- [ ] Check Core Web Vitals after 2 weeks

## Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [Core Web Vitals Guide](https://web.dev/vitals)

#!/bin/bash

# SEO Verification Script for Teaology Café
# Usage: ./scripts/verify-seo.sh [domain]
# Example: ./scripts/verify-seo.sh https://tealogy-cafe.vercel.app

DOMAIN="${1:-https://tealogy-cafe.vercel.app}"

echo "🔍 Verifying SEO assets for: $DOMAIN"
echo "================================================"
echo ""

# Check sitemap.xml
echo "📄 Checking sitemap.xml..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/sitemap.xml")
if [ "$STATUS" = "200" ]; then
  echo "✅ sitemap.xml: OK (HTTP $STATUS)"
else
  echo "❌ sitemap.xml: FAILED (HTTP $STATUS)"
fi
echo ""

# Check sitemap-0.xml
echo "📄 Checking sitemap-0.xml..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/sitemap-0.xml")
if [ "$STATUS" = "200" ]; then
  echo "✅ sitemap-0.xml: OK (HTTP $STATUS)"
else
  echo "❌ sitemap-0.xml: FAILED (HTTP $STATUS)"
fi
echo ""

# Check sitemap-extra.xml
echo "📄 Checking sitemap-extra.xml..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/sitemap-extra.xml")
if [ "$STATUS" = "200" ]; then
  echo "✅ sitemap-extra.xml: OK (HTTP $STATUS)"
else
  echo "⚠️  sitemap-extra.xml: Not found (HTTP $STATUS) - May generate after first build"
fi
echo ""

# Check robots.txt
echo "🤖 Checking robots.txt..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN/robots.txt")
if [ "$STATUS" = "200" ]; then
  echo "✅ robots.txt: OK (HTTP $STATUS)"
  echo ""
  echo "Content:"
  curl -s "$DOMAIN/robots.txt"
else
  echo "❌ robots.txt: FAILED (HTTP $STATUS)"
fi
echo ""
echo "================================================"

# Check homepage for SEO tags
echo "🏠 Checking homepage SEO tags..."
HOMEPAGE=$(curl -s "$DOMAIN/")

if echo "$HOMEPAGE" | grep -q "rel=\"canonical\""; then
  CANONICAL=$(echo "$HOMEPAGE" | grep -o 'rel="canonical" href="[^"]*"' | head -1)
  echo "✅ Canonical tag found: $CANONICAL"
else
  echo "❌ Canonical tag not found"
fi

if echo "$HOMEPAGE" | grep -q "og:url"; then
  OG_URL=$(echo "$HOMEPAGE" | grep -o 'property="og:url" content="[^"]*"' | head -1)
  echo "✅ OG URL found: $OG_URL"
else
  echo "❌ OG URL not found"
fi

if echo "$HOMEPAGE" | grep -q "application/ld+json"; then
  echo "✅ JSON-LD structured data found"
else
  echo "❌ JSON-LD structured data not found"
fi

echo ""
echo "================================================"
echo "✨ Verification complete!"
echo ""
echo "Next steps:"
echo "1. Set SITE_URL environment variable in Vercel"
echo "2. Submit sitemap to Google Search Console"
echo "3. Run Rich Results Test: https://search.google.com/test/rich-results"
echo "4. Request indexing for key pages"

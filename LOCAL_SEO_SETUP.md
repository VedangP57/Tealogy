# Local SEO Implementation Guide for Teaology Café

## ✅ Completed Implementation

### 1. JSON-LD Structured Data (LocalBusiness Schema)
- **Location**: `app/layout.tsx`
- **Type**: CafeOrCoffeeShop
- **Includes**:
  - Business name, address, phone (NAP)
  - Geographic coordinates (21.192571, 72.799736)
  - Opening hours (10:00 AM - 10:00 PM daily)
  - Aggregate rating (4.6 stars, 48 reviews)
  - Price range (₹1–200)
  - Menu link
  - Social/directory links (Zomato, Swiggy, Justdial)

### 2. Contact Page with Google Maps
- **Location**: `app/contact/page.tsx`
- **Features**:
  - Full NAP (Name, Address, Phone) in semantic HTML
  - Google Maps iframe embed
  - "Call Now" button with tel: link
  - "Get Directions" button linking to Google Maps
  - Opening hours display
  - Mobile-responsive design

### 3. Visible NAP Block in Footer
- **Location**: `components/footer.tsx`
- **Purpose**: Plain text NAP for Google crawling
- **Content**: Business name, full address, phone, hours

### 4. Optimized Meta Tags
- **Homepage title**: "Teaology Café — Best Tea & Snacks in Adajan, Surat | Order Online"
- **Description**: Includes location (Adajan, Surat), phone number, hours
- **Keywords**: Added "Adajan" and "Surat" prominently
- **OpenGraph & Twitter**: Updated with local targeting

### 5. Sitemap & Robots.txt
- **Sitemap**: Already configured via `next-sitemap.config.js`
- **Robots.txt**: Already present in `public/robots.txt`
- **Post-build**: Sitemap generates automatically

---

## 🚀 Next Steps (Manual Actions Required)

### 1. Claim & Verify Google Business Profile (CRITICAL)
1. Go to: https://www.google.com/business/
2. Search for "Teaology Café" or claim new listing
3. Use exact NAP:
   - **Name**: Teaology Café
   - **Address**: Ground floor, Velocity Business Hub, G/7, LP Savani Rd, near Madhuvan Circle, TGB, Adajan Gam, Adajan, Surat, Gujarat 395009
   - **Phone**: +91 70194 31834
4. Add website: https://teaology.in
5. Add menu link: https://teaology.in/menu
6. Add photos (logo, exterior, interior, products)
7. Set hours: 10:00 AM - 10:00 PM (Mon-Sun)
8. Add price range: ₹1-200

### 2. Submit to Google Search Console
1. Go to: https://search.google.com/search-console
2. Add property: https://teaology.in
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: https://teaology.in/sitemap.xml
5. Request indexing for:
   - https://teaology.in/
   - https://teaology.in/contact
   - https://teaology.in/menu (or category pages)

### 3. Validate Structured Data
1. Go to: https://search.google.com/test/rich-results
2. Test URL: https://teaology.in/
3. Verify no errors in JSON-LD
4. Check that CafeOrCoffeeShop schema is detected

### 4. Update Google Maps Embed (Optional)
The contact page uses approximate coordinates. To get the exact embed code:
1. Go to Google Maps
2. Search for your exact business location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `app/contact/page.tsx`

### 5. NAP Consistency Check
Ensure exact same NAP across all platforms:
- ✅ Website (teaology.in)
- ⏳ Google Business Profile
- ⏳ Zomato (verify listing)
- ⏳ Swiggy (verify listing)
- ⏳ Justdial (verify listing)
- ⏳ Magicpin (verify listing)
- ⏳ Facebook Business Page
- ⏳ Instagram Business Profile

**Exact format to use everywhere**:
- Name: Teaology Café
- Address: Ground floor, Velocity Business Hub, G/7, LP Savani Rd, near Madhuvan Circle, TGB, Adajan Gam, Adajan, Surat, Gujarat 395009
- Phone: +91 70194 31834

### 6. Generate Google Review Link
After claiming Google Business Profile:
1. Get your review link (format: `https://g.page/r/YOUR_BUSINESS_ID/review`)
2. Create QR code for in-café use
3. Add to receipts/table cards: "Loved your tea? Scan & leave us a Google review 💛"

### 7. Social Media Updates
Update all social profiles with:
- Website link: https://teaology.in
- Menu link: https://teaology.in/menu
- Contact link: https://teaology.in/contact
- Consistent NAP information

---

## 📊 Verification Checklist

After deployment, verify:

- [ ] JSON-LD validates with no errors (Rich Results Test)
- [ ] Sitemap accessible at https://teaology.in/sitemap.xml
- [ ] Robots.txt accessible at https://teaology.in/robots.txt
- [ ] Contact page displays correctly with map
- [ ] Phone links work on mobile (tel: links)
- [ ] Google Maps directions link works
- [ ] Meta titles include "Adajan" and "Surat"
- [ ] Footer NAP block visible on all pages
- [ ] Google Business Profile claimed and verified
- [ ] Website link appears in Google Business Profile
- [ ] Sitemap submitted to Search Console
- [ ] All URLs indexed in Search Console
- [ ] Search "Teaology Adajan" shows Knowledge Panel
- [ ] Lighthouse SEO score ≥ 95

---

## 🎯 Expected Results (Within 2-4 Weeks)

1. **Google Knowledge Panel** appears for "Teaology Adajan" searches
2. **Local Pack** inclusion for "tea café near me" in Adajan area
3. **Website link** visible in Google Maps listing
4. **Rich snippets** showing hours, rating, price range
5. **Increased organic traffic** from local searches

---

## 📞 Quick Reference

**Business Details**:
- Name: Teaology Café
- Address: Ground floor, Velocity Business Hub, G/7, LP Savani Rd, near Madhuvan Circle, TGB, Adajan Gam, Adajan, Surat, Gujarat 395009
- Phone: +91 70194 31834
- Hours: 10:00 AM - 10:00 PM (Daily)
- Coordinates: 21.192571, 72.799736

**Key URLs**:
- Website: https://teaology.in
- Menu: https://teaology.in/menu
- Contact: https://teaology.in/contact
- Sitemap: https://teaology.in/sitemap.xml

**Directory Listings**:
- Zomato: https://www.zomato.com/surat/tealogy-cafe-adajan-gam
- Swiggy: https://www.swiggy.com/restaurants/tealogy-cafe-adajan-gam-surat-1199302
- Justdial: https://www.justdial.com/Surat/Tealogy-Cafe-Gujarat-Near-Madhuvan-Circle-Adajan-Gam/0261PX261-X261-250129221936-E6X1_BZDET

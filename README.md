# Teaology - Premium Tea & Beverages

A modern, static Next.js website for Teaology featuring a comprehensive menu of teas, coffees, shakes, and delicious bites.

## 🎯 Features

- **Static Site Generation**: All pages pre-rendered at build time for optimal performance
- **Mobile-First Design**: Responsive bento grid layout that looks great on all devices
- **Dynamic Routing**: Category pages automatically generated from JSON menu data
- **Modern UI**: Clean, spacious card-based design with warm color palette
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard-friendly interactions
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Meaningful meta tags, structured data (JSON-LD), and local SEO
- **Local Business Schema**: Complete LocalBusiness structured data for Google Knowledge Panel
- **Google Maps Integration**: Embedded map on contact page with directions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (npm or yarn)

### Installation

\`\`\`bash
# Clone or download the repository
cd teaology

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

\`\`\`bash
# Build the static site
npm run build

# Start production server
npm run start
\`\`\`

## 📁 Project Structure

\`\`\`
teaology/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── login/
│   │   └── page.tsx         # Login page
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamic category pages
│   └── globals.css          # Global styles & theme
├── components/
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer
│   ├── category-card.tsx    # Category tile component
│   └── item-row.tsx         # Menu item component
├── lib/
│   ├── menu.ts              # Menu data utilities
│   └── menu-types.ts        # TypeScript types
├── data/
│   └── menu.json            # Menu data source
└── public/                  # Static assets
\`\`\`

## 🎨 Design System

### Color Palette

- **Primary**: Tea Green (`#2d5016`)
- **Secondary**: Warm Accent (`#d4a574`)
- **Background**: Cream (`#fef9f3`)
- **Text**: Dark Slate (`#2d3436`)

### Responsive Breakpoints

- **Mobile**: < 640px (2 column grid)
- **Tablet**: 640px - 1024px (3-4 column grid)
- **Desktop**: > 1024px (4+ column grid)

## 🔧 Adding New Items

Edit `data/menu.json` to add or modify categories and menu items:

\`\`\`json
{
  "categories": [
    {
      "name": "Category Name",
      "slug": "category-slug",
      "items": [
        {"name": "ITEM NAME", "price": "20/25"}
      ]
    }
  ]
}
\`\`\`

## 📱 Pages

- **Home** (`/`) - Menu categories overview
- **Menu** (`/menu`) - Full menu overview
- **Category** (`/category/[slug]`) - Items in a category
- **Contact** (`/contact`) - Location, hours, and contact information with Google Maps

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your repository to GitHub
2. Import the project in Vercel
3. Vercel automatically detects Next.js and configures the build
4. Deploy with a single click

### Other Platforms

Since this is a static site, you can deploy the `out` directory to any static hosting:

\`\`\`bash
npm run build
# The built site is ready to deploy
\`\`\`

## ⚡ Performance

- **Lighthouse Score**: Optimized for >90 on all metrics
- **Static Generation**: Pages generated at build time
- **Image Optimization**: Lazy loading with Next.js Image component
- **CSS**: Tailwind CSS with tree-shaking

## 🔍 Local SEO Setup

This site is optimized for local search visibility. See `LOCAL_SEO_SETUP.md` for:
- Google Business Profile setup instructions
- Search Console submission steps
- NAP consistency checklist
- Structured data validation
- Review generation strategies

## 🔮 Future Enhancements

- Shopping cart with localStorage persistence
- Item preview modals
- Order placement system
- Admin dashboard for menu management

## 📄 License

All rights reserved © 2025 Teaology

## 🤝 Support

For issues or questions, please open an issue in the repository.

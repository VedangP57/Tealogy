import { Analytics } from "@vercel/analytics/react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  preload: true,
})

const SITE_URL = process.env.SITE_URL || "https://tealogy-cafe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Teaology Café — Best Tea & Snacks in Adajan, Surat | Order Online",
    template: "%s | Teaology Café",
  },
  description:
    "Teaology Café in Adajan, Surat — handcrafted teas, shakes & bites. Open 10:00 AM–10:00 PM. Call +91 70194 31834 or order online.",
  keywords: [
    "Teaology Café",
    "Adajan",
    "Surat",
    "Best Tea Café",
    "Tea Shop",
    "Masala Tea",
    "Coffee",
    "Shakes",
    "Tea Cafe Surat",
    "Adrak Tea",
    "Cold Coffee",
    "Milkshakes",
    "Tea Shop Adajan",
    "Handcrafted Beverages",
    "Fresh Teas",
  ],
  authors: [{ name: "Tealogy Cafe", url: SITE_URL }],
  creator: "Tealogy Cafe",
  publisher: "Tealogy Cafe",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Teaology Café",
    title: "Teaology Café — Best Tea & Snacks in Adajan, Surat | Order Online",
    description:
      "Teaology Café in Adajan, Surat — handcrafted teas, shakes & bites. Open 10:00 AM–10:00 PM. Call +91 70194 31834 or order online.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Teaology Café - Premium Tea & Beverages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teaology Café — Best Tea & Snacks in Adajan, Surat",
    description:
      "Teaology Café in Adajan, Surat — handcrafted teas, shakes & bites. Open 10:00 AM–10:00 PM. Call +91 70194 31834 or order online.",
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@teaology_cafe",
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fef9f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="X1Dd0vaylNSNbZYdXPpg6tARi1gBU_NIm_eSOUIHeoE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://vercel-insights.com" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Teaology Café",
              image: `${SITE_URL}/og-image.jpg`,
              url: SITE_URL,
              telephone: "+91 70194 31834",
              priceRange: "₹1–200",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ground floor, Velocity Business Hub, G/7, LP Savani Rd, near Madhuvan Circle, TGB, Adajan Gam, Adajan",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                postalCode: "395009",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.192571,
                longitude: 72.799736,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "10:00",
                  closes: "22:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "48",
              },
              hasMenu: `${SITE_URL}/menu`,
              sameAs: [
                "https://www.zomato.com/surat/tealogy-cafe-adajan-gam",
                "https://www.swiggy.com/restaurants/tealogy-cafe-adajan-gam-surat-1199302",
                "https://www.justdial.com/Surat/Tealogy-Cafe-Gujarat-Near-Madhuvan-Circle-Adajan-Gam/0261PX261-X261-250129221936-E6X1_BZDET",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

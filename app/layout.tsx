import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://teaology.in"),
  title: {
    default: "Tealogy Cafe — Premium Teas, Shakes & Bites in Surat",
    template: "%s | Tealogy Cafe",
  },
  description:
    "Tealogy Cafe serves handcrafted teas, coffees, shakes, and delicious bites — made fresh daily. Order online or visit us in Adajan, Surat. Ground floor, Velocity Business Hub.",
  keywords: [
    "Tealogy Cafe",
    "Tea Cafe Surat",
    "Best Tea Cafe",
    "Adrak Tea",
    "Masala Tea",
    "Cold Coffee",
    "Milkshakes",
    "Tea Shop Adajan",
    "Handcrafted Beverages",
    "Fresh Teas",
  ],
  authors: [{ name: "Tealogy Cafe", url: "https://teaology.in" }],
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
    url: "https://teaology.in",
    siteName: "Tealogy Cafe",
    title: "Tealogy Cafe — Premium Teas, Shakes & Bites in Surat",
    description: "Handcrafted teas, coffees, and snacks. Freshly brewed, always delicious. Visit us in Adajan, Surat.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tealogy Cafe - Premium Tea & Beverages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tealogy Cafe — Premium Teas, Shakes & Bites",
    description: "Order premium teas, shakes, and bites online or visit us in Surat.",
    images: ["/og-image.jpg"],
    creator: "@teaology_cafe",
  },
  icons: {
    icon: [
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
    canonical: "https://teaology.in",
  },
    generator: 'v0.app'
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "@id": "https://teaology.in",
              name: "Tealogy Cafe",
              image: "https://teaology.in/og-image.jpg",
              description: "Handcrafted teas, coffees, shakes, and bites made fresh daily.",
              url: "https://teaology.in",
              telephone: "+91 7019431834",
              email: "contact@teaology.in",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ground floor, Velocity Business Hub, G/7, LP Savani Rd, near Madhuvan Circle, TGB",
                addressLocality: "Adajan",
                addressRegion: "Gujarat",
                postalCode: "395009",
                addressCountry: "IN",
              },
              priceRange: "₹₹",
              servesCuisine: ["Tea", "Coffee", "Snacks", "Shakes", "Beverages"],
              sameAs: ["https://instagram.com/teaology_cafe", "https://facebook.com/teaology_cafe"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "07:00",
                  closes: "22:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-cream text-slate-900`}>{children}</body>
    </html>
  )
}

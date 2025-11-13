import Header from "@/components/header"
import Footer from "@/components/footer"
import ItemRow from "@/components/item-row"
import { getCategoryBySlug, getAllCategorySlugs } from "@/lib/menu"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"

// Force static generation - no dynamic rendering
export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: "Not Found",
    }
  }

  const sampleItems = category.items
    .slice(0, 3)
    .map((i) => i.name)
    .join(", ")

  return {
    title: `${category.name} | Tealogy Cafe`,
    description: `Explore our ${category.name} collection at Tealogy Cafe. Fresh and delicious options including ${sampleItems} and more. Order online in Surat.`,
    keywords: [`${category.name} Surat`, `${category.name} Adajan`, "Tealogy Cafe", category.name],
    alternates: {
      canonical: `https://teaology.in/category/${slug}`,
    },
    openGraph: {
      title: `${category.name} | Tealogy Cafe`,
      description: `Order premium ${category.name.toLowerCase()} from Tealogy Cafe in Surat. Made fresh daily.`,
      url: `https://teaology.in/category/${slug}`,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${category.name} at Tealogy Cafe`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | Tealogy Cafe`,
      description: `Order premium ${category.name.toLowerCase()} from Tealogy Cafe in Surat.`,
      images: ["/og-image.jpg"],
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero / Page Header */}
        <header
          aria-labelledby="category-heading"
          className="bg-white border-b border-border"
        >
          <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
            <div className="flex items-start gap-4 sm:items-center sm:justify-between">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-2 font-medium text-sm"
                  aria-label="Back to menu"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Menu
                </Link>

                <h1
                  id="category-heading"
                  className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight"
                >
                  {category.name}
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                  {category.items.length} delicious option
                  {category.items.length !== 1 ? "s" : ""} available
                </p>
              </div>

            </div>
          </div>
        </header>

        {/* Content */}
        <section className="py-8 sm:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left: Items (primary) */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-4 sm:p-6">

                  {/* Items list */}
                  <div className="space-y-4">
                    {category.items.length > 0 ? (
                      category.items.map((item, index) => (
                        <ItemRow key={index} item={item} />
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground py-12">
                        No items available in this category.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Sticky sidebar (summary / quick info) */}
              <aside className="lg:col-span-1">
                <div className="sticky top-20">
                  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                    <h3 className="text-sm font-semibold text-primary mb-2">About {category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Enjoy Teaology’s carefully curated {category.name.toLowerCase()}. Made fresh with premium ingredients.
                    </p>

                    <div className="border-t border-border pt-4 mt-4">
                      <h4 className="text-xs text-muted-foreground uppercase tracking-wide">Quick info</h4>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        <li>• Order for pickup or local delivery</li>
                        <li>• Freshly prepared</li>
                        <li>• Contact: +91 98765 43210</li>
                      </ul>
                    </div>
                  </div>

                  {/* Optional: small promo / hours card */}
                  <div className="mt-4 bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                    <h4 className="text-sm font-semibold text-primary mb-2">Opening Hours</h4>
                    <p className="text-sm text-muted-foreground">Mon - Sun: 8:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

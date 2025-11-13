import type { Metadata } from "next"
import Image from "next/image"
import CategoryCard from "@/components/category-card"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { getAllCategories } from "@/lib/menu"

export const metadata: Metadata = {
  title: "Teaology Café — Best Tea & Snacks in Adajan, Surat | Order Online",
  description:
    "Teaology Café in Adajan, Surat — handcrafted teas, shakes & bites. Open 10:00 AM–10:00 PM. Call +91 70194 31834 or order online.",
}

// Force static generation - no dynamic rendering
export const dynamic = "force-static"
export const revalidate = false

export default function Home() {
  const categories = getAllCategories()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 bg-background">
          <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-2 sm:mb-4 leading-tight">
              Welcome to Tealogy Cafe
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Discover premium teas, coffees, shakes, and delicious bites
              crafted for the perfect moment.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
              Our Menu
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-4">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-white border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-4">
              Crafted with Care
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2">
              Each beverage and bite is prepared fresh with the finest
              ingredients to ensure every visit is memorable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                {
                  img: "/images/feature-quality.jpg",
                  title: "Premium Quality",
                  desc: "Only the finest ingredients",
                },
                {
                  img: "/images/feature-fresh.jpg",
                  title: "Fresh Daily",
                  desc: "Prepared fresh every single day",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-background rounded-lg sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40 sm:h-48 md:h-56 bg-gray-100">
                    <Image
                      src={feature.img || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i === 0}
                    />
                  </div>
                  <div className="p-5 sm:p-6 md:p-8">
                    <h2 className="font-bold text-base sm:text-lg text-primary mb-1 sm:mb-2">
                      {feature.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from "next"
import CategoryCard from "@/components/category-card"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { getAllCategories } from "@/lib/menu"

export const metadata: Metadata = {
  title: "Our Menu — Teaology Café Adajan, Surat",
  description:
    "Browse our full menu of handcrafted teas, coffees, shakes, and bites at Teaology Café in Adajan, Surat. Fresh flavors, exceptional quality.",
}

export const dynamic = "force-static"
export const revalidate = false

export default function MenuPage() {
  const categories = getAllCategories()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
              Our Menu
            </h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore our collection of premium teas, coffees, shakes, and
              delicious bites. Fresh flavors, exceptional quality.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

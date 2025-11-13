import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import type { MenuCategory } from "@/lib/menu-types"

const categoryImages: Record<string, string> = {
  tea: "/images/category/tea.jpg",
  coffee: "/images/category/coffee.jpg",
  "hot-lemon-tea": "/images/category/hot-lemon-tea.jpg",
  "ice-crushes": "/images/category/ice-crushes.jpg",
  shakes: "/images/category/shakes.jpg",
  "fruit-shakes": "/images/category/fruit-shakes.jpg",
  milk: "/images/category/milk.jpg",
  mocktails: "/images/category/mocktails.jpg",
  "ice-tea": "/images/category/ice-tea.jpg",
  bites: "/images/category/bites.jpg",
  "cold-coffee": "/images/category/cold-coffee.jpg",
  maggi: "/images/category/maggi.jpg",
  "hot-beverages": "/images/category/hot-beverages.jpg",
}

interface CategoryCardProps {
  category: MenuCategory
}

function CategoryCard({ category }: CategoryCardProps) {
  const imagePath = categoryImages[category.slug] || "/images/category/tea.jpg"

  return (
    <Link href={`/category/${category.slug}`}>
      <div className="bg-white rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 h-full shadow-sm hover:shadow-md">
        <div className="relative h-40 sm:h-48 md:h-56 bg-gray-100">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={`${category.name} category`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
        </div>
        <div className="p-4 sm:p-5 md:p-6 text-center">
          <h3 className="font-bold text-base sm:text-lg md:text-xl text-primary mb-1 line-clamp-2">{category.name}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{category.items.length} items</p>
        </div>
      </div>
    </Link>
  )
}

export default memo(CategoryCard)

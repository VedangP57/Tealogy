import menuData from "@/data/menu.json"
import type { MenuData, MenuCategory } from "./menu-types"

const menu: MenuData = menuData

export function getAllCategories(): MenuCategory[] {
  return menu.categories
}

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return menu.categories.find((cat) => cat.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return menu.categories.map((cat) => cat.slug)
}

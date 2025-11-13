export interface MenuItem {
  name: string
  price: string
  image?: string
}

export interface MenuCategory {
  name: string
  slug: string
  items: MenuItem[]
}

export interface MenuData {
  categories: MenuCategory[]
}

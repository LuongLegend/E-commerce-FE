type ProductType = {
  id: string
  title: string
  description: string
  price: number
  sku: string
  slug: string
  frontImg?: string
  backImg?: string
  product_meta?: {
    id: number
    weight: string
    height: string
    color: string
    size: string
    quantity: number
  }[]
  shopId: string
  shop?: {
    title: string
    img: string | null
  }
}

export type { ProductType }

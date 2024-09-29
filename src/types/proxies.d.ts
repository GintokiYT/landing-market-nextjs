
// API -> products/list
export interface GetProductList {
  success: boolean
  data: {
    category: string
    items: Product[]
  }[]
}

export interface Product {
  id: number
  name: string
  slug: string
  summary: string
  creator: string
  price: number
  offer_price: number
  in_offer: boolean
  category_product_id: number
  logo: string
  sort: number
  status: string
  trial_days: number
}
'use server'
import { z } from 'zod'

import database from '@/app/api/products/data.json'
import { Product } from '@/data/types/product'

export async function searchProducts(q: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const query = z.string().safeParse(q)

  if (!query.success) {
    throw new Error('Invalid data')
  }

  const products = database.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.data.toLocaleLowerCase())
  })

  return products
}

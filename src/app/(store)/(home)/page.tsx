import { Badge } from '@/components/ui/badge'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

const getFeaturedProducts = async (): Promise<Product[]> => {
  const response = await api('/products/featured', {
    // next: {
    //   revalidate: 60 * 60, // 1 hora
    // },
    cache: 'no-cache',
  })
  return await response.json()
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()
  return (
    <main className="grid max-h-[82vh] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-secondary/20 overflow-hidden flex justify-center 
        items-end border border-transparent hover:border-border/50 transition-colors duration-500"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500 h-full object-contain"
          width={800}
          height={800}
          quality={100}
          alt={highlightedProduct.title}
        />
        <div
          className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full 
          backdrop-blur-[2px] bg-secondary/20 p-1 pl-5 border border-border/50"
        >
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <Badge className="h-full px-5 font-semibold text-xl">
            {formatCurrency(highlightedProduct.price)}
          </Badge>
        </div>
      </Link>

      {otherProducts.slice(0, 2).map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-secondary/20 overflow-hidden flex justify-center 
          items-end border border-transparent hover:border-border/50 transition-colors duration-500"
        >
          <Image
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-500 h-full object-contain"
            width={420}
            height={420}
            quality={100}
            alt={product.title}
          />

          <div
            className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full 
            backdrop-blur-[2px] p-1 pl-5 border border-border/50"
          >
            <span className="text-sm truncate">{product.title}</span>
            <Badge className="h-full px-4 font-semibold text-base">
              {formatCurrency(product.price)}
            </Badge>
          </div>
        </Link>
      ))}
    </main>
  )
}

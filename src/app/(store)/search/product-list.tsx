import { searchProducts } from '@/app/actions/actions'
import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ProductListProps {
  q: string
}

const ProductList = async ({ q }: ProductListProps) => {
  const products = await searchProducts(q)
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative rounded-lg bg-secondary/20 overflow-hidden flex justify-center items-end"
        >
          <Image
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            alt={product.title}
          />

          <div
            className="absolute bottom-10 right-4 h-12 flex items-center gap-2 max-w-[280px] rounded-full 
        backdrop-blur-[2px] bg-secondary/20 p-1 pl-5 border border-border/50"
          >
            <span className="text-sm truncate">{product.title}</span>
            <Badge className="h-full px-4 font-semibold text-base">
              {formatCurrency(product.price)}
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductList

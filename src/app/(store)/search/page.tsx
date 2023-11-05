import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import ProductList from './product-list'
import LoadingSkeleton from './loading-skeleton'

interface SearchProps {
  searchParams: {
    q: string
  }
}

const Search = ({ searchParams: { q } }: SearchProps) => {
  if (!q) redirect('/')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{q}</span>
      </p>

      <Suspense key={q} fallback={<LoadingSkeleton />}>
        <ProductList q={q} />
      </Suspense>
    </div>
  )
}

export default Search

import { Skeleton } from '@/components/ui/skeleton'

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-6 min-h-[984px] min-w-full">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="col-span-1 row-span-1 opacity-20" />
      ))}
    </div>
  )
}

export default LoadingSkeleton

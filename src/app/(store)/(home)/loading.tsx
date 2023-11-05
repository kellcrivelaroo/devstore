import { Skeleton } from '@ui/skeleton'

const HomeLoading = () => {
  return (
    <div className="grid h-full max-h-[82vh] grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 rounded-lg h-[82vh]" />
      <Skeleton className="col-span-3 row-span-3 rounded-lg" />
      <Skeleton className="col-span-3 row-span-3 rounded-lg" />
    </div>
  )
}

export default HomeLoading

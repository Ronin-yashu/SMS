import { Skeleton } from '@radix-ui/themes'

export default function Loading() {
  return (
    <div className="p-6 space-y-6 w-full">
      <div className="space-y-2">
        <Skeleton width="200px" height="28px" />
        <Skeleton width="320px" height="18px" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-100 p-4 space-y-3">
            <Skeleton width="36px" height="36px" />
            <Skeleton width="60px" height="28px" />
            <Skeleton width="100px" height="16px" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1 rounded-xl border border-gray-100 p-4 space-y-3">
          <Skeleton width="120px" height="20px" />
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} width="100%" height="44px" />
          ))}
        </div>
        <div className="lg:col-span-2 rounded-xl border border-gray-100 p-4 space-y-3">
          <Skeleton width="140px" height="20px" />
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} width="100%" height="36px" />
          ))}
        </div>
      </div>
    </div>
  )
}

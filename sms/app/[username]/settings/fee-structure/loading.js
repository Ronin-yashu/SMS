import { Skeleton } from '@radix-ui/themes'

export default function Loading() {
  return (
    <div className="p-4 sm:p-6 space-y-6 w-full">
      <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton width="110px" height="20px" />
          <Skeleton width="100px" height="32px" />
        </div>
        <div className="flex gap-2">
          <Skeleton width="100px" height="32px" />
          <Skeleton width="110px" height="32px" />
          <Skeleton width="140px" height="32px" />
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-8 gap-4 px-4 py-3 bg-gray-50">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} width="100%" height="16px" />
          ))}
        </div>
        {[...Array(9)].map((_, i) => (
          <div key={i} className="grid grid-cols-8 gap-4 px-4 py-3 border-t border-gray-50">
            {[...Array(8)].map((_, j) => (
              <Skeleton key={j} width="100%" height="16px" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

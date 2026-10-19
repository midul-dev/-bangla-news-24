
const SkeletonBlock = ({
  className = "",
}: {
  className?: string;
}) => (
  <div
    className={`animate-pulse rounded bg-gray-200 ${className}`}
  />
);

const NewsCardSkeleton = () => {
  return (
    <article className="w-full min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* Image */}
      <SkeletonBlock className="aspect-[16/9] w-full rounded-none" />

      {/* News content */}
      <div className="space-y-3 p-3 sm:p-4">
        {/* Category */}
        <SkeletonBlock className="h-3 w-16" />

        {/* Title */}
        <div className="space-y-2">
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-5/6" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-4/5" />
          <SkeletonBlock className="h-3 w-2/3" />
        </div>

        {/* Published date */}
        <SkeletonBlock className="h-3 w-24" />
      </div>
    </article>
  );
};

export default function CategorySkeleton() {
  return (
    <main
      aria-label="Loading category news"
      aria-busy="true"
      className="mx-auto mt-5 w-full max-w-7xl px-4 sm:px-5 lg:px-5"
    >
      {/* Category title */}
      <div className="mb-5 border-b-2 border-red-200 pb-2">
        <SkeletonBlock className="mb-1 h-7 w-40 sm:h-8 sm:w-52 lg:h-9 lg:w-64" />
      </div>

      {/* News cards grid */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}

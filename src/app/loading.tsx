
const SkeletonBlock = ({
  className = "",
}: {
  className?: string;
}) => (
  <div
    className={`animate-pulse rounded bg-gray-200 ${className}`}
  />
);

const SkeletonNewsCard = () => (
  <article className="overflow-hidden rounded-lg border border-gray-200 bg-white">
    {/* Image */}
    <SkeletonBlock className="aspect-[16/9] w-full rounded-none" />

    {/* Content */}
    <div className="space-y-3 p-3">
      <SkeletonBlock className="h-3 w-16" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-5/6" />
      <div className="space-y-2 pt-1">
        <SkeletonBlock className="h-3 w-full" />
        <SkeletonBlock className="h-3 w-4/5" />
      </div>
      <SkeletonBlock className="h-3 w-24" />
    </div>
  </article>
);

const SkeletonSection = () => (
  <section className="mb-8">
    {/* Section heading */}
    <div className="mb-4 border-b-2 border-red-200 pb-2">
      <SkeletonBlock className="h-5 w-28" />
    </div>

    {/* News cards */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonNewsCard key={index} />
      ))}
    </div>
  </section>
);

export default function HomeSkeleton() {
  return (
    <main
      aria-label="Loading news"
      aria-busy="true"
      className="mx-auto w-full max-w-7xl px-4 sm:px-5"
    >
      {/* Main news layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Main news */}
        <div className="min-w-0 lg:col-span-2">
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Featured news */}
            <article className="overflow-hidden rounded-lg border border-gray-200">
              <SkeletonBlock className="aspect-[16/9] w-full rounded-none" />
              <div className="space-y-3 p-3">
                <SkeletonBlock className="h-3 w-16" />
                <SkeletonBlock className="h-5 w-full" />
                <SkeletonBlock className="h-5 w-4/5" />
                <SkeletonBlock className="h-3 w-full" />
                <SkeletonBlock className="h-3 w-5/6" />
              </div>
            </article>

            {/* Secondary headlines */}
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="space-y-2 border-b border-gray-200 pb-3"
                >
                  <SkeletonBlock className="h-3 w-14" />
                  <SkeletonBlock className="h-4 w-full" />
                  <SkeletonBlock className="h-4 w-4/5" />
                </div>
              ))}
            </div>
          </div>

          {/* Category sections */}
          <SkeletonSection />
          <SkeletonSection />
          <SkeletonSection />
        </div>

        {/* Most read sidebar */}
        <aside className="space-y-4">
          <div className="border-b-2 border-red-200 pb-2">
            <SkeletonBlock className="h-5 w-28" />
          </div>

          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="space-y-2 border-b border-gray-200 pb-3"
            >
              <SkeletonBlock className="h-3 w-14" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
}

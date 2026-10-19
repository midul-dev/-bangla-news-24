
const SkeletonBlock = ({
  className = "",
}: {
  className?: string;
}) => (
  <div
    className={`animate-pulse rounded bg-gray-200 ${className}`}
  />
);

export default function NewsDetailsSkeleton() {
  return (
    <main
      aria-label="Loading news article"
      aria-busy="true"
      className="mx-auto w-full max-w-4xl px-4 py-8"
    >
      {/* Category */}
      <div className="mb-4">
        <SkeletonBlock className="h-5 w-24" />
      </div>

      {/* Title */}
      <div className="mb-6 space-y-3">
        <SkeletonBlock className="h-8 w-full sm:h-10 md:h-12" />
        <SkeletonBlock className="h-8 w-11/12 sm:h-10 md:h-12" />
        <SkeletonBlock className="h-8 w-3/4 sm:h-10 md:h-12" />
      </div>

      {/* Description */}
      <div className="mb-6 space-y-3">
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-4/5" />
      </div>

      {/* Author and Date */}
      <div className="mb-8 border-y border-gray-200 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <SkeletonBlock className="h-4 w-36" />
            <SkeletonBlock className="h-3 w-28" />
          </div>

          <SkeletonBlock className="h-4 w-48" />
        </div>
      </div>

      {/* Article Body */}
      <article className="space-y-6">
        {/* Main image */}
        <figure className="my-8">
          <SkeletonBlock className="aspect-video w-full rounded-lg" />
          <SkeletonBlock className="mt-3 h-3 w-2/3" />
        </figure>

        {/* Paragraphs */}
        <div className="space-y-3">
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-11/12" />
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-4/5" />
        </div>

        {/* Subheading */}
        <div className="space-y-3 pt-4">
          <SkeletonBlock className="h-7 w-3/4 md:h-8" />
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-5/6" />
        </div>

        {/* Second image */}
        <SkeletonBlock className="my-8 aspect-video w-full rounded-lg" />

        {/* More paragraphs */}
        <div className="space-y-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <SkeletonBlock
              key={index}
              className={`h-4 ${
                index % 3 === 0
                  ? "w-4/5"
                  : index % 2 === 0
                    ? "w-11/12"
                    : "w-full"
              }`}
            />
          ))}
        </div>

        {/* Another subheading */}
        <div className="space-y-3 pt-4">
          <SkeletonBlock className="h-7 w-2/3 md:h-8" />
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-5/6" />
          <SkeletonBlock className="h-4 w-full" />
        </div>
      </article>

      {/* Tags */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        <SkeletonBlock className="mb-4 h-5 w-16" />

        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonBlock
              key={index}
              className="h-7 w-16 rounded-full"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

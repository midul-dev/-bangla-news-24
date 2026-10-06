import { IMainNews } from "@/types/mainNews";
import Image from "next/image";
import Link from "next/link";

const MainNews = ({ news }: { news: IMainNews[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mb-8">
      {/* Main News */}
      <Link href={`/news/${firstNews.id}`} className="block h-full">
        <div
          className="
            card
            bg-base-100
            border
            border-gray-300
            shadow-sm
            h-full
            overflow-hidden
            group
            transition-all
            duration-300
            ease-out
            hover:-translate-y-2
            hover:shadow-xl
          "
        >
          {/* Image */}
          <figure className="h-56  overflow-hidden">
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              height={600}
              width={600}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-105
              "
            />
          </figure>

          {/* Content */}
          <div className="card-body p-4 sm:p-5">
            <p className="text-red-700 font-bold text-sm sm:text-base">
              {firstNews.category}
            </p>

            <h2
              className="
                card-title
                font-bold
                text-xl
                sm:text-2xl
                leading-8
                transition-colors
                duration-300
                group-hover:text-red-700
              "
            >
              {firstNews.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-6">
              {firstNews.description}
            </p>
          </div>
        </div>
      </Link>

      {/* Other News */}
      <div
        className="
          card
          bg-base-100
          border
          border-gray-300
          shadow-sm
          overflow-hidden
        "
      >
        {otherNews.slice(0, 6).map((other) => (
          <Link key={other.id} href={`/news/${other.id}`} className="block">
            <div
              className="
                px-4
                sm:px-5
                py-4
                bg-base-100
                border-b
                border-gray-300
                group
                transition-all
                duration-300
                hover:bg-gray-50
                hover:pl-1
              "
            >
              <p className="text-red-600 font-semibold text-sm mb-1">
                {other.category}
              </p>

              <h2
                className="
                  font-bold
                  text-base
                  sm:text-lg
                  leading-7
                  transition-colors
                  duration-300
                  group-hover:text-red-700
                "
              >
                {other.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
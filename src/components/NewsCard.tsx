import Image from "next/image";
import Link from "next/link";

interface IArticles {
  id: number | string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  description: string;
  firstPublished: string;
  lastPublished: string;
}

const NewsCard = ({ news }: { news: IArticles }) => {
  return (
    <Link href={`/news/${news.id}`} className="block h-full">
      <div
        className="
          card
          bg-base-100
          border
          border-gray-300
          shadow-sm
          h-full
          overflow-hidden
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:shadow-xl
          group
        "
      >
        {/* Image */}
        <figure className="h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
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
          {/* Category */}
          <p className="text-red-700 font-bold text-sm">
            {news.category}
          </p>

          {/* Title */}
          <h2
            className="
              card-title
              font-bold
              text-base
              sm:text-lg
              leading-7
              transition-colors
              duration-300
              group-hover:text-red-700
            "
          >
            {news.title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-6">
            {news.description?.slice(0, 100)}...
          </p>

          {/* Date */}
          <p className="text-xs mt-2 text-neutral-400">
            {new Date(news.lastPublished).toLocaleDateString("bn-BD", {
              timeZone: "Asia/Dhaka",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
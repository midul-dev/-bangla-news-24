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
    <Link href={`/news/${news.id}`}>
    <div className="card bg-base-100 border-gray-300 border shadow-sm  h-full">
      <figure className="h-58">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          height={600}
          width={600}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <p className="text-red-700 font-bold">{news.category}</p>
        <h2 className="card-title font-bold">{news.title}</h2>
        <p className=" text-slate-600">{news.description?.slice(0, 100)}...</p>
        <p className="text-xs mt-1 text-neutral-400">
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

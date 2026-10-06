import Image from "next/image";

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
    <div className="card bg-base-100 border-gray-300 border shadow-sm">
      <figure>
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          height={600}
          width={600}
        />
      </figure>
      <div className="card-body">
        <p className="text-red-700 font-bold">{news.category}</p>
        <h2 className="card-title font-bold">{news.title}</h2>
        <p className="line-clamp-2">{news.description}</p>
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
  );
};

export default NewsCard;

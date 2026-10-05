import { IMainNews } from "@/types/mainNews";
import Image from "next/image";

const MainNews = ({ news }: { news: IMainNews[] }) => {
  const [firstNews, ...otherNews] = news;
  return (
    <div className="flex gap-4 mt-4">
      <div className="card bg-base-100 border-gray-300 border w-96 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            height={600}
            width={600}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-700 font-bold">{firstNews.category}</p>
          <h2 className="card-title font-bold">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
      {/* otherNews  */}
      <div className=" card bg-base-100 border border-gray-300   shadow-sm">
        {otherNews.slice(0, 4).map((other) => (
          <div
            className=" bg-base-100 border-t border-gray-300 overflow-hidden px-5 py-3 "
            p-5
            key={other.id}
          >
            <p className="text-red-600 font-semibold"> {other.category} </p>
            <h1 className="font-bold"> {other.title} </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;

import NewsCard from "@/components/NewsCard";
import { ICategoryNews } from "@/types/categoryNews";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`
  );

  const data = await res.json();

  const categoryNews = data.data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5 mt-5">
      {/* Category Title */}
      <h1
        className="
          text-xl
          sm:text-2xl
          lg:text-3xl
          font-bold
          border-b-2
          border-red-700
          mb-5
          pb-2
        "
      >
        {data.title}
      </h1>

      {/* News Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          sm:gap-5
          lg:gap-6
        "
      >
        {categoryNews.map((cNews: ICategoryNews) => (
          <NewsCard
            key={cNews.id}
            news={cNews}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
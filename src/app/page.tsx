import MainNews from "@/components/MainNews";
import MostReaded from "@/components/MostReaded";
import NewsCard from "@/components/NewsCard";

const HomePage = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();

  const section = data.data;

  const mainNews = section[0].articles;
  const otherSections = section.slice(1);

  interface IOthers {
    title: string;
    id: number | string;
    articles: {
      id: number | string;
      title: string;
      imageUrl: string;
      imageAlt: string;
      category: string;
      description: string;
      firstPublished: string;
      lastPublished: string;
    }[];
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5">
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

        {/* Left / Main Content */}
        <div className="lg:col-span-2 min-w-0">

          {/* Main News */}
          <MainNews news={mainNews} />

          {/* Other Sections */}
          <div>
            {otherSections.map(
              (otherS: IOthers, index: number) => {
                const articles = otherS.articles.filter(
                  (article) => article.description
                );

                if (articles.length === 0) return null;

                return (
                  <section key={otherS.id ?? index} className="mb-8">
                    {/* Section Title */}
                    <h1
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                        border-b-2
                        border-red-700
                        pb-2
                        mb-4
                      "
                    >
                      {otherS.title}
                    </h1>

                    {/* News Cards */}
                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-4
                      "
                    >
                      {articles.map((article) => (
                        <NewsCard
                          key={article.id}
                          news={article}
                        />
                      ))}
                    </div>
                  </section>
                );
              }
            )}
          </div>
        </div>

        {/* Right / Most Read */}
        <aside className="lg:col-span-1">
          <MostReaded />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
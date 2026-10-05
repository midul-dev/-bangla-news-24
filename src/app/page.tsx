import MainNews from "@/components/MainNews";
import MostReaded from "@/components/MostReaded";
import NewsCard from "@/components/NewsCard";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;
  const otherSections = section.slice(1)
  
  

  interface IOthers {
    title : string,
    id : number | string
    articles : { id: number | string, title: string,
      imageUrl: string,
          imageAlt: string,
          category: string,
          description: string,
          firstPublished: string,
          lastPublished: string
     }[]
  }
  

  
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {/* left side */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
{/*  otherSections  */}
<div>
  {otherSections.map((otherS : IOthers) => {
    const articles = otherS.articles.filter(
    (article) => article.description
  );
  if (articles.length === 0) return null;
  return (
    <div key={otherS.id}> <h1 className="text-xl border-b-2 border-red-700 pb-2 font-bold" > {otherS.title} </h1> 
  <div className="grid grid-cols-3 gap-4 mt-3 mb-6"> {articles.map((article) => <NewsCard key={article.id} news ={article} /> )} </div>
  </div>)}) }
  
</div>
        </div>
        {/* right side  */}
        <div className="col-span-1">
          <MostReaded />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

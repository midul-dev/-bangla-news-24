import NewsCard from "@/components/NewsCard";
import { ICategoryNews } from "@/types/categoryNews";


const CategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const categoryNews = data.data
    
    return (
        <div className="mt-5">
            <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-4 pb-2"> {data.title} </h1>
        <div className="grid grid-cols-3 gap-4">
            {
                categoryNews.map((cNews:ICategoryNews) => (
                    <NewsCard key={cNews.id} news ={cNews}/>
                ) )
            }
        </div>
        </div>
    );
};

export default CategoryPage;
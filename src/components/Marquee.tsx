import FastMarquee from "react-fast-marquee";

interface Headline {
    id: string | number;
    title: string;
}

interface NewsApiResponse {
    data: Headline[];
}

const Marquee = async () => {
    const res: Response = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data: NewsApiResponse = await res.json();
    const headlines: Headline[] = data.data;
    return (
        <div className="bg-red-600" >
           <div className="flex max-w-7xl mx-auto">
            <div className="bg-red-800 text-white py-1 px-5 font-bold">সর্বশেষ</div>
           <FastMarquee speed={120}>
            <div className="flex gap-4 text-white text-xs">
                {headlines.map((headline: Headline) => <div key={headline.id}><span >{headline.title}</span>
                <span className="mx-5" >•</span></div> )}
            </div>
           </FastMarquee>
           </div>
        </div>
    );
};

export default Marquee;
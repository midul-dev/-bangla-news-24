import Link from "next/link";
import FastMarquee from "react-fast-marquee";

interface Headline {
  id: string | number;
  title: string;
}

interface NewsApiResponse {
  data: Headline[];
}

const Marquee = async () => {
  const res: Response = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );

  const data: NewsApiResponse = await res.json();
  const headlines: Headline[] = data.data;

  return (
    <div className="bg-red-600">
      <div className="max-w-7xl mx-auto flex items-center overflow-hidden">
        
        {/* Label */}
        <div
          className="
            shrink-0
            bg-red-800
            text-white
            py-2
            px-3
            sm:px-5
            font-bold
            text-sm
            sm:text-base
            z-10
          "
        >
          সর্বশেষ
        </div>

        {/* Marquee */}
        <div className="flex-1 min-w-0">
          <FastMarquee
            speed={70}
            pauseOnHover={true}
            gradient={false}
          >
            <div className="flex items-center whitespace-nowrap">
              {headlines.map((headline) => (
                <div
                  key={headline.id}
                  className="flex items-center"
                >
                  <Link
                    href={`/news/${headline.id}`}
                    className="
                      text-white
                      text-sm
                      sm:text-[15px]
                      hover:underline
                      hover:text-red-100
                      transition-colors
                      duration-200
                    "
                  >
                    {headline.title}
                  </Link>

                  <span className="mx-4 sm:mx-5 text-red-200">
                    •
                  </span>
                </div>
              ))}
            </div>
          </FastMarquee>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
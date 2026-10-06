import Link from "next/link";

const MostReaded = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead = data.data;

  interface IMostRead {
    id: number | string;
    title: string;
    category: string;
  }

  return (
    <div className="card border bg-base-100 border-gray-300 shadow-sm mt-6">
        <div className="py-4 px-5 ">
            <h1 className="text-xl font-bold text-red-700 pb-3">সর্বাধিক পঠিত
</h1>
      <ol className="list-decimal list-inside list">
        {mostRead.map((readed: IMostRead) => (
          <li className="pb-2 font-bold" key={readed.id}>
            <Link className="hover:underline" href={`/news/${readed.id}`}>{readed.title}</Link>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
};

export default MostReaded;

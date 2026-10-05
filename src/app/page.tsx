import MainNews from "@/components/MainNews";

import React from "react";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;
  const otherSections = section.slice(1)

  interface IOthers {
    title : string,
    id : number | string
  }
  

  console.log(mainNews);
  return (
    <div>
      <div className="grid grid-cols-3">
        {/* left side */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
{/*  otherSections  */}
<div>
  {otherSections.map((otherS : IOthers) => <h1 key={otherS.id}> {otherS.title} </h1> )}
</div>
        </div>
        {/* right side  */}
        <div className="bg-green-500 col-span-1"></div>
      </div>
    </div>
  );
};

export default HomePage;

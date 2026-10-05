import { INav } from "@/types/navLinkType";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navLink = data.data;
  const navData = navLink.filter((data: INav) => data.scrapable);
  return (
    <div className="flex gap-4 mt-4">
        <Link href={"/"}>হোম</Link>      {navData.map((nav: INav, i: number) => (
        <div key={i}>{nav.title} </div>
      ))}
    </div>
  );
};

export default Navbar;

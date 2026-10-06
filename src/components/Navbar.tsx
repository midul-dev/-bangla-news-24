import { INav } from "@/types/navLinkType";
import Link from "next/link";

const Navbar = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const navLink = data.data;

  const navData = navLink.filter(
    (data: INav) => data.scrapable
  );

  return (
    <nav className="mt-4 border-t border-b border-gray-200 ">
      <div
        className="
          flex
          items-center
          gap-5
          sm:gap-6
          py-3
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
      >
        {/* Home */}
        <Link
          href="/"
          className="
            shrink-0
            font-semibold
            text-gray-800
            hover:text-red-600
            transition-colors
            duration-200
          "
        >
          হোম
        </Link>

        {/* Categories */}
        {navData.map((nav: INav) => (
          <Link
            href={`/category/${nav.slug}`}
            key={nav.slug}
            className="
              shrink-0
              font-semibold
              text-gray-700
              hover:text-red-600
              transition-colors
              duration-200
            "
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
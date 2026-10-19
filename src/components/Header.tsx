import Image from "next/image";
import Logo from "@/assets/logo.webp";
import Navbar from "./Navbar";
import Link from "next/link";
import Auth from "./Auth";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-5 lg:px-8">
      <div className="relative flex items-center justify-between gap-2 sm:justify-center">

        {/* Logo, Title and Date */}
        <div className="flex min-w-0 items-center gap-2">
          <Link href="/" className="shrink-0">
            <Image
              src={Logo}
              height={40}
              width={40}
              alt="Bangla News 24"
              className="h-9 w-9 sm:h-10 sm:w-10"
              priority
            />
          </Link>

          <div className="min-w-0">
            <Link href="/" className="block text-lg font-bold text-red-700 sm:text-2xl" >
              Bangla News 24
            </Link>

            <p className="text-xs text-neutral-500 sm:text-sm">
              {date}
            </p>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="shrink-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
          <Auth />
        </div>
      </div>

     <div className="mt-4 sm:flex sm:justify-center w-full">
      <Navbar />
    </div>
    </header>
  );
};

export default Header;
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import Navbar from "./Navbar";
import Marquee from "./Marquee";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <header className="max-w-7xl mx-auto px-4 py-4">
      <div className="relative flex justify-center items-center gap-2">
        <Image src={Logo} height={40} width={40} alt="Bangla News 24" />
      
      <div>
        <h1 className="text-2xl font-bold text-red-700">Bangla News 24</h1>
        <p className="text-sm text-neutral-500">{date}</p>
        </div>
      </div>
      <div className="absolute top-3 right-2 flex items-center gap-2">
        <button className="btn btn-ghost hover:btn-ghost">সাইন ইন</button>
        <button className="btn btn-error bg-red-600 text-white">সাইন আপ</button>
      </div>
      <Navbar />
      
    </header>
  );
};

export default Header;

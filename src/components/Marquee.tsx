import FastMarquee from "react-fast-marquee";

const Marquee = () => {
    return (
        <div className="bg-red-600" >
           <div className="max-w-7xl mx-auto">
           <FastMarquee speed={120}>
            <h1>hellow</h1>
           </FastMarquee>
           </div>
        </div>
    );
};

export default Marquee;
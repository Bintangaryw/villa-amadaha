import homePng from "../../assets/Home.png";

export default function Hero() {
    return (
        <div className="h-170 bg-cover bg-center xl:h-screen" style={{ backgroundImage: `url(${homePng})` }}>
            <div className="h-full w-full bg-black/20 flex flex-col items-center justify-center xl:justify-start">
                <div className="w-4/5 h-full p-4 flex flex-col justify-center xl:justify-start">
                    <div className="hidden xl:block text-white">Login</div>
                    <div className="flex flex-col items-center justify-center text-center space-y-5 xl:items-start xl:text-start xl:w-2/5 xl:mt-70">
                        <h1 className="text-white text-3xl font-bold xl:text-5xl">Make your comfort is our happiness</h1>
                        <p className="text-white text-xl xl:text-3xl">Studio villa made of bamboo, located near the top of Mount Geulis with a stunning 180 degree bird's eye view.</p>

                        {/* Mobile buttons */}
                        <div className="w-70 flex flex-col items-center justify-center space-y-4 p-4 xl:hidden">
                            <button className="cursor-pointer text-white bg-[#106A64] w-full h-12">Book Now</button>
                            <button className="cursor-pointer text-[#106A64] bg-white w-full h-12">Explore Room</button>
                        </div>

                        <div className="hidden xl:flex">
                            <button className="cursor-pointer bg-white text-[#106A64] rounded w-60 h-15 text-2xl">Explore Rooms</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

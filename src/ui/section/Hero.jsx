import homePng from "../../assets/Home.png";

export default function Hero() {
    return (
        <div className="h-170 bg-cover bg-center" style={{ backgroundImage: `url(${homePng})` }}>
            <div className="h-full w-full bg-black/40 flex flex-col items-center justify-center md:justify-start">
                <div className="w-4/5 h-full p-4 flex flex-col justify-center md:justify-start m">
                    <div className="hidden md:block text-white">Login</div>
                    <div className="flex flex-col items-center justify-center text-center space-y-5 md:items-start md:text-start md:w-2/5 md:mt-45">
                        <h1 className="text-white text-3xl font-bold md:text-4xl">Make your comfort is our happiness</h1>
                        <p className="text-white text-xl md:text-2xl">Studio villa made of bamboo, located near the top of Mount Geulis with a stunning 180 degree bird's eye view.</p>

                        {/* Mobile buttons */}
                        <div className="w-70 flex flex-col items-center justify-center space-y-4 p-4 md:hidden">
                            <button className="cursor-pointer text-white bg-[#106A64] w-full h-12">Book Now</button>
                            <button className="cursor-pointer text-[#106A64] bg-white w-full h-12">Explore Room</button>
                        </div>

                        <div className="hidden md:flex">
                            <button className="cursor-pointer bg-white text-[#106A64] w-40 h-10">Explore Rooms</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

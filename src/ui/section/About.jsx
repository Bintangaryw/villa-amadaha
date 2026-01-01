import aboutImg from "../../assets/aboutImage.png";
import desktopAbout from "../../assets/desktopAbout.png";

export default function About() {
    return (
        <div className="w-full flex flex-col items-center lg:w-350">
            <div className="w-100 pb-7 lg:w-full lg:pb-21">
                <h1 className="text-2xl font-bold lg:text-4xl">
                    About villa <span className="text-[#106A64]">Amadaha</span>
                </h1>
            </div>
            <div className="w-100 flex flex-col justify-center items-center space-y-7 lg:flex lg:flex-row lg:flex-1 lg:w-full lg:text-xl lg:space-y-0">
                <div className="w-full lg:basis-1/3">
                    <img src={aboutImg} className="w-full h-auto lg:hidden" />
                    <img src={desktopAbout} className="hidden lg:block" />
                </div>
                <div className="lg:h-full lg:flex lg:flex-col lg:justify-between lg:basis-2/3">
                    <p className="lg:max-w-150">Villa Amadaha consist of Two Luxury Villas and one Traditional Javanese House surrounded by a tranquil rain forest setting, traditional Indoesian houses anda a farm overlooking the area.</p>
                    <div className="grid grid-cols-2 w-full mt-7 lg:max-w-150">
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium text-xl lg:text-3xl">+6</span> <span className="font-medium text-[#106A64] lg:text-xl"> / Rooms</span>
                            </p>
                            <p>Room Options</p>
                        </div>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium text-xl lg:text-3xl">+2</span> <span className="font-medium text-[#106A64] lg:text-xl"> / Facilities</span>
                            </p>
                            <p>Facilities Options</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

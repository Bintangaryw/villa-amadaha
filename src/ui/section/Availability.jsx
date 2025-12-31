import dateIcon from "../../assets/icon/dateIcon.png";

export default function Availability() {
    return (
        <div className="w-screen flex flex-col justify-center items-center">
            {/* Mobile */}
            <div className="w-70 flex flex-col justify-center items-center space-y-6 xl:hidden">
                <p>Room</p>
                <div className="w-full flex flex-row justify-center items-center space-x-4">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <img src={dateIcon} alt="date icon" />
                        <p>Check In</p>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <img src={dateIcon} alt="date icon" />
                        <p>Check Out</p>
                    </div>
                </div>
                <div className="w-full">
                    <button className="w-full h-10 text-white bg-[#106A64]">Check Availibility</button>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden xl:block">
                <div className="flex justify-center w-350 rounded-xl p-10 bg-white text-2xl">
                    <div className="w-4/5 grid grid-cols-4">
                        <div className="flex flex-row justify-center items-center border-r border-r-[#9E9E9E]">
                            <p>Room</p>
                            <p></p>
                        </div>

                        <div className="flex flex-row justify-center items-center space-x-8 border-r border-r-[#9E9E9E]">
                            <img src={dateIcon} alt="date icon" width={20} />
                            <p>Check In</p>
                        </div>

                        <div className="flex flex-row justify-center items-center space-x-8">
                            <img src={dateIcon} alt="date icon" width={20} />
                            <p>Check Out</p>
                        </div>

                        <div>
                            <button className="w-full h-15 rounded-xl text-white bg-[#106A64]">Check Availibility</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

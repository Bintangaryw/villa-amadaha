import dateIcon from "../../assets/icon/dateIcon.png";

export default function Availability() {
    return (
        <div className="w-screen flex flex-col justify-center items-center">
            <div className="w-70 flex flex-col justify-center items- space-y-6">
                <p>Room</p>
                <div className="w-full flex flex-row justify-center items-center space-x-4">
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <img src={dateIcon} alt="date icon" width={10} />
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
        </div>
    );
}

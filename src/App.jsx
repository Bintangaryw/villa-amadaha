import About from "./ui/section/About";
import Availability from "./ui/section/Availability";
import Hero from "./ui/section/Hero";

function App() {
    return (
        <>
            <div className="space-y-10 antialiased">
                <div>
                    <Hero />
                </div>
                <div className="">
                    <Availability />
                </div>
                <div className="flex justify-center items-center">
                    <About />
                </div>
            </div>
        </>
    );
}

export default App;

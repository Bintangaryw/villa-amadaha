import Availability from "./ui/section/Availability";
import Hero from "./ui/section/Hero";

function App() {
    return (
        <>
            <div className="space-y-10">
                <div>
                    <Hero />
                </div>
                <div>
                    <Availability />
                </div>
            </div>
        </>
    );
}

export default App;

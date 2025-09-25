
import { useState } from "react";
import { Camera, PenTool, Eye } from "lucide-react";

const History = () => {
    const [activeYear, setActiveYear] = useState(1980);

    const historyData = {
        1980: {
            title: "Let’s make great things 1980!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            image: "/images/history.jpeg",
        },
        1995: {
            title: "Big milestones in 1995!",
            text: "This is where your 1995 history content goes.",
            image: "/images/history.jpeg",
        },
        2000: {
            title: "Creative expansion in 2000!",
            text: "This is where your 2000 history content goes.",
            image: "/images/history.jpeg",
        },
        2005: {
            title: "Innovation in 2005!",
            text: "This is where your 2005 history content goes.",
            image: "/images/history.jpeg",
        },
        2015: {
            title: "Modern era in 2015!",
            text: "This is where your 2015 history content goes.",
            image: "/images/history.jpeg",
        },
    };

    return (
        <div className="relative bg-black bg-opacity-80 text-white py-20 px-6 md:px-20 font-sans">

            <div className="absolute inset-0 bg-[url('/images/history.jpeg')] bg-cover bg-center opacity-30"></div>

            <div className="relative z-10 text-center mb-12">

                <div className="text-center mb-8">
                    <p className="text-[#D39D55] mt-4 mb-2 text-sm uppercase">History</p>
                    <h1 className="md:text-5xl text-3xl mt-3 font-semibold uppercase">Our History</h1>
                </div>

                <div className="flex justify-center gap-6 mt-8">
                    {[1980, 1995, 2000, 2005, 2015].map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeYear === year
                                ? "bg-[#D39D55] text-black font-semibold"
                                : "bg-gray-800 text-gray-400 hover:bg-[#D39D55] hover:text-black"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center mt-30">

                <div>
                    <img
                        src={historyData[activeYear].image}
                        alt="History"
                        className="h-[300px] w-[450px]"
                    />
                </div>

                <div className="text-left" style={{ marginLeft: "-60px", marginTop: "-30px" }}>
                    <h3 className="text-3xl md:text-5xl font-semibold mb-4">
                        {historyData[activeYear].title}
                    </h3>
                    <p className="text-gray-300 text-[18px] mb-6">
                        {historyData[activeYear].text}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div>
                            <Camera className="w-10 h-10 mb-2" />
                            <h4 className="font-semibold text-2xl">Film Production</h4>
                            <p className="text-gray-400 text-[16px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                        <div>
                            <PenTool className="w-10 h-10 mb-2" />
                            <h4 className="font-semibold text-[2xl]">Creative Direction</h4>
                            <p className="text-gray-400 text-[16px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                        <div>
                            <Eye className="w-10 h-10 mb-2" />
                            <h4 className="font-semibold text-2xl">Visual Effects</h4>
                            <p className="text-gray-400 text-[16px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;

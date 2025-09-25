
import { Play } from "lucide-react";

const VideoSection = () => {
    return (
        <div className="bg-[#111] text-white py-20">
            <div className="text-center mb-12">
                <p className="text-[#D39D55] mt-4 mb-2 text-sm uppercase">Watch Video</p>
                <h1 className="md:text-5xl text-3xl mt-3 font-semibold uppercase">ZICO HIGH QUALITY VIDEO</h1>
            </div>

            <div className="flex justify-center items-end">
                <div className="relative w-[380px] h-[400px] group">
                    <img
                        src="/images/forest1.jpg"
                        alt="left thumbnail"
                        className="w-full h-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="w-18 h-18 flex items-center justify-center rounded-full border-4 border-white text-white bg-opacity-80 hover:bg-[#D39D55] transition duration-300">
                            <Play className="w-10 h-10 text-white" />
                        </div>
                    </button>
                </div>

                <div className="relative flex-1 max-w-[750px] h-[550px] group">
                    <img
                        src="/images/forest1.jpg"
                        alt="main video"
                        className="w-full h-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center transition duration-300">
                        <div className="w-18 h-18 flex items-center justify-center rounded-full border-4 border-white text-white bg-opacity-80 hover:bg-[#D39D55] transition duration-300">
                            <Play className="w-10 h-10 text-white" />
                        </div>
                    </button>
                </div>

                <div className="relative w-[380px] h-[400px] group">
                    <img
                        src="/images/forest1.jpg"
                        alt="right thumbnail"
                        className="w-full h-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="w-18 h-18 flex items-center justify-center rounded-full border-4 border-white text-white bg-opacity-80 hover:bg-[#D39D55] transition duration-300">
                            <Play className="w-10 h-10 text-white" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;


import React, { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
    {
        id: 1,
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://picsum.photos/id/237/800/400", // fallback thumb
    },
    {
        id: 2,
        src: "https://www.w3schools.com/html/movie.mp4",
        thumbnail: "https://picsum.photos/id/1003/800/400",
    },
    {
        id: 3,
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://picsum.photos/id/1015/800/400",
    },
];

export default function UpcomingMovies() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-black text-white min-h-screen py-20 px-5">
            <div className="text-center mb-8">
                <p className="text-[#D39D55] mt-4 mb-2 text-sm uppercase">This Week</p>
                <h1 className="md:text-5xl text-3xl mt-3 font-semibold uppercase">Our Upcoming Movies</h1>
            </div>

            {/* Slider Section */}
            <div className="relative max-w-6xl mx-auto">
                <video
                    src={videos[current].src}
                    poster={videos[current].thumbnail}
                    className="w-full h-[600px] object-cover"
                    controls={false}
                />

                {/* Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <Play size={60} className="text-white bg-[#D39D55] rounded-full p-3" />
                </div>

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/90 p-2 rounded-full hover:bg-black"
                >
                    <ChevronLeft size={30} />
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/90 p-2 rounded-full hover:bg-black"
                >
                    <ChevronRight size={30} />
                </button>
            </div>

            {/* Thumbnails Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {videos.map((video, index) => (
                    <div
                        key={video.id}
                        className="relative group cursor-pointer"
                        onClick={() => setCurrent(index)}
                    >
                        <video
                            src={video.src}
                            poster={video.thumbnail}
                            className="w-full h-[250px] object-cover"
                            muted
                        />

                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <Play
                                size={40}
                                className="text-white bg-[#D39D55] rounded-full p-2"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

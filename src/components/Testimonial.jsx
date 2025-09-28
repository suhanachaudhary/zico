
import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.",
        author: "Tom Henry",
    },
    {
        text: "This platform is really amazing. The UI/UX feels so smooth and it has completely changed the way I work every day.",
        author: "Adlock Prince",
    },
    {
        text: "Excellent service and user-friendly design! I’m very happy with the overall experience.",
        author: "Mic John",
    },
    {
        text: "A wonderful product that truly understands customer needs. Highly recommended!",
        author: "John Punk",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 overflow-hidden"
            style={{
                backgroundImage:
                    "url('/images/forest1.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <p className="text-[#D39D55] uppercase text-lg tracking-widest">
                    Testimonial
                </p>
                <h2 className="text-3xl md:text-5xl font-bold uppercase mt-2 mb-8">
                    What Customer’s Say
                </h2>

                <div className="relative h-48">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current
                                ? "translate-0-x opacity-100"
                                : "translate-x-full opacity-0"
                                }`}
                        >
                            <FaQuoteLeft className="mx-auto text-3xl text-white mb-6" />
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                {item.text}
                            </p>
                            <h4 className="mt-6 font-semibold text-lg">{item.author}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;


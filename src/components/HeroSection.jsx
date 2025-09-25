
import { useState, useEffect } from 'react';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/528831127/photo/tranquility.jpg?s=612x612&w=0&k=20&c=yRDG4dybg67FgUgAu3z75TISQC8iiuhbPUTPBAcgHqQ=',
            title: 'GET THE BEST MOVIES HERE',
            subtitle: 'Zico Is High Quality Production House'
        },
        {
            id: 2,
            image: 'https://media.istockphoto.com/id/1334575795/photo/woman-hugging-a-big-tree-in-the-outdoor-forest-ecology-and-nature-protect-environment-and.jpg?s=612x612&w=0&k=20&c=nN2OfQLN53qtFqqjrtUjmy6-sUYkTpBFqwexDafSobU=',
            title: 'PREMIUM CONTENT CREATION',
            subtitle: 'Professional Video Production Services'
        },
        {
            id: 3,
            image: 'https://media.istockphoto.com/id/2220009807/photo/young-woman-taking-a-selfie-during-exploration-at-forest.jpg?s=612x612&w=0&k=20&c=ORHr9_KTSgAh_YziQko5Lc7Izfa9lZS6guMDGGmwab4=',
            title: 'CINEMATIC EXCELLENCE',
            subtitle: 'Experience The Art of Storytelling'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    >
                        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
                    </div>
                </div>
            ))}

            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 font-light italic">
                        {slides[currentSlide].subtitle}
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                        More Videos
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="absolute bottom-4 right-4 z-20 text-white text-sm opacity-60">
                <p>Activate Windows</p>
                <p className="text-xs">Go to Settings to activate Windows</p>
            </div>
        </div>
    );
};

const HeroSection = () => {

    return (
        <div className="min-h-screen">
            <HeroSlider />
            <img src="/images/trust.PNG" alt="trust section" />
        </div>
    );
};

export default HeroSection;
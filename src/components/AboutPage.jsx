
import { Link } from "react-router-dom";

export default function AboutPage() {
    const aboutImages = [
        "/images/about/about/a1.png",
        "/images/about/about/a2.PNG",
        "/images/about/about/a3.PNG",
        "/images/about/about/a4.PNG",
        "/images/about/about/a5.PNG",
        "/images/about/about/a6.PNG",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#111] text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-[#D39D55] uppercase tracking-widest text-lg md:text-xl mb-2">About Us</p>
                    <h1 className="text-3xl md:text-5xl font-extrabold uppercase">Hastinapur Studio</h1>
                    <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
                        Crafting worlds, preserving heritage, and inspiring generations through the power of cinematic storytelling.
                    </p>
                </div>


                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg"
                            src="/images/contact/contact/c2.JPG"
                            alt="Founder"
                        />

                        <div className="mt-4 mb-16 text-center">
                            <span className="block text-xl md:text-2xl font-semibold">Aniket Kashyap</span>
                            <span className="block text-[#D39D55] text-lg md:text-xl">Founder</span>
                        </div>
                    </div>

                    <p className="text-[#D39D55] mb-8 md:text-lg">
                        कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । <br />
                        मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ (गीता 2.47)
                        <br /><br />
                        You have the right to perform your duty, but never to its fruits.
                        Do not be motivated by the results, nor be attached to inaction.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <blockquote className="bg-black/60 p-6 rounded-lg border border-white/5 shadow-sm">
                        <p className="text-[#D39D55] font-semibold mb-3">“At Hastinapur Studio, we don’t just make films—we bring alive the soul of a civilization.”</p>
                        <p className="text-gray-300">Turning timeless stories into cinematic journeys that echo across the world.</p>
                    </blockquote>

                    <blockquote className="bg-black/60 p-6 rounded-lg border border-white/5 shadow-sm">
                        <p className="text-[#D39D55] font-semibold mb-3">“We craft worlds, preserve heritage, and inspire generations.”</p>
                        <p className="text-gray-300">Stories that connect the past, present and future.</p>
                    </blockquote>

                    <blockquote className="bg-black/60 p-6 rounded-lg border border-white/5 shadow-sm">
                        <p className="text-[#D39D55] font-semibold mb-3">“Our cinema speaks the language of the heart.”</p>
                        <p className="text-gray-300">From the epics of the past to the visions of tomorrow.</p>
                    </blockquote>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    {aboutImages.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl shadow-lg border border-white/10 transform hover:scale-105 transition duration-500"
                        >
                            <img
                                src={src}
                                alt={`About ${index + 1}`}
                                className="w-full h-78 object-cover hover:opacity-90 transition"
                            />
                        </div>
                    ))}
                </div>

                <div className="prose prose-invert max-w-none text-gray-200 bg-black/50 p-6 md:p-10 rounded-2xl border border-white/10 shadow-xl space-y-6 leading-relaxed">
                    <p className="text-[#D39D55] uppercase tracking-widest text-lg md:text-2xl">At Hastinapur Studio, we believe cinema is not just entertainment</p>
                    <p>It is a voice, a bridge, and a legacy. Our purpose is to tell stories that carry the heartbeat of Bharat, the world’s oldest living civilization, and share them with the world in a language that transcends borders: the language of film.</p>
                    <p>We want to show the world that India is not just a nation of history, but a living force of creativity, resilience, and imagination...</p>
                    <p>Through our films, we aim to preserve heritage while creating bold new narratives...</p>
                    <p>At Hastinapur Studio, we are not only making films—we are creating worlds...</p>
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold">Want to collaborate?</h3>
                        <p className="text-gray-300 text-base md:text-lg">If you have a story, idea or partnership in mind, we'd love to hear from you.</p>
                    </div>
                    <div>
                        <Link
                            to="/contact"
                            className="inline-block bg-[#D39D55] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:brightness-95 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="mt-16 text-base md:text-lg text-gray-400 text-center">
                    <p>© {new Date().getFullYear()} Hastinapur Studio — Crafting cinematic worlds that endure.</p>
                </div>
            </div>
        </div>
    );
}



export default function BharatLandPage() {
    const landImages = [
        "/images/pages/Pages/land/land1.PNG",
        "/images/pages/Pages/land/land2.PNG",
        "/images/pages/Pages/land/land3.JPG",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#111] text-white py-36 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
                        Bharat – The Land That Survived
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
                        A story of survival, resilience, and timeless spirit across millennia.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    {landImages.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl shadow-lg border border-white/10 transform hover:scale-105 transition duration-500"
                        >
                            <img
                                src={src}
                                alt={`Land ${index + 1}`}
                                className="w-full h-72 object-cover hover:opacity-90 transition"
                            />
                        </div>
                    ))}
                </div>

                <div className="prose prose-invert max-w-none text-gray-200 bg-black/50 p-10 rounded-2xl border border-white/10 shadow-xl space-y-6 leading-relaxed">
                    <p className="text-lg">
                        For over a thousand years, Bharat faced relentless invasions, destruction, and attempts to break its spirit. Empires rose and fell upon its soil; cities were conquered, treasures plundered, and its people tested through fire and adversity. Yet, despite every attempt to erase its essence, Bharat never disappeared—it endured, it resisted, and it thrived.
                    </p>

                    <p className="text-lg">
                        Its culture, knowledge, and traditions were too deep, too resilient to be extinguished. Language, literature, philosophy, art, and spirituality continued to flourish, passing from generation to generation. Every challenge only strengthened its spirit, and every attack became a chapter in a story of survival, courage, and perseverance.
                    </p>

                    <p className="text-lg">
                        Bharat stands today as the world’s oldest surviving civilization, a living testament to resilience. Its soul remains unbroken, its heritage intact, and its stories—millions of them—waiting to be told to the world. The land that faced centuries of humiliation and destruction rose stronger, wiser, and more enduring than ever.
                    </p>

                    <p className="text-lg">
                        At Hastinapur Studio, we honor this legacy. Through our films, we bring to life the strength, courage, and timeless spirit of Bharat, sharing with the world a story of survival, glory, and inspiration that echoes across millennia.
                    </p>

                    <h2 className="text-2xl font-semibold text-yellow-400 mt-10">
                        Our Goal
                    </h2>
                    <p className="text-lg">
                        We aim to reveal to the world the true essence of India—its glorious history, epic tales, and timeless wisdom. From the heights of ancient civilization to the depths of its painful past, from its vibrant culture and enduring traditions to stories of resilience and survival, we strive to bring India’s real narrative to light. Our mission is to inspire awe, pride, and understanding, and to ensure that the world recognizes the unparalleled legacy of this ancient land.
                    </p>
                </div>

                <div className="mt-16 text-lg text-gray-400 text-center">
                    <p>© {new Date().getFullYear()} Hastinapur Studio — Honoring Bharat’s spirit of survival.</p>
                </div>
            </div>
        </div>
    );
}


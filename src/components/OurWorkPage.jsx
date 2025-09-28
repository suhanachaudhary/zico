
import React from "react";
import { Film, PenTool, Video, Users, Camera, Scissors, Music, Cpu, Megaphone, Globe } from "lucide-react";

const services = [
    { icon: <Film className="w-8 h-8 text-[#D39D55]" />, title: "Film Production", desc: "Feature films, short films, and documentaries brought to life with heritage, culture, and cinematic excellence." },
    { icon: <PenTool className="w-8 h-8 text-[#D39D55]" />, title: "Scriptwriting & Story Development", desc: "Original stories and adaptations of myths, folklore, and literature for global audiences." },
    { icon: <Video className="w-8 h-8 text-[#D39D55]" />, title: "Direction & Cinematic Vision", desc: "Crafting visual narratives that evoke emotion, wonder, and awe." },
    { icon: <Users className="w-8 h-8 text-[#D39D55]" />, title: "Casting & Talent Management", desc: "Finding the perfect talent to bring characters and stories to life authentically." },
    { icon: <Camera className="w-8 h-8 text-[#D39D55]" />, title: "Cinematography & Visual Design", desc: "Creating stunning visuals that immerse audiences in every frame." },
    { icon: <Scissors className="w-8 h-8 text-[#D39D55]" />, title: "Post-Production & Editing", desc: "Editing, color grading, sound design, and VFX to polish every story to perfection." },
    { icon: <Music className="w-8 h-8 text-[#D39D55]" />, title: "Music & Sound Design", desc: "Original scores and soundscapes that elevate emotion and drama." },
    { icon: <Cpu className="w-8 h-8 text-[#D39D55]" />, title: "Animation & VFX", desc: "2D/3D animation, CGI, and effects to bring mythical and fantastical worlds to life." },
    { icon: <Megaphone className="w-8 h-8 text-[#D39D55]" />, title: "Creative Campaigns & Branding", desc: "Trailers, teasers, and cinematic promotions that connect stories with audiences worldwide." },
    { icon: <Globe className="w-8 h-8 text-[#D39D55]" />, title: "Global Collaborations & Co-Productions", desc: "Taking films from concept to international recognition and global audiences." }
];

const OurWorkPage = () => {
    return (
        <div className="bg-[#111] text-white py-36 px-6 md:px-16">
            {/* Header Section */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">Our Work</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    At Hastinapur Studio, we turn imagination into cinematic reality. From ancient epics to modern narratives, we craft stories that resonate, inspire, and captivate.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <div className="flex items-center mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{service.desc}</p>
                    </div>
                ))}
            </div>

            {/* Work Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {[
                    "/images/work/work/w1.png",
                    "/images/work/work/w3.PNG",
                    "/images/work/work/w2.PNG",
                    "/images/work/work/w4.PNG",
                    "/images/work/work/w5.PNG",
                    "/images/work/work/w6.PNG",
                    "/images/work/work/w7.PNG",
                    "/images/work/work/w8.PNG",
                    "/images/work/work/w9.PNG"
                ].map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                        <img src={src} alt={`Work ${index + 1}`} className="w-full h-64 object-cover" />
                    </div>
                ))}
            </div>


            <div className="max-w-8xl mx-auto mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-[#D39D55]">Celebrating the World's Oldest Civilization</h2>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Bharat is one of the world’s oldest continuous civilizations, with a history spanning over 5,000 years. Its story is a tapestry of sages, warriors, thinkers, and empires—each leaving a timeless mark on culture, knowledge, and human achievement.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    From the Indus Valley Civilization to the Vedic period, from the Mauryas and Guptas to the Cholas, Bharat has always been a cradle of wisdom and innovation. Its contributions in mathematics, astronomy, medicine, architecture, art, and literature shaped the golden ages of civilization.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Through challenges and invasions, Bharat endured—its culture, traditions, and philosophies thriving for millennia. Today, Bharat stands as a living testament to resilience, innovation, and heritage, offering the world treasures of wisdom and stories that continue to inspire.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                    At Hastinapur Studio, we draw from this eternal well, bringing the spirit, wisdom, and stories of Bharat to life on the silver screen.
                </p>
            </div>

            <div className="max-w-8xl mx-auto mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-[#D39D55]">The Voice of Ancient Scriptures</h2>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Bharat’s ancient scriptures are not just texts—they are the living voice of a civilization, echoing through millennia. The Vedas laid the foundation of knowledge, ritual, and cosmic understanding, while the Upanishads explore the mysteries of life, consciousness, and the universe itself.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    The Bhagavad Gita speaks of duty, courage, and the eternal struggle between right and wrong. The Ramayana and Mahabharata unfold epic sagas of heroism, sacrifice, and dharma. Tamil Sangam literature preserves poetry, philosophy, and moral wisdom, reflecting a culture that revered intellect, art, and ethics.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                    These scriptures are a treasure of timeless knowledge, guiding, inspiring, and shaping humanity. At Hastinapur Studio, we give these eternal voices cinematic form, ensuring they live on for generations.
                </p>
            </div>

            <div className="text-center mt-8 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 italic">"From imagination to screen, from heritage to global stories—we bring every vision to life."</h2>
                <p className="text-gray-400 mb-4 text-lg">Know more:</p>
                <p className="text-gray-300 text-lg">Address: H-10, Raghav Puram, Saharanpur, 247001, India</p>
                <p className="text-gray-300 text-lg">Phone: +91 9286182820 / +44 7879953499 (WhatsApp)</p>
                <p className="text-gray-300 text-lg">Emails: <a href="mailto:Hastinapurstudio@gmail.com" className="text-[#D39D55] hover:underline">Hastinapurstudio@gmail.com</a> / <a href="mailto:akaniket10@gmail.com" className="text-[#D39D55] hover:underline">akaniket10@gmail.com</a></p>
                <p className="text-gray-300 text-lg">LinkedIn: <a href="https://linkedin.com/in/aniket10021" target="_blank" rel="noopener noreferrer" className="text-[#D39D55] hover:underline">linkedin.com/in/aniket10021</a></p>
            </div>
        </div>
    );
};

export default OurWorkPage;


import React from "react";
import { FaPinterestP, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const teamMembers = [
    {
        name: "Adlock Prince",
        role: "Director",
        image: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg",
    },
    {
        name: "Tom Henry",
        role: "Sub. Director",
        image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg",
    },
    {
        name: "Mic John",
        role: "Actor",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
        name: "John Punk",
        role: "Manager",
        image: "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg",
    },
];

const DirectorsPage = () => {
    return (
        <div className="bg-[#111] text-white px-6 py-6">

            <div className="text-center mb-12">
                <p className="text-[#D39D55] mb-2 text-sm uppercase">Our Team</p>
                <h1 className="md:text-5xl text-3xl mt-3 font-semibold uppercase">
                    Directors of Zico
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group text-center transform transition-transform duration-300 hover:-translate-y-3"
                    >
                        <div className="relative w-full h-62 overflow-hidden rounded-md shadow-lg">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute left-16 bottom-6 bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href="#" className="text-white text-xl hover:text-[#D39D55]">
                                    <FaPinterestP />
                                </a>
                                <a href="#" className="text-white text-xl hover:text-[#D39D55]">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-white text-xl hover:text-[#D39D55]">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-white text-xl hover:text-[#D39D55]">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>

                        <h3 className="mt-4 text-2xl">{member.name}</h3>
                        <p className="text-gray-400 text-xl mb-8">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DirectorsPage;

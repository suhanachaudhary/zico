
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-12 pb-6">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md transform rotate-12"></div>
                            <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md opacity-80"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-white">Zico</h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aviverra.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
                            <FaPinterestP />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Instagram</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            "https://picsum.photos/200/200?1",
                            "https://picsum.photos/200/200?2",
                            "https://picsum.photos/200/200?3",
                            "https://picsum.photos/200/200?4",
                            "https://picsum.photos/200/200?5",
                            "https://picsum.photos/200/200?6",
                        ].map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="insta"
                                className="w-full h-20 object-cover rounded"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#D39D55]">Home</a></li>
                        <li><a href="#" className="hover:text-[#D39D55]">About</a></li>
                        <li><a href="#" className="hover:text-[#D39D55]">Works</a></li>
                        <li><a href="#" className="hover:text-[#D39D55]">Videos</a></li>
                        <li><a href="#" className="hover:text-[#D39D55]">Blog</a></li>
                        <li><a href="#" className="hover:text-[#D39D55]">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Get In Touch</h3>

                    <div className="flex items-start space-x-3 mb-3">
                        <FaPhoneAlt className="text-white mt-1" />
                        <div>
                            <p className="font-semibold text-white">Phone:</p>
                            <p className="text-gray-300">+882-569-756</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 mb-3">
                        <HiOutlineMail className="text-white mt-1" />
                        <div>
                            <p className="font-semibold text-white">Email:</p>
                            <p className="text-gray-300">info@zico.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <FaMapMarkerAlt className="text-white mt-1" />
                        <div>
                            <p className="font-semibold text-white">Address:</p>
                            <p className="text-gray-300">3254-425 NW-2nd Ave, Miami USA</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-400">
                © Zico is Proudly Owned by <span className="text-[#D39D55]">EnvyTheme</span>
            </div>
        </footer>
    );
}

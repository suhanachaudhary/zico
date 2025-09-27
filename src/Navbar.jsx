
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6
        ${scrolled ? "bg-black" : "bg-black/40 backdrop-blur-sm"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center">
                        <div className="flex items-center space-x-1">
                            <img className="h-22 w-22" src="/images/logo1.png" alt="logo" />
                            <span
                                className="text-xl text-[#D39D55]"
                                style={{ marginLeft: "-15px" }}
                            >
                                Hastinapur Studio
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center space-x-2 relative">
                            <Link
                                to="/"
                                className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium"
                            >
                                Home
                            </Link>

                            <div
                                className="relative group"
                            >
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium flex items-center space-x-1">
                                    <span>Pages</span>
                                    <svg
                                        className="w-3 h-3"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
                      111.414 1.414l-4 4a1 1 0 
                      01-1.414 0l-4-4a1 1 0 
                      010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-60 bg-[#111] bg-opacity-90 rounded-lg shadow-lg">
                                        <Link
                                            to="/page1"
                                            className="block px-4 py-2 text-white hover:bg-gray-700"
                                        >
                                            Bharat - The Eternal Civilization
                                        </Link>
                                        <Link
                                            to="/page2"
                                            className="block px-4 py-2 text-white hover:bg-gray-700"
                                        >
                                            Bharat - The Land That Survived
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/about"
                                className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/work"
                                className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium"
                            >
                                Our Work
                            </Link>
                            <Link
                                to="/contact"
                                className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            <div className="space-y-1">
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="bg-black bg-opacity-90 px-4 pt-4 pb-6 space-y-2">
                    <Link
                        to="/"
                        className="block text-white hover:text-gray-300 px-3 py-2 text-lg"
                    >
                        Home
                    </Link>

                    <div>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex justify-between items-center text-white hover:text-gray-300 px-3 py-2 text-lg"
                        >
                            <span>Pages</span>
                            <svg
                                className={`w-4 h-4 transform ${isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 
                  0L10 10.586l3.293-3.293a1 1 0 
                  111.414 1.414l-4 4a1 1 0 
                  01-1.414 0l-4-4a1 1 0 
                  010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="pl-6">
                                <Link
                                    to="/page1"
                                    className="block text-white hover:text-gray-300 px-3 py-2 text-md"
                                >
                                    Bharat - The Eternal Civilization
                                </Link>
                                <Link
                                    to="/page2"
                                    className="block text-white hover:text-gray-300 px-3 py-2 text-md"
                                >
                                    Bharat - The Land That Survived
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/about"
                        className="block text-white hover:text-gray-300 px-3 py-2 text-lg"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/work"
                        className="block text-white hover:text-gray-300 px-3 py-2 text-lg"
                    >
                        Our Work
                    </Link>
                    <Link
                        to="/contact"
                        className="block text-white hover:text-gray-300 px-3 py-2 text-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

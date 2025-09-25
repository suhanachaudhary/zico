
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6
        ${scrolled ? "bg-black" : "bg-black/40 backdrop-blur-sm"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md transform rotate-12"></div>
                                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md opacity-80"></div>
                            </div>
                            <span className="text-white text-4xl font-semibold">Zico</span>
                        </div>
                    </div>

                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center space-x-8">
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>Home</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>About</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>Works</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>Videos</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>Pages</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>Blog</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-xl font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>Contact</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
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
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-90">
                        <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium flex items-center justify-between">
                            <span>Home</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium flex items-center justify-between">
                            <span>About</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium flex items-center justify-between">
                            <span>Works</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium flex items-center justify-between">
                            <span>Videos</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium flex items-center justify-between">
                            <span>Pages</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium flex items-center justify-between">
                            <span>Blog</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium flex items-center justify-between">
                            <span>Contact</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;


import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-12 pb-6">

            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-40 px-6 md:px-20">

                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-4">
                        <img className="h-20 w-20 object-contain" src="/images/logo1.png" alt="Logo" />
                        <span className="text-xl md:text-2xl text-[#D39D55] -ml-3">Hastinapur Studios</span>
                    </div>

                    <p className="text-base md:text-lg leading-relaxed text-justify">
                        At Hastinapur Studio, every frame is crafted to inspire and endure.
                        We blend heritage with innovation to create timeless narratives.
                        Our stories are not just told — they are lived and remembered.
                        In film we trust, for it carries the power to unite the world.
                        Hastinapur Studio — where vision becomes immortality.
                    </p>

                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55] transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55] transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55] transition">
                            <FaPinterestP />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55] transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-white text-xl font-semibold mb-6">Get In Touch</h3>

                    <div className="flex text-lg items-start space-x-3 mb-5">
                        <FaPhoneAlt className="text-[#D39D55] mt-1" />
                        <div>
                            <p className="font-semibold text-white">Phone:</p>
                            <p className="text-gray-300">+91 9286182820</p>
                            <p className="font-semibold text-white mt-2">WhatsApp No:</p>
                            <p className="text-gray-300">+44 7879953499</p>
                        </div>
                    </div>

                    <div className="flex text-lg items-start space-x-3 mb-5">
                        <HiOutlineMail className="text-[#D39D55] mt-1" />
                        <div>
                            <p className="font-semibold text-white">Email:</p>
                            <p className="text-gray-300 break-words">Hastinapurstudio@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex text-lg items-start space-x-3">
                        <FaMapMarkerAlt className="text-[#D39D55] mt-1" />
                        <div>
                            <p className="font-semibold text-white">Address:</p>
                            <p className="text-gray-300">
                                RAGHAV PURAM <br />
                                Saharanpur, 247001, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm md:text-lg text-gray-400">
                © Hastinapur Studio is Proudly Owned by{" "}
                <span className="text-[#D39D55]">Aniket Kashyap</span>
            </div>
        </footer>
    );
}



// import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { FaPhoneAlt } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaMapMarkerAlt } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="bg-black text-gray-300 pt-12 pb-6">
//             <div className="flex justify-between items-center md:gap-40 px-12 md:px-20">

//                 <div>
//                     <div className="flex items-center space-x-2 mb-4">
//                         <img className="h-22 w-22" src="/images/logo1.png" />
//                         <span className="text-xl text-[#D39D55]" style={{ marginLeft: "-15px" }}>Hastinapur Studios</span>
//                     </div>

//                     <p className="text-lg text-wrapped mr-[600px] max-[400px]:mr-0">
//                         At Hastinapur Studio, every frame is crafted to inspire and endure.
//                         We blend heritage with innovation to create timeless narratives.
//                         Our stories are not just told — they are lived and remembered.
//                         In film we trust, for it carries the power to unite the world.
//                         Hastinapur Studio — where vision becomes immortality.”
//                     </p>
//                     <div className="flex space-x-4 mt-4">
//                         <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
//                             <FaFacebookF />
//                         </a>
//                         <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
//                             <FaTwitter />
//                         </a>
//                         <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
//                             <FaPinterestP />
//                         </a>
//                         <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#D39D55]">
//                             <FaLinkedinIn />
//                         </a>
//                     </div>
//                 </div>

{/* <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Instagram</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            "/images/about/about/a1.png",
                            "/images/about/about/a2.PNG",
                            "/images/about/about/a3.PNG",
                            "/images/about/about/a4.PNG",
                            "/images/about/about/a5.PNG",
                            "/images/about/about/a1.png",
                        ].map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="insta"
                                className="w-full h-20 object-cover rounded"
                            />
                        ))}
                    </div>
                </div> */}

{/* <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-lg">
                        <li><Link to="/" className="hover:text-[#D39D55]">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#D39D55]">About</Link></li>
                        <li><Link to="/work" className="hover:text-[#D39D55]">Works</Link></li>
                        <li><a href="#" className="hover:text-[#D39D55]">Videos</a></li>
                        <li><a href="#" className="hover:text-[#D39D55]">Blog</a></li>
                        <li><Link to="/contact" className="hover:text-[#D39D55]">Contact</Link></li>
                    </ul>
                </div> */}

{/* <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Get In Touch</h3>

                    <div className="flex items-start space-x-3 mb-3">
                        <FaPhoneAlt className="text-white mt-1" />
                        <div>
                            <p className="font-semibold text-white text-lg">Phone:</p>
                            <p className="text-gray-300 text-lg">+91 9286182820</p>
                            <p className="font-semibold text-white text-lg">WhatsApp No:</p>
                            <p className="text-gray-300 text-lg">+44 7879953499</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 mb-3">
                        <HiOutlineMail className="text-white mt-1" />
                        <div>
                            <p className="font-semibold text-white text-lg">Email:</p>
                            <p className="text-gray-300 text-lg">Hastinapurstudio@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <FaMapMarkerAlt className="text-white mt-1" />
                        <div>
                            <p className="font-semibold text-white text-lg">Address:</p>
                            <p className="text-gray-300 text-lg">RAGHAV PURAM
                                Saharanpur, 247001, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-4 text-center text-lg text-gray-400">
                © Hastinapur Studio is Proudly Owned by <span className="text-[#D39D55]">Aniket Kashyap</span>
            </div>
        </footer>
    );
} */}

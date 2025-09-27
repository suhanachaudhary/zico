
import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#111] text-white py-36 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <p className="text-[#D39D55] uppercase tracking-widest text-sm mb-2">Contact</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase">Get in Touch</h1>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        We’d love to hear from you! Whether it’s a story idea, collaboration, or inquiry, reach out to us anytime.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-black/50 p-8 rounded-xl border border-white/5 shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#D39D55] mb-4 flex items-center gap-2"><MapPin className="w-6 h-6" /> Address</h2>
                        <p className="text-gray-300">H-10/ RAGHAV PURAM<br /> Saharanpur, 247001, India</p>
                    </div>

                    <div className="bg-black/50 p-8 rounded-xl border border-white/5 shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#D39D55] mb-4 flex items-center gap-2"><Phone className="w-6 h-6" /> Phone</h2>
                        <p className="text-gray-300">+91 9286182820</p>
                        <p className="text-gray-300">+44 7879953499 (WhatsApp)</p>
                    </div>

                    <div className="bg-black/50 p-8 rounded-xl border border-white/5 shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#D39D55] mb-4 flex items-center gap-2"><Mail className="w-6 h-6" /> Email</h2>
                        <p className="text-gray-300">Hastinapurstudio@gmail.com</p>
                        <p className="text-gray-300">akaniket10@gmail.com</p>
                    </div>

                    <div className="bg-black/50 p-8 rounded-xl border border-white/5 shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#D39D55] mb-4 flex items-center gap-2"><Linkedin className="w-6 h-6" /> LinkedIn</h2>
                        <a href="https://linkedin.com/in/aniket10021" target="_blank" rel="noopener noreferrer" className="text-[#D39D55] hover:underline">
                            linkedin.com/in/aniket10021
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-black/60 p-10 rounded-xl border border-white/5 shadow-lg">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-[#D39D55]">Send us a Message</h2>
                    <form className="grid gap-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-[#111] border border-gray-700 text-white focus:outline-none focus:border-[#D39D55]" />
                            <input type="email" placeholder="Your Email" className="p-3 rounded-md bg-[#111] border border-gray-700 text-white focus:outline-none focus:border-[#D39D55]" />
                        </div>
                        <input type="text" placeholder="Subject" className="p-3 rounded-md bg-[#111] border border-gray-700 text-white focus:outline-none focus:border-[#D39D55]" />
                        <textarea placeholder="Your Message" rows="5" className="p-3 rounded-md bg-[#111] border border-gray-700 text-white focus:outline-none focus:border-[#D39D55]"></textarea>
                        <button type="submit" className="bg-[#D39D55] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:brightness-95 transition w-fit mx-auto">Send Message</button>
                    </form>
                </div>

                {/* Footer note */}
                <div className="mt-12 text-sm text-gray-400 text-center">
                    <p>© {new Date().getFullYear()} Hastinapur Studio — Let’s create stories together.</p>
                </div>
            </div>
        </div>
    );
}
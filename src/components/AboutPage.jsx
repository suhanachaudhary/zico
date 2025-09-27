
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#111] text-white py-36 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Hero / Title */}
                <div className="text-center mb-12">
                    <p className="text-[#D39D55] uppercase tracking-widest text-sm mb-2">About Us</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase">Hastinapur Studio</h1>
                    <p className="mt-4 text-gray-300 max-w-3xl mx-auto">Crafting worlds, preserving heritage, and inspiring generations through the power of cinematic storytelling.</p>
                </div>

                {/* Quotation / Taglines */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <blockquote className="bg-black/60 p-6 rounded-lg border border-white/5 shadow-sm">
                        <p className="text-[#D39D55] font-semibold mb-3">“At Hastinapur Studio, we don’t just make films—we bring alive the soul of a civilization.”</p>
                        <p className="text-sm text-gray-300">Turning timeless stories into cinematic journeys that echo across the world.</p>
                    </blockquote>

                    <blockquote className="bg-black/60 p-6 rounded-lg border border-white/5 shadow-sm">
                        <p className="text-[#D39D55] font-semibold mb-3">“We craft worlds, preserve heritage, and inspire generations.”</p>
                        <p className="text-sm text-gray-300">Stories that connect the past, present and future.</p>
                    </blockquote>

                    <blockquote className="bg-black/60 p-6 rounded-lg border border-white/5 shadow-sm">
                        <p className="text-[#D39D55] font-semibold mb-3">“Our cinema speaks the language of the heart.”</p>
                        <p className="text-sm text-gray-300">From the epics of the past to the visions of tomorrow.</p>
                    </blockquote>
                </div>

                {/* Main Content */}
                <div className="prose prose-invert max-w-none text-gray-200 bg-black/50 p-8 rounded-xl border border-white/5 shadow-lg">
                    <p>
                        At Hastinapur Studio, we believe cinema is not just entertainment—it is a voice, a bridge, and a legacy. Our purpose is to tell stories that carry the heartbeat of Bharat, the world’s oldest living civilization, and share them with the world in a language that transcends borders: the language of film.
                    </p>

                    <p>
                        We want to show the world that India is not just a nation of history, but a living force of creativity, resilience, and imagination. From the timeless wisdom of the Vedas, the epics of the Ramayana and Mahabharata, to the struggles and triumphs of modern times—our land is filled with stories waiting to be told.
                    </p>

                    <p>
                        Through our films, we aim to preserve heritage while creating bold new narratives that speak to the future. We want to inspire, challenge, and move audiences—because great cinema is not just watched, it is felt, it is remembered, it lives on.
                    </p>

                    <p>
                        At Hastinapur Studio, we are not only making films—we are creating worlds, carrying forward the eternal voice of a civilization, and giving it to the world as stories that will echo across time.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="mt-10 flex items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold">Want to collaborate?</h3>
                        <p className="text-gray-300 text-sm">If you have a story, idea or partnership in mind, we'd love to hear from you.</p>
                    </div>
                    <div>
                        <Link to="/contact" className="inline-block bg-[#D39D55] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:brightness-95 transition">Contact Us</Link>
                    </div>
                </div>

                {/* Footer note / small */}
                <div className="mt-12 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Hastinapur Studio — Crafting cinematic worlds that endure.</p>
                </div>
            </div>
        </div>
    );
}

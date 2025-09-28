
import React from "react";

const blogs = [
    {
        date: "17 June 2025",
        title: "Get Ready To Make Awesome",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        image:
            "/images/about/about/a3.PNG",
    },
    {
        date: "18 June 2025",
        title: "The Best Design Film",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        image:
            "/images/about/about/a4.PNG",
    },
    {
        date: "19 June 2025",
        title: "Enjoy The Movie Drama",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        image:
            "/images/about/about/a5.PNG",
    },
];

const BlogSection = () => {
    return (
        <section className="bg-[#111] text-white py-20 px-6 md:px-16">
            <div className="text-center mb-12">
                <p className="text-[#D39D55] uppercase text-xl tracking-widest">
                    Our Blog
                </p>
                <h2 className="text-3xl md:text-5xl font-bold uppercase mt-2">
                    Latest News
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-black shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-400">{blog.date}</p>
                            <h3 className="text-lg font-bold mt-2 mb-3 hover:text-[#D39D55] cursor-pointer transition">
                                {blog.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                {blog.description}
                            </p>
                            <a
                                href="#"
                                className="text-white text-lg font-semibold hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;

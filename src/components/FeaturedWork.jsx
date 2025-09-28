
const galleryItems = [
    {
        id: 1,
        title: "MY DREAM STRANGER",
        subtitle: "Music Video",
        image: "/images/about/about/a4.PNG",
    },
    {
        id: 2,
        title: "BACK TO YOU",
        subtitle: "Advertising Music Video",
        image: "/images/about/about/a5.PNG",
    },
    {
        id: 3,
        title: "NIGHT BEATS",
        subtitle: "DJ Music Show",
        image: "/images/work/work/w1.png",
    },
    {
        id: 4,
        title: "WAVES OF DREAMS",
        subtitle: "Fantasy Music Video",
        image: "/images/work/work/w4.PNG",
    },
];

export default function FeaturedWork() {
    return (
        <div className="bg-black/90 text-white min-h-screen py-10">

            <div className="text-center mb-8">
                <p className="text-[#D39D55] mt-4 mb-2 text-xl uppercase">Our Work</p>
                <h1 className="md:text-5xl text-3xl mt-3 font-semibold uppercase">Featured Work</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden group"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute bottom-14 left-44 text-center">
                            <h2 className="text-3xl group-hover:text-[#D39D55] font-semibold uppercase">{item.title}</h2>
                            <p className="text-white text-2xl">{item.subtitle}</p>
                        </div>

                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

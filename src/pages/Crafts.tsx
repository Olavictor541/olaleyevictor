export function Crafts() {
  // Gallery artwork data
  const artworks = [
    {
      id: 1,
      title: "Mindless #1",
      artist: "Victor Olaleye",
      image: "/olaleyevictor/m3.webp",
      size: "large"
    },
    {
      id: 2,
      title: "Transformation: A far above mentality",
      artist: "Victor Olaleye",
      image: "/olaleyevictor/m2.webp",
      size: "small"
    },
    {
      id: 3,
      title: "The Mind of Christ: A superior belief system",
      artist: "Victor Olaleye",
      image: "/olaleyevictor/m4.webp",
      size: "small"
    },
    {
      id: 4,
      title: "The Seeing Eyes",
      artist: "Victor Olaleye",
      image: "/olaleyevictor/m6.webp",
      size: "large"
    },
    {
      id: 5,
      title: "Elevation: A higher calling #1",
      artist: "Victor Olaleye",
      image: "/olaleyevictor/m5.webp",
      size: "small"
    },
    {
      id: 6,
      title: "Untitled",
      artist: "Victor Olaleye",
      image: "/olaleyevictor/m7.webp",
      size: "small"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 md:pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl text-orange-200 md:text-6xl font-black mb-4">CRAFTS</h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            A collection of visual artworks that reflect my passion for creativity and storytelling. 
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-max">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`overflow-hidden rounded-lg group cursor-pointer ${
                artwork.size === "large" ? "md:col-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative bg-gray-900 overflow-hidden aspect-video md:aspect-auto">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/35 md:bg-black md:bg-opacity-0 md:group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 md:p-6 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg md:text-xl font-bold mb-1">{artwork.title}</h3>
                    <p className="text-sm text-gray-300">{artwork.artist}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Crafts;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Filter, Maximize2 } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PageHeader from "@/components/sections/PageHeader";

const galleryData = [
  {
    id: 1,
    category: "Future Project",
    title: "Future Residential Wing",
    description:
      "Architectural visualization of the upcoming residential wing for our children.",
    images: [
      "/images/project/future-building1.jpeg",
      "/images/project/future-building2.jpeg",
      "/images/project/future-building3.jpeg",
    ],
  },
  {
    id: 2,
    category: "Current Facility",
    title: "Main Entrance",
    description: "The main entrance to our current home in Benin City.",
    images: ["/images/project/current-building1.jpeg"],
  },
  {
    id: 3,
    category: "Our Children",
    title: "Learning & Growth",
    description: "Children engaged in educational activities at the orphanage.",
    images: ["/child-edu.jpg", "/woman-and-child.jpg"],
  },
  {
    id: 4,
    category: "Future Project",
    title: "Skill Acquisition Center",
    description:
      "Proposed vocational training center for older children and mothers.",
    images: [
      "/images/project/future-building4.jpeg",
      "/images/project/future-building5.jpeg",
    ],
  },
  {
    id: 5,
    category: "Current Facility",
    title: "Dining Hall",
    description: "Where our children gather for daily meals and fellowship.",
    images: [
      "/images/project/current-building3.jpeg",
      "/images/project/current-building4.jpeg",
    ],
  },
  {
    id: 6,
    category: "Our Children",
    title: "Maternal Care",
    description:
      "Providing love and support to the youngest members of our family.",
    images: ["/woman-and-child.jpg"],
  },
  {
    id: 7,
    category: "Future Project",
    title: "Clinic & Healthcare Center",
    description: "Medical facility planned for the new building project.",
    images: [
      "/images/project/future-building6.jpeg",
      "/images/project/future-building7.jpeg",
    ],
  },
  {
    id: 8,
    category: "Current Facility",
    title: "Play Area",
    description: "Our current outdoor recreational space for the children.",
    images: [
      "/images/project/current-building5.jpeg",
      "/images/project/current-building8.jpeg",
    ],
  },
  {
    id: 9,
    category: "Our Children",
    title: "Primary Education",
    description: "Ensuring a solid foundation for every child.",
    images: ["/about.jpg"],
  },
];

const categories = [
  "All",
  "Current Facility",
  "Future Project",
  "Our Children",
];
const ITEMS_PER_PAGE = 6;

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Filter logic
  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        title="Our Gallery"
        subTitle=" A visual journey through our home, our children's lives, and our vision for the future."
      />

      {/* Filter Section */}
      <section className="py-12 bg-tertiary sticky top-[72px] z-40 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-primary font-bold mr-4">
              <Filter size={18} />
              <span className="hidden sm:inline">Filter By:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-white text-primary hover:bg-gray-100 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {paginatedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-50 flex flex-col h-full"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    {item.images.length > 1 ? (
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                          nextEl: `.swiper-button-next-${item.id}`,
                          prevEl: `.swiper-button-prev-${item.id}`,
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        className="h-full w-full group/swiper"
                      >
                        {item.images.map((img, idx) => (
                          <SwiperSlide key={idx}>
                            <Image
                              src={img}
                              alt={`${item.title} ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </SwiperSlide>
                        ))}
                        {/* Custom Navigation Buttons */}
                        <div
                          className={`swiper-button-prev-${item.id} absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/swiper:opacity-100 transition-opacity cursor-pointer`}
                        >
                          <ChevronLeft size={20} />
                        </div>
                        <div
                          className={`swiper-button-next-${item.id} absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/swiper:opacity-100 transition-opacity cursor-pointer`}
                        >
                          <ChevronRight size={20} />
                        </div>
                      </Swiper>
                    ) : (
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="absolute bottom-4 right-4 z-20 bg-secondary text-white p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-secondary mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-tertiary transition-colors"
              >
                <ChevronLeft size={24} className="text-primary" />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-12 h-12 rounded-2xl font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-secondary text-white shadow-lg"
                        : "bg-white text-primary border border-gray-100 hover:bg-tertiary shadow-sm"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-tertiary transition-colors"
              >
                <ChevronRight size={24} className="text-primary" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <ChevronLeft className="rotate-45" size={40} />
            </button>

            <div
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full grow mb-8 rounded-3xl overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={true}
                  pagination={{ type: "fraction" }}
                  className="h-full w-full lightbox-swiper"
                >
                  {selectedItem.images.map((img: string, idx: number) => (
                    <SwiperSlide
                      key={idx}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={img}
                        alt={selectedItem.title}
                        fill
                        className="object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="text-center text-white max-w-2xl">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedItem.title}
                </h2>
                <p className="opacity-70">{selectedItem.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #d4af37 !important;
          opacity: 1;
        }
        .lightbox-swiper .swiper-button-next,
        .lightbox-swiper .swiper-button-prev {
          color: #d4af37 !important;
        }
      `}</style>
    </main>
  );
};

export default GalleryPage;

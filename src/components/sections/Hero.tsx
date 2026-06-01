"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/slides/slide1.png",
    title: "Building a Brighter Future",
    description:
      "Every child deserves a home, an education, and a chance to dream big. Join us in making a difference.",
    cta: "Sponsor a Child",
    link: "/ways-to-help",
  },
  {
    image: "/images/slides/slide2.jpg",
    title: "Give a Gift of Hope",
    description:
      "Your support provides nutritious meals, medical care, and a safe environment for abandoned children.",
    cta: "Donate Now",
    link: "/donate",
  },
  {
    image: "/images/project/future-building6.jpeg", // Fallback to slide 1 if no slide 3
    title: "Support Our New Building Project",
    description:
      "We are expanding to provide better facilities for more children. Be a part of our legacy.",
    cta: "See Our Project",
    link: "/project",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover brightness-50"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                  >
                    <motion.h1
                      className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="mb-8 text-lg md:text-xl lg:text-2xl opacity-90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap items-center justify-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Link
                        href={slide.link}
                        className="rounded-full bg-secondary px-8 py-3 text-lg font-bold text-white transition-all hover:bg-secondary/90 hover:scale-105"
                      >
                        {slide.cta}
                      </Link>
                      <Link
                        href="/about"
                        className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-bold text-white transition-all hover:bg-white hover:text-primary"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for swiper dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #d4af37 !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          transform: scale(0.7);
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

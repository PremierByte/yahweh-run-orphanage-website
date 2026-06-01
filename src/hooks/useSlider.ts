"use client";

import { useMemo } from "react";

// -----------------------------
// SLIDE TYPE
// -----------------------------
export interface SlideItem {
  title: string;
  subTitle: string;
  image: string;
  ctaTitle: string;
  ctaRoute: string;
}

// -----------------------------
// CUSTOM HOOK
// -----------------------------
export const useSlider = () => {
  // Slide data (memoized)
  const slides: SlideItem[] = useMemo(
    () => [
      {
        title: "Master tomorrow's skills today",
        subTitle:
          "Empower yourself with the knowledge and compassion to shape the future of healthcare.",
        image:
          "/images/image-professional-woman-doctor-physician-with-clipboard-writing-listening-patient-hospital-cl_1258-122379.jpg",
        ctaTitle: "Get start",
        ctaRoute: "/",
      },
      {
        title: "Empower your journey in health care",
        subTitle:
          "Begin your journey in healthcare with expert guidance from renowned universities and industry leaders.",
        image:
          "/images/portrait-smiling-doctor-medical-personel-face-medical-mask-rubber-gloves-showing-thumbs-up_1258-124598.jpg",
        ctaTitle: "Learn more",
        ctaRoute: "/",
      },
    ],
    []
  );

  // Swiper settings (memoized)
  const swiperConfig = useMemo(
    () => ({
      effect: "fade" as const,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
    }),
    []
  );

  return {
    slides,
    swiperConfig,
  };
};

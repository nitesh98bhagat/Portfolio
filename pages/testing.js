import { useState } from "react";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SwiperButtonNext = () => {
    const swiper = useSwiper();

    return (
      <button
        className=" p-5 text-white bg-slate-900"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward className="cursor-pointer " />
      </button>
    );
  };

  const SwiperButtonPrep = () => {
    const swiper = useSwiper();

    return (
      <button
        className=" p-5 text-white bg-slate-900"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack className="cursor-pointer" />
      </button>
    );
  };

  return (
    <div className=" bg-pink-500 h-screen">
      <div className=" w-1/2 relative ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          autoplay
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* con */}
          <span
            slot="container-start"
            className="absolute inset-y-0 left-0 z-10 "
          >
            <SwiperButtonPrep />
          </span>
          {[
            "Slide1",
            "slide2",
            "slide3",
            "slide4",
            "slide5",
            "slide6",
            "slide7",
            "slide8",
            "slide9",
          ].map((e) => (
            <SwiperSlide key={e}>
              <div className="container p-5 h-40  bg-rose-200">{e}</div>
            </SwiperSlide>
          ))}

          <span
            slot="container-end"
            className="absolute inset-y-0 right-0 z-20"
          >
            <SwiperButtonNext />
          </span>
        </Swiper>
      </div>
    </div>
  );
}

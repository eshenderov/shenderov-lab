/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <div className="aspect-video rounded-xl bg-gradient-to-r from-dragonfruit to-peach p-1 lg:w-3/5">
      <Swiper
        className="h-full rounded-lg"
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        centeredSlides
        loop
      >
        <SwiperSlide>
          <div className="bg-logo-dragonfruit relative h-full">
            <Image src="/shenderov-lab-logo.png" alt="sample" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-logo-invert"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-green-apple"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-white"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;

/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    // dont ask why there are two divs here - this is the result of the nightmare that is safari combined with an hour of guessing obscure fixes
    <div className="w-full lg:w-3/5 my-auto">
      <div className="aspect-video rounded-2xl bg-gradient-to-r from-dragonfruit to-peach p-1">
        <Swiper
          className="h-full rounded-xl"
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
          {/* add slides here */}
          <SwiperSlide>
            <div className="relative h-full bg-white">
              <Image src="/logo.png" alt="sample" layout="fill" />
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
    </div>
  );
};

export default Gallery;

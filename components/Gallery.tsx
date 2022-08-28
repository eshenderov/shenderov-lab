/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./Slide";

const Gallery = () => {
  return (
    // dont ask why there are two divs here - this is the result of the nightmare that is safari combined with an hour of guessing obscure fixes
    <div className="my-auto w-full lg:w-3/5">
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
          <Slide src="/alex.jpg" alt="Alex looking at trees or something" />
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;

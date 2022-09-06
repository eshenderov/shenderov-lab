/* eslint-disable import/no-unresolved */
import { Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  return (
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
          {/* notice the / before the file name instead of the expected public/FILE_NAME */}
          <Slide src="/alex.jpg" alt="Alex looking at trees or something" />
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;

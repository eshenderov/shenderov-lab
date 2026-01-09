/* eslint-disable import/no-unresolved */
import { Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <div className="my-auto w-full lg:w-3/5">
      <div className="aspect-video cursor-grab rounded-2xl bg-gradient-to-r from-dragonfruit to-peach p-1">
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
          <Slide src="/lab-2022-summer.jpg" alt="2022 Lab Summer" />
          <Slide
            src="/lab-msc.jpg"
            alt="2022 Lab Outing to the Maryland Science Center"
          />
          <Slide src="/lab-2021-summer.jpg" alt="2021 Lab Summer" />
          <Slide src="/lab_photo.jpg" alt="2024 Lab Summer" />
          <Slide src="/lab_2025_fall.jpg" alt="2025 Lab Fall" />
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;

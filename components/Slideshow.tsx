/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// TODO: look into zoom css and slide prop

const Slideshow = () => {
  return (
    <Swiper
      className="h-96 rounded-2xl w-1/2 shadow-2xl"
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      centeredSlides
      loop
    >
      <SwiperSlide>
        <div className="relative bg-black h-full">
          <Image src="/shenderov-lab-logo.png" alt="sample" layout="fill" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-blue-900 h-full"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slideshow;

/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// TODO: look into zoom css and slide prop

const Gallery = () => {
  return (
    <section id="gallery">
      <Swiper
        className="h-96 w-1/2 rounded-2xl shadow-2xl"
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
          <div className="relative h-full bg-logo-pink">
            <Image src="/shenderov-lab-logo.png" alt="sample" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-pink"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-peach"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full bg-white"></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;

import Image from "next/image";
import { SwiperSlide } from "swiper/react";

interface Props {
  src: string;
  alt: string;
}

const Slide = ({ src, alt }: Props) => {
  return (
    <SwiperSlide>
      <div className="h-full bg-[#000000]">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
    </SwiperSlide>
  );
};

// https://github.com/nolimits4web/swiper/issues/4413
Slide.displayName = "SwiperSlide";

export default Slide;

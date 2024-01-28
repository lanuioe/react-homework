import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";

import bannerData from "../data/banners.json";

export default function RollingBanner() {
  return (
    <div className="overflow-x-hidden">
      <Swiper
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        keyboard={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="banner relative min-w-[1920px] max-w-[1920px] left-1/2 translate-x-[-50%]"
      >
        {bannerData.items?.map((slideData) => {
          return (
            <SwiperSlide key={slideData.id}>
              <a href="#">
                <img
                  src={`../src/assets/banner/banner${slideData.src}.jpg`}
                  alt={slideData.alt}
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

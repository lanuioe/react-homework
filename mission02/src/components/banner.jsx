import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";

import bannerData from "../data/banners.json";

export default function RollingBanner() {
  console.log(bannerData.items);
  return (
    <>
      <Swiper
        cssMode={true}
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
        className="relative min-w-[1920px] max-w-[1920px]"
      >
        {bannerData.items?.map((slideData) => {
          return (
            <SwiperSlide key={slideData.id}>
              <img
                src={`../src/assets/banner${slideData.src}.jpg`}
                alt={slideData.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

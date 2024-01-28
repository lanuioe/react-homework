import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

import productData from "../data/products.json";
import comma from "../utils/comma";

export default function RollingBanner() {
  return (
    <>
      <section className="mt-[52px] w-innerWrapper mx-auto">
        <h2 className="sr-only">상품 추천</h2>
        <p className="mb-10 text-h-xl text-center">이 상품 어때요?</p>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={18}
          navigation={true}
          modules={[Navigation]}
          className="recommendProduct justify-between"
        >
          {productData.items?.map((slideData) => {
            const { id, src, alt, name, detail, discount, price } = slideData;
            return (
              <SwiperSlide key={id} className="w-[249px]">
                <a href="#" className="inline-block m-0.5">
                  <div className="h-[320px] overflow-hidden">
                    <img
                      className="w-full"
                      src={`../src/assets/product/product_thumb${src}.webp`}
                      alt={alt}
                    />
                  </div>
                  <span className="inline-block mt-4 text-l-sm text-gray-400">
                    샛별배송
                  </span>
                  <p className="my-2 text-p-base text-content">{name}</p>
                  <div className="text-l-lg">
                    {discount > 0 ? (
                      <span className="me-2 text-accent-yellow">
                        {discount}%
                      </span>
                    ) : (
                      ""
                    )}
                    <span className="text-content">
                      {comma(
                        price -
                          Math.floor((price * (discount * 0.01)) / 10) * 10
                      )}
                      원
                    </span>
                    {discount > 0 ? (
                      <del className="block mt-2 text-p-sm text-gray-400">
                        {comma(price)}원
                      </del>
                    ) : (
                      ""
                    )}
                    <p className="mt-2 text-p-sm text-gray-400">{detail}</p>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

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
          spaceBetween={18}
          slidesPerGroup={4}
          navigation={true}
          modules={[Navigation]}
          className="recommendProduct justify-between"
        >
          {productData.items?.map((slideData) => {
            return (
              <SwiperSlide key={slideData.id} className="w-[249px]">
                <div className="h-[320px] overflow-hidden">
                  <img
                    className="w-full"
                    src={`../src/assets/product/product_thumb${slideData.src}.webp`}
                    alt={slideData.alt}
                  />
                </div>
                <span className="inline-block mt-4 text-l-sm text-gray-400">
                  샛별배송
                </span>
                <p className="my-2 text-p-base text-content">
                  {slideData.name}
                </p>
                <div className="text-l-lg">
                  {slideData.discount > 0 ? (
                    <span className="me-2 text-accent-yellow">
                      {slideData.discount}%
                    </span>
                  ) : (
                    ""
                  )}
                  <span className="text-content">
                    {comma(
                      slideData.price -
                        Math.floor(
                          (slideData.price * (slideData.discount * 0.01)) / 10
                        ) *
                          10
                    )}
                    원
                  </span>
                  {slideData.discount > 0 ? (
                    <del className="block mt-2 text-p-sm text-gray-400">
                      {comma(slideData.price)}원
                    </del>
                  ) : (
                    ""
                  )}
                  <p className="mt-2 text-p-sm text-gray-400">
                    {slideData.detail}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

// function Exercise() {
//   return (
//     /* JSX 영역에서는 식만 사용 가능 */
//     <ul>
//       {bannerData.items?.map(({ id, gender, face, name, isOnline }) => {
//         const photoUrl = `/images/faces/${gender}-0${face}.png`;

//         // function body 영역
//         // 문, 식 모두 사용 가능

//         return (
//           /* JSX 영역에서는 식만 사용 가능 */
//           <li key={id}>
//             <Avatar photo={photoUrl} name={name} isOnline={isOnline} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

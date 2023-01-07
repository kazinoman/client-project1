import React from "react";
// Import Swiper React components
import { Autoplay, EffectFade, Navigation } from "swiper";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderComponent = ({ pre, next, children }) => {
  return (
    <Swiper
      //   breakpoints={{
      //     "@0.00": {
      //       slidesPerView: 1,
      //       spaceBetween: 10,
      //     },
      //     "@0.75": {
      //       slidesPerView: 2,
      //       spaceBetween: 20,
      //     },
      //     "@1.00": {
      //       slidesPerView: 3,
      //       spaceBetween: 40,
      //     },
      //     "@1.50": {
      //       slidesPerView: 4,
      //       spaceBetween: 140,
      //     },
      //   }}
      breakpoints={{
        300: {
          spaceBetween: 230,
          width: 300,
          slidesPerView: 2,
        },
        400: {
          spaceBetween: 130,
          width: 400,
          slidesPerView: 2,
        },
        576: {
          spaceBetween: 5,
          width: 576,
          slidesPerView: 2,
        },
        640: {
          spaceBetween: 10,
          width: 640,
          slidesPerView: 2,
        },
        768: {
          spaceBetween: 15,
          width: 768,
          slidesPerView: 3,
        },
        900: {
          spaceBetween: 10,
          width: 900,
          slidesPerView: 3,
        },
      }}
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      loop={true}
      navigation={{ prevEl: pre.current, nextEl: next.current }}
      modules={[EffectFade, Autoplay, Navigation]}
      //   grabCursor={true}
      style={{
        // position: "absolute",
        // bottom: "0",
        padding: "10px",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Swiper>
  );
};

export default SliderComponent;

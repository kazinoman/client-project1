import React from "react";
import { Box } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Lazy } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SliderCard from "./sliderCard";

const SliderComponent = () => {
  return (
    <Swiper
      breakpoints={{
        300: {
          spaceBetween: 250,
          width: 300,
          slidesPerView: 2,
        },
        576: {
          spaceBetween: 200,
          width: 576,
          slidesPerView: 3,
        },
        640: {
          spaceBetween: 200,
          width: 640,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 200,
          width: 768,
          slidesPerView: 3,
        },
        900: {
          spaceBetween: 100,
          width: 900,
          slidesPerView: 3,
        },
      }}
      spaceBetween={100}
      slidesPerView={3}
      centeredSlides={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      modules={[EffectFade, Lazy]}
      style={{
        width: "100%",
        padding: "10px",
        // margin: "20px",
      }}
    >
      <SwiperSlide>
        <SliderCard
          image={
            "https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Eiusmod culpa Lorem ex magna do nulla."
          details="Dolore pariatur duis eiusmod proident tempor ullamco aliqua fugiat est anim est culpa cupidatat amet. Nisi pariatur officia ullamco aliquip consequat deserunt adipisicing quis consectetur et consectetur. Sunt dolore ullamco enim culpa elit ea aliqua consectetur. Duis Lorem Lorem ut tempor exercitation laborum sit nulla cillum sit qui mollit."
          year="2033"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          image={
            "https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Eiusmod culpa Lorem ex magna do nulla."
          details="Dolore pariatur duis eiusmod proident tempor ullamco aliqua fugiat est anim est culpa cupidatat amet. Nisi pariatur officia ullamco aliquip consequat deserunt adipisicing quis consectetur et consectetur. Sunt dolore ullamco enim culpa elit ea aliqua consectetur. Duis Lorem Lorem ut tempor exercitation laborum sit nulla cillum sit qui mollit."
          year="2033"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          image={
            "https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Eiusmod culpa Lorem ex magna do nulla."
          details="Dolore pariatur duis eiusmod proident tempor ullamco aliqua fugiat est anim est culpa cupidatat amet. Nisi pariatur officia ullamco aliquip consequat deserunt adipisicing quis consectetur et consectetur. Sunt dolore ullamco enim culpa elit ea aliqua consectetur. Duis Lorem Lorem ut tempor exercitation laborum sit nulla cillum sit qui mollit."
          year="2033"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          image={
            "https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Eiusmod culpa Lorem ex magna do nulla."
          details="Dolore pariatur duis eiusmod proident tempor ullamco aliqua fugiat est anim est culpa cupidatat amet. Nisi pariatur officia ullamco aliquip consequat deserunt adipisicing quis consectetur et consectetur. Sunt dolore ullamco enim culpa elit ea aliqua consectetur. Duis Lorem Lorem ut tempor exercitation laborum sit nulla cillum sit qui mollit."
          year="2033"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          image={
            "https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Eiusmod culpa Lorem ex magna do nulla."
          details="Dolore pariatur duis eiusmod proident tempor ullamco aliqua fugiat est anim est culpa cupidatat amet. Nisi pariatur officia ullamco aliquip consequat deserunt adipisicing quis consectetur et consectetur. Sunt dolore ullamco enim culpa elit ea aliqua consectetur. Duis Lorem Lorem ut tempor exercitation laborum sit nulla cillum sit qui mollit."
          year="2033"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          image={
            "https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Eiusmod culpa Lorem ex magna do nulla."
          details="Dolore pariatur duis eiusmod proident tempor ullamco aliqua fugiat est anim est culpa cupidatat amet. Nisi pariatur officia ullamco aliquip consequat deserunt adipisicing quis consectetur et consectetur. Sunt dolore ullamco enim culpa elit ea aliqua consectetur. Duis Lorem Lorem ut tempor exercitation laborum sit nulla cillum sit qui mollit."
          year="2033"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;

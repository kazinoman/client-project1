import React from "react";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";

const src =
  "https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 =
  "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img3 =
  "https://p0.pxfuel.com/preview/931/255/701/banner-digital-graphics-lion.jpg";
const SliderCom = () => {
  const myLoader = ({ src }) => {
    return `https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
  };

  return (
    <Box sx={{ height: "25rem", opacity: 0.8 }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
        }}
        modules={[EffectFade, Autoplay]}
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "100%",
          zIndex: 9,
        }}
      >
        <SwiperSlide>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/ImageOne.jpg"}
            width={"100%"}
            height={"12rem"}
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="fill"
            objectFit="cover"
            loader={() => src}
            src={src}
            width={"100%"}
            height={"12rem"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="fill"
            objectFit="cover"
            loader={() => img3}
            src={img3}
            width={"100%"}
            height={"12rem"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="fill"
            objectFit="cover"
            loader={() => img2}
            src={img2}
            width={"100%"}
            height={"12rem"}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default SliderCom;

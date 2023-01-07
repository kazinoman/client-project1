import React, { useRef } from "react";
import { Container, Typography, Box, Stack, Button } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import SliderComponent from "@/components/common/slider";

import SingleCardForPromotion from "./singleCardForPromotion";

const PromotionCard = () => {
  const swiperPreButton = useRef(null);
  const swiperNextButton = useRef(null);

  return (
    <Container maxWidth={"md"} disableGutters sx={{ py: 1 }}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography variant="title" sx={{ pl: { xs: 1, sm: 0 } }}>
          Promotions worldwide
        </Typography>
        <Stack direction="row">
          <Button
            buttonRef={swiperPreButton}
            onClick={() => {
              console.log(swiperPreButton.current);
            }}
          >
            pre
          </Button>
          <Button buttonRef={swiperNextButton}>next</Button>
          {/* <button ref={swiperPreButton}>pre</button>
          <button ref={swiperNextButton}>next</button> */}
        </Stack>
      </Stack>

      {/* <Box
        spacing={2}
        mt={0.2}
        sx={{
          p: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "column" },
          flexWrap: "wrap",
          width: "100%",
          maxHeight: { xs: "600px", sm: "400px", md: "700px" },
          overflowX: { xs: "scroll", sm: "scroll" },
          overflowY: "hidden",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          rowGap: 2,
          columnGap: 2,
        }}
      > */}
      <SliderComponent pre={swiperPreButton} next={swiperNextButton}>
        <SwiperSlide>
          <SingleCardForPromotion
            image={
              "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title="Id fugiat nisi dolor minim"
            details="Nulla Lorem commodo fugiat amet anim id elit dolor magna officia commodo.Fugiat labore deserunt ipsum mollit voluptate qui."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCardForPromotion
            image={
              "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            title="Duis adipisicing pariatur tempor ea amet amet aliqua."
            details="Mollit duiit aliquip laboris eniidunt eu. Dolor ullamco et labore aliquip fugiat in proident id nisi."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCardForPromotion
            image={
              "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title="Nostrud ad esse duis est tempor aute ullamco ex sunt."
            details="Mollit duis laboris e parMollit adipisicing qui magna minim id esse voluptate esse adipisicing duis veniam."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCardForPromotion
            image={
              "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title="Do aliquip consequat proident est."
            details="Mollit duis la Cupidatat quis ipsum laboris sit esse.Anim magna reprehenderit incididunt culpa labore."
          />
        </SwiperSlide>
      </SliderComponent>

      {/* </Box> */}
    </Container>
  );
};

export default PromotionCard;

import React from "react";

import { Box, Container, Typography } from "@mui/material";

import SliderContent from "@/components/sliderContent";
import SliderCom from "@/components/slider";
import AllCard from "@/components/basicBenefits/allCard";
import PromotionCard from "../components/promotionCard/promotionCard";
import PopularPlacesCard from "@/components/PopularPlaces/popularPlaces";
import HelpCenter from "@/components/helpCenter/helpCenter";

const Home = () => {
  return (
    <div>
      {/* slider and slider component */}
      <Box sx={{ position: "relative" }}>
        <SliderContent />
        <SliderCom />
      </Box>

      {/* Basic banefits card */}

      <AllCard />

      {/* Promotion card */}
      <PromotionCard />

      {/* Popular Places*/}
      <PopularPlacesCard />

      {/* Help center */}
      <HelpCenter />
    </div>
  );
};

export default Home;

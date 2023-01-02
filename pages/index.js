import React from "react";

import { Box } from "@mui/material";

import SliderContent from "@/components/home/sliderContent";
import SliderCom from "@/components/home/slider";
import AllCard from "@/components/home/basicBenefits/allCard";
import PromotionCard from "../components/home/promotionCard/promotionCard";
import BestPlacesCard from "@/components/home/bestPlaces/popularPlaces";
import HelpCenter from "@/components/home/helpCenter/helpCenter";
import PopularPlaces from "@/components/home/popularPlace";
import DiscoverPlaceLink from "@/components/home/discoverPlacelink";

const Home = () => {
  return (
    <div>
      {/* slider and slider component */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            bottom: "0",
            height: "100%",
            width: "100vw",
            background: "#000000a1",
          }}
        ></Box>
        <SliderContent />
        <SliderCom />
      </Box>

      {/* Basic banefits card */}

      <AllCard />

      {/* Best Places*/}
      <BestPlacesCard />

      {/* Promotion card */}
      <PromotionCard />

      {/* Popular cards */}
      <PopularPlaces />

      {/* Help center */}
      <HelpCenter />

      {/* Discover Place link  */}
      {/* <DiscoverPlaceLink /> */}
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";

import UpperSection from "@/components/aboutus/upperSection";
import Informtion from "@/components/aboutus/information";
import Offer from "@/components/aboutus/offer";
import Facts from "@/components/aboutus/facts";
import TicketInPress from "@/components/aboutus/ticketInPress";
import TeamInformation from "@/components/aboutus/teem";
import TeamManagement from "@/components/aboutus/teamManagement";
import Inspiration from "@/components/aboutus/inspiration";
import LegalInformation from "@/components/aboutus/legalInfo";
import SliderComponent from "@/components/aboutus/slider";

const About = ({ data }) => {
  // console.log(data);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Box sx={{ px: { sm: 0, md: 0 } }}>
      {/* Image section */}
      <UpperSection />

      {/* About us information */}
      <Informtion />

      {/* Offer */}
      <Offer />

      {/* slider bosbe */}
      <Box
        sx={{
          // height: "40rem",
          backgroundColor: "#fff",
          width: { xs: "98%", sm: "98%", md: "98%", lg: "55%" },
          mx: "auto",
          py: 7,
          // border: "1px solid black",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="aboutTitle" align="center">
            The Tiqets story
          </Typography>
        </Box>
        <SliderComponent />
      </Box>

      {/* Facts */}
      <Facts />

      {/* Press  */}
      <TicketInPress />

      {/* Teem information */}
      <TeamInformation />

      {/* Team management information */}
      <TeamManagement />

      {/* Inspirations */}
      <Inspiration />

      {/* Legal Information */}
      <LegalInformation />
    </Box>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default About;

import React from "react";

import BenefitsCard from "./benefitsCard";
import { Container, Grid, Stack } from "@mui/material";

import Icon1 from "assets/icon1.svg";
import Icon2 from "assets/icon2.svg";
import Icon3 from "assets/icon3.svg";
// import Image from "next/image";
const AllCard = () => {
  return (
    <Container
      maxWidth={"md"}
      disableGutters
      sx={{
        overflowY: "hidden",
        py: { xs: 1, sm: 0.8, md: 1.5 },
        px: { xs: 1.5, sm: 0 },
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        gap={{ xs: 0, sm: 1 }}
        sx={{ px: 0 }}
      >
        <BenefitsCard
          icon={Icon1}
          title="Stay flexible"
          content="Flexible cancellation options on all venues"
          // sx={{ ml: { xs: 2, md: 0 } }}
        />
        <BenefitsCard
          icon={Icon2}
          title="Book with confidence"
          content="Easy booking and skip-the-line entry on your phone"
        />
        <BenefitsCard
          icon={Icon3}
          title="Enjoy culture your way"
          content="The best experiences at museums and attractions worldwide"
        />
      </Stack>
    </Container>
  );
};

export default AllCard;



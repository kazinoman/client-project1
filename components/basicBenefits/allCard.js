import React from "react";

import BenefitsCard from "./benefitsCard";
import { Container, Grid } from "@mui/material";

import Icon1 from "assets/icon1.svg";
import Icon2 from "assets/icon2.svg";
import Icon3 from "assets/icon3.svg";
// import Image from "next/image";
const AllCard = () => {
  return (
    <Container
      maxWidth={"lg"}
      disableGutters
      sx={{
        overflow: { xs: "scroll", md: "auto" },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent={"center"}
        sx={{ minWidth: "50rem" }}
        spacing={3}
      >
        <Grid item xs={4}>
          <BenefitsCard
            icon={Icon1}
            title="Stay flexible"
            content="Flexible cancellation options on all venues"
          />
        </Grid>
        <Grid item xs={4}>
          <BenefitsCard
            icon={Icon2}
            title="Book with confidence"
            content="Easy booking and skip-the-line entry on your phone"
          />
        </Grid>
        <Grid item xs={4}>
          <BenefitsCard
            icon={Icon3}
            title="Enjoy culture your way"
            content="The best experiences at museums and attractions worldwide"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllCard;

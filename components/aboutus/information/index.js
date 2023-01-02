import React from "react";
import { Container, Stack, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";

const img =
  "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const Informtion = () => {
  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{ py: { xs: 0, sm: 3 }, px: { xs: 2, sm: 2, md: 0 } }}
    >
      <Box
        sx={{
          width: { xs: "80%", sm: "50%" },
          mx: "auto",
          textAlign: "center",
          py: { xs: 3, md: 6 },
        }}
      >
        <Typography
          align="center"
          variant="aboutNormal"
          sx={{
            fontWeight: "500",
            color: "#76819E",
            fontSize: { xs: "14px", md: "20px" },
          }}
        >
          Tiqets is an online booking platform for museums and attractions that
          connects travelers worldwide with more ways to experience culture.
        </Typography>
      </Box>
      <Grid
        container
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        columnGap={0}
        spacing={{ xs: 0, sm: 5 }}
        rowGap={3}
      >
        <Grid item xs={12} sm={6}>
          <Stack gap={1.5}>
            <Typography
              sx={{ fontWeight: "900", fontSize: { xs: "24px", sm: "30px" } }}
            >
              Making culture more accessible
            </Typography>
            <Typography variant="normal" align="justify">
              In 2014, Tiqets' founders embarked on a mission to make it easier
              for travelers to experience the best museums and attractions
              worldwide. Since then, we've brought millions of people to museums
              and attractions around the world with our instant and intuitive
              mobile booking technology. Every day, we work with thousands of
              renowned museums, thrilling attractions, and hidden gems to offer
              travelers unforgettable experiences.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={img}
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Informtion;

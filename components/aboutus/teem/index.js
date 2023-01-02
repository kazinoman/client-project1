import { Container, Grid, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import AOS from "aos";

const teamImg =
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const index = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container
      maxWidth={"100vw"}
      disableGutters
      sx={{ bgcolor: "#F6F7F9", py: { xs: 2, md: 6 } }}
      data-aos="fade-down"
    >
      <Container
        maxWidth={"md"}
        disableGutters
        sx={{ p: { xs: 2, sm: 2, md: 0 } }}
      >
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Image
              loader={() => teamImg}
              src={teamImg}
              height={500}
              width={700}
              style={{ borderRadius: "5px" }}
            />
          </Grid>
          <Grid item xs={10} sm={6}>
            <Stack alignItems="flex-start" gap={2}>
              <Typography variant="aboutTitle">Meet the team</Typography>
              <Typography>
                Our ever-growing team of international employees is a key source
                of our success. With 30+ nationalities on staff, we’re a diverse
                group of people all working towards the goal of making culture
                more accessible across the globe. Want to join us? Check out our
                vacancies!
              </Typography>
              <Button
                variant="contained"
                color="buttonColor"
                sx={{ p: { xs: 1, md: 1 }, color: "#fff" }}
              >
                Join the team
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default index;

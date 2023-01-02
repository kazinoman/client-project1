import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <Container maxWidth="100vw" disableGutters>
      <Paper sx={{ bgcolor: "#fff" }} elevation={0}>
        <Container maxWidth="md" sx={{ py: 4 }} disableGutters>
          <Stack
            alignItems={"center"}
            justifyContent="center"
            // spacing={3}
            rowGap={3}
          >
            <Typography align="center" variant="aboutTitle">
              Tiqets in the press
            </Typography>
            <Grid
              container
              direction={"row"}
              alignItems={"center"}
              justifyContent="center"
              spacing={3}
              sx={{ px: { xs: 2, sm: 1, md: 0 } }}
            >
              <Grid item xs={12} sm={4}>
                <Paper elevation={1} sx={{ bgcolor: "#fff" }}>
                  <Stack
                    alignItems={"flex-start"}
                    justifyContent="flex-start"
                    sx={{ height: "9rem", p: 2 }}
                    spacing={2}
                  >
                    <Image src={"/ticket1.png"} height={40} width={50} />
                    <Typography
                      variant="normal"
                      sx={{ color: "#000", fontWeight: "700" }}
                    >
                      Tiqets raises $60M in funding led by Airbnb
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={1} sx={{ bgcolor: "#fff" }}>
                  <Stack
                    alignItems={"flex-start"}
                    justifyContent="flex-start"
                    sx={{ height: "9rem", p: 2 }}
                    spacing={2}
                  >
                    <Image src={"/ticket2.png"} height={40} width={150} />
                    <Typography
                      variant="normal"
                      sx={{ color: "#000", fontWeight: "700" }}
                    >
                      Tiqets raises $60M in funding led by Airbnb
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={1} sx={{ color: "#000", fontWeight: "700" }}>
                  <Stack
                    alignItems={"flex-start"}
                    justifyContent="flex-start"
                    sx={{ height: "9rem", p: 2 }}
                    spacing={2}
                  >
                    <Image src={"/ticket3.png"} height={50} width={160} />
                    <Typography
                      variant="normal"
                      sx={{ color: "#000", fontWeight: "700" }}
                    >
                      Tiqets raises $60M in funding led by Airbnb
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="buttonColor"
              sx={{
                color: "#fff",
                mt: { xs: "0rem", sm: 3 },
                p: { xs: 1, md: 1 },
                textTransform: "none",
              }}
            >
              Read more
            </Button>
          </Stack>
        </Container>
      </Paper>
    </Container>
  );
};

export default index;

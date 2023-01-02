import { Container, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <Container maxWidth="100vw" sx={{ my: { sx: 0, sm: 3 } }} disableGutters>
      <Paper sx={{ bgcolor: "#F6F7F9" }} elevation={0}>
        <Container maxWidth="md" sx={{ py: { xs: 2.5, sm: 6 } }} disableGutters>
          <Stack alignItems={"center"} justifyContent="center" spacing={4}>
            <Typography
              align="center"
              sx={{ fontWeight: "900", fontSize: { xs: "24px", sm: "30px" } }}
            >
              What we offer
            </Typography>
            <Grid
              container
              direction={"row"}
              alignItems={"center"}
              justifyContent="space-between"
              sx={{ px: { xs: 2, md: 0 } }}
              rowGap={3}
            >
              <Grid item xs={12} sm={3}>
                <Stack alignItems={"center"}>
                  <Image src={"/offer1.png"} height={150} width={150} />
                  <Typography variant="normal" sx={{ fontWeight: "700" }}>
                    Stay flexible
                  </Typography>
                  <Typography
                    variant="normal"
                    sx={{ fontSize: "1rem", color: "#76819E" }}
                  >
                    Flexible cancellation options on all venues
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack alignItems={"center"}>
                  <Image src={"/offer2.png"} height={150} width={150} />
                  <Typography variant="normal" sx={{ fontWeight: "700" }}>
                    Stay flexible
                  </Typography>
                  <Typography
                    variant="normal"
                    sx={{ fontSize: "1rem", color: "#76819E" }}
                  >
                    Flexible cancellation options on all venues
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack alignItems={"center"}>
                  <Image src={"/offer3.png"} height={150} width={150} />
                  <Typography variant="normal" sx={{ fontWeight: "700" }}>
                    Stay flexible
                  </Typography>
                  <Typography
                    variant="normal"
                    sx={{ fontSize: "1rem", color: "#76819E" }}
                  >
                    Flexible cancellation options on all venues
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Paper>
    </Container>
  );
};

export default index;

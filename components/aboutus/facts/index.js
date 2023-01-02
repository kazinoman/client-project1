import { Container, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <Container maxWidth="100vw" sx={{ mt: 5 }} disableGutters>
      <Paper sx={{ bgcolor: "#F6F7F9" }} elevation={0}>
        <Container
          maxWidth="md"
          sx={{ py: { xs: 0, sm: 3 }, px: { xs: 0, sm: 2, md: 0 } }}
          disableGutters
        >
          <Stack
            alignItems={"center"}
            justifyContent="center"
            gap={{ xs: 0, sm: 3 }}
          >
            <Typography
              align="center"
              sx={{ fontWeight: "900", fontSize: { xs: "24px", sm: "30px" } }}
            >
              Fast facts
            </Typography>
            <Grid
              container
              direction={"row"}
              alignItems={"center"}
              justifyContent="space-evenly"
              spacing={3}
              sx={{ p: { xs: 2, sm: 0 } }}
            >
              <Grid item xs={12} sm={4}>
                <Paper elevation={0}>
                  <Stack
                    alignItems={"center"}
                    justifyContent="center"
                    sx={{ height: "9rem" }}
                    gap={{ xs: 0.5, sm: 0 }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "700",
                        color: "#5C5CE0",
                        fontSize: { xs: "24px", sm: "32px" },
                      }}
                    >
                      20M+
                    </Typography>
                    <Typography variant="normal" sx={{ color: "#76819E" }}>
                      tickets sold worldwide
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={0}>
                  <Stack
                    alignItems={"center"}
                    justifyContent="center"
                    sx={{ height: "9rem" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "700",
                        color: "#FFBD23",
                        fontSize: { xs: "24px", sm: "32px" },
                      }}
                    >
                      3.7K+
                    </Typography>
                    <Typography variant="normal" sx={{ color: "#76819E" }}>
                      App download
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={0}>
                  <Stack
                    alignItems={"center"}
                    justifyContent="center"
                    sx={{ height: "9rem" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "700",
                        color: "#25C1A4",
                        fontSize: { xs: "24px", sm: "32px" },
                      }}
                    >
                      2M+
                    </Typography>
                    <Typography variant="normal" sx={{ color: "#76819E" }}>
                      App download
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Paper>
    </Container>
  );
};

export default index;

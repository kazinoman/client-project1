import { Container, Paper, Typography, Stack } from "@mui/material";
import React from "react";

const helpCenter = () => {
  return (
    <Container maxWidth={"lg"} disableGutters sx={{ my: 5 }}>
      <Typography variant="title">
        We are a proud partner of the world’s most-loved venues
      </Typography>
      <br />
      <Typography variant="normal">
        With more than 3,000 partners worldwide, Tiqets has a ticket for
        everyone. Not a fan of museums? We’ve got rollercoasters, too. Hate
        <br />
        heights? Explore ancient ruins instead. With Tiqets, you choose your way
        to culture.
      </Typography>
      <Container maxWidth={"md"} disableGutters sx={{ my: 5 }}>
        <Paper sx={{ bgcolor: "#18BABD" }} elevation={0}>
          <Stack direction="row">
            <Typography>Image</Typography>
            <Stack>
              <Typography>Tiqets help center</Typography>
              <Typography>
                unt ut aliquip minim reprehenderit officia ea minim esse et.
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Container>
  );
};

export default helpCenter;

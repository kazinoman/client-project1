import { Container, Paper, Typography, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const helpCenter = () => {
  return (
    <Container
      maxWidth={"md"}
      disableGutters
      sx={{
        my: { xs: 1, md: 3 },
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        rowGap: 6,
        p: { xs: 2, sm: 0 },
      }}
    >
      <Stack direction="column" alignItems={"flex-start"}>
        <Typography variant="title">
          We are a proud partner of the world’s most-loved venues
        </Typography>

        <Typography variant="normal">
          With more than 3,000 partners worldwide, Tiqets has a ticket for
          everyone. Not a fan of museums? We’ve got rollercoasters, too. Hate
          <br />
          heights? Explore ancient ruins instead. With Tiqets, you choose your
          way to culture.
        </Typography>
      </Stack>
      <Paper
        sx={{
          bgcolor: "#40e0d0",
          transitionDelay: 4,
          "&:hover": { bgcolor: "#1fcecb", transitionDelay: 4 },
          // height: '8rem',
        }}
        elevation={0}
      >
        <Stack
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            lg: "row",
          }}
        >
          <Image src={"/girlIcon.svg"} height={"200px"} width={"200px"} />
          <Stack justifyContent={"center"} alignItems="center">
            <Typography variant="title" sx={{ color: "#fff" }}>
              Tiqets help center
            </Typography>
            <Typography sx={{ color: "#fff" }}>
              Our customer service team is available 25/7 via chat and whatsapp.
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default helpCenter;

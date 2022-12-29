import { Container, Typography } from "@mui/material";
import React from "react";
import InputBox from "@/components/inputBox";
import { Stack } from "@mui/material";

const SliderContent = () => {
  return (
    <Container
      disableGutters
      maxWidth={"md"}
      sx={{
        position: "absolute",
        zIndex: 10,
        // background: "#000000a1",
        left: 50,
        right: 50,
        width: { xs: "80%", sm: "80%", md: "50%", lg: "100%" },
        height: "100%",
      }}
    >
      <Stack
        sx={{ height: "100%" }}
        alignItem="center"
        justifyContent="center"
        rowGap={1}
      >
        <Typography variant="large">Discover more ways to culture</Typography>
        <Typography variant="small">
          From iconic attractions to amazing experiences, what will you book
          next?
        </Typography>
        <InputBox />
        <Typography variant="extraSmall" sx={{ mt: "2rem" }}>
          20,000,000+ tickets sold worldwide
        </Typography>
      </Stack>
    </Container>
  );
};

export default SliderContent;

import { Button, Container, Typography } from "@mui/material";
import React from "react";
import InputBox from "@/components/inputBox";
import { Stack } from "@mui/material";
import { BiCurrentLocation } from "react-icons/bi";

const SliderContent = () => {
  return (
    <Container
      disableGutters
      maxWidth={"md"}
      sx={{
        position: "absolute",
        zIndex: 10,
        // background: "#000000a1",
        left: { xs: 30, md: 50 },
        right: 50,
        width: { xs: "80%", sm: "80%", md: "50%", lg: "100%" },
        height: "100%",
      }}
    >
      <Stack
        sx={{ height: "100%" }}
        alignItem="flex-start"
        justifyContent="center"
        rowGap={1}
      >
        <Stack
          flexGrow={1}
          alignItems="flex-start"
          justifyContent={"center"}
          gap={1}
        >
          <Typography variant="large">Discover more ways to culture</Typography>
          <Typography variant="small">
            From iconic attractions to amazing experiences, what will you book
            next?
          </Typography>
          <InputBox />
          <Button
            startIcon={<BiCurrentLocation />}
            sx={{
              width: { xs: "15rem", sm: "15rem", md: "15rem" },
              whiteSpace: { xs: "pre", sm: "nowrap" },
              // minWidth: '8rem',
              mb: 3,
              color: "#fff",
              backgroundColor: "#000000a1",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#000000a1",
              },
            }}
            variant="contained"
          >
            Show Experiences nearby
          </Button>
        </Stack>
        <Typography variant="extraSmall" sx={{ mb: 2 }}>
          20,000,000+ tickets sold worldwide
        </Typography>
      </Stack>
    </Container>
  );
};

export default SliderContent;

import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BenefitsCard = ({ icon, title, content }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#F2F4F7",
        my: 4,
        height: "7rem",
        borderRadius: "10px",
        // maxWidth: "20rem",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="flex-start"
        alignItems={"flex-start"}
        columnGap={2}
        p={1}
        height={"100%"}
      >
        <Image src={icon} height="50px" width="50px" />
        {/* <img src={icon} style={{ width: "100px", height: "100px" }} /> */}
        <Stack>
          <Typography
            variant="normal"
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="normal">{content}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default BenefitsCard;

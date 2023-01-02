import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BenefitsCard = ({ icon, title, content, ...others }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#F2F4F7",
        mx: { xs: 0.5, sm: 0 },
        // height: '100%',
        height: "7rem",
        minWidth: { xs: "15rem", md: "15rem", lg: "16rem" },
        width: "480px",
        p: 2,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="flex-start"
        alignItems={"flex-start"}
        columnGap={3}
        // p={2}
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

import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const SliderCard = ({ image, title, details, year }) => {
  return (
    <Paper sx={{ width: "250px", p: 3 }} elevation={3}>
      <Stack alignItems={"flex-start"} gap={1.5}>
        <Avatar src={image} sx={{ width: 100, height: 100 }} />
        <Stack gap={1}>
          <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            {details}
          </Typography>
        </Stack>
        <Typography variant="aboutTitle" sx={{ color: "green" }}>
          {year}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default SliderCard;

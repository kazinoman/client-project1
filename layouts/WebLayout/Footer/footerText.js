import { Typography } from "@mui/material";
import React from "react";

const footerText = ({ text }) => {
  return (
    <Typography
      variant="footerContent"
      sx={{
        "&:hover": { color: "#76819E", cursor: "pointer" },
      }}
    >
      {text}
    </Typography>
  );
};

export default footerText;

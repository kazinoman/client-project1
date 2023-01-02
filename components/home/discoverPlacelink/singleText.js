import React from "react";
import { Typography, Box } from "@mui/material";

const SingleText = ({ children }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 0,
        border: "1px solid #d3d3d3",
        borderRadius: "3px",
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{ color: "#01796f", fontWeight: "700", fontSize: "14px" }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default SingleText;

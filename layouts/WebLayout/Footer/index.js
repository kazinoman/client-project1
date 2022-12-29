import { Container, Paper } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        // pt: 2,
        borderRadius: "0px",
        // flexGrow: 1,
        backgroundColor: "secondary.main",

        color: "#fff",
      }}
    >
      <Container maxWidth={"lg"} sx={{ height: "10rem" }}>
        Footer Here
      </Container>
    </Paper>
  );
};

export default Footer;

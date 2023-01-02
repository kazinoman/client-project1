import React from "react";
import { Container, Stack, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/styles/theme";
import Header from "./Header";
import Footer from "./Footer";

const WebLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          direction={"column"}
          sx={{
            height: "100vh",
            overflow: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "5px",
            scrollbarHeight: "5px",
            scrollbarColor: `#808080`, // thumb & track
            "& a": {
              textDecoration: "none", // remove the text decoration globally
            },
            "& a:not(.MuiButton-root)": {
              color: "unset",
            },
            // scrollbar
            "*": {
              scrollbarWidth: "5px",
              scrollbarHeight: "5px",
              scrollbarColor: `#808080`,
            },
            "*::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
            },
            "*::-webkit-scrollbar-track": {
              background: "#00000033",
            },
            "*::-webkit-scrollbar-thumb": {
              background: "#808080",
              borderRadius: "20px",
            },
            "*::-webkit-scrollbar-thumb:hover": {
              background: "#808080",
            },
            // App Body Scrollbar
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#00000033",
            },
            "&::-webkit-scrollbar-thumb": {
              background: `#808080`,
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: `#808080`,
            },
          }}
        >
          <Header />
          <Container
            maxWidth={"100vw"}
            // flexGrow={1}
            sx={{
              flexGrow: 1,
              px: { xs: 0, sm: 0 },
              // minHeight: "30rem",
              // height: "100vh",
            }}
          >
            {children}
          </Container>
          <Footer />
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default WebLayout;

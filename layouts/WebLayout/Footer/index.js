import { Container, Grid, Hidden, Paper, Stack, Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import FooterText from "./footerText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import theme from "@/styles/theme";

// Icon
import { MdFacebook, MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";

import Image from "next/image";

const Footer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <Container
        maxWidth={"md"}
        sx={{ py: { xs: 2, sm: 1.5, md: 3 }, px: { xs: 2, md: 0 } }}
        disableGutters
      >
        <Hidden mdDown>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Stack gap={1}>
                <Typography
                  variant="normal"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Explore
                </Typography>
                <FooterText text="Barcelona" />
                <FooterText text="London" />
                <FooterText text="New York" />
                <FooterText text="Paris" />
                <FooterText text="Rome" />
                <FooterText text="All Destination" />
              </Stack>
            </Grid>
            <Grid item md={2}>
              <Stack gap={1}>
                <Typography
                  variant="normal"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Company
                </Typography>
                <FooterText text="Tiqets Blog" />
                <FooterText text="About us" />
                <FooterText text="Jobs" />
                <FooterText text="Responsible Disclosure" />
                <FooterText text="Rome" />
                <FooterText text="All Destination" />
              </Stack>
            </Grid>
            <Grid item md={2}>
              <Stack gap={1}>
                <Typography
                  variant="normal"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Support
                </Typography>
                <FooterText text="Help Center" />
                <FooterText text="Help Center for Suppliers" />
                <FooterText text="Terms & Conditions" />
                <FooterText text="Privacy Policy" />
                <FooterText text="Tiqets App" />
              </Stack>
            </Grid>

            <Grid item md={2}>
              <Stack gap={1}>
                <Typography
                  variant="normal"
                  sx={{ color: "#fff", fontWeight: "700" }}
                >
                  Partnerships
                </Typography>
                <FooterText text="Become a Supplier" />
                <FooterText text="Become a Distributor" />
              </Stack>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Accordion
            elevation={0}
            sx={{ borderBottom: "0.5px solid #76819E" }}
            disableGutters
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              disableGutters={true}
              expandIcon={
                <MdOutlineKeyboardArrowDown
                  style={{ fontSize: "2rem", color: "#fff" }}
                />
              }
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderBottom: `${
                  expanded === "panel1" ? "0.5px solid #76819E" : "none"
                }`,
                margin: "0px",
                p: 0,
              }}
            >
              <Typography variant="footerTitle">Explore</Typography>
            </AccordionSummary>
            <AccordionDetails
              disableGutters
              sx={{ backgroundColor: theme.palette.secondary.main, py: 0 }}
            >
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Barcelona</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">London</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">New York</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Paris</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Rome</Typography>
              </Box>
              <Box sx={{ py: 2 }}>
                <Typography variant="footerContent">All Destination</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            sx={{ borderBottom: "0.5px solid #76819E" }}
            disableGutters
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              disableGutters={true}
              expandIcon={
                <MdOutlineKeyboardArrowDown
                  style={{ fontSize: "2rem", color: "#fff" }}
                />
              }
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderBottom: `${
                  expanded === "panel2" ? "0.5px solid #76819E" : "none"
                }`,
                margin: "0px",
                p: 0,
              }}
            >
              <Typography variant="footerTitle">Company</Typography>
            </AccordionSummary>
            <AccordionDetails
              disableGutters
              sx={{ backgroundColor: theme.palette.secondary.main, py: 0 }}
            >
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Tiqets Blog</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">About us</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Jobs</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">
                  Responsible Disclosure
                </Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Rome</Typography>
              </Box>
              <Box sx={{ py: 2 }}>
                <Typography variant="footerContent">All Destination</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            sx={{ borderBottom: "0.5px solid #76819E" }}
            disableGutters
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              disableGutters={true}
              expandIcon={
                <MdOutlineKeyboardArrowDown
                  style={{ fontSize: "2rem", color: "#fff" }}
                />
              }
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderBottom: `${
                  expanded === "panel3" ? "0.5px solid #76819E" : "none"
                }`,
                margin: "0px",
                p: 0,
              }}
            >
              <Typography variant="footerTitle">Support</Typography>
            </AccordionSummary>

            <AccordionDetails
              disableGutters
              sx={{ backgroundColor: theme.palette.secondary.main, py: 0 }}
            >
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Help Center</Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">
                  Help Center for Suppliers
                </Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">
                  Terms & Conditions
                </Typography>
              </Box>
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">Privacy Policy</Typography>
              </Box>
              <Box sx={{ py: 2 }}>
                <Typography variant="footerContent">Tiqets App</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            sx={{ borderBottom: "0.5px solid #76819E" }}
            disableGutters
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              disableGutters={true}
              expandIcon={
                <MdOutlineKeyboardArrowDown
                  style={{ fontSize: "2rem", color: "#fff" }}
                />
              }
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderBottom: `${
                  expanded === "panel4" ? "0.5px solid #76819E" : "none"
                }`,
                margin: "0px",
                p: 0,
              }}
            >
              <Typography variant="footerTitle">Partnerships</Typography>
            </AccordionSummary>
            <AccordionDetails
              disableGutters
              sx={{ backgroundColor: theme.palette.secondary.main, py: 0 }}
            >
              <Box sx={{ borderBottom: "0.5px solid #76819E", py: 2 }}>
                <Typography variant="footerContent">
                  Become a Supplier
                </Typography>
              </Box>
              <Box sx={{ py: 2 }}>
                <Typography variant="footerContent">
                  Become a Distributor
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Hidden>
        <Stack
          direction="row"
          alignItems={"flex-start"}
          sx={{
            borderTop: { xs: "1px solid #1D2D53", md: "none" },
            pt: 2,
            mt: 3,
            // flexWrap: "wrap",
          }}
          // wrap={"wrap"}
          gap={2}
        >
          <Stack>
            <RiMessage2Fill style={{ fontSize: "1.3rem", marginTop: "2px" }} />
          </Stack>

          <Stack
            direction="row"
            gap={2}
            sx={{ whiteSpace: "nowrap", flexWrap: "wrap" }}
          >
            <Typography variant="footerContent">English</Typography>
            <Typography variant="footerContent">Català</Typography>
            <Typography variant="footerContent">Deutsch</Typography>
            <Typography variant="footerContent">Ελληνικά</Typography>
            <Typography variant="footerContent">Español</Typography>
            <Typography variant="footerContent">Français</Typography>
            <Typography variant="footerContent">한국어</Typography>
            <Typography variant="footerContent">Italiano</Typography>
            <Typography variant="footerContent">Nederlands</Typography>
            <Typography variant="footerContent">日本語</Typography>
            <Typography variant="footerContent">Português</Typography>
            <Typography variant="footerContent">Polski</Typography>
            <Typography variant="footerContent">Русский</Typography>
            <Typography variant="footerContent">中文</Typography>
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth={"100vw"} disableGutters>
        <Paper
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: "#1D2D53",
            borderRadius: "0px",
          }}
        >
          <Container maxWidth={"md"} disableGutters sx={{ py: 0 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Image src={"/icon.png"} height={70} width={110} />
              <Typography variant="normal" sx={{ color: "#fff" }}>
                © 2014-2022 Tiqets
              </Typography>
              <Stack direction="row">
                <AiFillFacebook
                  style={{
                    color: "#fff",
                    height: "40px",
                    width: "40px",
                    cursor: "pointer",
                  }}
                />
                <AiFillTwitterSquare
                  style={{
                    color: "#fff",
                    height: "40px",
                    width: "40px",
                    cursor: "pointer",
                  }}
                />
                <AiFillInstagram
                  style={{
                    color: "#fff",
                    height: "40px",
                    width: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
            </Stack>
          </Container>
        </Paper>
      </Container>
    </Paper>
  );
};

export default Footer;

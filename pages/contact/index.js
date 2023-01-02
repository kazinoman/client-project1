import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";
import CustomInput from "./input";

const ContactPage = () => {
  return (
    <Container maxWidth="md" disableGutters sx={{ p: "40px" }}>
      <Paper
        sx={{
          p: 2,
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <Stack alignItems="center">
          <Typography
            variant="normal"
            sx={{ fontWeight: "500", color: "#76819E" }}
          >
            Contact Us
          </Typography>
          <Typography variant="title" sx={{ mb: 1 }}>
            Contact us the get started
          </Typography>
          <Box
            sx={{
              width: "10rem",
              height: "2px",
              backgroundColor: "#808080",
              mb: 4,
            }}
          ></Box>
          <Box sx={{ width: { sm: "100%", lg: "80%" } }}>
            <form>
              <Stack direction="column" gap={1}>
                <Stack direction="row" gap={1}>
                  <Stack sx={{ width: "50%" }}>
                    <Typography>Your Name</Typography>
                    <CustomInput placeholder="Your Name" />
                  </Stack>
                  <Stack sx={{ width: "50%" }}>
                    <Typography>Your Email</Typography>
                    <CustomInput placeholder="Your Email" />
                  </Stack>
                </Stack>
                <Stack>
                  <Typography>Subject</Typography>
                  <CustomInput placeholder="Subject" />
                </Stack>
                <Stack>
                  <Typography>Message</Typography>
                  <CustomInput placeholder="message" multiline minRows={10} />
                </Stack>
                <Button
                  variant="contained"
                  color="buttonColor"
                  sx={{ color: "#fff" }}
                  disableElevation
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ContactPage;

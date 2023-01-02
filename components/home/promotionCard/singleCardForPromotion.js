import {
  Avatar,
  Paper,
  Stack,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const SingleCardForPromotion = ({ image, title, details }) => {
  return (
    <Paper
      sx={{
        width: {
          xs: "50%",
          //   xs: popularPlace ? "98%" : "90%",
          sm: "38%",
          md: "40%",
          lg: "48%",
        },
        minWidth: "200px",
        cursor: "pointer",
        "&:hover": {
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        },
      }}
    >
      <Grid
        container
        direction={{ xs: "column", sm: "column" }}
        justifyContent="space-between"
      >
        <Grid item xs={4} sm={12}>
          <Avatar
            src={image}
            sx={{
              height: { xs: "180px", sm: "160px", lg: "180px" },
              width: { xs: "100%", sm: "100%" },
              borderRadius: "5px 5px 0px 0px",
              //   maxHeight: "200px",
            }}
            variant="square"
          ></Avatar>
        </Grid>
        <Grid item sx={{ px: 2 }} xs={8} sm={12}>
          <Stack
            sx={{ height: "220px", minHeight: "200px", py: 2 }}
            justifyContent="space-between"
            alignItems={"flex-start"}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              {title}
            </Typography>
            <Box sx={{ height: "5rem" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  letterSpacing: "0.3px",
                  color: "#76819E",
                  maxHeight: "90px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  "&::-webkit-line-clamp": 2,
                  // webkitLineClamp: 2 /* number of lines to show */,
                  "&::-line-clamp": 2,
                  "&::-webkit-box-orient": "vertical",
                }}
              >
                {details}
              </Typography>
            </Box>
            <Button
              color="buttonColor"
              variant="contained"
              sx={{
                color: "#fff",
                textTransform: "none",
                fontSize: "16px",
                p: 1.2,
                width: { xs: "100%", md: "10rem" },
              }}
            >
              Show all deals
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleCardForPromotion;

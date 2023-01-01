import { Avatar, Paper, Stack, Typography, Grid, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({
  image,
  location,
  title,
  details,
  rating,
  ratingCount,
  price,
  popularPlace,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        width: {
          xs: popularPlace ? "98%" : "90%",
          sm: "31%",
          md: "30%",
          lg: popularPlace ? "32%" : "30%",
        },
        minWidth: "200px",
        cursor: "pointer",
        "&:hover": {
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        },
      }}
    >
      <Grid container direction={{ xs: "row", sm: "column" }}>
        <Grid item xs={4} sm={12}>
          <Avatar
            src={image}
            sx={{
              height: { xs: "180px", sm: "100%" },
              width: { xs: "100%", sm: "100%" },
              borderRadius: { xs: "5px 0px 0px 5px", sm: "5px 5px 0px 0px " },
              //   maxHeight: "200px",
            }}
            variant="square"
          ></Avatar>
        </Grid>
        <Grid item sx={{ px: 2, py: { xs: 0, sm: 1.5 } }} xs={8} sm={12}>
          <Stack sx={{ height: "8rem", minHeight: "100px" }}>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              {location}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              {title}
            </Typography>
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
          </Stack>

          <Stack direction="row" justifyContent={"space-between"}>
            <Stack
              direction="row"
              alignItems={"flex-end"}
              justifyContent="center"
              gap={0.8}
            >
              <AiFillStar
                style={{ color: "#FFBD24", fontSize: "1rem", marginTop: 1 }}
              />
              <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                {rating}
              </Typography>
              <Typography sx={{ fontWeight: "400", fontSize: "12px" }}>
                ({ratingCount})
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: "0.3px",
                  //   color: "#76819E",
                  //   maxHeight: "90px",
                }}
              >
                From
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.3px",
                  //   color: "#76819E",
                  //   maxHeight: "90px",
                }}
              >
                AED{price}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;

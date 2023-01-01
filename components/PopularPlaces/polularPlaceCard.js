import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const polularPlaceCard = ({
  image,
  title,
  description,
  location,
  rating,
  ratingCount,
  price,
}) => {
  return (
    <Grid item xs={12} sm={4} lg={4}>
      <Paper
        elevation={2}
        sx={{
          "&:hover": {
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          },
          width: "100%",
          maxWidth: { lg: "300px", sm: "300px" },
          margin: "0 auto",
        }}
      >
        {/* <Stack
          direction={{ xs: "row", sm: "column" }}
          sx={{ height: { xs: "fit-content", sm: "100%" } }}
        > */}
        <Grid
          container
          direction="row"
          // justifyContent={"center"}
          alignItems={"flex-start"}
          // sx={{ width: "100%" }}
        >
          <Grid item lg={12} xs={4} sm={12}>
            {" "}
            <Card>
              <CardMedia
                sx={{
                  // height: { xs: '100%', sm: 170 },
                  width: { xs: "12rem", sm: "100%" },
                  // width: "100%",
                  height: { lg: 170, sm: 190, xs: 210 },
                  maxHeight: { lg: "", sm: "", xs: "100%" },
                  // maxWidth: { lg: "100%", xs: "70%" },
                }}
                image={image}
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item lg={12} xs={8}>
            <CardContent>
              <Typography
                gutterBottom
                variant="normal"
                sx={{ color: "#76819E" }}
              >
                {location}
              </Typography>
              <Typography gutterBottom variant="cardTitle" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>

            <CardActions>
              <Stack
                sx={{ width: "100%" }}
                direction={{ xs: "row" }}
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    {rating}
                  </Typography>
                  <Typography
                    variant="extraSmall"
                    sx={{ color: "#76819E", fontWeight: "900" }}
                  >
                    ({ratingCount})
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    AED {price}
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Grid>
        </Grid>

        {/* <Stack direction={"column"}> */}

        {/* </Stack> */}
        {/* </Stack> */}
      </Paper>
    </Grid>
  );
};

export default polularPlaceCard;

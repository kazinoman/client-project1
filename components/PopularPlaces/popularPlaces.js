import {
  Container,
  Grid,
  Typography,
  Paper,
  Rating,
  Stack,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import React from "react";

const PopularPlacesCard = () => {
  return (
    <Container disableGutters sx={{ mb: 5 }}>
      <Typography variant="title">Most popular things to do</Typography>

      <Grid container spacing={2} mt={0.2} wrap={"wrap"}>
        <Grid item sx={6} md={6} lg={4}>
          <Paper
            sx={{
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent sx={{ height: 200 }}>
              <Typography
                gutterBottom
                variant="normal"
                sx={{ color: "#76819E" }}
              >
                Dhaka
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Commodo elit id id ad eu qui.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excepteur mollit dolor quis eu voluptate quis reprehenderit.
                Velit ex adipisicing sit ea dolor elit anim veniam exercitation.
                Ex magna aliqua consectetur exercitation eu.
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    2.2
                  </Typography>
                  <Typography
                    variant="extraSmall"
                    sx={{ color: "#76819E", fontWeight: "900" }}
                  >
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    ৳ 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} md={6} lg={4}>
          <Paper
            sx={{
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              },
            }}
          >
            <Card x={{ height: 170 }}>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                Laborum ad excepteur est culpa elit eu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excepteur mollit dolor quis eu voluptate quis reprehenderit.
                Velit ex adipisicing sit ea dolor elit anim veniam exercitation.
                Ex magna aliqua consectetur exercitation eu. Consectetur
                adipisicing id sunt exercitation Lorem elit veniam ad. Laborum
                sunt elit aliqua aute cupidatat esse labore Lorem.
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    ৳ 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} md={6} lg={4}>
          <Paper
            sx={{
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                Laborum ad excepteur est culpa elit eu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excepteur mollit dolor quis eu voluptate quis reprehenderit.
                Velit ex adipisicing sit ea dolor elit anim veniam exercitation.
                Ex magna aliqua consectetur exercitation eu. Consectetur
                adipisicing id sunt exercitation Lorem elit veni
              </Typography>
            </CardContent>

            <CardActions>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    ৳ 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} md={6} lg={4}>
          <Paper
            sx={{
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                Laborum ad excepteur est culpa elit eu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excepteur mollit dolor quis eu voluptate quis reprehenderit.
                Velit ex adipisicing sit ea dolor elit anim veniam exercitation.
                Ex magna aliqua consectetur exercitation eu. Consectetur
                adipisicing id sunt exercitation Lorem elit veniam ad. Laborum
                sunt elit aliqua aute cupidatat esse labore Lorem.
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    ৳ 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} md={6} lg={4}>
          <Paper
            sx={{
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                Laborum ad excepteur est culpa elit eu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excepteur mollit dolor quis eu voluptate quis reprehenderit.
                Velit ex adipisicing sit ea dolor elit anim veniam exercitation.
                Ex magna aliqua consectetur exercitation eu. Consectetur
                adipisicing id sunt exercitation Lorem elit veniam ad. Laborum
                sunt elit aliqua aute cupidatat esse labore Lorem.
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    ৳ 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} md={6} lg={4}>
          <Paper
            sx={{
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                Laborum ad excepteur est culpa elit eu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excepteur mollit dolor quis eu voluptate quis reprehenderit.
                Velit ex adipisicing sit ea dolor elit anim veniam exercitation.
                Ex magna aliqua consectetur exercitation eu. Consectetur
                adipisicing id sunt exercitation Lorem elit veniam ad. Laborum
                sunt elit aliqua aute cupidatat esse labore Lorem.
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: "#76819E" }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: "#000" }}>
                    ৳ 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopularPlacesCard;

import {
  Container,
  Grid,
  Typography,
  Paper,
  Rating,
  Stack,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import PopularPlaceCard from "./polularPlaceCard";

const PopularPlacesCard = () => {
  return (
    <Box
      sx={{
        width: { lg: "90%", sm: "90%", xs: "95%" },
        mx: "auto",
        maxWidth: "900px",
      }}
      // maxWidth={"md"}
      // disableGutters
      // sx={{ my: 10, p: { xs: "10px", md: "0px" } }}
    >
      <Typography variant="title">Most popular things to do</Typography>

      <Grid
        container
        justifyContent={"flex-start"}
        alignItems="center"
        spacing={2}
        // gap={1}
        mt={0.2}
      >
        <PopularPlaceCard
          image={
            "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          }
          title={"adf"}
          description="descriptionalskdjfhlkajsdfh lkajsdfhlakjsdfh laklsjdfhlkajshf ;aklsjdflakjsdfh klaj"
          location="Dhaka"
          rating={2.2}
          ratingCount={2312}
          price={2123}
        />
        <PopularPlaceCard
          image={
            "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          }
          title={"adf"}
          description="descriptionalskdjfhlkajsdfh lkajsdfhlakjsdfh laklsjdfhlkajshf ;aklsjdflakjsdfh klaj"
          location="Dhaka"
          rating={2.2}
          ratingCount={2312}
          price={2123}
        />
        <PopularPlaceCard
          image={
            "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          }
          title={"adf"}
          description="descriptionalskdjfhlkajsdfh lkajsdfhlakjsdfh laklsjdfhlkajshf ;aklsjdflakjsdfh klaj"
          location="Dhaka"
          rating={2.2}
          ratingCount={2312}
          price={2123}
        />
        <PopularPlaceCard
          image={
            "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          }
          title={"adf"}
          description="description;lakjdfhkjasdhflkajsdfh alsdjfh aklsjhflakj"
          location="Dhaka"
          rating={2.2}
          ratingCount={2312}
          price={2123}
        />
        {/* <Grid item sx={6} sm={4} md={4} lg={4}>
          <Paper
            sx={{
              '&:hover': {
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
              },
            }}
          >
            <Card x={{ height: 170 }}>
              <CardMedia
                sx={{
                  height: 170,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                image="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
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
                Ex magna aliqua co
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: '100%' }}
                direction="row"
                alignItems={'center'}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    AED 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} sm={4} md={4} lg={4}>
          <Paper
            sx={{
              '&:hover': {
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=801"
                title="green iguana"
              />
            </Card>
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                Laborum ad excepteur est culpa elit eu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excepteur mollit dolor quis eu voluptate quis reprehenderit.
                Velit ex adipisicing sit ea dolor
              </Typography>
            </CardContent>

            <CardActions>
              <Stack
                sx={{ width: '100%' }}
                direction="row"
                alignItems={'center'}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    AED 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} sm={4} md={4} lg={4}>
          <Paper
            sx={{
              '&:hover': {
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://plus.unsplash.com/premium_photo-1661382219642-43e54f7e81d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
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
                Ex magna aliqua consectetur
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: '100%' }}
                direction="row"
                alignItems={'center'}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    AED 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} sm={4} md={4} lg={4}>
          <Paper
            sx={{
              '&:hover': {
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
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
                Ex magna aliqua consectetur
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: '100%' }}
                direction="row"
                alignItems={'center'}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    AED 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} sm={4} md={4} lg={4}>
          <Paper
            sx={{
              '&:hover': {
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
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
                Ex magna aliqua consectetur
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                sx={{ width: '100%' }}
                direction="row"
                alignItems={'center'}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Rating defaultValue={1} max={1}></Rating>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    2.2
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    (123213)
                  </Typography>
                </Stack>
                <Stack direction="column">
                  <Typography variant="extraSmall" sx={{ color: '#76819E' }}>
                    From
                  </Typography>
                  <Typography variant="extraSmall" sx={{ color: '#000' }}>
                    AED 23334
                  </Typography>
                </Stack>
              </Stack>
            </CardActions>
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default PopularPlacesCard;

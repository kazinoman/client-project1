import { Container, Grid, Typography, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import React from "react";

const PromotionCard = () => {
  return (
    <Container disableGutters sx={{ mb: 5 }}>
      <Typography variant="title">Promotions worldwide</Typography>

      <Grid container spacing={2} mt={0.2}>
        <Grid item sx={6} md={6} lg={6}>
          <Paper>
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Commodo elit id id ad eu qui.
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
              <Button
                variant="contained"
                size="small"
                color="buttonColor"
                sx={{ color: "#fff", textTransform: "none" }}
              >
                Show all deals
              </Button>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item sx={6} md={6} lg={6}>
          <Paper>
            <Card>
              <CardMedia
                sx={{ height: 170 }}
                image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
              />
            </Card>
            <CardContent>
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
              <Button
                variant="contained"
                size="small"
                color="buttonColor"
                sx={{ color: "#fff", textTransform: "none" }}
              >
                Show all deals
              </Button>
            </CardActions>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PromotionCard;

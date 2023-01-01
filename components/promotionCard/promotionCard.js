import { Container, Grid, Typography, Paper, Stack, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import React from "react";
import SingleCardForPromotion from "./singleCardForPromotion";

const PromotionCard = () => {
  return (
    <Container maxWidth={"md"} disableGutters sx={{ py: 1 }}>
      <Typography variant="title" sx={{ pl: { xs: 1, sm: 0 } }}>
        Promotions worldwide
      </Typography>

      <Box
        spacing={2}
        mt={0.2}
        sx={{
          p: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "column" },
          flexWrap: "wrap",
          width: "100%",
          maxHeight: { xs: "600px", sm: "400px", md: "700px" },
          overflowX: { xs: "scroll", sm: "scroll" },
          overflowY: "hidden",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          rowGap: 2,
          columnGap: 2,
        }}
      >
        <SingleCardForPromotion
          image={
            "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title="lajksdhflkajsdfh"
          details="Mollitpariatur amet. Ullamco a mollit incididunt eu. Dolor ullamco et labore aliquip fugiat in proident id nisi."
        />

        <SingleCardForPromotion
          image={
            "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title="lajksdhflkajsdfh"
          details="Mollit duiit aliquip laboris eniidunt eu. Dolor ullamco et labore aliquip fugiat in proident id nisi."
        />

        <SingleCardForPromotion
          image={
            "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title="lajksdhflkajsdfh"
          details="Mollit duis laboris e pariatur amet. Ullamco aliqua consecteturDolor ullamco et labore aliquip fugiat in proident id nisi."
        />

        <SingleCardForPromotion
          image={
            "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title="lajksdhflkajsdfh"
          details="Mollit duis laboris e pariatur amet. Ullamco aliqua consecteturDolor ullamco et labore aliquip fugiat in proident id nisi."
        />
      </Box>
    </Container>
  );
};

export default PromotionCard;

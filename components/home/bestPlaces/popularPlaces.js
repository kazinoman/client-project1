import {
  Container,
  Grid,
  Typography,
  Paper,
  Rating,
  Stack,
  Box,
} from "@mui/material";

import React from "react";
import Card from "../../common/card";

const BestPlacesCard = () => {
  return (
    <Container
      maxWidth={"md"}
      disableGutters
      sx={{
        // my: 10,
        pl: { xs: "10px", md: "5px" },
      }}
    >
      <Typography variant="title">Best places to visit worldwide1</Typography>
      <Box
        sx={{
          py: 1,
          px: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "column" },
          flexWrap: "wrap",
          width: "100%",
          // height: { xs: "600px", sm: "800px" },
          maxHeight: { xs: "600px", sm: "400px", md: "450px" },
          overflowX: { xs: "scroll", sm: "scroll" },
          overflowY: "hidden",
          alignItems: "flex-start",
          justifyContent: "flex-start",

          rowGap: 2,
          columnGap: 2,
        }}
      >
        <Card
          image={
            "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          }
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="543456"
          price="232"
        />
        <Card
          image={
            "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          }
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="4.5"
          ratingCount="43434"
          price="233"
        />
        <Card
          image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="234"
          price="234"
        />
        <Card
          image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="2345"
          price="467"
        />
        <Card
          image="https://plus.unsplash.com/premium_photo-1661382219642-43e54f7e81d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="23452345"
          price="6789"
        />
        <Card
          image="https://plus.unsplash.com/premium_photo-1661382219642-43e54f7e81d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="2323"
          price="5467"
        />
      </Box>
      <Box
        sx={{
          p: 1.5,
          border: "1px solid #08818A",
          borderRadius: "5px",
          width: { sm: "100%", md: "200px" },
          textAlign: "center",
          color: " #08818A",
          fontWeight: "600",
          cursor: "pointer",
          mt: 1,
        }}
      >
        Explore Barselona
      </Box>
    </Container>
  );
};

export default BestPlacesCard;

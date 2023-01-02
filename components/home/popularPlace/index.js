import React from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Rating,
  Stack,
  Box,
} from "@mui/material";
import Card from "../../common/card";

const PopularPlaces = () => {
  return (
    <Container
      maxWidth={"md"}
      disableGutters
      sx={{
        my: { xs: 1, md: 4 },
        px: { xs: "10px", md: "0px" },
        // pl: { xs: "10px", md: "0px" },
      }}
    >
      <Typography variant="title">Best places to visit worldwide</Typography>
      <Box
        sx={{
          //   px: 1
          mt: 2,
          py: 1,
          pl: 0.2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          width: "100%",
          // height: { xs: "600px", sm: "100%" },
          //   maxHeight: { xs: "600px", sm: "100%" },
          //   overflowX: { xs: "scroll", sm: "hidden" },
          overflowY: "hidden",
          alignItems: "center",
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
          popularPlace={true}
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
          popularPlace={true}
        />
        <Card
          image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="234"
          price="234"
          popularPlace={true}
        />
        <Card
          image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="2345"
          price="467"
          popularPlace={true}
        />
        <Card
          image="https://plus.unsplash.com/premium_photo-1661382219642-43e54f7e81d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="23452345"
          price="6789"
          popularPlace={true}
        />
        <Card
          image="https://plus.unsplash.com/premium_photo-1661382219642-43e54f7e81d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          location="Rome"
          title="Vatican museums"
          details="Ullamco exercitation et ad nulla ea Lorem nulla exercitation cillum amet laborum dolore."
          rating="2"
          ratingCount="2323"
          price="5467"
          popularPlace={true}
        />
      </Box>
    </Container>
  );
};

export default PopularPlaces;

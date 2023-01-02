import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import SingleText from "./singleText";

const DiscoverPlaceLink = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <Stack gap={0.5}>
        <Stack>
          <Typography variant="title">
            Discover Tiqets' most popular places to visit
          </Typography>
          <Typography variant="normal" sx={{ fontWeight: "700" }}>
            Top things to do Top destinations Top categories Top recommendations
          </Typography>
        </Stack>
        <Stack sx={{ py: 3 }} gap={1}>
          <Typography variant="normal" sx={{ fontWeight: "700" }}>
            Top cities to visit
          </Typography>
          <Stack direction={"row"} flexWrap="wrap" gap={0.5}>
            <SingleText>Amsterdam</SingleText>
            <SingleText>Athens</SingleText>
            <SingleText>Berlin</SingleText>
            <SingleText>Bilbo</SingleText>
            <SingleText>Budapest</SingleText>
            <SingleText>Cancum</SingleText>
            <SingleText>Dubai</SingleText>
            <SingleText>Istambul</SingleText>
            <SingleText>Lima</SingleText>
            <SingleText>Libson</SingleText>
            <SingleText>Madrid</SingleText>
            <SingleText>San Francisco</SingleText>
            <SingleText>Dubai</SingleText>
            <SingleText>Istambul</SingleText>
            <SingleText>Seville</SingleText>
            <SingleText>Venice</SingleText>
            <SingleText>Vienna</SingleText>
            <SingleText>Warsaw</SingleText>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default DiscoverPlaceLink;

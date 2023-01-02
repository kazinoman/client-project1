import { Container, Grid, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const teamImg =
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const img2 =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
const img3 =
  "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600";
const img4 =
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img5 =
  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img6 =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img7 = "";
const img8 = "";

const index = () => {
  return (
    <Container
      maxWidth={"100vw"}
      disableGutters
      sx={{ bgcolor: "#fff", py: { xs: 3, md: 7 }, px: { xs: 2, md: 0 } }}
    >
      <Container
        maxWidth={"md"}
        disableGutters
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="aboutTitle">Meet the management team</Typography>
        <Grid container spacing={4} wrap={"wrap"} sx={{ py: 2 }}>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => img4}
                src={img4}
                height={"100%"}
                width={"100%"}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems="center">
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Luuc Elzinga
                </Typography>
                <Typography
                  // variant="normal"
                  sx={{ fontWeight: "500", fontSize: "12px" }}
                >
                  Founder & President
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  lcelzinga
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => img2}
                src={img2}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Laurens Leurink
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Chief Executive Officer
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  laurensleurink
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => img3}
                src={img3}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Robert Westers
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Chief Operating Officer
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  robertwesters
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Santiago Hirschfeld
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Chief Technology Officer
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  santiagohirschfeld
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Maarten Raaijmakers
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Chief Supply Officer
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  raaijmakersmaarten
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => img5}
                src={img5}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Stef Pillen
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Chief Financial Officer
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  stefpillen
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth={"md"}
        disableGutters
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="aboutTitle" sx={{ py: 3 }}>
          Non-executive board members
        </Typography>
        <Grid container spacing={2} wrap={"wrap"} sx={{ py: 1 }}>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => img6}
                src={img6}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Meet the
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Our ever-growing
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Meet the
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Our ever-growing
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center" gap={2}>
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
              <Stack alignItems={"center"}>
                <Typography variant="normal" sx={{ fontWeight: "900" }}>
                  Meet the
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "12px" }}>
                  Our ever-growing
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default index;

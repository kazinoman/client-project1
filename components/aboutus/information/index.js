import React from 'react'
import { Container, Stack, Typography, Grid, Box } from '@mui/material'
import Image from 'next/image'

const img =
  'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
const Informtion = () => {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box sx={{ width: '50%', mx: 'auto', textAlign: 'center', pb: 10 }}>
        <Typography
          align="center"
          variant="aboutNormal"
          sx={{ width: '50%', mt: 4, fontWeight: '600', color: '#76819E' }}
        >
          Tiqets is an online booking platform for museums and attractions that
          connects travelers worldwide with more ways to experience culture.
        </Typography>
      </Box>
      <Grid
        container
        direction="column"
        alignItems={'center'}
        justifyContent={'center'}
        columnGap={10}
        rowGap={10}
      >
        {/* <Grid item xs={4} sx={{ mt: 10, width: "'50%" }}></Grid> */}
        <Grid item xs={12} direction="row">
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ fontWeight: '900' }}>
                Making culture more accessible
              </Typography>
              <br />
              <Typography variant="normal" align="justify">
                In 2014, Tiqets' founders embarked on a mission to make it
                easier for travelers to experience the best museums and
                attractions worldwide. Since then, we've brought millions of
                people to museums and attractions around the world with our
                instant and intuitive mobile booking technology. Every day, we
                work with thousands of renowned museums, thrilling attractions,
                and hidden gems to offer travelers unforgettable experiences.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* <Image
                loader={() => img}
                src={img}
                height={"100%"}
                width={"100%"}
              /> */}
              <img
                src={img}
                style={{ height: '100%', width: '100%', borderRadius: '10px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Informtion

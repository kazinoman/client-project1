import React from 'react'
import { Container, Stack, Typography, Grid, Button } from '@mui/material'
import Image from 'next/image'

const img =
  'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
const Informtion = () => {
  return (
    <Container
      maxWidth={'100vw'}
      sx={{ bgcolor: '#F6F7F9', py: 10 }}
      disableGutters
    >
      <Container maxWidth="md" disableGutters>
        <Grid
          container
          direction="column"
          alignItems={'center'}
          justifyContent={'center'}
          columnGap={10}
          rowGap={10}
        >
          <Grid item xs={12} direction="row">
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Stack
                  alignItems={'flex-start'}
                  justifyContent="space-evenly"
                  gap={3}
                >
                  <Typography variant="h4" sx={{ fontWeight: '900' }}>
                    Need travel inspiration? We’ve got plenty.
                  </Typography>

                  <Typography variant="normal" align="justify">
                    From insider guides to must-see cities to in-depth
                    interviews with top museums & attractions, get all the
                    inspiration you need on the Tiqets Blog.
                  </Typography>
                  <Button
                    variant="contained"
                    color="buttonColor"
                    sx={{ color: '#fff' }}
                  >
                    Explore the blog
                  </Button>
                </Stack>
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
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '10px',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Informtion

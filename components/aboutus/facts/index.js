import { Container, Grid, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <Container maxWidth="100vw" sx={{ mt: 5 }} disableGutters>
      <Paper sx={{ bgcolor: '#F6F7F9' }} elevation={0}>
        <Container maxWidth="md" sx={{ py: 5 }} disableGutters>
          <Stack alignItems={'center'} justifyContent="center" gap={3}>
            <Typography align="center" variant="h4" sx={{ fontWeight: '900' }}>
              Fast facts
            </Typography>
            <Grid
              container
              direction={'row'}
              alignItems={'center'}
              justifyContent="center"
              spacing={3}
            >
              <Grid item xs={4}>
                <Paper elevation={0}>
                  <Stack
                    alignItems={'center'}
                    justifyContent="center"
                    sx={{ height: '9rem' }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: '700', color: '#5C5CE0' }}
                    >
                      20M+
                    </Typography>
                    <Typography variant="normal" sx={{ color: '#76819E' }}>
                      tickets sold worldwide
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={0}>
                  <Stack
                    alignItems={'center'}
                    justifyContent="center"
                    sx={{ height: '9rem' }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: '700', color: '#FFBD23' }}
                    >
                      3.7K+
                    </Typography>
                    <Typography variant="normal" sx={{ color: '#76819E' }}>
                      App download
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={0}>
                  <Stack
                    alignItems={'center'}
                    justifyContent="center"
                    sx={{ height: '9rem' }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: '700', color: '#25C1A4' }}
                    >
                      2M+
                    </Typography>
                    <Typography variant="normal" sx={{ color: '#76819E' }}>
                      App download
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Paper>
    </Container>
  )
}

export default index

import { Container, Grid, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <Container maxWidth="100vw" disableGutters>
      <Paper sx={{ bgcolor: '#fff' }} elevation={0}>
        <Container maxWidth="md" sx={{ p: 5 }}>
          <Stack alignItems={'center'} justifyContent="center" spacing={4}>
            <Typography align="center" variant="h4" sx={{ fontWeight: '900' }}>
              Legal
            </Typography>
            <Grid
              container
              direction={'row'}
              alignItems={'center'}
              justifyContent="space-between"
            >
              <Grid item xs={3}>
                <Stack alignItems={'flex-start'}>
                  <Typography variant="normal" sx={{ fontWeight: '700' }}>
                    Website operator
                  </Typography>
                  <Typography
                    variant="normal"
                    sx={{ fontSize: '1rem', color: '#76819E' }}
                  >
                    Tiqets International BV James Wattstraat 77-P 1097 DL,
                    Amsterdam, Netherlands
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack
                  alignItems={'flex-start'}
                  justifyContent="flex-start"
                  gap={2}
                >
                  <Stack>
                    <Typography variant="normal" sx={{ fontWeight: '700' }}>
                      CEO
                    </Typography>
                    <Typography
                      variant="normal"
                      sx={{ fontSize: '1rem', color: '#76819E' }}
                    >
                      Laurens Leurink
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant="normal" sx={{ fontWeight: '700' }}>
                      Contact information
                    </Typography>
                    <Typography
                      variant="normal"
                      sx={{ fontSize: '1rem', color: '#76819E' }}
                    >
                      info@tiqets.com
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack alignItems={'flex-start'} gap={2}>
                  <Stack>
                    <Typography variant="normal" sx={{ fontWeight: '700' }}>
                      Commercial registration
                    </Typography>
                    <Typography
                      variant="normal"
                      sx={{ fontSize: '1rem', color: '#76819E' }}
                    >
                      Dutch Chamber of Commerce, KvK 59620285
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant="normal" sx={{ fontWeight: '700' }}>
                      VAT number
                    </Typography>
                    <Typography
                      variant="normal"
                      sx={{ fontSize: '1rem', color: '#76819E' }}
                    >
                      NL853573876B01
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant="normal" sx={{ fontWeight: '700' }}>
                      Online Dispute Resolution
                    </Typography>
                    <Typography
                      variant="normal"
                      sx={{ fontSize: '1rem', color: '#76819E' }}
                    >
                      ec.europa.eu/consumers/odr/main
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Paper>
    </Container>
  )
}

export default index

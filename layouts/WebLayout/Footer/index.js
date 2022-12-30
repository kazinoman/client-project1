import { Container, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material'
import FooterText from './footerText'

// Icon
import { MdFacebook } from 'react-icons/md'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from 'react-icons/ai'
import Image from 'next/image'

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        // pt: 2,
        borderRadius: '0px',
        // flexGrow: 1,
        backgroundColor: 'secondary.main',
        color: '#fff',
      }}
    >
      <Container
        maxWidth={'lg'}
        sx={{ py: 4, px: { xs: 2, md: 0 } }}
        disableGutters
      >
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Stack gap={1}>
              <Typography
                variant="normal"
                sx={{ color: '#fff', fontWeight: '700' }}
              >
                Explore
              </Typography>
              <FooterText text="Barcelona" />
              <FooterText text="London" />
              <FooterText text="New York" />
              <FooterText text="Paris" />
              <FooterText text="Rome" />
              <FooterText text="All Destination" />
            </Stack>
          </Grid>
          <Grid item md={2}>
            <Stack gap={1}>
              <Typography
                variant="normal"
                sx={{ color: '#fff', fontWeight: '700' }}
              >
                Company
              </Typography>
              <FooterText text="Tiqets Blog" />
              <FooterText text="About us" />
              <FooterText text="Jobs" />
              <FooterText text="Responsible Disclosure" />
              <FooterText text="Rome" />
              <FooterText text="All Destination" />
            </Stack>
          </Grid>
          <Grid item md={2}>
            <Stack gap={1}>
              <Typography
                variant="normal"
                sx={{ color: '#fff', fontWeight: '700' }}
              >
                Support
              </Typography>
              <FooterText text="Help Center" />
              <FooterText text="Help Center for Suppliers" />
              <FooterText text="Terms & Conditions" />
              <FooterText text="Privacy Policy" />
              <FooterText text="Tiqets App" />
            </Stack>
          </Grid>

          <Grid item md={4}>
            <Stack gap={1}>
              <Typography
                variant="normal"
                sx={{ color: '#fff', fontWeight: '700' }}
              >
                Partnerships
              </Typography>
              <FooterText text="Become a Supplier" />
              <FooterText text="Become a Distributor" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={'100vw'} disableGutters>
        <Paper
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: '#1D2D53',

            borderRadius: '0px',
          }}
        >
          <Container maxWidth={'lg'} disableGutters sx={{ py: 0 }}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent="space-between"
            >
              <Image src={'/icon.png'} height={70} width={110} />
              <Typography variant="normal" sx={{ color: '#fff' }}>
                © 2014-2022 Tiqets
              </Typography>
              <Stack direction="row">
                <AiFillFacebook
                  style={{
                    color: '#fff',
                    height: '40px',
                    width: '40px',
                    cursor: 'pointer',
                  }}
                />
                <AiFillTwitterSquare
                  style={{
                    color: '#fff',
                    height: '40px',
                    width: '40px',
                    cursor: 'pointer',
                  }}
                />
                <AiFillInstagram
                  style={{
                    color: '#fff',
                    height: '40px',
                    width: '40px',
                    cursor: 'pointer',
                  }}
                />
              </Stack>
            </Stack>
          </Container>
        </Paper>
      </Container>
    </Paper>
  )
}

export default Footer

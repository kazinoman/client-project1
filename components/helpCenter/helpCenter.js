import { Container, Paper, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const helpCenter = () => {
  return (
    <Container maxWidth={'lg'} disableGutters sx={{ my: 5 }}>
      <Typography variant="title">
        We are a proud partner of the world’s most-loved venues
      </Typography>
      <br />
      <Typography variant="normal">
        With more than 3,000 partners worldwide, Tiqets has a ticket for
        everyone. Not a fan of museums? We’ve got rollercoasters, too. Hate
        <br />
        heights? Explore ancient ruins instead. With Tiqets, you choose your way
        to culture.
      </Typography>
      <Container maxWidth={'md'} disableGutters sx={{ my: 5 }}>
        <Paper
          sx={{
            bgcolor: '#40e0d0',
            transitionDelay: 4,
            '&:hover': { bgcolor: '#1fcecb', transitionDelay: 4 },
            // height: '8rem',
          }}
          elevation={0}
        >
          <Stack direction={{ sm: 'column', lg: 'row' }}>
            <Image src={'/girlIcon.svg'} height={150} width={150} />
            <Stack justifyContent={'center'} alignItems="center">
              <Typography variant="title">Tiqets help center</Typography>
              <Typography>
                Our customer service team is available 25/7 via chat and
                whatsapp.
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Container>
  )
}

export default helpCenter

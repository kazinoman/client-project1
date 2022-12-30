import { Container, Grid, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const teamImg =
  'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

const img2 =
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
const img3 =
  'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600'
const img4 =
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const img5 =
  'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const img6 =
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const img7 = ''
const img8 = ''

const index = () => {
  return (
    <Container
      maxWidth={'100vw'}
      disableGutters
      sx={{ bgcolor: '#fff', py: 7 }}
    >
      <Container
        maxWidth={'md'}
        disableGutters
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5" sx={{ fontWeight: '900', py: 3 }}>
          Meet the management team
        </Typography>
        <Grid container spacing={4} wrap={'wrap'} sx={{ py: 2 }}>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => img4}
                src={img4}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Luuc Elzinga
              </Typography>
              <Typography>Founder & President</Typography>
              <Typography>lcelzinga</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => img2}
                src={img2}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Laurens Leurink
              </Typography>
              <Typography>Chief Executive Officer</Typography>
              <Typography>laurensleurink</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => img3}
                src={img3}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Robert Westers
              </Typography>
              <Typography>Chief Operating Officer</Typography>
              <Typography>robertwesters</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Santiago Hirschfeld
              </Typography>
              <Typography>Chief Technology Officer</Typography>
              <Typography>santiagohirschfeld</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Maarten Raaijmakers
              </Typography>
              <Typography>Chief Supply Officer</Typography>
              <Typography>raaijmakersmaarten</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => img5}
                src={img5}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Stef Pillen
              </Typography>
              <Typography>Chief Financial Officer</Typography>
              <Typography>stefpillen</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth={'md'}
        disableGutters
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5" sx={{ fontWeight: '900', py: 3 }}>
          Non-executive board members
        </Typography>
        <Grid container spacing={2} wrap={'wrap'} sx={{ py: 2 }}>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => img6}
                src={img6}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Meet the
              </Typography>
              <Typography>Our ever-growing</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Meet the
              </Typography>
              <Typography>Our ever-growing</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Stack alignItems="center">
              <Image
                loader={() => teamImg}
                src={teamImg}
                height={100}
                width={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="normal" sx={{ fontWeight: '900' }}>
                Meet the
              </Typography>
              <Typography>Our ever-growing</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default index

import { Container, Grid, Typography, Paper, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import React from 'react'

const PromotionCard = () => {
  return (
    <Container maxWidth={'md'} disableGutters sx={{ py: 1 }}>
      <Typography variant="title">Promotions worldwide</Typography>
      <Stack
        direction="row"
        sx={{
          overflowX: { xs: 'scroll', sm: 'hidden', md: 'hidden', lg: 'hidden' },
          // minWidth: { xs: '15rem', md: '15rem', lg: '16rem' },
          // width: '600px',
          p: { xs: 1, sm: 0.2 },
        }}
        gap={1.5}
      >
        <Paper sx={{ width: '300px' }}>
          <Card sx={{ minWidth: '300px' }}>
            <CardMedia
              sx={{ height: 170, borderRadius: '0px', width: '100%' }}
              image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="green iguana"
            />
          </Card>
          <CardContent>
            <Typography gutterBottom variant="title">
              Gaudí in Barcelona
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No hand has shaped Barcelona as much as Gaudí's – explore some of
              Europe's most interesting architecture with these tickets
            </Typography>
          </CardContent>
          <CardActions sx={{ p: '16px' }}>
            <Button
              variant="contained"
              size="small"
              color="buttonColor"
              sx={{
                color: '#fff',
                textTransform: 'none',
                py: 2,
                fontSize: '1rem',
              }}
            >
              Show all deals
            </Button>
          </CardActions>
        </Paper>
        <Paper sx={{ width: '300px' }}>
          <Card sx={{ minWidth: '300px' }}>
            <CardMedia
              sx={{ height: 170, width: '100%' }}
              image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="green iguana"
            />
          </Card>
          <CardContent>
            <Typography gutterBottom variant="title">
              Hot Springs in Iceland
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Feeling the chill? Swap your beanie for your bikini and warm up
              with a dip in Iceland's thermal springs
            </Typography>
          </CardContent>
          <CardActions sx={{ p: '16px' }}>
            <Button
              variant="contained"
              size="small"
              color="buttonColor"
              sx={{
                color: '#fff',
                textTransform: 'none',
                py: 2,
                fontSize: '1rem',
              }}
            >
              Show all deals
            </Button>
          </CardActions>
        </Paper>
      </Stack>
    </Container>
  )
}

export default PromotionCard
{
  /* <Grid container spacing={2} mt={0.2}>
  <Grid item xs={12} sm={6} md={6} lg={6}>
    <Paper>
      <Card>
        <CardMedia
          sx={{ height: 170, borderRadius: '0px' }}
          image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="green iguana"
        />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="title">
          Commodo elit id id ad eu qui.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Excepteur mollit dolor quis eu voluptate quis reprehenderit.
          Velit ex adipisicing sit ea dolor elit anim veniam exercitation.
          Ex magna aliqua consectetur exercitation eu. Consectetur
          adipisicing id sunt exercitation Lorem elit veniam ad. Laborum
          sunt elit aliqua aute cupidatat esse labore Lorem.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: '16px' }}>
        <Button
          variant="contained"
          size="small"
          color="buttonColor"
          sx={{
            color: '#fff',
            textTransform: 'none',
            py: 2,
            fontSize: '1rem',
          }}
        >
          Show all deals
        </Button>
      </CardActions>
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={6} lg={6}>
    <Paper>
      <Card>
        <CardMedia
          sx={{ height: 170 }}
          image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="green iguana"
        />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="title">
          Laborum ad excepteur est culpa
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fugiat duis amet ea ullamco irure. Culpa exercitation Lorem est
          culpa anim. Incididunt incididunt reprehenderit occaecat eu sunt
          occaecat labore. Ea commodo fugiat occaecat culpa magna. Amet
          amet sit duis Lorem nisi duis sit amet nulla adipisicing in elit
          magna officia.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: '16px' }}>
        <Button
          variant="contained"
          size="small"
          color="buttonColor"
          sx={{
            color: '#fff',
            textTransform: 'none',
            py: 2,
            fontSize: '1rem',
          }}
        >
          Show all deals
        </Button>
      </CardActions>
    </Paper>
  </Grid>
</Grid> */
}

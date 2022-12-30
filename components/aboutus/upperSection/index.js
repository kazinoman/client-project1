import { Box, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          height: '20rem',
          width: '100%',
          aspectRatio: '1/3',
          bgcolor: 'primary.main',
          backgroundImage: `url( "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1.5,
        }}
      ></Box>
      <Typography
        gutterBottom={false}
        sx={{
          position: 'absolute',
          // zIndex: 10,
          top: '20%',
          left: '44%',
          right: '60%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          fontSize: '3rem',
          fontWeight: '700',
          color: '#fff',
          whiteSpace: 'nowrap',
          transform: 'translate(-50%, 0)',
        }}
      >
        About Us
      </Typography>
    </Box>
  )
}

export default index

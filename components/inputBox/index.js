import { Paper, Stack, InputBase } from '@mui/material'
import React from 'react'
//icon
import { MdSearch } from 'react-icons/md'

const InputBox = ({ ...others }) => {
  return (
    <Paper
      sx={{
        width: { xs: '100%', sm: '100%', lg: '60%' },
        height: '2.5rem',
        display: 'flex',
        direction: 'column',
        alignItems: 'center',
      }}
      {...others}
    >
      <Stack
        direction="row"
        alignItems={'center'}
        justifyContent="center"
        sx={{ width: '100%', p: '10px' }}
        gap={1}
      >
        <MdSearch
          style={{
            fontSize: '2rem',
            color: '#18BABD',
          }}
        />
        <InputBase
          sx={{ width: '100%' }}
          placeholder="Search destination & experiences"
        />
      </Stack>
    </Paper>
  )
}

export default InputBox

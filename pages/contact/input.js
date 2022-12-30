import React from 'react'

import { styled } from '@mui/material/styles'
import { InputBase } from '@mui/material'

const CustomInput = styled(InputBase)(({}) => ({
  border: '1px solid black',
  width: '100%',
  padding: '0 5px 0 5px',
  fontSize: '1rem',
  borderRadius: '5px',
}))

export default CustomInput

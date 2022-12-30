import React from 'react'
import { Container, Stack, ThemeProvider, CssBaseline } from '@mui/material'
import theme from '@/styles/theme'
import Header from './Header'
import Footer from './Footer'

const WebLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          direction={'column'}
          sx={{
            height: '100vh',
            overflow: 'hidden',
            overflowY: 'auto',
          }}
        >
          <Header />
          <Container
            maxWidth={'100vw'}
            // flexGrow={1}
            sx={{
              flexGrow: 1,
              px: { xs: 0, sm: 0 },
              // minHeight: "30rem",
              // height: "100vh",
            }}
          >
            {children}
          </Container>
          <Footer />
        </Stack>
      </ThemeProvider>
    </>
  )
}

export default WebLayout

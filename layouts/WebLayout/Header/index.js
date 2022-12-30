import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IoLogoAppleAr } from 'react-icons/io5'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  function loader() {
    return <h1>loading..</h1>
  }
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          bgcolor: 'primary',
        }}
        position="static"
      >
        <Container maxWidth={'lg'} disableGutters>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              p: 0,
            }}
            elevation={0}
          >
            {/* <Avatar
              sx={{
                bgcolor: "transparent",
                color: "#2e2e2e",
              }}
            >
              <IoLogoAppleAr />
            </Avatar> */}
            <Image src={'/icon2.png'} height={40} width={70} />
            <Hidden smDown>
              <Stack direction={'row'}>
                <Link href="/">
                  <Button color="secondary" disableElevation disableRipple>
                    Home
                  </Button>
                </Link>
                <Link href="/about">
                  <Button color="secondary" disableElevation disableRipple>
                    About
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button color="secondary" disableElevation disableRipple>
                    Contact
                  </Button>
                </Link>
              </Stack>
            </Hidden>
            <Hidden smUp>
              <IconButton color={'primary.main'} onClick={handleClick}>
                <AiOutlineMenu />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    width: '50vw',
                    maxWidth: '12rem',
                    mt: 2.5,
                    overflow: 'visible',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 30,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Typography noWrap>Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography noWrap>About</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography noWrap>Contact</Typography>
                </MenuItem>
              </Menu>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={
          {
            // mt: { xs: "60px", sm: "70px" },
          }
        }
      />
    </>
  )
}

export default Header

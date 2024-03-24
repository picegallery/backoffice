'use client'
import { FC, Fragment, useState } from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderStyled } from './Header.styled'

interface AppBarProps extends MuiAppBarProps {
  open: boolean
}
interface HeaderProps {
  open: boolean
  handleDrawerOpen: () => void
  logged: boolean
}

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Header: FC<HeaderProps> = ({ open, handleDrawerOpen, logged }) => {
  return (
    <Fragment>
      <AppBar position='fixed' sx={{ zIndex: 2000 }} open={open}>
        <Container maxWidth='xl'>
          <HeaderStyled disableGutters>
            {logged && (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' })
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            {/* <Image
              src={`${URLS.awsBucket}/logo-branco.png`}
              width={160}
              alt='Pice Gallery Logo'
              height={100}
              objectFit='contain'
            /> */}
          </HeaderStyled>
        </Container>
      </AppBar>
    </Fragment>
  )
}

export default Header

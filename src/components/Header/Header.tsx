'use client'
import { FC, Fragment } from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderStyled, TitleStyled } from './Header.styled'
import { useCommon } from '@/hooks'

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
  const { currentTitle } = useCommon()
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
            <TitleStyled>{currentTitle}</TitleStyled>
          </HeaderStyled>
        </Container>
      </AppBar>
    </Fragment>
  )
}

export default Header
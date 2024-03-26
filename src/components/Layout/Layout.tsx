'use client'
import { FC, ReactNode, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { useAuth } from '@/hooks'
import Drawer from '../Drawer/Drawer'
import { RootStyled } from './Layout.styled'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { logged } = useAuth()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <RootStyled>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} logged={logged} />
      {logged && <Drawer open={open} onClose={handleDrawerClose} />}
      <Main>{children}</Main>
      <Footer />
    </RootStyled>
  )
}

export default Layout

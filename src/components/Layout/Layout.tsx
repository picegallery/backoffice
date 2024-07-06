'use client'
import { FC, ReactNode, useState } from 'react'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { useAuth } from '@/hooks'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'
import { RootStyled } from './Layout.styled'
import dynamic from 'next/dynamic'

type LayoutProps = {
  children: ReactNode
}

const DynamicHeader = dynamic(() => import('../Header/Header'), {
  loading: () => <p>Loading...</p>
})

const Layout: FC<LayoutProps> = ({ children }) => {
  const { logged } = useAuth()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const renderLoggedLayout = (
    <RootStyled data-testid='layout-component'>
      <DynamicHeader open={open} handleDrawerOpen={handleDrawerOpen} logged={logged} />
      <Drawer open={open} onClose={handleDrawerClose} />
      <Main>{children}</Main>
      <Footer />
    </RootStyled>
  )

  const renderLogoutLayout = <RootStyled data-testid='layout-component'>{children}</RootStyled>

  console.log('logged', logged)
  return <>{logged ? renderLoggedLayout : renderLogoutLayout}</>
}

export default Layout

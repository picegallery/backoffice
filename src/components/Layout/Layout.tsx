'use client'
import { FC, ReactNode, useState } from 'react'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { useAuth } from '@/hooks'
import Drawer from '../Drawer/Drawer'
import { RootStyled } from './Layout.styled'
import dynamic from 'next/dynamic'
import { useLoader } from '@/hooks/useLoader'
import Loader from '../Loader/Loader'

type LayoutProps = {
  children: ReactNode
}

const DynamicHeader = dynamic(() => import('../Header/Header'), {
  loading: () => <p>Loading...</p>
})

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isLoading } = useLoader();
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

  return <>{logged ? renderLoggedLayout : renderLogoutLayout}{isLoading && <Loader />}</>
}

export default Layout

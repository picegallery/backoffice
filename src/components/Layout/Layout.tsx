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
import { Role } from '@/types'

type LayoutProps = {
  children: ReactNode
}

const DynamicHeader = dynamic(() => import('../Header/Header'), {
  loading: () => <p>Loading...</p>
})

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isLoading } = useLoader()
  const { logged, role } = useAuth()
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

  const renderLoggedArtistLayout = (
    <RootStyled data-testid='layout-artist-component'>
      {/* <DynamicHeader open={open} handleDrawerOpen={handleDrawerOpen} logged={logged} /> */}
      <Drawer open={open} onClose={handleDrawerClose} />
      <Main>{children}</Main>
      <Footer />
    </RootStyled>
  )

  const renderLogoutLayout = <RootStyled data-testid='layout-component'>{children}</RootStyled>

  const renderLayoutByRole = () => {
    switch (role) {
      case Role.ARTIST:
        return renderLoggedArtistLayout
      default:
        return renderLoggedLayout
    }
  }

  return (
    <>
      {logged ? renderLayoutByRole() : renderLogoutLayout}
      {isLoading && <Loader />}
    </>
  )
}

export default Layout

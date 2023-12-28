import { FC, ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout

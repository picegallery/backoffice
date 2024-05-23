import { FC, ReactNode } from 'react'
import { MainStyled, SpacingToolbarStyled } from './Main.styled'
import Drawer from '../Drawer/Drawer'
import { useState } from 'react'

type MainProps = { children: ReactNode }

const Main: FC<MainProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <MainStyled data-testid='main-component'>
      <Drawer open={open} onClose={handleDrawerClose} />
      <SpacingToolbarStyled />
      {children}
    </MainStyled>
  )
}

export default Main
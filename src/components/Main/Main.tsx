import { FC, ReactNode } from 'react'
import { MainStyled, SpacingToolbarStyled } from './Main.styled'

type MainProps = { children: ReactNode }
const Main: FC<MainProps> = ({ children }) => {
  return (
    <MainStyled data-testid='main-component'>
      <SpacingToolbarStyled />
      {children}
    </MainStyled>
  )
}
export default Main

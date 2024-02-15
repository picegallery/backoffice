import { FC, ReactNode } from 'react'
import { MainStyled } from './Main.styled'

type MainProps = { children: ReactNode }
const Main: FC<MainProps> = ({ children }) => {
  return <MainStyled>{children}</MainStyled>
}

export default Main

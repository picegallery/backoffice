import { FC, PropsWithChildren } from 'react'
import { CardStyled } from './Card.styled'

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>
}

export default Card

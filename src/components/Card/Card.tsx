import { FC, PropsWithChildren } from 'react'
import { CardStyled } from './Card.styled'

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <CardStyled data-testid='card-component'>{children}</CardStyled>
}

export default Card

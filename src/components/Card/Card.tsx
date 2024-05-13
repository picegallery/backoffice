import { FC, PropsWithChildren } from 'react'
import { CardStyled } from './Card.styled'

interface CardProps {}

const Card: FC<PropsWithChildren<CardProps>> = ({ children }) => {
  return <CardStyled data-testid='card-component'>{children}</CardStyled>
}

export default Card

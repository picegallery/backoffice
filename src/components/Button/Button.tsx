import { FC, PropsWithChildren } from 'react'
import { ButtonProps as ButtonMUIProps } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ButtonStyled } from './Button.styled'

export type ButtonProps = PropsWithChildren<ButtonMUIProps> & {
  icon?: boolean
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default Button
